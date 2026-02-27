import path from 'path'
import fs from 'fs'
import { DumpStrategy } from '../mixins/dumpStrategy.mixin.ts'
import { DockerStrategy } from '../mixins/dockerStrategy.mixin.ts'
import BaseStrategy from './base.strategy.ts'
import shell from '#server/facades/shell.facade.ts'

import { basePath } from '#server/utils/paths.ts'
import { cuid } from '#server/utils/cuid.util.ts'
import { composeWith } from '#shared/utils/compose.ts'
import type Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'

interface DumpOptions {
    filename: string
    database: string
    docker_enabled: boolean
    docker_image?: string
    docker_extra_flags?: string
}

export default class DumpSQLite extends composeWith(
    BaseStrategy,
    DockerStrategy({
        defaultImage: 'nouchka/sqlite3:latest',
    }),
    DumpStrategy({
        dumpFilename: 'dump.db',
        metadataFilename: 'metadata.json',
    })
) {
    public static id = 'dump_sqlite'
    public static label = 'Dump SQLite'
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
        const dockerEnabled = options.docker_enabled

        if (!fs.existsSync(database)) {
            throw new Error(`SQLite database file '${database}' does not exist`)
        }

        const args = [
            database,
            `".backup '${filename}'"`,
        ]

        if (dockerEnabled) {
            const dockerArgs = [] as string[]
        
            dockerArgs.push('run', '--rm')
            dockerArgs.push('-v', `${path.dirname(database)}:/database`)
            dockerArgs.push('-v', `${path.dirname(filename)}:/dumps`)
            
            if (options.docker_extra_flags) {
                const extraFlags = options.docker_extra_flags.split(' ').filter(f => f.trim() !== '')
                
                dockerArgs.push(...extraFlags)
            }

            dockerArgs.push(options.docker_image || 'nouchka/sqlite3:latest')
                
            dockerArgs.push(`/database/${path.basename(database)}`)
            dockerArgs.push(`.backup '/dumps/${path.basename(filename)}'`)
        
            return shell.command('docker', dockerArgs, {
                shell: false
            })
        }
        
        return shell.command('sqlite3', args)
    }

    public static async restoreDump(options: DumpOptions): Promise<void> {
        const database = options.database
        const filename = options.filename
        const dockerEnabled = options.docker_enabled

        const args = [
            database,
            `".restore '${filename}'"`,
        ]

        if (dockerEnabled) {
            const dockerArgs = [] as string[]

            dockerArgs.push('run', '--rm')
            dockerArgs.push('-v', `${path.dirname(database)}:/database`)
            dockerArgs.push('-v', `${path.dirname(filename)}:/dumps`)

            if (options.docker_extra_flags) {
                const extraFlags = options.docker_extra_flags.split(' ').filter(f => f.trim() !== '')
                
                dockerArgs.push(...extraFlags)
            }

            dockerArgs.push(options.docker_image || 'nouchka/sqlite3:latest')

            dockerArgs.push(`/database/${path.basename(database)}`)
            dockerArgs.push(`.restore '/dumps/${path.basename(filename)}'`)

            return shell.command('docker', dockerArgs, {
                shell: false
            })
        }

        return shell.command('sqlite3', args)
    }

    public async backup(metadata: Record<string, unknown>): Promise<void> {
        const database = basePath(this.config.filename as string)
        const directory = this.config.directory as string | undefined

        if (!fs.existsSync(database)) {
            throw new Error(`SQLite database file '${database}' does not exist`)
        }

        const tmpFilename = BaseStrategy.makeTmpPath(`backup_${Date.now()}.db`)

        await DumpSQLite.dump({
            filename: tmpFilename,
            database,
            docker_enabled: this.useDocker,
            docker_image: this.dockerImage,
            docker_extra_flags: this.config.docker_extra_flags as string | undefined,
        })

        const stats = await fs.promises.stat(tmpFilename)

        const id = cuid()
        const folder = directory ? path.join(directory, id) : id

        await this.drive.upload(tmpFilename, path.join(folder, 'dump.db'))

        // metadata
        await this.drive.write(path.join(folder, 'metadata.json'), {
            ...metadata,
            plan_id: this.plan.id,
            strategy: DumpSQLite.id,
            size: stats.size,
            created_at: new Date().toISOString(),
        })
        
        await fs.promises.unlink(tmpFilename)

        await this.cleanup()
    }

    public async restore(snapshot: Snapshot): Promise<void> {
        const database = basePath(this.config.filename as string)
        const directory = this.config.directory as string | undefined

        const folder = directory ? path.join(directory, snapshot.id) : snapshot.id
        const dumpPath = path.join(folder, 'dump.db')

        if (!(await this.drive.exists(dumpPath))) {
            throw new Error(`Dump file not found in snapshot ${snapshot.id}`)
        }

        const tmpFilename = BaseStrategy.makeTmpPath(`restore_${Date.now()}.db`)

        await this.drive.download(dumpPath, tmpFilename)

        await DumpSQLite.restoreDump({
            filename: tmpFilename,
            database,
            docker_enabled: this.useDocker,
            docker_image: this.dockerImage,
            docker_extra_flags: this.config.docker_extra_flags as string | undefined,
        })

        await fs.promises.unlink(tmpFilename)
    }
}