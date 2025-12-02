import type BackupStrategy from '../contracts/strategy.contract.ts'
import TarStrategy from '../strategies/tar.strategy.ts'
import ResticStrategy from '../strategies/restic.strategy.ts'
import { findPlan } from '../queries/plan.query.ts'
import { findPlanTargets, findTarget } from '../queries/target.query.ts'
import StrategyService from './strategy.service.ts'
import Plan from '#zenith-backup/server/entities/plan.entity.ts'
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

    public async load(){
        let plans = await Plan.list()
            
        plans = plans.filter(plan => plan.active && plan.valid && plan.cron)
    
        for (const plan of plans) {            
            scheduler.add(plan.routineId, plan.cron!, () => this.backup(plan, {
                description: `Automated dump executed from dump plan '${plan.name}'`,
                origin: 'automated',
            }))
    
            scheduler.start(plan.routineId)
        }
    }

    public async unload(){
        const routines = await scheduler.list()
    
        const ids = routines
            .filter(routine => routine.id.startsWith(Plan.ROUTINE_PREFIX))
            .map(routine => routine.id)
    
        await scheduler.remove(ids)
    }
    
    public async reload(){
        await this.unload()
        await this.load()
    }

    public async backup(plan: Plan, metadata?: Record<string, unknown>) {
        const Strategy = await this.strategies.find(plan.strategy)

        const instance = new Strategy(plan.config, plan)

        const [error] = await tryCatch(() => instance.backup(metadata || {}))

        if (error) {
            this.logger.error(error)

            throw new BaseException('backup failed')
        }

        this.logger.info('backup completed successfully', {
            plan_id: plan.id,
            plan_name: plan.name,
            metadata
        })
    }

    public async restore(planId: Target['plan_id'], snapshotId: string, restore_folder?: string) {
        // const snapshots = await this.list(planId)
        // const snapshot = snapshots.find(s => s.id === snapshotId)
        // const plan = await findPlan(planId)
        // const targets = await findPlanTargets(planId)
        // const target = await findTarget(snapshot!.target_id ?? '')
        // const strategy = this.findStrategy(plan)

        // if (!snapshot) {
        //     throw new BaseException('Snapshot not found', 404)
        // }
        
        // const [error] = await tryCatch(() => strategy.restore({
        //     plan,
        //     targets,
        //     target,
        //     snapshot,
        //     restore_folder
        // }))

        // if (error) {
        //     logger.error(error)

        //     console.log(error)

        //     throw new BaseException('Restore failed')
        // }

        // logger.info('Backup completed successfully', {
        //     plan,
        //     snapshot
        // })
    }

    public async delete(planId: Target['plan_id'], snapshotId: string) {
        // const snapshots = await this.list(planId)
        // const snapshot = snapshots.find(s => s.id === snapshotId)
        // const plan = await findPlan(planId)
        // const targets = await findPlanTargets(planId)
        // const target = await findTarget(snapshot!.target_id ?? '')

        // if (!snapshot){
        //     throw new BaseException('Snapshot not found', 404)
        // }

        // const strategy = this.findStrategy(plan)
        
        // const [error] = await tryCatch(() => strategy.delete({
        //     plan,
        //     targets,
        //     snapshot,
        //     target
        // }))

        // if (error) {
        //     logger.error(error)

        //     console.log(error)

        //     throw new BaseException('Delete failed')
        // }

        // logger.info('Snapshot deleted successfully', {
        //     plan,
        //     target,
        //     snapshotId 
        // })
    }
}
