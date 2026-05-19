import Plan from "../entities/plan.entity.ts";
import DumpStrategy from "./DumpStrategy.ts";

export default class DumpSQLiteStrategy extends DumpStrategy {
    public static id = 'dump_sqlite'
    public static label = 'Dump SQLite Strategy'
    public static description = 'A dump strategy specifically designed for SQLite databases, utilizing the sqlite3 command-line tool to create dumps. It ensures that the database is properly locked during the dump process to maintain data integrity.'

    constructor(plan: Plan) {
        super(plan)

        // Set default values specific to SQLite
        this.docker_image = 'nouchka/sqlite3:latest'
        this.backup_command = 'sqlite3 /data/database.sqlite .dump > {output}'
        this.restore_command = 'sqlite3 /data/database.sqlite < {input}'
    }
}
