import path from 'path'
import fs from 'fs'
import { format } from 'date-fns'
import { DumpStrategy } from '../mixins/dumpStrategy.mixin.ts'
import { DockerStrategy } from '../mixins/dockerStrategy.mixin.ts'
import BaseStrategy from './base.strategy.ts'
import shell from '#server/facades/shell.facade.ts'
import { $t } from '#shared/lang.ts'
import { tmpPath, basePath } from '#server/utils/paths.ts'
import { cuid } from '#server/utils/cuid.util.ts'
import { composeWith } from '#shared/utils/compose.ts'

interface DumpOptions {
    filename: string
    database: string
    docker: boolean
}

export default class SQLiteDumpStrategy extends composeWith(
    BaseStrategy,
    DockerStrategy(),
    DumpStrategy({
        dumpFilename: 'dump.db',
        metadataFilename: 'metadata.json',
    })
) {
    public static id = 'sqlite_dump'
    public static label = 'SQLite Dump'
    public static description = $t('This strategy uses sqlite3 to backup a SQLite database.')

    static {
        this.section('database', {
            title: $t('Database'),
            description: $t('Settings related to the SQLite database file.'),
        })

        this.field('filename', {
            component: 'text-field',
            section_id: 'database',
            label: $t('Database File'),
        })
    }

    public static async dump(options: DumpOptions): Promise<void> {
        const database = options.database
        const filename = options.filename
        const docker = options.docker

        if (!fs.existsSync(database)) {
            throw new Error(`SQLite database file '${database}' does not exist`)
        }

        const args = [
            database,
            `".backup '${filename}'"`,
        ]

        if (docker) {
            const dockerArgs = [] as string[]
        
            dockerArgs.push('run', '--rm')
            dockerArgs.push('-v', `${path.dirname(database)}:/database`)
            dockerArgs.push('-v', `${path.dirname(filename)}:/dumps`)
            dockerArgs.push('nouchka/sqlite3', 'sqlite3')
                
            dockerArgs.push('/database/' + path.basename(database))
            dockerArgs.push(`".backup '/dumps/${path.basename(filename)}'"`)
        
            return shell.command('docker', dockerArgs)
        }
        
        return shell.command('sqlite3', args)
    }

    public async backup(metadata: Record<string, unknown>): Promise<void> {
        const database = basePath(this.config.filename as string)
        const directory = this.config.directory as string | undefined

        if (!fs.existsSync(database)) {
            throw new Error(`SQLite database file '${database}' does not exist`)
        }

        const tmpFilename = tmpPath(`backup_${Date.now()}.db`)

        await SQLiteDumpStrategy.dump({
            filename: tmpFilename,
            database,
            docker: this.useDocker,
        })

        const stats = await fs.promises.stat(tmpFilename)

        const id = cuid()
        const folder = directory ? path.join(directory, id) : id

        await this.drive.upload(tmpFilename, path.join(folder, 'dump.db'))

        // metadata
        await this.drive.write(path.join(folder, 'metadata.json'), {
            ...metadata,
            plan_id: this.plan.id,
            strategy: SQLiteDumpStrategy.id,
            size: stats.size,
            created_at: format(new Date(), 'yyyy-MM-dd HH:mm'),
        })
        
        await fs.promises.unlink(tmpFilename)

        await this.cleanup()
    }
}