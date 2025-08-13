import path from 'path'
import backupService from './services/backup.service.ts'
import { defineServerSetup } from '#server/utils/defineServerSetup.ts'
import db from '#server/facades/db.facade.ts'
import { whereNotDeleted } from '#server/queries/softDelete.ts'

export default defineServerSetup(async ({ router, scheduler }) => {
    await router.loadDirectory(path.resolve(import.meta.dirname, 'routes'))

    const plans = await db.selectFrom('backup_plans')
        .$call(whereNotDeleted)
        .where('active', '=', true)
        .where('cron', 'is not', null)
        .selectAll()
        .execute()

    for (const plan of plans) {
        scheduler.add(`plan:${plan.id}`, plan.cron!, () => backupService.backup(plan.id))
    }
    
})