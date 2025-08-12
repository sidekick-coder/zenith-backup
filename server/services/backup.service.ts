import { planRepository } from '../repositories/plan.repository.ts'
import type BackupStrategy from '../contracts/strategy.contract.ts'
import TarStrategy from '../strategies/TarStrategy.ts'
import { targetRepository } from '../repositories/target.repository.ts'
import { snapshotRepository } from '../repositories/snapshot.repository.ts'
import type Plan from '#zenith-backup/shared/entities/plan.entity.ts'
import BaseException from '#server/exceptions/base.ts'
import { tryCatch } from '#shared/tryCatch.ts'
import logger from '#server/facades/logger.facade.ts'
import type Target from '#zenith-backup/shared/entities/target.entity.ts'

export class BackupService {
    public findStrategy(plan: Plan): BackupStrategy {
        if (plan.strategy === 'tar') {
            return new TarStrategy()
        }

        throw new BaseException('Backup strategy not found')
    }

    public async list(planId: Plan['id'], targetId: Target['id']){
        const plan = await planRepository.findOrFail(planId)
        const target = await targetRepository.findOrFail(targetId)

        const strategy = this.findStrategy(plan)

        const [error, snapshots] = await tryCatch(() => strategy.list({
            plan,
            target
        }))

        if (error) {
            logger.error(error)
            throw new BaseException('Backup failed')
        }

        return snapshots
    }

    public async backup(planId: Plan['id']){
        const plan = await planRepository.findOrFail(planId)
        const targets = await targetRepository.list(planId)

        if (targets.length === 0) {
            throw new BaseException('No targets found for the backup plan')
        }

        const strategy = this.findStrategy(plan)

        const [error] = await tryCatch(() => strategy.backup({
            plan,
            targets 
        }))

        if (error) {
            logger.error(error)

            console.log(error)

            throw new BaseException('Backup failed')
        }

        logger.info('Backup completed successfully', { planId })
    }

    public async restore(snapshotId: number) {
        const snapshot = await snapshotRepository.findOrFail(snapshotId)
        const plan = await planRepository.findOrFail(snapshot.plan_id)
        const target = await targetRepository.findOrFail(snapshot.target_id)

        const strategy = this.findStrategy(plan)
        
        const [error] = await tryCatch(() => strategy.restore({
            plan,
            target,
            snapshot
        }))

        if (error) {
            logger.error(error)

            console.log(error)

            throw new BaseException('Backup failed')
        }

        logger.info('Backup completed successfully', {
            plan,
            target,
            snapshot 
        })
    }
}

const backupService = new BackupService()


export default backupService