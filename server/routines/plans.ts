import backupService from '../services/backup.service.ts'
import db from '#server/facades/db.facade.ts'
import { whereNotDeleted } from '#server/queries/softDelete.ts'

const plans = await db.selectFrom('backup_plans')
    .$call(whereNotDeleted)
    .where('active', '=', true)
    .where('cron', 'is not', null)
    .selectAll()
    .execute()

for (const plan of plans) {
    backupService.schedule(plan.id)
}