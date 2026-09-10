import path from "path";
import type { BaseStrategyOptions } from "./BaseStrategy.ts";
import DumpStrategy from "./DumpStrategy.ts";
import { config } from "@sidekick-coder/zenith-kit/server";

export default class extends DumpStrategy {
    public static id = 'dump_connection'
    public static label = 'Dump Connection'
    public static description = 'This strategy generate dumps from zenith database connections.'

    public connection: Record<string, any>

    constructor(options: BaseStrategyOptions) {
        super(options)

        const id = this.config.connection_id as string

        this.connection = config.get(`database.connections.${id}`) as Record<string, any>

        if (!this.connection) {
            this.logger.error(`Database connection "${id}" not found in configuration.`)
            return
        }

        this.setup()
    }

    public setupSqlite() {
        const filename = this.connection.database as string
        const basename = filename ? path.basename(filename) : 'database.sqlite'
        const folder = filename ? path.dirname(filename) : ''

        // set image and mount volume for sqlite3
        this.docker_image = 'nouchka/sqlite3:latest'
        this.docker_args = [
            '-v', `${folder}:/data:rw`,
        ]

        // backup_command uses sqlite3 to create a dump of the database, redirecting the output to the specified file path inside the container
        this.backup_command = `/data/${basename} '.backup {{output}}'`
        this.backup_filename = `database.dump`

        this.restore_command = `/data/${basename} '.restore {{input}}'`
    }

    public setupPostgres() {
        this.backup_filename = `database.sql`
        this.docker_image = this.config.docker_image || 'postgres:latest'

        const host = this.connection.host || 'localhost'
        const port = this.connection.port || 5432
        const username = this.connection.user || 'postgres'
        const database = this.connection.database || 'postgres'
        const password = this.connection.password || ''

        this.docker_env = {
            PGPASSWORD: password,
        }

        const args = [
            `--host=${host}`,
            `--port=${port}`,
            `--username=${username}`,
            `--dbname=${database}`,
        ]

        this.backup_command = `pg_dump ${args.join(' ')} --file={{output}} --clean`
        this.restore_command = `psql ${args.join(' ')} -f {{input}}`
    }

    public setup() {
        if (this.connection.dialect === 'postgresql') {
            return this.setupPostgres()
        }

        if (this.connection.dialect === 'sqlite') {
            return this.setupSqlite()
        }

        this.logger.error(`Unsupported database dialect: ${this.connection.dialect}`)
    }
}
