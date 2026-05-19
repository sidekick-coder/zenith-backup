import os from 'os'
import path from 'path'
import fs from 'fs'
import { cuid, shell, drive, logger } from '@sidekick-coder/zenith-kit/server'
import { tryCatch } from '@sidekick-coder/zenith-kit/shared'

export interface DumpSnapshot {
    id: string
    created_at: string
    size: number
    metadata: Record<string, unknown>
}

interface DumpServiceOptions {
    /** Drive options */
    drive_id: string
    drive_prefix?: string

    /** Retention options */
    retention_max_items?: number

    /** Docker image to use for running backup and restore commands */
    docker_image: string
    docker_volumes?: string[]
    docker_env?: Record<string, string>

    /** Shell command string; use {output} as the dump file path inside the container */
    backup_command: string
    
    /** Shell command string; use {input} as the dump file path inside the container */
    restore_command: string
    /** Additional docker -v mounts, e.g. ['/host/path:/container/path'] */
}

export default class DumpService {
    private static readonly VOLUME = 'zenith-backup-volume'
    private static readonly CONTAINER_DUMP_PATH = '/dumps/dump'

    public drive_id: string
    public drive_prefix?: string
    public retention_max_items?: number
    public docker_image: string
    /** Shell command string; use {output} as the dump file path inside the container */
    public backup_command: string
    /** Shell command string; use {input} as the dump file path inside the container */
    public restore_command: string
    /** Additional docker -v mounts, e.g. ['/host/path:/container/path'] */
    public docker_volumes?: string[]
    public docker_env?: Record<string, string>

    constructor(options: DumpServiceOptions) {
        this.drive_id = options.drive_id
        this.drive_prefix = options.drive_prefix
        this.retention_max_items = options.retention_max_items
        this.docker_image = options.docker_image
        this.backup_command = options.backup_command
        this.restore_command = options.restore_command
        this.docker_volumes = options.docker_volumes
        this.docker_env = options.docker_env
    }

    private get drive() {
        return drive.use(this.drive_id)
    }

    private async ensureVolume(): Promise<void> {
        await shell.command('docker', ['volume', 'create', DumpService.VOLUME], { shell: false })
    }

    private async copyVolumeToHost(hostFile: string): Promise<void> {
        const uid = process.getuid ? process.getuid() : 1000
        const hostDir = path.dirname(hostFile)

        await shell.command('docker', [
            'run', '--rm',
            '-u', `${uid}:${uid}`,
            '-v', `${DumpService.VOLUME}:/data:rw`,
            '-v', `${hostDir}:/backup:rw`,
            'alpine', 'cp',
            '/data/dump',
            `/backup/${path.basename(hostFile)}`,
        ], { shell: false })
    }

    private async copyHostToVolume(hostFile: string): Promise<void> {
        const uid = process.getuid ? process.getuid() : 1000
        const hostDir = path.dirname(hostFile)

        await shell.command('docker', [
            'run', '--rm',
            '-u', `${uid}:${uid}`,
            '-v', `${hostDir}:/backup:rw`,
            '-v', `${DumpService.VOLUME}:/data:rw`,
            'alpine', 'cp',
            `/backup/${path.basename(hostFile)}`,
            '/data/dump',
        ], { shell: false })
    }

    private buildDockerArgs(extraVolumes: string[] = []): string[] {
        const args = ['run', '--rm', '-v', `${DumpService.VOLUME}:/dumps`]

        for (const vol of extraVolumes) {
            args.push('-v', vol)
        }

        for (const key of Object.keys(this.docker_env || {})) {
            args.push('-e', key)
        }

        args.push(this.docker_image)

        return args
    }

    public async backup(metadata: Record<string, any> = {}): Promise<DumpSnapshot> {
        const id = cuid()
        const tmpFile = path.join(os.tmpdir(), `dump_${id}`)
        const folder = this.drive_prefix ? path.join(this.drive_prefix, id) : id

        await this.ensureVolume()

        const command = this.backup_command.replace('{output}', DumpService.CONTAINER_DUMP_PATH)
        const dockerArgs = this.buildDockerArgs(this.docker_volumes)
        dockerArgs.push('sh', '-c', command)

        await shell.command('docker', dockerArgs, { env: this.docker_env, shell: false })

        await this.copyVolumeToHost(tmpFile)

        if (!fs.existsSync(tmpFile)) {
            throw new Error('Backup command did not produce an output file')
        }

        const stats = await fs.promises.stat(tmpFile)

        const snapshotMetadata = {
            ...metadata,
            size: stats.size,
            created_at: new Date().toISOString(),
        }

        await this.drive.upload(tmpFile, path.join(folder, 'dump'))
        await this.drive.write(path.join(folder, 'metadata.json'), snapshotMetadata)

        await fs.promises.unlink(tmpFile)

        return {
            id,
            created_at: snapshotMetadata.created_at,
            size: stats.size,
            metadata: snapshotMetadata,
        } as DumpSnapshot
    }

    public async restore(snapshot: DumpSnapshot): Promise<void> {
        const folder = this.drive_prefix
            ? path.join(this.drive_prefix, snapshot.id)
            : snapshot.id

        const tmpFile = path.join(os.tmpdir(), `restore_${snapshot.id}`)

        await this.drive.download(path.join(folder, 'dump'), tmpFile)

        await this.ensureVolume()
        await this.copyHostToVolume(tmpFile)

        const command = this.restore_command.replace('{input}', DumpService.CONTAINER_DUMP_PATH)
        const dockerArgs = this.buildDockerArgs(this.docker_volumes)
        dockerArgs.push('sh', '-c', command)

        await shell.command('docker', dockerArgs, { env: this.docker_env, shell: false })

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
            if (!(await this.drive.exists(path.join(entry.path, 'dump')))) {
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
}
