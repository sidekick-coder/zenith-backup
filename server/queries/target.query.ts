import type { Selectable } from 'kysely'
import type { TargetMetaTable, TargetTable } from '../contracts/database.contract.ts'
import db from '#server/facades/db.facade.ts'
import { metaValue } from '#server/utils/database.util.ts'
import Target from '#zenith-backup/shared/entities/target.entity.ts'
import TargetMeta from '#zenith-backup/shared/entities/targetMeta.entity.ts'
import { whereNotDeleted } from '#server/queries/softDelete.ts'
import Meta from '#shared/entities/meta.entity.ts'
import BaseException from '#server/exceptions/base.ts'

function toEntity(row: Selectable<TargetTable>, metas: Selectable<TargetMetaTable>[]): Target {
    return new Target({
        id: row.id,
        plan_id: row.plan_id,
        path: row.path,
        metas: Meta.metasToObjects(metas),
        created_at: row.created_at,
        updated_at: row.updated_at,
        deleted_at: row.deleted_at || null,
    })
}

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

export async function findTarget(targetId: number) {
    const target = await db
        .selectFrom('backup_targets')
        .selectAll()
        .where('id', '=', targetId)
        .$call(whereNotDeleted)
        .executeTakeFirst()

    if (!target) {
        throw new BaseException('Target not found', 404)
    }

    const metas = await db.selectFrom('backup_target_metas')
        .selectAll()
        .where('target_id', '=', targetId)
        .execute()

    return toEntity(target, metas)
}

export async function findPlanTargets(planId: number) {
    const targets = await db
        .selectFrom('backup_targets')
        .selectAll()
        .where('plan_id', '=', planId)
        .$call(whereNotDeleted)
        .execute()

    const metas = await db.selectFrom('backup_target_metas')
        .selectAll()
        .where('target_id', 'in', targets.map(t => t.id))
        .execute()

    return targets.map(row => {
        const targetMetas = metas.filter(m => m.target_id === row.id)

        return toEntity(row, targetMetas)
    })
}