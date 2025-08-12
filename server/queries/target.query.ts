import { sql } from 'kysely'
import { targetRepository } from '../repositories/target.repository.ts'
import db from '#server/facades/db.facade.ts'
import { metaValue } from '#server/utils/database.util.ts'
import type Target from '#zenith-backup/shared/entities/target.entity.ts'
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

export async function findTargetByMeta(planId: number, name: string, value: string) {
    const query = db
        .selectFrom('backup_targets')
        .selectAll()
        .where('backup_targets.id', '=', planId)
        .where('deleted_at', 'is', null)
        .where(eb => eb
            .exists(eb
                .selectFrom('backup_target_metas')
                .select('id')
                .whereRef('backup_target_metas.target_id', '=', 'backup_targets.id')
                .where('name', '=', name)
                .where('value', '=', value)
            )
        )

    return query.executeTakeFirst()
}

export async function findTargetByPath(planId: number, path: string): Promise<Target | null> {
    const row = await db
        .selectFrom('backup_targets')
        .selectAll()
        .where('backup_plan_id', '=', planId)
        .where('path', '=', path)
        .executeTakeFirst()

    if (!row) {
        return null
    }

    return targetRepository.toEntity(row)
}