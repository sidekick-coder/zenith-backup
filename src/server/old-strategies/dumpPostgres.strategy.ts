import { DockerStrategy } from '../mixins/dockerStrategy.mixin.ts'
import { DriveStrategy } from '../mixins/driveStrategy.mixin.ts'
import BaseStrategy from './base.strategy.ts'
import { composeWith } from '#shared/utils/compose.ts'
import DumpService from '../services/dump.service.ts'
import type Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'

export default class DumpPostgres extends composeWith(
    BaseStrategy,
    DockerStrategy({
        defaultImage: 'postgres:latest',
    }),
    DriveStrategy(),
) {
    public static id = 'dump_postgres'
    public static label = 'Dump Postgres'
    public static description = 'This strategy uses pg_dump to backup a Postgres database.'

    static {
        this.section('database', {
            title: 'Database',
            description: 'Settings related to the Postgres database connection.',
        })

        this.field('host', {
            component: 'text-field',
            section_id: 'database',
            label: 'Host',
        })

        this.field('port', {
            component: 'text-field',
            section_id: 'database',
            type: 'number',
            label: 'Port',
        })

        this.field('database', {
            component: 'text-field',
            section_id: 'database',
            label: 'Database',
        })

        this.field('username', {
            component: 'text-field',
            section_id: 'database',
            label: 'Username',
        })

        this.field('password', {
            component: 'text-field',
            section_id: 'database',
            label: 'Password',
            type: 'password',
        })
    }

    private get dumpService() {
        const host = this.config.host as string | undefined
        const port = this.config.port as number | undefined
        const username = this.config.username as string
        const password = this.config.password as string | undefined
        const database = this.config.database as string

        const env: Record<string, string> = {}
        if (password) env.PGPASSWORD = password

        return new DumpService({
            drive_id: this.config.drive_id as string,
            directory: this.config.directory as string | undefined,
            max_length: this.config.max_length as number | undefined,
            docker_image: this.dockerImage || 'postgres:latest',
            env,
            backup_command: `pg_dump --host=${host || 'localhost'} --port=${port || 5432} --username=${username} --dbname=${database} --file={output} --clean`,
            restore_command: `psql --host=${host || 'localhost'} --port=${port || 5432} --username=${username} --dbname=${database} -f {input}`,
        })
    }

    public async list(): Promise<Snapshot[]> {
        return this.dumpService.list(this.plan.id)
    }

    public async destroy(snapshot: Snapshot): Promise<void> {
        return this.dumpService.destroy(snapshot)
    }

    public async backup(metadata: Record<string, unknown>): Promise<void> {
        const service = this.dumpService

        await service.backup({ ...metadata, plan_id: this.plan.id, strategy: DumpPostgres.id })
        await service.cleanup(this.plan.id)
    }

    public async restore(snapshot: Snapshot): Promise<void> {
        await this.dumpService.restore(snapshot)
    }
}
