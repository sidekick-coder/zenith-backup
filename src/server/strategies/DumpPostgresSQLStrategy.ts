import type { BaseStrategyOptions } from "./BaseStrategy.ts";
import DumpStrategy from "./DumpStrategy.ts";

export default class extends DumpStrategy {
    public static id = 'dump_postgres'
    public static label = 'Dump Postgres'
    public static description = 'This strategy uses pg_dump to backup a Postgres database.'

    constructor(options: BaseStrategyOptions) {
        super(options)

        this.backup_filename = `database.sql`
        this.docker_image = this.config.docker_image || 'postgres:latest'
        this.docker_env = {
            PGPASSWORD: this.config.postgres_password as string || '',
        }

        const args = [
            `--host=${this.config.postgres_host || 'localhost'}`,
            `--port=${this.config.postgres_port || 5432}`,
            `--username=${this.config.postgres_username || 'postgres'}`,
            `--dbname=${this.config.postgres_database || 'postgres'}`,
            `--file={{output}}`,
        ]

        this.backup_command = `pg_dump ${args.join(' ')}`
    }
}
