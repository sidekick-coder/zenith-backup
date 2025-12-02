import path from 'path'
import BaseStrategy from './base.strategy.ts'
import shell from '#server/facades/shell.facade.ts'
import config from '#server/facades/config.facade.ts'
import { $t } from '#shared/lang.ts'
import validator from '#shared/services/validator.service.ts'

export default class PgDumpStrategy extends BaseStrategy {
    public static id = 'pg_dump'
    public static label = 'Postgres'
    public static description = $t('This strategy uses pg_dump to backup a Postgres database.')
    public static schema = validator.create(v => v.object({
        host: v.string(),
        port: v.number(),
        database: v.string(),
        username: v.string(),
        password: v.string(),
    }))
            
    public static fields ={
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

    public async backup(): Promise<void> {
        const host = this.config.host as string | undefined
        const port = this.config.port as number | undefined
        const username = this.config.username as string
        const password = this.config.password as string | undefined
        const database = this.config.database as string
        
        let docker = this.config.docker as boolean | undefined

        if (docker === undefined) {
            docker = config.get<boolean>('zbackups.pg_dump.docker')
        }

        if (docker === undefined) {
            docker = config.get<boolean>('zbackups.docker.enabled', false)
        }

        const args = [
            `--host=${host || 'localhost'}`,
            `--port=${port || 5432}`,
            `--username=${username}`,
            `--dbname=${database}`,
            `--file=${filename}`,
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
                
            dockerArgs.push('-v', `${path.dirname(filename)}:/dumps`)
            dockerArgs.push('postgres', 'pg_dump')
                
            args.forEach(a => {
                dockerArgs.push(a.replace(path.dirname(filename), '/dumps'))
            })
        
            return shell.command('docker', dockerArgs, { env })
        }
        
        return shell.command('pg_dump', args, { env })
    }
}