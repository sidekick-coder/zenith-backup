import { Kysely } from 'kysely'
import { withSoftDelete, withTimestamps } from '#server/database/common.ts'

const table = 'backup_snapshots'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema.createTable(table)
        .addColumn('id', 'integer', col => col.primaryKey())
        .addColumn('backup_plan_id', 'integer', col => col.notNull())
        .addColumn('backup_target_id','integer', col => col.notNull())
        .addColumn('snapshot_id', 'text', col => col.notNull())
        .addColumn('metadata', 'text', col => col.notNull().defaultTo('{}'))
        .$call(withTimestamps)
        .$call(withSoftDelete)
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable(table).execute()
}

