import path from 'path'
import fs from 'fs'
import { format } from 'date-fns'
import { DumpStrategy } from '../mixins/dumpStrategy.mixin.ts'
import { DockerStrategy } from '../mixins/dockerStrategy.mixin.ts'
import BaseStrategy from './base.strategy.ts'
import shell from '#server/facades/shell.facade.ts'

import { tmpPath } from '#server/utils/paths.ts'
import { cuid } from '#server/utils/cuid.util.ts'
import { composeWith } from '#shared/utils/compose.ts'
import type Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'

interface DumpOptions {
    filename: string
    host?: string
    port?: number
    username: string
    password?: string
    database: string
    docker: boolean
}

export default class DumpPostgres extends composeWith(
    BaseStrategy,
    DockerStrategy(),
    DumpStrategy()
) {
    public static id = 'dump_postgres'
    public static label = 'Dump Postgres'
    public static description = $t('This strategy uses pg_dump to backup a Postgres database.')

    static {
        this.section('database', {
            title: $t('Database'),
            description: $t('Settings related to the Postgres database connection.'),
        })

        this.field('host', {
            component: 'text-field',
            section_id: 'database',
            label: $t('Host'),
        })

        this.field('port', {
            component: 'text-field',
            section_id: 'database',
            type: 'number',
            label: $t('Port'),
        })

        this.field('database', {
            component: 'text-field',
            section_id: 'database',
            label: $t('Database'),
        })

        this.field('username', {
            component: 'text-field',
            section_id: 'database',
            label: $t('Username'),
        })

        this.field('password', {
            component: 'text-field',
            section_id: 'database',
            label: $t('Password'),
            type: 'password',
        })
    }

    public static async dump(options: DumpOptions): Promise<void> {
        const host = options.host as string | undefined
        const port = options.port as number | undefined
        const username = options.username as string
        const password = options.password as string | undefined
        const database = options.database as string
        const filename = options.filename
        const docker = options.docker

        const args = [
            `--host=${host || 'localhost'}`,
            `--port=${port || 5432}`,
            `--username=${username}`,
            `--dbname=${database}`,
            `--file=${filename}`,
            '--clean'
        ]

        const env: Record<string, string> = {}

        if (password) {
            env.PGPASSWORD = password
        }

        if (docker) {
            const dockerArgs = [] as string[]
        
            dockerArgs.push('run', '--rm')
        
            if (password) {
                dockerArgs.push('-e', 'PGPASSWORD')
            }
                
            dockerArgs.push('-v', `${path.dirname(filename)}:/dumps`)
            dockerArgs.push('postgres', 'pg_dump')
                
            args.forEach(a => {
                dockerArgs.push(a.replace(path.dirname(filename), '/dumps'))
            })
        
            return shell.command('docker', dockerArgs, { env })
        }
        
        return shell.command('pg_dump', args, { env })
    }

    public static async restoreDump(options: DumpOptions): Promise<void> {
        const host = options.host as string | undefined
        const port = options.port as number | undefined
        const username = options.username as string
        const password = options.password as string | undefined
        const database = options.database as string
        const filename = options.filename
        const docker = options.docker

        const env: Record<string, string> = {}

        if (password) {
            env.PGPASSWORD = password
        }

        if (docker) {
            const args = []

            args.push('run', '--rm')

            if (password) {
                args.push('-e', 'PGPASSWORD')
            }

            args.push('-v', `${path.dirname(filename)}:/dumps`)
            args.push('postgres', 'psql')
            args.push(`--host=${host || 'localhost'}`)
            args.push(`--port=${port || 5432}`)
            args.push(`--username=${username}`)
            args.push(`--dbname=${database}`)
            args.push('-f', `/dumps/${path.basename(filename)}`)

            return shell.command('docker', args, { env })
        }

        const args = [] as string[]
        
        args.push(`--host=${host || 'localhost'}`)
        args.push(`--port=${port || 5432}`)
        args.push(`--username=${username}`)
        args.push(`--dbname=${database}`)
        args.push('-f', filename)

        return shell.command('psql', args, { env })
    }

    public async backup(metadata: Record<string, unknown>): Promise<void> {
        const host = this.config.host as string | undefined
        const port = this.config.port as number | undefined
        const username = this.config.username as string
        const password = this.config.password as string | undefined
        const database = this.config.database as string
        const directory = this.config.directory as string | undefined

        const tmpFilename = tmpPath(`backup_${Date.now()}.sql`)

        await DumpPostgres.dump({
            filename: tmpFilename,
            host,
            port,
            username,
            password,
            database,
            docker: this.useDocker,
        })

        const stats = await fs.promises.stat(tmpFilename)

        const id = cuid()
        const folder = directory ? path.join(directory, id) : id

        await this.drive.upload(tmpFilename, path.join(folder, 'dump.sql'))

        // metadata
        await this.drive.write(path.join(folder, 'metadata.json'), {
            ...metadata,
            plan_id: this.plan.id,
            strategy: DumpPostgres.id,
            size: stats.size,
            created_at: new Date().toISOString(),
        })
        
        await fs.promises.unlink(tmpFilename)

        await this.cleanup()
    }

    public async restore(snapshot: Snapshot): Promise<void> {
        const host = this.config.host as string | undefined
        const port = this.config.port as number | undefined
        const username = this.config.username as string
        const password = this.config.password as string | undefined
        const database = this.config.database as string
        const directory = this.config.directory as string | undefined

        const folder = directory ? path.join(directory, snapshot.id) : snapshot.id
        const dumpPath = path.join(folder, 'dump.sql')

        if (!(await this.drive.exists(dumpPath))) {
            throw new Error(`Dump file not found in snapshot ${snapshot.id}`)
        }

        const tmpFilename = tmpPath(`restore_${Date.now()}.sql`)

        await this.drive.download(dumpPath, tmpFilename)

        await DumpPostgres.restoreDump({
            filename: tmpFilename,
            host,
            port,
            username,
            password,
            database,
            docker: this.useDocker,
        })

        await fs.promises.unlink(tmpFilename)
    }
}