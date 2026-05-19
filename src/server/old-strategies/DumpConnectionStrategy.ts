import fs from 'fs'
import DumpPostgres from './dumpPostgres.strategy.ts'
import BaseStrategy from './base.strategy.ts'
import DumpSQLite from './dumpSQLite.strategy.ts'
import config from '#server/facades/config.facade.ts'
import { tmpPath } from '@sidekick-coder/zenith-kit/server'
import { composeWith } from '@sidekick-coder/zenith-kit/shared'
import { DockerStrategy } from '../mixins/dockerStrategy.mixin.ts'
import { DriveStrategy } from '../mixins/driveStrategy.mixin.ts'
import DumpService from '../services/dump.service.ts'
import type Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'

export default class DumpConnection extends composeWith(
    BaseStrategy,
    DockerStrategy(),
    DriveStrategy(),
) {
    public static id = 'dump_connection'
    public static label = 'Dump Connection'
    public static description = 'This strategy generate dumps from zenith database connections.'

    static {
        this.section('cleanup', {
            title: 'Cleanup',
            description: 'Cleanup settings for old backups.',
        })

        this.field('max_length', {
            component: 'text-field',
            section_id: 'cleanup',
            type: 'number',
            label: 'Max quantity of backups',
            description: 'Maximum quantity of backups to keep.',
        })

        this.field('ignore_triggers', {
            component: 'select',
            multiple: true,
            section_id: 'cleanup',
            label: 'Ignore Triggers',
            description: 'Select backup triggers to ignore during cleanup.',
            labelKey: 'label',
            valueKey: 'value',
            options: [
                { label: 'Manual', value: 'manual' },
                { label: 'Cron', value: 'cron' },
                { label: 'Event', value: 'event' },
            ],
        })
    }

    private get dumpService() {
        return new DumpService({
            plan: this.plan,
            drive_id: this.config.drive_id as string,
            directory: this.config.directory as string | undefined,
            max_length: this.config.max_length as number | undefined,
            ignore_triggers: this.config.ignore_triggers as string[] | undefined,
            docker_image: this.dockerImage,
            docker_extra_flags: this.config.docker_extra_flags as string | undefined,
        })
    }

    public async list(): Promise<Snapshot[]> {
        return this.dumpService.list()
    }

    public async destroy(snapshot: Snapshot): Promise<void> {
        return this.dumpService.destroy(snapshot)
    }

    public async backup(metadata: Record<string, any>): Promise<void> {
        const name = this.config.name as string
        const connection = config.get(`database.connections.${name}`) as Record<string, any>
        const dialect = connection.dialect

        if (dialect !== 'postgresql' && dialect !== 'sqlite') {
            throw new Error(`Unsupported database dialect: ${dialect}`)
        }

        const tmpFilename = tmpPath(`backup_${Date.now()}.sql`)

        if (dialect === 'postgresql') {
            await DumpPostgres.dump({
                filename: tmpFilename,
                host: connection.host,
                port: connection.port,
                username: connection.user,
                password: connection.password,
                database: connection.database,
                docker_image: this.dockerImage,
                docker_extra_flags: this.config.docker_extra_flags as string | undefined,
            })
        }

        if (dialect === 'sqlite') {
            await DumpSQLite.dump({
                filename: tmpFilename,
                database: connection.database,
                docker_image: this.dockerImage,
                docker_extra_flags: this.config.docker_extra_flags as string | undefined,
            })
        }

        await this.dumpService.create(tmpFilename, metadata)

        await fs.promises.unlink(tmpFilename)

        await this.dumpService.cleanup()
    }

    public async restore(snapshot: Snapshot): Promise<void> {
        const name = this.config.name as string
        const connection = config.get(`database.connections.${name}`) as Record<string, any>
        const directory = this.config.directory as string | undefined

        const dumpPath = directory
            ? `${directory}/${snapshot.id}/dump.sql`
            : `${snapshot.id}/dump.sql`

        if (!(await this.drive.exists(dumpPath))) {
            throw new Error(`Dump file not found in snapshot ${snapshot.id}`)
        }

        const tmpFilename = BaseStrategy.makeTmpPath(`restore_${Date.now()}.sql`)

        await this.drive.download(dumpPath, tmpFilename)

        if (connection.dialect === 'postgresql') {
            await DumpPostgres.restoreDump({
                filename: tmpFilename,
                host: connection.host,
                port: connection.port,
                username: connection.user,
                password: connection.password,
                database: connection.database,
                docker_image: this.dockerImage,
                docker_extra_flags: this.config.docker_extra_flags as string | undefined,
            })
        }

        if (connection.dialect === 'sqlite') {
            await DumpSQLite.restoreDump({
                filename: tmpFilename,
                database: connection.database,
                docker_image: this.dockerImage,
                docker_extra_flags: this.config.docker_extra_flags as string | undefined,
            })
        }

        await fs.promises.unlink(tmpFilename)
    }
}
