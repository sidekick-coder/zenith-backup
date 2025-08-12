import BaseException from '#server/exceptions/base.ts'
import router from '#server/facades/router.facade.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import db from '#server/facades/db.facade.ts'
import { metaValue } from '#server/utils/database.util.ts'
import TargetMeta from '#zenith-backup/shared/entities/targetMeta.entity.ts'

const group = router.prefix('/api/backup/targets/:targetId/metas')
    .use(authMiddleware)
    .group()

group.get('/', async ({ params }) => {
    const rows = await db.selectFrom('backup_target_metas')
        .selectAll()
        .where('target_id', '=', params.targetId)
        .execute()

    const data: TargetMeta[] = []

    for await (const row of rows) {
        data.push(new TargetMeta({
            id: row.id,
            target_id: row.target_id,
            name: row.name,
            value: await metaValue.fromDb(row.value),
        }))
    }

    return { data }
})

group.put('/', async ({ params, body }) => {
    const { value, name } = body

    const existing = await db.selectFrom('backup_target_metas')
        .selectAll()
        .where('target_id', '=', params.targetId)
        .where('name', '=', name)
        .executeTakeFirst()

    if (!existing) {
        await db.insertInto('backup_target_metas')
            .values({
                target_id: params.targetId,
                name,
                value: await metaValue.toDb(value)
            })
            .execute()

        return { success: true }
    }

    await db.updateTable('backup_target_metas')
        .set({ value: await metaValue.toDb(value) })
        .where('id', '=', existing.id)
        .execute()

    return { success: true }
})

group.delete('/:name', async ({ params }) => {
    const { name } = params

    const existing = await db.selectFrom('backup_target_metas')
        .selectAll()
        .where('target_id', '=', params.targetId)
        .where('name', '=', name)
        .executeTakeFirst()

    if (!existing) {
        throw new BaseException('Meta not found', 404)
    }

    await db.deleteFrom('backup_target_metas')
        .where('id', '=', existing.id)
        .execute()

    return { success: true }
})