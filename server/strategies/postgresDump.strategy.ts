import path from 'path'
import fs from 'fs'
import { format } from 'date-fns'
import { DumpStrategy } from '../mixins/dumpStrategy.mixin.ts'
import { DockerStrategy } from '../mixins/dockerStrategy.mixin.ts'
import BaseStrategy from './base.strategy.ts'
import shell from '#server/facades/shell.facade.ts'
import { $t } from '#shared/lang.ts'
import { tmpPath } from '#server/utils/paths.ts'
import { cuid } from '#server/utils/cuid.util.ts'
import { composeWith } from '#shared/utils/compose.ts'

interface DumpOptions {
    filename: string
    host?: string
    port?: number
    username: string
    password?: string
    database: string
    docker: boolean
}

export default class PostgresDumpStrategy extends composeWith(
    BaseStrategy,
    DockerStrategy(),
    DumpStrategy()
) {
    public static id = 'postgres_dump'
    public static label = 'Postgres Dump'
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
        ]

        if (docker) {
            const dockerArgs = [] as string[]
        
            dockerArgs.push('run', '--rm')
        
            if (password) {
                dockerArgs.push('-e', `PGPASSWORD=${password}`)
            }
                
            dockerArgs.push('-v', `${path.dirname(filename)}:/dumps`)
            dockerArgs.push('postgres', 'pg_dump')
                
            args.forEach(a => {
                dockerArgs.push(a.replace(path.dirname(filename), '/dumps'))
            })
        
            return shell.command('docker', dockerArgs)
        }

        const env: Record<string, string> = {}

        if (password) {
            env.PGPASSWORD = password
        }
        
        return shell.command('pg_dump', args, { env })
    }

    public async backup(metadata: Record<string, unknown>): Promise<void> {
        const host = this.config.host as string | undefined
        const port = this.config.port as number | undefined
        const username = this.config.username as string
        const password = this.config.password as string | undefined
        const database = this.config.database as string
        const directory = this.config.directory as string | undefined

        const tmpFilename = tmpPath(`backup_${Date.now()}.sql`)

        await PostgresDumpStrategy.dump({
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
            strategy: PostgresDumpStrategy.id,
            size: stats.size,
            created_at: format(new Date(), 'yyyy-MM-dd HH:mm'),
        })
        
        await fs.promises.unlink(tmpFilename)

        await this.cleanup()
    }
}