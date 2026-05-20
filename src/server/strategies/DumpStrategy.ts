import os from 'os'
import path from 'path'
import fs from 'fs'
import { cuid, shell, drive, logger } from '@sidekick-coder/zenith-kit/server'
import { tryCatch } from '@sidekick-coder/zenith-kit/shared'
import BaseStrategy, { type BaseStrategyOptions } from './BaseStrategy.ts'
import { BaseException } from '@sidekick-coder/zenith-kit/shared'

export interface DumpSnapshot {
    id: string
    created_at: string
    size: number
    metadata: Record<string, unknown>
}

export default class DumpStrategy extends BaseStrategy {
    public static id = 'dump'
    public static label = 'Dump Strategy'
    public static description = 'This strategy generates dumps by running a Docker container with the specified backup command, and stores them in a drive.'

    private static readonly VOLUME = 'zenith-backup-volume'

    /** Drive options */
    public drive_id: string
    public drive_prefix?: string

    /** Retention options */
    public retention_max_items?: number

    /** Docker options */
    public docker_image: string
    public docker_env?: Record<string, string>
    public docker_args?: string[]

    /** Backup shell command string; use {output} as the dump file path inside the container */
    public backup_command: string
    public backup_filename = 'database.dump'

    /** Restore shell command string; use {input} as the dump file path inside the container */
    public restore_command: string

    constructor(options: BaseStrategyOptions) {
        super(options)

        const plan = options.plan
        const config = plan.config || {}

        this.drive_id = config.drive_id
        this.drive_prefix = config.drive_prefix

        this.retention_max_items = config.retention_max_items

        this.docker_image = config.docker_image
        this.docker_args = config.docker_args

        this.backup_command = config.backup_command
        this.backup_filename = config.backup_filename || this.backup_filename

        this.restore_command = config.restore_command
    }

    private get drive() {
        return drive.use(this.drive_id)
    }

    private async ensureVolume(): Promise<void> {
        await shell.command('docker', ['volume', 'create', DumpStrategy.VOLUME], { shell: false })
    }

    public async copyFromVolumeToHost(source: string, target: string): Promise<void> {
        const uid = process.getuid ? process.getuid() : 1000
        const hostDir = path.dirname(target)

        await shell.command('docker', [
            'run', '--rm',
            '-u', `${uid}:${uid}`,
            '-v', `${DumpStrategy.VOLUME}:/${DumpStrategy.VOLUME}:rw`,
            '-v', `${hostDir}:/hostDir:rw`,
            'alpine', 'cp',
            path.join('/', DumpStrategy.VOLUME, path.basename(source)),
            path.join('/hostDir', path.basename(target)),
        ])
    }

    private async copyFromHostToVolume(source: string, target: string): Promise<void> {
        const uid = process.getuid ? process.getuid() : 1000
        const hostDir = path.dirname(source)

        await shell.command('docker', [
            'run', '--rm',
            // '-u', `${uid}:${uid}`,
            '-v', `${DumpStrategy.VOLUME}:/${DumpStrategy.VOLUME}:rw`,
            '-v', `${hostDir}:/hostDir:rw`,
            'alpine', 'cp',
            path.join('/hostDir', path.basename(source)),
            path.join('/', DumpStrategy.VOLUME, path.basename(target)),
        ])
    }

    private buildDockerArgs(): string[] {
        const args = ['run', '--rm', '-v', `${DumpStrategy.VOLUME}:/${DumpStrategy.VOLUME}:rw`]

        args.push(...this.docker_args || [])

        for (const key of Object.keys(this.docker_env || {})) {
            args.push('-e', key)
        }

        args.push(this.docker_image)

        return args
    }

    public async backup(metadata: Record<string, any> = {}): Promise<DumpSnapshot> {
        if (!this.backup_command || this.backup_command.trim() === '') {
            throw new BaseException('Backup command is not configured')
        }

        const id = cuid()
        const filename = `dump_${id}`
        const tmpFile = path.join(os.tmpdir(), filename)
        const folder = this.drive_prefix ? path.join(this.drive_prefix, id) : id
        const output = path.join('/', DumpStrategy.VOLUME, filename)

        await this.ensureVolume()

        // replace all {{output}} placeholders in the backup_command with the actual file path inside the container
        const command = this.backup_command.replace(/{{output}}/g, output)

        const dockerArgs = this.buildDockerArgs()

        dockerArgs.push(command)


        await shell.command('docker', dockerArgs, {
            env: this.docker_env,
        })

        await this.copyFromVolumeToHost(filename, tmpFile)

        if (!fs.existsSync(tmpFile)) {
            throw new BaseException('Backup command did not produce an output file')
        }

        const stats = await fs.promises.stat(tmpFile)

        const snapshotMetadata = {
            ...metadata,
            size: stats.size,
            created_at: new Date().toISOString(),
        }

        await this.drive.upload(tmpFile, path.join(folder, this.backup_filename))
        await this.drive.write(path.join(folder, 'metadata.json'), snapshotMetadata)

        await fs.promises.unlink(tmpFile)

        const snapshot: DumpSnapshot = {
            id,
            created_at: snapshotMetadata.created_at,
            size: stats.size,
            metadata: snapshotMetadata,
        }

        return snapshot
    }

    public async restore(snapshot: DumpSnapshot): Promise<void> {
        if (!this.restore_command || this.restore_command.trim() === '') {
            throw new BaseException('Restore command is not configured')
        }

        const folder = this.drive_prefix
            ? path.join(this.drive_prefix, snapshot.id)
            : snapshot.id

        const filename  = `restore_${snapshot.id}`
        const tmpFile = path.join(os.tmpdir(), filename)

        await this.drive.download(path.join(folder, this.backup_filename), tmpFile)

        await this.ensureVolume()
        await this.copyFromHostToVolume(tmpFile, filename)

        const command = this.restore_command.replace(/{{input}}/g, path.join('/', DumpStrategy.VOLUME, filename))

        const dockerArgs = this.buildDockerArgs()

        dockerArgs.push(command)

        await shell.command('docker', dockerArgs, { env: this.docker_env  })

        await fs.promises.unlink(tmpFile)
    }

    public async list(): Promise<DumpSnapshot[]> {
        const folder = this.drive_prefix

        if (!folder || folder.trim() === '') {
            logger.warn('No drive prefix configured. Returning empty snapshot list.')
            return []
        }

        const [error, entries] = await tryCatch(() => this.drive.list(folder))

        if (error) {
            logger.error(`Failed to list drive entries in folder "${folder}": ${error}`)
            return []
        }

        const snapshots = [] as DumpSnapshot[]

        for (const entry of entries) {
            if (!(await this.drive.exists(path.join(entry.path, this.backup_filename)))) {
                this.logger.warn(`Skipping entry "${entry.path}" because it does not contain a dump file.`)
                continue
            }

            if (!(await this.drive.exists(path.join(entry.path, 'metadata.json')))) {
                continue
            }

            const uint8 = await this.drive.read(path.join(entry.path, 'metadata.json'))
            const text = new TextDecoder().decode(uint8)
            const metadata = JSON.parse(text) as Record<string, unknown>

            snapshots.push({
                id: path.basename(entry.path),
                created_at: metadata.created_at as string,
                size: metadata.size as number,
                metadata,
            })
        }

        snapshots.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

        return snapshots
    }

    public async destroy(snapshot: DumpSnapshot): Promise<void> {
        const folder = this.drive_prefix
            ? path.join(this.drive_prefix, snapshot.id)
            : snapshot.id

        await this.drive.delete(folder)
    }

    public async cleanup(): Promise<void> {
        if (!this.retention_max_items || this.retention_max_items <= 0) {
            return
        }

        const snapshots = await this.list()

        snapshots.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())

        if (snapshots.length <= this.retention_max_items) {
            return
        }

        const toDelete = snapshots.slice(0, snapshots.length - this.retention_max_items)

        for (const snapshot of toDelete) {
            await this.destroy(snapshot)
        }
    }

    public async execute(metadata: Record<string, unknown>): Promise<void> {
        await this.backup(metadata)
    }
}

