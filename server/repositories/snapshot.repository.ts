import type {
    Insertable, Selectable, Updateable 
} from 'kysely'
import type { SnapshotTable } from '../database/types'
import Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'
import db from '#server/facades/db.facade.ts'
import { now } from '#server/database/common.ts'
import BaseException from '#server/exceptions/base.ts'

export class SnapshotRepository {
    public toEntity(row: Selectable<SnapshotTable>): Snapshot {
        return new Snapshot({
            id: row.id,
            plan_id: row.backup_plan_id,
            target_id: row.backup_target_id,
            snapshot_id: row.snapshot_id,
            metadata: JSON.parse(row.metadata),
            created_at: row.created_at,
            updated_at: row.updated_at,
            deleted_at: row.deleted_at || null,
        })
    }

    public toRow<T>(snapshot: Partial<Snapshot>): T {
        return {
            id: snapshot.id,
            backup_plan_id: snapshot.plan_id,
            backup_target_id: snapshot.target_id,
            snapshot_id: snapshot.snapshot_id,
            metadata: JSON.stringify(snapshot.metadata),
            created_at: snapshot.created_at,
            updated_at: snapshot.updated_at,
            deleted_at: snapshot.deleted_at,
        } as T
    }

    public async list(planId?: number, targetId?: number) {
        let query = db.selectFrom('backup_snapshots')
            .where('deleted_at', 'is', null)
        
        if (planId) {
            query = query.where('backup_plan_id', '=', planId)
        }
        
        if (targetId) {
            query = query.where('backup_target_id', '=', targetId)
        }
        
        const rows = await query.selectAll().execute()
        return rows.map(row => this.toEntity(row))
    }

    public async find(id: number) {
        const row = await db.selectFrom('backup_snapshots')
            .selectAll()
            .where('deleted_at', 'is', null)
            .where('id', '=', id)
            .executeTakeFirst()
        if (!row) return null
        return this.toEntity(row)
    }

    public async findBySnapshotId(snapshotId: string) {
        const row = await db.selectFrom('backup_snapshots')
            .selectAll()
            .where('deleted_at', 'is', null)
            .where('snapshot_id', '=', snapshotId)
            .executeTakeFirst()
        if (!row) return null
        return this.toEntity(row)
    }

    public async findOrFail(id: number) {
        const snapshot = await this.find(id)
        if (!snapshot) {
            throw new BaseException('Snapshot not found', 404)
        }
        return snapshot
    }

    public async create(data: Partial<Snapshot>) {
        const parsed = this.toRow<Insertable<SnapshotTable>>(data)
        const [row] = await db.insertInto('backup_snapshots').values(parsed).returningAll().execute()
        return this.toEntity(row)
    }

    public async update(id: number, data: Partial<Snapshot>) {
        const parsed = this.toRow<Updateable<SnapshotTable>>(data)
        parsed.updated_at = now()
        const [row] = await db.updateTable('backup_snapshots').set(parsed).where('id', '=', id).returningAll().execute()
        if (!row) {
            throw new BaseException('Snapshot not found')
        }
        return this.toEntity(row)
    }

    public async delete(id: number) {
        const [row] = await db.updateTable('backup_snapshots')
            .set('deleted_at', now())
            .where('id', '=', id)
            .returningAll()
            .execute()
        if (!row) {
            throw new BaseException('Snapshot not found')
        }
        return this.toEntity(row)
    }
}

export const snapshotRepository = new SnapshotRepository()
