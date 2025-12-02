import path from 'path'
import fs from 'fs'
import DumpGateway from '../gateways/dump.gateway.ts'
import shell from '#server/facades/shell.facade.ts'
import config from '#server/facades/config.facade.ts'
import { basePath } from '#server/utils/paths.ts'

export default class SQLiteDumpStrategy extends DumpGateway {
    public async dump(filename: string): Promise<void> {
        const database = basePath(this.config.filename as string)

        if (!fs.existsSync(database)) {
            throw new Error(`SQLite database file '${database}' does not exist`)
        }
        
        let docker = this.config.docker as boolean | undefined

        if (docker === undefined) {
            docker = config.get<boolean>('zbackups.sqlite.docker')
        }

        if (docker === undefined) {
            docker = config.get<boolean>('zbackups.docker.enabled', false)
        }

        const args = [
            database,
            `".backup '${filename}'"`,
        ]
        
        return shell.command('sqlite3', args)
    }
}