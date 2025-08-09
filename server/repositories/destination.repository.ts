import type {
    Insertable, Selectable, Updateable 
} from 'kysely'
import type { PlanDestinationTable } from '../database/types'
import Destination from '#modules/zenith-backup/shared/entities/destination.entity.ts'
import db from '#server/facades/db.facade.ts'
import { now } from '#server/database/common.ts'
import BaseException from '#server/exceptions/base.ts'

export class DestinationRepository {
    public toEntity(row: Selectable<PlanDestinationTable>): Destination {
        return new Destination({
            id: row.id,
            backup_plan_id: row.backup_plan_id,
            drive_id: row.drive_id,
            folder: row.folder,
            created_at: row.created_at,
            updated_at: row.updated_at,
            deleted_at: row.deleted_at || null,
        })
    }

    public toRow<T>(destination: Partial<Destination>): T {
        return {
            id: destination.id,
            backup_plan_id: destination.backup_plan_id,
            drive_id: destination.drive_id,
            folder: destination.folder,
            created_at: destination.created_at,
            updated_at: destination.updated_at,
            deleted_at: destination.deleted_at,
        } as T
    }

    public async list(planId?: number) {
        let query = db.selectFrom('backup_plan_destinations')
            .where('deleted_at', 'is', null)
        if (planId) {
            query = query.where('backup_plan_id', '=', planId)
        }
        const rows = await query.selectAll().execute()
        return rows.map(row => this.toEntity(row))
    }

    public async find(id: number) {
        const row = await db.selectFrom('backup_plan_destinations')
            .selectAll()
            .where('deleted_at', 'is', null)
            .where('id', '=', id)
            .executeTakeFirst()
        if (!row) return null
        return this.toEntity(row)
    }

    public async findOrFail(id: number) {
        const destination = await this.find(id)
        if (!destination) {
            throw new BaseException('Destination not found', 404)
        }
        return destination
    }

    public async create(data: Partial<Destination>) {
        
        const parsed = this.toRow<Insertable<PlanDestinationTable>>(data)

        const [row] = await db.insertInto('backup_plan_destinations').values(parsed).returningAll().execute()
        return this.toEntity(row)
    }

    public async update(id: number, data: Partial<Destination>) {
        const parsed = this.toRow<Updateable<any>>(data)
        parsed.updated_at = now()
        const [row] = await db.updateTable('backup_plan_destinations').set(parsed).where('id', '=', id).returningAll().execute()
        if (!row) {
            throw new BaseException('Destination not found')
        }
        return this.toEntity(row)
    }

    public async delete(id: number) {
        const [row] = await db.updateTable('backup_plan_destinations')
            .set('deleted_at', now())
            .where('id', '=', id)
            .returningAll()
            .execute()
        if (!row) {
            throw new BaseException('Destination not found')
        }
        return this.toEntity(row)
    }
}

export const destinationRepository = new DestinationRepository()
