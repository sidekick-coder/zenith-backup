import { Kysely } from 'kysely'

const table = 'backup_target_metas'

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema.createTable(table)
        .addColumn('id', 'integer', col => col.primaryKey())
        .addColumn('target_id', 'integer', col => col.notNull())
        .addColumn('name', 'varchar', col => col.notNull())
        .addColumn('value', 'text')
        .addUniqueConstraint('backup_target_metas_target_id_name_unique', ['target_id', 'name'])
        .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable(table).execute()
}

