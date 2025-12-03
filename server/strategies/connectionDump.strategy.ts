import path from 'path'
import fs from 'fs'
import { format } from 'date-fns'
import BaseDump from './baseDump.strategy.ts'
import PostgresDump from './postgresDump.strategy.ts'
import config from '#server/facades/config.facade.ts'
import { $t } from '#shared/lang.ts'
import { tmpPath } from '#server/utils/paths.ts'
import { cuid } from '#server/utils/cuid.util.ts'

export default class ConnectionDumpStrategy extends BaseDump {
    public static id = 'connection_dump'
    public static label = $t('Connection Dump')
    public static description = $t('This strategy uses the appropriate dump strategy based on the connection driver.')
    public static fields_sections = BaseDump.sections(items => {
        items.splice(2, 0, {
            title: $t('Database'),
            description: $t('Settings related to the Postgres database connection.'),
            fields: {
                name: { 
                    component: 'select',
                    label: $t('Connection Name'),
                    fetch: '/api/database-connections',
                    valueKey: 'id',
                    labelKey: 'name',
                },
            }
        })

        return items
    })

    public async backup(metadata: Record<string, any>): Promise<void> {
        const name = this.config.name as string
        const directory = this.config.directory as string | undefined

        let docker = this.config.docker as boolean | undefined

        if (docker === undefined) {
            docker = config.get<boolean>('zbackups.connection.docker')
        }

        if (docker === undefined) {
            docker = config.get<boolean>('zbackups.docker.enabled', false)
        }

        const connection = config.get(`database.connections.${name}`) as Record<string, any>

        const tmpFilename = tmpPath(`backup_${Date.now()}.sql`)

        if (connection.driver === 'postgresql') {
            await PostgresDump.dump({
                filename: tmpFilename,
                host: connection.host,
                port: connection.port,
                username: connection.user,
                password: connection.password,
                database: connection.database,
                docker: docker,
            })
        }

        if (connection.driver === 'sqlite') {
            // Use SQLite dump strategy
        }

        if (!fs.existsSync(tmpFilename)) {
            throw new Error('Dump file was not created')
        }

        const stats = await fs.promises.stat(tmpFilename)
        
        const id = cuid()
        const folder = directory ? path.join(directory, id) : id
        
        await this.drive.upload(tmpFilename, path.join(folder, 'dump.sql'))
        
        // metadata
        await this.drive.write(path.join(folder, 'metadata.json'), {
            ...metadata,
            plan_id: this.plan.id,
            size: stats.size,
            created_at: format(new Date(), 'yyyy-MM-dd HH:mm'),
        })
                
        await fs.promises.unlink(tmpFilename)
        
        await this.cleanup()
    }
}