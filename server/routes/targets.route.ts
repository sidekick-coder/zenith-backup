// import { now } from '#server/database/common.ts' // removed unused import
import BaseException from '#server/exceptions/base.ts'
import db from '#server/facades/db.facade.ts'
import router from '#server/facades/router.facade.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import validator from '#shared/services/validator.service.ts'

const schema = validator.create(v => v.object({
    backup_plan_id: v.number(),
    path: v.string(),
    options: v.any()
}))

const group = router.prefix('/api/backup/targets')
    .use(authMiddleware)
    .group()

group.get('/', async ({ query }) => {
    let dbQuery = db.selectFrom('backup_plans_targets').selectAll()
    
    if (query.backup_plan_id) {
        dbQuery = dbQuery.where('backup_plan_id', '=', Number(query.backup_plan_id))
    }
    
    const data = await dbQuery.execute()
    return { data }
})

group.get('/:id', async ({ params }) => {
    const target = await db.selectFrom('backup_plans_targets')
        .selectAll()
        .where('id', '=', params.id)
        .executeTakeFirst()
    if (!target) {
        throw new BaseException('Not found', 404)
    }
    return target
})

group.post('/', async ({ body }) => {
    const payload = validator.validate(body, schema)
    const target = await db.insertInto('backup_plans_targets')
        .values(payload)
        .returningAll()
        .executeTakeFirst()
    if (!target) {
        throw new BaseException('Create failed', 500)
    }
    return target
})

group.patch('/:id', async ({ params, body }) => {
    const payload = validator.validate(body, v => v.partial(schema))
    const target = await db.selectFrom('backup_plans_targets')
        .selectAll()
        .where('id', '=', params.id)
        .executeTakeFirst()
    if (!target) {
        throw new BaseException('Not found', 404)
    }
    const updated = await db.updateTable('backup_plans_targets')
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
    const target = await db.selectFrom('backup_plans_targets')
        .selectAll()
        .where('id', '=', params.id)
        .executeTakeFirst()
    
    if (!target) {
        throw new BaseException('Not found', 404)
    }

    const deleted = await db.deleteFrom('backup_plans_targets')
        .where('id', '=', params.id)
        .executeTakeFirst()
    if (!deleted.numDeletedRows) {
        throw new BaseException('Delete failed', 500)
    }
    return { success: true }
})
