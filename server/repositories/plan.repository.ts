import type {
    Insertable, Selectable, Updateable 
} from 'kysely'
import type { PlanTable } from '../database/types'
import Plan from '#zenith-backup/shared/entities/plan.entity.ts'
import db from '#server/facades/db.facade.ts'
import { now } from '#server/database/common.ts'
import BaseException from '#server/exceptions/base.ts'

export class PlanRepository {
    public toEntity(row: Selectable<PlanTable>): Plan {
        return new Plan({
            id: row.id,
            name: row.name,
            description: row.description,
            strategy: row.strategy,
            cron: row.cron,
            options: JSON.parse(row.options || '{}'),
            created_at: row.created_at,
            updated_at: row.updated_at,
            deleted_at: row.deleted_at || null,
        })
    }

    public toRow<T>(plan: Partial<Plan>): T {
        return {
            id: plan.id,
            name: plan.name,
            description: plan.description,
            strategy: plan.strategy,
            cron: plan.cron,
            options: JSON.stringify(plan.options),
            created_at: plan.created_at,
            updated_at: plan.updated_at,
            deleted_at: plan.deleted_at,
        } as T
    }

    public async list(){
        const rows = await db.selectFrom('backup_plans')
            .where('deleted_at', 'is', null)
            .selectAll().execute()

        return rows.map(row => this.toEntity(row))
    }

    public async find(id: number){
        const row = await db.selectFrom('backup_plans')
            .selectAll()
            .where('deleted_at', 'is', null)
            .where('id', '=', id)
            .executeTakeFirst()

        if (!row) return null

        return this.toEntity(row)
    }

    public async findOrFail(id: number) {
        const plan = await this.find(id)

        if (!plan) {
            throw new BaseException('Plan not found', 404)
        }

        return plan
    }

    public async create(data: Partial<Plan>) {
        const parsed = this.toRow<Insertable<PlanTable>>(data)

        const [row] = await db.insertInto('backup_plans').values(parsed).returningAll().execute()

        return this.toEntity(row)
    }

    public async update(id: number, data: Partial<Plan>) {
        const parsed = this.toRow<Updateable<PlanTable>>(data)

        parsed.updated_at = now()

        const [row] = await db.updateTable('backup_plans').set(parsed).where('id', '=', id).returningAll().execute()

        if (!row) {
            throw new BaseException('Plan not found')
        }

        return this.toEntity(row)
    }

    public async delete(id: number) {
        const [row] = await db.updateTable('backup_plans')
            .set('deleted_at', now())
            .where('id', '=', id)
            .returningAll()
            .execute()

        if (!row) {
            throw new BaseException('Plan not found')
        }

        return this.toEntity(row)
    }
}

export const planRepository = new PlanRepository()