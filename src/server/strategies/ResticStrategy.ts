import { camelCase, upperFirst, lowerCase } from 'lodash-es'
import { format } from 'date-fns'
import { shell } from '@sidekick-coder/zenith-kit/server'
import BaseStrategy, { type BaseStrategyOptions } from './BaseStrategy.ts'

export interface ResticSnapshot {
    id: string
    plan_id: string
    created_at: string
    data: Record<string, any>
    metadata: Record<string, any>
}

export default class ResticStrategy extends BaseStrategy {
    public static id = 'restic'
    public static label = 'Restic'
    public static description = 'Backup folders and files to a Restic repository'

    public docker_image: string

    constructor(options: BaseStrategyOptions) {
        super(options)

        this.docker_image = (this.config.docker_image as string) || 'restic/restic:latest'
    }

    public get repository(): string {
        return this.config.restic_repository as string
    }

    public get password(): string {
        return this.config.restic_password as string
    }

    public get sourcePaths(): string[] {
        return this.config.source_paths as string[] || []
    }

    private get resticEnv() {
        return {
            RESTIC_REPOSITORY: this.repository,
            RESTIC_PASSWORD: this.password,
        }
    }

    private buildDockerArgs(): string[] {
        const uid = process.getuid ? process.getuid() : '1000'

        const args = [
            'run', '--rm',
            '-e', `RESTIC_REPOSITORY=${this.repository}`,
            '-e', `RESTIC_PASSWORD=${this.password}`,
            '-u', `${uid}:${uid}`,
        ]

        const repoIsRemote = this.repository.startsWith('s3:') || this.repository.startsWith('azure:') || this.repository.startsWith('gs:')

        if (!repoIsRemote) {
            args.push('-v', `${this.repository}:${this.repository}:rw`)
        }

        for (const p of this.sourcePaths) {
            args.push('-v', `${p}:${p}:rw`)
        }

        args.push(this.docker_image)

        return args
    }

    public async backup(metadata: Record<string, any> = {}): Promise<void> {
        const sourcePaths = this.sourcePaths
        const backupFlags = this.config.backup_flags as string | undefined

        if (!this.repository) {
            throw new Error('Repository path is required')
        }

        if (!this.password) {
            throw new Error('Repository password is required')
        }

        if (!sourcePaths || sourcePaths.length === 0) {
            throw new Error('At least one backup path is required')
        }

        const backupArgs = ['backup']

        if (backupFlags) {
            backupFlags.split(/[\s\r\n]+/).forEach((flag: string) => {
                if (flag) backupArgs.push(flag)
            })
        }

        backupArgs.push(...sourcePaths)

        for (const [key, value] of Object.entries(metadata)) {
            if (value === null || value === undefined) continue

            if (key === 'description') {
                backupArgs.push('--tag', `description:${camelCase(value)}`)
                continue
            }

            backupArgs.push('--tag', `${key}:${value}`)
        }

        const dockerArgs = this.buildDockerArgs()

        await shell.command('docker', [...dockerArgs, ...backupArgs], { env: this.resticEnv })

        await this.cleanup()
    }

    public async cleanup(): Promise<void> {
        const forgetEnabled = this.config.forget_enabled as boolean | undefined
        const forgetFlags = this.config.forget_flags as string | undefined

        if (!forgetEnabled || !forgetFlags) {
            return
        }

        const forgetArgs = ['forget', ...forgetFlags.split(/[\s\r\n]+/).filter(Boolean), '--prune']

        const dockerArgs = this.buildDockerArgs()

        await shell.command('docker', [...dockerArgs, ...forgetArgs], { env: { ...process.env, ...this.resticEnv } })
    }

    public async list(): Promise<ResticSnapshot[]> {
        if (!this.repository) {
            throw new Error('Repository path is required')
        }

        if (!this.password) {
            throw new Error('Repository password is required')
        }

        const snapshotArgs = ['snapshots', '--json']
        const dockerArgs = this.buildDockerArgs()
        const env = { ...process.env, ...this.resticEnv }

        const output = await shell.executeCommandWithOutput('docker', [...dockerArgs, ...snapshotArgs], { env })

        const resticSnapshots = JSON.parse(output)
        const snapshots: ResticSnapshot[] = []

        for (const resticSnapshot of resticSnapshots) {
            const tags: Record<string, string> = {}

            if (resticSnapshot.tags) {
                for (const tag of resticSnapshot.tags) {
                    const [key, value] = tag.split(':')

                    if (key === 'description') {
                        tags.description = upperFirst(lowerCase(value))
                        continue
                    }

                    if (key && value) {
                        tags[key] = value
                    }
                }
            }

            snapshots.push({
                id: resticSnapshot.short_id,
                plan_id: this.plan.id,
                data: resticSnapshot,
                created_at: format(new Date(resticSnapshot.time), 'yyyy-MM-dd HH:mm:ss'),
                metadata: {
                    ...tags,
                    size: resticSnapshot.summary?.total_bytes_processed || 0,
                },
            })
        }

        return snapshots
    }

    public async destroy(snapshot: ResticSnapshot): Promise<void> {
        if (!this.repository) {
            throw new Error('Repository path is required')
        }

        if (!this.password) {
            throw new Error('Repository password is required')
        }

        const forgetArgs = ['forget', snapshot.id, '--prune']
        const dockerArgs = this.buildDockerArgs()
        const env = { ...process.env, ...this.resticEnv }

        await shell.command('docker', [...dockerArgs, ...forgetArgs], { env })
    }

    public async restore(snapshot: ResticSnapshot): Promise<void> {
        const paths = this.sourcePaths

        if (!this.repository) {
            throw new Error('Repository path is required')
        }

        if (!this.password) {
            throw new Error('Repository password is required')
        }

        if (!paths || paths.length === 0) {
            throw new Error('At least one backup path is required')
        }

        const env = { ...process.env, ...this.resticEnv }

        for (const p of paths) {
            const restoreArgs = ['restore', `${snapshot.data?.id}:${p}`, '--target', p]

            const dockerArgs = this.buildDockerArgs()

            await shell.command('docker', [...dockerArgs, ...restoreArgs], { env })
        }
    }

    public async execute(metadata: Record<string, any> = {}): Promise<void> {
        await this.backup(metadata)
    }
}
