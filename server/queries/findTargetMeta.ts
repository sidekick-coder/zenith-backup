import db from '#server/facades/db.facade.ts'
import { metaValue } from '#server/utils/database.util.ts'
import TargetMeta from '#zenith-backup/shared/entities/targetMeta.entity.ts'

export async function findTargetMeta(targetId: number, name: string): Promise<TargetMeta | null> {
    const row =  await db
        .selectFrom('backup_target_metas')
        .selectAll()
        .where('target_id', '=', targetId)
        .where('name', '=', name)
        .executeTakeFirst()

    if (!row) {
        return null
    }

    return new TargetMeta({
        id: row.id,
        target_id: row.target_id,
        name: row.name,
        value: await metaValue.fromDb(row.value),
    })
}