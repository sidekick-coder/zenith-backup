import { Kysely } from 'kysely'

const table = 'backup_plan_metas'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema.createTable(table)
        .addColumn('id', 'integer', col => col.primaryKey())
        .addColumn('plan_id', 'integer', col => col.notNull())
        .addColumn('name', 'varchar', col => col.notNull())
        .addColumn('value', 'text')
        .addUniqueConstraint('backup_plan_metas_plan_id_name_unique', ['plan_id', 'name'])
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable(table).execute()
}

