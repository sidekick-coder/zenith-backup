import type BackupStrategy from '../contracts/strategy.contract.ts'
import TarStrategy from '../strategies/tar.strategy.ts'
import ResticStrategy from '../strategies/restic.strategy.ts'
import { findPlan } from '../queries/plan.query.ts'
import { findPlanTargets, findTarget } from '../queries/target.query.ts'
import StrategyService from './strategy.service.ts'
import type Plan from '#zenith-backup/shared/entities/plan.entity.ts'
import BaseException from '#server/exceptions/base.ts'
import { tryCatch } from '#shared/utils/tryCatch.ts'
import logger from '#server/facades/logger.facade.ts'
import type Target from '#zenith-backup/shared/entities/target.entity.ts'
import scheduler from '#server/facades/scheduler.facade.ts'

export default class BackupService {
    public strategies: StrategyService
    public logger = logger.child({ label: 'backup' })

    constructor() {
        this.strategies = new StrategyService()
    }

    public findStrategy(plan: Plan): BackupStrategy {
        if (plan.strategy === 'tar') {
            return new TarStrategy()
        }

        if (plan.strategy === 'restic') {
            return new ResticStrategy()
        }

        throw new BaseException('Backup strategy not found')
    }

    public async list(planId: Plan['id']){
        const plan = await findPlan(planId)
        const targets = await findPlanTargets(planId)
        const strategy = this.findStrategy(plan)

        const [error, snapshots] = await tryCatch(() => strategy.list({
            plan,
            targets 
        }))

        if (error) {
            this.logger.error(error)
            throw BaseException.fromError(error)
        }

        snapshots.sort((a,b) => b.created_at.getTime() - a.created_at.getTime())

        return snapshots
    }

    public async schedule(planId: Plan['id']){
        const plan = await findPlan(planId)

        if (!plan.cron) {
            throw new BaseException('Cannot schedule a plan without a cron expression', 400)
        }

        scheduler.add(`backup:plans:${plan.id}`, plan.cron!, () => this.backup(plan.id))
    }

    public async start(planId: Plan['id']){
        const plan = await findPlan(planId)

        if (!plan.cron) {
            throw new BaseException('Cannot start a plan without a cron expression', 400)
        }

        if (!scheduler.has(`backup:plans:${plan.id}`)) {
            scheduler.add(`backup:plans:${plan.id}`, plan.cron!, () => this.backup(plan.id))
        }

        await scheduler.start(`backup:plans:${plan.id}`)
    }

    public async stop(planId: Plan['id']){
        const plan = await findPlan(planId)

        await scheduler.stop(`backup:plans:${plan.id}`)
    }

    public async backup(plan: Plan){
        const Strategy = await this.strategies.find(plan.strategy)

        const instance = new Strategy(plan.config, plan)

        const [error] = await tryCatch(() => instance.backup())

        if (error) {
            this.logger.error(error)

            throw new BaseException('backup failed')
        }

        this.logger.info('backup completed successfully', {
            plan_id: plan.id,
            plan_name: plan.name
        })
    }

    public async restore(planId: Target['plan_id'], snapshotId: string, restore_folder?: string) {
        const snapshots = await this.list(planId)
        const snapshot = snapshots.find(s => s.id === snapshotId)
        const plan = await findPlan(planId)
        const targets = await findPlanTargets(planId)
        const target = await findTarget(snapshot!.target_id ?? '')
        const strategy = this.findStrategy(plan)

        if (!snapshot) {
            throw new BaseException('Snapshot not found', 404)
        }
        
        const [error] = await tryCatch(() => strategy.restore({
            plan,
            targets,
            target,
            snapshot,
            restore_folder
        }))

        if (error) {
            logger.error(error)

            console.log(error)

            throw new BaseException('Restore failed')
        }

        logger.info('Backup completed successfully', {
            plan,
            snapshot
        })
    }

    public async delete(planId: Target['plan_id'], snapshotId: string) {
        const snapshots = await this.list(planId)
        const snapshot = snapshots.find(s => s.id === snapshotId)
        const plan = await findPlan(planId)
        const targets = await findPlanTargets(planId)
        const target = await findTarget(snapshot!.target_id ?? '')

        if (!snapshot){
            throw new BaseException('Snapshot not found', 404)
        }

        const strategy = this.findStrategy(plan)
        
        const [error] = await tryCatch(() => strategy.delete({
            plan,
            targets,
            snapshot,
            target
        }))

        if (error) {
            logger.error(error)

            console.log(error)

            throw new BaseException('Delete failed')
        }

        logger.info('Snapshot deleted successfully', {
            plan,
            target,
            snapshotId 
        })
    }
}
