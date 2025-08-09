import type {
    Insertable, Selectable, Updateable 
} from 'kysely'
import type { PlanTargetTable } from '../database/types'
import Target from '#zenith-backup/shared/entities/target.entity.ts'
import db from '#server/facades/db.facade.ts'
import { now } from '#server/database/common.ts'
import BaseException from '#server/exceptions/base.ts'

export class TargetRepository {
    public toEntity(row: Selectable<PlanTargetTable>): Target {
        return new Target({
            id: row.id,
            backup_plan_id: row.backup_plan_id,
            path: row.path,
            options: typeof row.options === 'string' ? JSON.parse(row.options || '{}') : row.options || {},
            created_at: row.created_at,
            updated_at: row.updated_at,
            deleted_at: row.deleted_at || null,
        })
    }

    public toRow<T>(target: Partial<Target>): T {
        return {
            id: target.id,
            backup_plan_id: target.backup_plan_id,
            path: target.path,
            options: JSON.stringify(target.options),
            created_at: target.created_at,
            updated_at: target.updated_at,
            deleted_at: target.deleted_at,
        } as T
    }

    public async list(planId?: number) {
        let query = db.selectFrom('backup_plans_targets')
            .where('deleted_at', 'is', null)
        
        if (planId) {
            query = query.where('backup_plan_id', '=', planId)
        }
        
        const rows = await query.selectAll().execute()
        return rows.map(row => this.toEntity(row))
    }

    public async find(id: number) {
        const row = await db.selectFrom('backup_plans_targets')
            .selectAll()
            .where('deleted_at', 'is', null)
            .where('id', '=', id)
            .executeTakeFirst()
        if (!row) return null
        return this.toEntity(row)
    }

    public async findOrFail(id: number) {
        const target = await this.find(id)
        if (!target) {
            throw new BaseException('Target not found', 404)
        }
        return target
    }

    public async create(data: Partial<Target>) {
        const parsed = this.toRow<Insertable<PlanTargetTable>>(data)
        const [row] = await db.insertInto('backup_plans_targets').values(parsed).returningAll().execute()
        return this.toEntity(row)
    }

    public async update(id: number, data: Partial<Target>) {
        const parsed = this.toRow<Updateable<PlanTargetTable>>(data)
        parsed.updated_at = now()
        const [row] = await db.updateTable('backup_plans_targets').set(parsed).where('id', '=', id).returningAll().execute()
        if (!row) {
            throw new BaseException('Target not found')
        }
        return this.toEntity(row)
    }

    public async delete(id: number) {
        const [row] = await db.updateTable('backup_plans_targets')
            .set('deleted_at', now())
            .where('id', '=', id)
            .returningAll()
            .execute()
        if (!row) {
            throw new BaseException('Target not found')
        }
        return this.toEntity(row)
    }
}

export const targetRepository = new TargetRepository()
