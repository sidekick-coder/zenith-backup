import path from "path";
import type { BaseStrategyOptions } from "./BaseStrategy.ts";
import DumpStrategy from "./DumpStrategy.ts";

export default class extends DumpStrategy {
    public static id = 'dump_sqlite'
    public static label = 'Dump SQLite Strategy'
    public static description = 'A dump strategy specifically designed for SQLite databases, utilizing the sqlite3 command-line tool to create dumps. It ensures that the database is properly locked during the dump process to maintain data integrity.'

    constructor(options: BaseStrategyOptions) {
        super(options)

        const filename = this.config.sqlite_filename
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
}
