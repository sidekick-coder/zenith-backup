import { planRepository } from '../repositories/plan.repository.ts'
import type BackupStrategy from '../contracts/strategy.contract.ts'
import TarStrategy from '../strategies/TarStrategy.ts'
import { targetRepository } from '../repositories/target.repository.ts'
import type Plan from '#zenith-backup/shared/entities/plan.entity.ts'
import BaseException from '#server/exceptions/base.ts'
import { tryCatch } from '#shared/tryCatch.ts'
import logger from '#server/facades/logger.facade.ts'
import type Target from '#zenith-backup/shared/entities/target.entity.ts'
import type Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'

export class BackupService {
    public findStrategy(plan: Plan): BackupStrategy {
        if (plan.strategy === 'tar') {
            return new TarStrategy()
        }

        throw new BaseException('Backup strategy not found')
    }

    public async list(planId: Plan['id']){
        const plan = await planRepository.findOrFail(planId)

        const strategy = this.findStrategy(plan)

        const [error, snapshots] = await tryCatch(() => strategy.list({ plan }))

        if (error) {
            logger.error(error)
            throw BaseException.fromError(error)
        }

        snapshots.sort((a,b) => b.created_at.getTime() - a.created_at.getTime())

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

    public async restore(planId: Target['plan_id'], snapshotId: string) {
        const snapshots = await this.list(planId)
        const snapshot = snapshots.find(s => s.id === snapshotId)
        const plan = await planRepository.findOrFail(planId)
        const strategy = this.findStrategy(plan)

        if (!snapshot) {
            throw new BaseException('Snapshot not found', 404)
        }
        
        const [error] = await tryCatch(() => strategy.restore({
            plan,
            snapshot
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

    public async delete(targetId: Target['plan_id'], snapshotId: string) {
        const target = await targetRepository.findOrFail(targetId)
        const plan = await planRepository.findOrFail(target.plan_id)

        const strategy = this.findStrategy(plan)
        
        const [error] = await tryCatch(() => strategy.delete({
            plan,
            target,
            snapshotId
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

const backupService = new BackupService()


export default backupService