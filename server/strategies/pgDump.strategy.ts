import path from 'path'
import DumpGateway from '../gateways/dump.gateway.ts'
import shell from '#server/facades/shell.facade.ts'
import config from '#server/facades/config.facade.ts'

export default class PgDumpStrategy extends DumpGateway {
    public async dump(filename: string): Promise<void> {
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