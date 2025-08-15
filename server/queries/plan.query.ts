
import type { Selectable } from 'kysely'
import type { PlanTable } from '../contracts/database.contract'
import BaseException from '#server/exceptions/base.ts'
import db from '#server/facades/db.facade.ts'
import { whereNotDeleted } from '#server/queries/softDelete.ts'
import Plan from '#zenith-backup/shared/entities/plan.entity.ts'
import type PlanMeta from '#zenith-backup/shared/entities/planMeta.entity.ts'
import Meta from '#shared/entities/meta.entity.ts'


export function fromDb(row: Selectable<PlanTable>, metas: Selectable<PlanMeta>[]): Plan {
    return new Plan({
        id: row.id,
        name: row.name,
        description: row.description,
        strategy: row.strategy,
        cron: row.cron,
        options: JSON.parse(row.options || '{}'),
        metas: Meta.metasToObjects(metas),
        created_at: row.created_at,
        updated_at: row.updated_at,
        deleted_at: row.deleted_at || null,
    })
}

export async function findPlan(id: number) {
    const plan = await db        
        .selectFrom('backup_plans')
        .$call(whereNotDeleted)
        .selectAll()
        .where('id', '=', id)
        .executeTakeFirst()

    if (!plan) {
        throw new BaseException('Plan not found')
    }

    const metas = await db
        .selectFrom('backup_plan_metas')
        .selectAll()
        .where('plan_id', '=', plan.id)
        .execute()

    return fromDb(plan, metas)
}