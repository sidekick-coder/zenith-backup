import BaseException from '#server/exceptions/base.ts'
import router from '#server/facades/router.facade.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import db from '#server/facades/db.facade.ts'
import ServerMeta from '#server/entities/serverMeta.entity.ts'

const group = router.prefix('/api/backup/plans/:planId/metas')
    .use(authMiddleware)
    .group()

group.get('/', async ({ params }) => {
    const rows = await db.selectFrom('backup_plan_metas')
        .selectAll()
        .where('plan_id', '=', params.planId)
        .execute()

    const data: ServerMeta[] = []

    for await (const row of rows) {
        data.push(await ServerMeta.fromDb(row))
    }

    return { data }
})

group.put('/', async ({ params, body }) => {
    const { value, name } = body

    const existing = await db.selectFrom('backup_plan_metas')
        .selectAll()
        .where('plan_id', '=', params.planId)
        .where('name', '=', name)
        .executeTakeFirst()

    if (!existing) {
        await db.insertInto('backup_plan_metas')
            .values({
                plan_id: params.planId,
                name,
                value: await ServerMeta.parseValue(value)
            })
            .execute()

        return { success: true }
    }

    await db.updateTable('backup_plan_metas')
        .set({ value: await ServerMeta.parseValue(value) })
        .where('id', '=', existing.id)
        .execute()

    return { success: true }
})

group.delete('/:name', async ({ params }) => {
    const { name } = params

    const existing = await db.selectFrom('backup_plan_metas')
        .selectAll()
        .where('plan_id', '=', params.planId)
        .where('name', '=', name)
        .executeTakeFirst()

    if (!existing) {
        throw new BaseException('Meta not found', 404)
    }

    await db.deleteFrom('backup_plan_metas')
        .where('id', '=', existing.id)
        .execute()

    return { success: true }
})