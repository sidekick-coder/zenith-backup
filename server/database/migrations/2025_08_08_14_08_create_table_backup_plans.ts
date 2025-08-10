import { Kysely } from 'kysely'
import { withSoftDelete, withTimestamps } from '#server/database/common.ts'

const table = 'backup_plans'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema.createTable(table)
        .addColumn('id', 'integer', col => col.primaryKey())
        .addColumn('name', 'text', col => col.notNull())
        .addColumn('description', 'text')
        .addColumn('strategy', 'text', (col) => col.notNull())
        .addColumn('cron', 'text')
        .addColumn('options', 'text', col => col.notNull().defaultTo('{}'))
        .$call(withTimestamps)
        .$call(withSoftDelete)
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable(table).execute()
}

