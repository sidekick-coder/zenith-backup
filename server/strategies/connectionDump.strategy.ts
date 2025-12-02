import path from 'path'
import DumpGateway from '../gateways/dump.gateway.ts'
import PgDumpStrategy from './pgDump.strategy.ts'
import SQLiteDumpStrategy from './sqliteDump.strategy.ts'
import shell from '#server/facades/shell.facade.ts'
import config from '#server/facades/config.facade.ts'

export default class ConnectionDumpStrategy extends DumpGateway {
    public async dump(filename: string): Promise<void> {
        const name = this.config.name as string
        let docker = this.config.docker as boolean | undefined

        if (docker === undefined) {
            docker = config.get<boolean>('zbackups.pg_dump.docker')
        }

        if (docker === undefined) {
            docker = config.get<boolean>('zbackups.docker.enabled', false)
        }

        const connection = config.get(`database.connections.${name}`) as Record<string, any>

        let strategy: DumpGateway | null = null

        if (connection.driver === 'postgresql') {
            strategy = new PgDumpStrategy({
                host: connection.host,
                port: connection.port,
                username: connection.user,
                password: connection.password,
                database: connection.database,
                docker: docker,
            })
        }

        if (connection.driver === 'sqlite') {
            strategy = new SQLiteDumpStrategy({
                filename: connection.database,
            })
        }

        if (!strategy) {
            throw new Error(`No dump strategy available for connection driver '${connection.driver}'`)
        }

        await strategy.dump(filename)
        
    }
}