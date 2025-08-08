import { now } from '#server/database/common.ts'
import BaseException from '#server/exceptions/base.ts'
import db from '#server/facades/db.facade.ts'
import router from '#server/facades/router.facade.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import validator from '#server/services/validator.service.ts'

const group = router.prefix('/api/backup/plans')
    .use(authMiddleware)
    .group()


group.get('/', async () => {
    const data = await db.selectFrom('backup_plans')
        .where('deleted_at', 'is', null)
        .selectAll()
        .execute()

    return { data }
})

group.post('/', async ({ body }) => {
    const payload = validator.validate(body, v => v.object({ 
        name: v.string(), 
        strategy: v.picklist(['zip', 'restic']),
        cron: v.optional(v.string())
    }))

    const plan = await db.insertInto('backup_plans')
        .values(payload)
        .returningAll()
        .execute()

    return plan
})

group.get('/:id', async ({ params }) => {
    const plan = await db.selectFrom('backup_plans')
        .selectAll()
        .where('id', '=', params.id)
        .where('deleted_at', 'is', null)
        .executeTakeFirst()
    if (!plan) return { error: 'Not found' }
    return plan
})

group.patch('/:id', async ({ params, body }) => {
    const payload = validator.validate(body, v => v.object({
        name: v.optional(v.string()),
        strategy: v.optional(v.picklist(['zip', 'restic'])),
        cron: v.optional(v.string())
    }))

    const plan = await db.selectFrom('backup_plans')
        .selectAll()
        .where('id', '=', params.id)
        .where('deleted_at', 'is', null)
        .executeTakeFirst()
    
    if (!plan) {
        throw new BaseException('Not found', 404)
    }

    const updated = await db.updateTable('backup_plans')
        .set(payload)
        .where('id', '=', params.id)
        .returningAll()
        .executeTakeFirst()
    
    if (!updated) {
        throw new BaseException('Update failed', 500)
    }

    return { success: true }
})

group.delete('/:id', async ({ params }) => {
    const plan = await db.selectFrom('backup_plans')
        .selectAll()
        .where('deleted_at', 'is', null)
        .where('id', '=', params.id)
        .executeTakeFirst()
    
    if (!plan) {
        throw new BaseException('Not found', 404)
    }

    const deleted = await db.updateTable('backup_plans')
        .set({ deleted_at: now() })
        .where('id', '=', params.id)
        .executeTakeFirst()

    if (!deleted.numUpdatedRows) {
        throw new BaseException('Delete failed', 500)
    }

    return { success: true }
})