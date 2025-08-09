import { planRepository } from '../repositories/plan.repository.ts'
import type BackupStrategy from '../contracts/strategy.contract.ts'
import ZipStrategy from '../strategies/ZipStrategy.ts'
import { targetRepository } from '../repositories/target.repository.ts'
import type Plan from '#modules/zenith-backup/shared/entities/plan.entity.ts'
import BaseException from '#server/exceptions/base.ts'
import { tryCatch } from '#shared/tryCatch.ts'
import logger from '#server/facades/logger.facade.ts'

export class BackupService {
    public async execute(planId: Plan['id']){
        const plan = await planRepository.findOrFail(planId)
        const targets = await targetRepository.list(planId)

        let strategy: BackupStrategy | undefined = undefined

        if (plan.strategy === 'zip'){
            strategy = new ZipStrategy()
        }

        if (!strategy) {
            throw new BaseException('Backup strategy not found')
        }

        const [error] = await tryCatch(() => strategy.run({
            plan,
            targets 
        }))

        if (error) {
            logger.error('Backup failed', {
                error,
                planId 
            })
            return
        }

        logger.info('Backup completed successfully', { planId })

    }
}

const backupService = new BackupService()


export default backupService