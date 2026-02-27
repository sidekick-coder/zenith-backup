import path from 'path'
import fs from 'fs'
import { DumpStrategy } from '../mixins/dumpStrategy.mixin.ts'
import { DockerStrategy } from '../mixins/dockerStrategy.mixin.ts'
import DumpPostgres from './dumpPostgres.strategy.ts'
import BaseStrategy from './base.strategy.ts'
import DumpSQLite from './dumpSQLite.strategy.ts'
import config from '#server/facades/config.facade.ts'

import { tmpPath } from '#server/utils/paths.ts'
import { cuid } from '#server/utils/cuid.util.ts'
import { composeWith } from '#shared/utils/compose.ts'
import type Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'

export default class DumpConnection extends composeWith(
    BaseStrategy,
    DockerStrategy(),
    DumpStrategy()
) {
    public static id = 'dump_connection'
    public static label = $t('Dump Connection')
    public static description = $t('This strategy generate dumps from zenith database connections.')

    static {
        this.section('database', {
            title: $t('Database'),
            description: $t('Settings related to the Postgres database connection.'),
        })

        this.field('name', {
            component: 'select',
            section_id: 'database',
            label: $t('Connection Name'),
            fetch: '/api/database-connections',
            valueKey: 'id',
            labelKey: 'name',
        })
    }

    public async backup(metadata: Record<string, any>): Promise<void> {
        const name = this.config.name as string
        const directory = this.config.directory as string | undefined

        const connection = config.get(`database.connections.${name}`) as Record<string, any>

        const tmpFilename = tmpPath(`backup_${Date.now()}.sql`)

        if (connection.driver === 'postgresql') {
            await DumpPostgres.dump({
                filename: tmpFilename,
                host: connection.host,
                port: connection.port,
                username: connection.user,
                password: connection.password,
                database: connection.database,
                docker_enabled: this.useDocker,
                docker_image: this.dockerImage || '',
                docker_extra_flags: this.config.docker_extra_flags as string | undefined,
            })
        }

        if (connection.driver === 'sqlite') {
            // Use SQLite dump strategy
            await DumpSQLite.dump({
                filename: tmpFilename,
                database: connection.database,
                docker_enabled: this.useDocker,
                docker_image: this.dockerImage || '',
                docker_extra_flags: this.config.docker_extra_flags as string | undefined,
            })
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
            created_at: new Date().toISOString(),
        })
                
        await fs.promises.unlink(tmpFilename)
        
        await this.cleanup()
    }

    public async restore(snapshot: Snapshot): Promise<void> {
        const name = this.config.name as string
        const directory = this.config.directory as string | undefined

        const connection = config.get(`database.connections.${name}`) as Record<string, any>

        const folder = directory ? path.join(directory, snapshot.id) : snapshot.id
        const dumpPath = path.join(folder, 'dump.sql')

        if (!(await this.drive.exists(dumpPath))) {
            throw new Error(`Dump file not found in snapshot ${snapshot.id}`)
        }

        const tmpFilename = tmpPath(`restore_${Date.now()}.sql`)

        await this.drive.download(dumpPath, tmpFilename)

        if (connection.driver === 'postgresql') {
            await DumpPostgres.restoreDump({
                filename: tmpFilename,
                host: connection.host,
                port: connection.port,
                username: connection.user,
                password: connection.password,
                database: connection.database,

                docker_enabled: this.useDocker,
                docker_image: this.dockerImage,
                docker_extra_flags: this.config.docker_extra_flags as string | undefined,
            })
        }

        if (connection.driver === 'sqlite') {
            await DumpSQLite.restoreDump({
                filename: tmpFilename,
                database: connection.database,
                
                docker_enabled: this.useDocker,
                docker_image: this.dockerImage,
                docker_extra_flags: this.config.docker_extra_flags as string | undefined,
            })
        }

        await fs.promises.unlink(tmpFilename)
    }
}