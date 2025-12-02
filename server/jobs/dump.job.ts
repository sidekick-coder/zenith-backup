import fs from 'fs'
import path from 'path'
import cp from 'child_process'
import { format } from 'date-fns'
import DumpPlan from '../entities/dumpPlan.entity.ts'
import Job from '#server/entities/job.entity.ts'
import { storagePath } from '#server/utils/paths.ts'
import { cuid } from '#server/utils/cuid.util.ts'
import db from '#server/facades/db.facade.ts'
import config from '#server/facades/config.facade.ts'

export function exec(bin: string, args: string[], env: Record<string, string> = {}) {
    return new Promise<void>((resolve, reject) => {
        const child = cp.spawn(bin, args, {
            env: {
                ...process.env,
                ...env
            },
            stdio: 'inherit'
        })

        child.on('error', (err) => {
            reject(err)
        })

        child.on('exit', (code) => {
            if (code === 0) {
                return resolve()
            }

            reject(new Error(`Process exited with code ${code}`))
        })
    })
}

export async function pgdump(filename: string, options: Record<string, any>) {
    const args = [
        `--host=${options.host || 'localhost'}`,
        `--port=${options.port || 5432}`,
        `--username=${options.username}`,
        `--dbname=${options.database}`,
        `--file=${filename}`,
    ]

    const env: Record<string, string> = {}

    if (options.password) {
        env.PGPASSWORD = options.password
    }

    
    if (options.docker) {
        const dockerArgs = [] as string[]

        dockerArgs.push('run', '--rm')

        if (options.password) {
            dockerArgs.push('-e', `PGPASSWORD=${options.password}`)
        }
        
        dockerArgs.push('-v', `${path.dirname(filename)}:/dumps`)
        dockerArgs.push('postgres', 'pg_dump')
        
        args.forEach(a => {
            dockerArgs.push(a.replace(path.dirname(filename), '/dumps'))
        })

        console.log('Executing pg_dump via Docker:', dockerArgs.join(' '))

        return exec('docker', dockerArgs, env)
    }

    return exec('pg_dump', args, env)
}

export default class DumpJob extends Job {
    public static async dump(id: string) {
        const plan = await DumpPlan.findOrFail(id)

        const folder = storagePath('dumps', cuid())
        const filename = path.join(folder, 'dump.sql')

        fs.mkdirSync(folder, { recursive: true })

        let generated = false

        if (db.driver === 'sqlite') {
            const connection = db.configConnectionName
            const databasePath = config.get<string>(`database.connections.${connection}.database`)

            if (!databasePath) {
                throw new Error('Could not determine database path for SQLite dump')
            }

            await fs.promises.copyFile(databasePath, filename)

            generated = true
        }

        if (db.driver === 'postgresql') {
            const name = db.configConnectionName
            const connection = config.get<Record<string, any>>(`database.connections.${name}`)

            await pgdump(filename, {
                host: connection.host,
                port: connection.port,
                username: connection.user,
                password: connection.password,
                database: connection.database,
                docker: true,
            })

            generated = true
        }

        if (!generated) {
            fs.rmSync(folder, {
                recursive: true,
                force: true 
            })
            throw new Error(`Database driver ${db.driver} is not supported for dumps`)
        }

        // metadata 
        const metadata = {
            plan_id: plan.id,
            created_at: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
            driver: db.driver,
            connection: db.configConnectionName,
        }

        await fs.promises.writeFile(path.join(folder, 'metadata.json'), JSON.stringify(metadata, null, 4), 'utf-8')

        return {
            folder,
            filename
        }
    }

    public async handle(data: any) {
        const id = data.dump_plan_id

        await DumpJob.dump(id)
    }
}