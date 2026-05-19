import path from 'path'
import fs from 'fs'
import { DockerStrategy } from '../mixins/dockerStrategy.mixin.ts'
import { DriveStrategy } from '../mixins/driveStrategy.mixin.ts'
import BaseStrategy from './base.strategy.ts'
import { basePath } from '@sidekick-coder/zenith-kit/server'
import { composeWith } from '#shared/utils/compose.ts'
import DumpService from '../services/dump.service.ts'
import type Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'

export default class DumpSQLite extends composeWith(
    BaseStrategy,
    DockerStrategy({
        defaultImage: 'nouchka/sqlite3:latest',
    }),
    DriveStrategy(),
) {
    public static id = 'dump_sqlite'
    public static label = 'Dump SQLite'
    public static description = 'This strategy uses sqlite3 to backup a SQLite database.'

    static {
        this.section('database', {
            title: 'Database',
            description: 'Settings related to the SQLite database file.',
        })

        this.field('filename', {
            component: 'text-field',
            section_id: 'database',
            label: 'Database File',
        })
    }

    private buildDumpService() {
        const database = basePath(this.config.filename as string)

        if (!fs.existsSync(database)) {
            throw new Error(`SQLite database file '${database}' does not exist`)
        }

        const dbDir = path.dirname(database)
        const dbFile = path.basename(database)

        return new DumpService({
            drive_id: this.config.drive_id as string,
            directory: this.config.directory as string | undefined,
            max_length: this.config.max_length as number | undefined,
            docker_image: this.dockerImage || 'nouchka/sqlite3:latest',
            extra_volumes: [`${dbDir}:/db`],
            backup_command: `sqlite3 /db/${dbFile} ".backup '/dumps/dump'"`,
            restore_command: `sqlite3 /db/${dbFile} ".restore '/dumps/dump'"`,
        })
    }

    public async list(): Promise<Snapshot[]> {
        return this.buildDumpService().list(this.plan.id)
    }

    public async destroy(snapshot: Snapshot): Promise<void> {
        return this.buildDumpService().destroy(snapshot)
    }

    public async backup(metadata: Record<string, unknown>): Promise<void> {
        const service = this.buildDumpService()

        await service.backup({ ...metadata, plan_id: this.plan.id, strategy: DumpSQLite.id })
        await service.cleanup(this.plan.id)
    }

    public async restore(snapshot: Snapshot): Promise<void> {
        await this.buildDumpService().restore(snapshot)
    }
}
