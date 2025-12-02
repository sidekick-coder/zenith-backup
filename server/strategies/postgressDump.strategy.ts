import path from 'path'
import fs from 'fs'
import { format } from 'date-fns'
import BaseStrategy from './base.strategy.ts'
import shell from '#server/facades/shell.facade.ts'
import config from '#server/facades/config.facade.ts'
import { $t } from '#shared/lang.ts'
import validator from '#shared/services/validator.service.ts'
import drive from '#server/facades/drive.facade.ts'
import { tmpPath } from '#server/utils/paths.ts'
import BaseException from '#server/exceptions/base.ts'
import { cuid } from '#server/utils/cuid.util.ts'

export default class PostgresDumpStrategy extends BaseStrategy {
    public static id = 'postgres_dump'
    public static label = 'Postgres Dump'
    public static description = $t('This strategy uses pg_dump to backup a Postgres database.')
    public static schema = validator.create(v => v.object({
        drive_id: v.string(),
        directory: v.string(),

        host: v.string(),
        port: v.number(),
        database: v.string(),
        username: v.string(),
        password: v.string(),
    }))
            
    public static fields ={
        drive_id: {
            component: 'select',
            fetch: '/api/drives',
            label: $t('Drive'),
            valueKey: 'id',
            labelKey: 'name',
            descriptionKey: 'description',
        },
        directory: {
            component: 'text-field',
            label: $t('Directory'),
        },
        host: { 
            component: 'text-field',
            label: $t('Host'),
        },
        port: { 
            component: 'text-field',
            type: 'number',
            label: $t('Port'),
        },
        database: { 
            component: 'text-field',
            label: $t('Database'),
        },
        username: { 
            component: 'text-field',
            label: $t('Username'),
        },
        password: { 
            component: 'text-field',
            label: $t('Password'),
            type: 'password',
        }
    }

    public async backup(metadata: Record<string, unknown>): Promise<void> {
        const host = this.config.host as string | undefined
        const port = this.config.port as number | undefined
        const username = this.config.username as string
        const password = this.config.password as string | undefined
        const database = this.config.database as string
        const driveId = this.config.drive_id as string
        const directory = this.config.directory as string | undefined
        
        let docker = this.config.docker as boolean | undefined

        if (docker === undefined) {
            docker = config.get<boolean>('zbackups.pg_dump.docker')
        }

        if (docker === undefined) {
            docker = config.get<boolean>('zbackups.docker.enabled', false)
        }

        const tmpFilename = tmpPath(`backup_${Date.now()}.sql`)
        const driveInstance = drive.use(this.config.drive_id as string)

        const args = [
            `--host=${host || 'localhost'}`,
            `--port=${port || 5432}`,
            `--username=${username}`,
            `--dbname=${database}`,
            `--file=${tmpFilename}`,
        ]
        
        const env: Record<string, string> = {}
        
        if (password) {
            env.PGPASSWORD = password
        }
            
        if (docker) {
            const dockerArgs = [] as string[]
        
            dockerArgs.push('run', '--rm')
        
            if (password) {
                dockerArgs.push('-e', `PGPASSWORD=${password}`)
            }
                
            dockerArgs.push('-v', `${path.dirname(tmpFilename)}:/dumps`)
            dockerArgs.push('postgres', 'pg_dump')
                
            args.forEach(a => {
                dockerArgs.push(a.replace(path.dirname(tmpFilename), '/dumps'))
            })
        
            await shell.command('docker', dockerArgs, { env })
        }

        if (!docker) {
            await shell.command('pg_dump', args, { env })
        }

        const id = cuid()
        const folder = directory ? path.join(directory, id) : id

        await driveInstance.upload(tmpFilename, path.join(folder, 'dump.sql'))

        // metadata
        await driveInstance.write(path.join(folder, 'metadata.json'), {
            ...metadata,
            plan_id: this.plan.id,
            strategy: PostgresDumpStrategy.id,
            created_at: format(new Date(), 'yyyy-MM-dd HH:mm'),
        })
        
        await fs.promises.unlink(tmpFilename)
    }
}