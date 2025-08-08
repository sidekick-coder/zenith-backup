import { Kysely } from 'kysely'

const table = 'backup_plans_targets'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema.createTable(table)
        .addColumn('id', 'integer', col => col.primaryKey())
        .addColumn('backup_plan_id', 'integer', col => col.notNull())
        .addColumn('path', 'text', col => col.notNull())
        .addColumn('options', 'text', col => col.notNull().defaultTo('{}'))
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable(table).execute()
}

