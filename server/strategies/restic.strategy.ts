import { camelCase, upperFirst, lowerCase  } from 'lodash-es'
import { format } from 'date-fns'
import { DockerStrategy } from '../mixins/dockerStrategy.mixin.ts'
import BaseStrategy from './base.strategy.ts'
import shell from '#server/facades/shell.facade.ts'
import { $t } from '#shared/lang.ts'
import { composeWith } from '#shared/utils/compose.ts'
import Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'

export default class ResticStrategy extends composeWith(
    BaseStrategy,
    DockerStrategy({ defaultImage: 'restic/restic:latest' }),
) {
    public static id = 'restic-folder'
    public static label = $t('Restic Local Folder Backup')
    public static description = $t('Backup folders from local filesystem to a Restic repository')

    static {
        this.section('repository', {
            title: $t('Repository Configuration'),
            description: $t('Settings related to the Restic repository where backups will be stored.'),
        })

        this.field('repository', {
            component: 'text-field',
            section_id: 'repository',
            label: $t('Repository'),
            description: $t('File path or URL to the Restic repository.'),
        })

        this.field('password', {
            component: 'text-field',
            type: 'password',
            section_id: 'repository',
            label: $t('Repository Password'),
            description: $t('Password for encrypting/decrypting the Restic repository.'),
        })

        this.section('targets', {
            title:  $t('Backup Targets'),
            description: $t('Settings related to the files and directories to be backed up.'),
        })

        this.field('paths', {
            component: 'string-list-input',
            section_id: 'targets',
            label: $t('Paths'),
            description: $t('List of file and directory paths to include in the backup.'),
        })

        this.section('cleanup', {
            title: $t('Cleanup'),
            description: $t('Settings related to automatic cleanup of old snapshots.'),
        })

        this.field('forget_enabled', {
            component: 'select',
            section_id: 'cleanup',
            label: $t('Enable Forget'),
            description: $t('Enable automatic cleanup of old snapshots after backup.'),
            clearable: true,
            options: [
                { 
                    value: true, 
                    label: $t('Yes') 
                },
                { 
                    value: false, 
                    label: $t('No') 
                }
            ],
        })

        this.field('forget_flags', {
            component: 'textarea',
            section_id: 'cleanup',
            label: $t('Forget Flags'),
            description: $t('Restic forget command flags (e.g., --keep-daily 7 --keep-weekly 4).'),
        })
    }

    public async backup(metadata: Record<string, any>): Promise<void> {
        const repository = this.config.repository as string
        const password = this.config.password as string
        const paths = this.config.paths as string[] | undefined

        if (!repository) {
            throw new Error('Repository path is required')
        }

        if (!password) {
            throw new Error('Repository password is required')
        }

        if (!paths || paths.length === 0) {
            throw new Error('At least one backup path is required')
        }

        const env = {
            ...process.env,
            RESTIC_REPOSITORY: repository,
            RESTIC_PASSWORD: password,
        }

        // Run backup
        const backupArgs = ['backup', ...paths]

        // Add metadata as tags
        if (metadata && Object.keys(metadata).length > 0) {
            for (const [key, value] of Object.entries(metadata)) {

                if (key === 'description') {
                    backupArgs.push('--tag', `description:${camelCase(value)}`)
                    continue
                }

                if (value !== null && value !== undefined) {
                    backupArgs.push('--tag', `${key}:${value}`)
                }
            }
        }
        
        if (this.useDocker && this.dockerImage) {
            const dockerBackupArgs = [
                'run',
                '--rm',
                '-e',
                `RESTIC_REPOSITORY=${repository}`,
                '-e',
                `RESTIC_PASSWORD=${password}`,
                '-v',
                `${repository}:${repository}`
            ]

            // Mount each path for backup
            paths.forEach(path => {
                dockerBackupArgs.push('-v')
                dockerBackupArgs.push(`${path}:${path}:ro`)
            })

            dockerBackupArgs.push(this.dockerImage, 'restic', ...backupArgs)

            return shell.command('docker', dockerBackupArgs, { env })
        }

        await shell.command('restic', backupArgs, { env })

        await this.cleanup()
    }

    public async cleanup(): Promise<void> {
        const repository = this.config.repository as string
        const password = this.config.password as string
        const forgetEnabled = this.config.forget_enabled as boolean | undefined
        const forgetFlags = this.config.forget_flags as string | undefined

        if (!forgetEnabled || !forgetFlags) {
            return
        }

        const env = {
            ...process.env,
            RESTIC_REPOSITORY: repository,
            RESTIC_PASSWORD: password,
        }

        const forgetArgs = ['forget', ...forgetFlags.split(' ').filter(Boolean), '--prune']
        
        if (this.useDocker && this.dockerImage) {
            const dockerForgetArgs = [
                'run',
                '--rm',
                '-e',
                `RESTIC_REPOSITORY=${repository}`,
                '-e',
                `RESTIC_PASSWORD=${password}`,
                '-v',
                `${repository}:${repository}`,
                this.dockerImage,
                'restic',
                ...forgetArgs
            ]

            await shell.command('docker', dockerForgetArgs, { env })
        } 

        await shell.command('restic', forgetArgs, { env })
    }

    public async list(): Promise<Snapshot[]> {
        const repository = this.config.repository as string
        const password = this.config.password as string

        if (!repository) {
            throw new Error('Repository path is required')
        }

        if (!password) {
            throw new Error('Repository password is required')
        }

        const env = {
            ...process.env,
            RESTIC_REPOSITORY: repository,
            RESTIC_PASSWORD: password,
        }

        const snapshotsArgs = ['snapshots', '--json']
        let output: string

        if (this.useDocker && this.dockerImage) {
            const dockerSnapshotsArgs = [
                'run',
                '--rm',
                '-e',
                `RESTIC_REPOSITORY=${repository}`,
                '-e',
                `RESTIC_PASSWORD=${password}`,
                '-v',
                `${repository}:${repository}`,
                this.dockerImage,
                'restic',
                ...snapshotsArgs
            ]

            output = await shell.executeCommandWithOutput('docker', dockerSnapshotsArgs, { env })
        }

        if (!this.useDocker || !this.dockerImage) {
            output = await shell.executeCommandWithOutput('restic', snapshotsArgs, { env })
        }

        const resticSnapshots = JSON.parse(output!)

        const snapshots: Snapshot[] = []

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

            snapshots.push(new Snapshot({
                id: resticSnapshot.short_id,
                plan_id: this.plan.id,
                data: resticSnapshot,
                created_at: format(new Date(resticSnapshot.time), 'yyyy-MM-dd HH:mm:ss'),
                metadata: {
                    ...tags,
                    size: resticSnapshot.summary?.total_bytes_processed || 0,
                }
            }))
        }

        return snapshots
    }

    public async destroy(snapshot: Snapshot): Promise<void> {
        const repository = this.config.repository as string
        const password = this.config.password as string

        if (!repository) {
            throw new Error('Repository path is required')
        }

        if (!password) {
            throw new Error('Repository password is required')
        }

        const env = {
            ...process.env,
            RESTIC_REPOSITORY: repository,
            RESTIC_PASSWORD: password,
        }

        const forgetArgs = ['forget', snapshot.id, '--prune']

        if (this.useDocker && this.dockerImage) {
            const dockerForgetArgs = [
                'run',
                '--rm',
                '-e',
                `RESTIC_REPOSITORY=${repository}`,
                '-e',
                `RESTIC_PASSWORD=${password}`,
                '-v',
                `${repository}:${repository}`,
                this.dockerImage,
                'restic',
                ...forgetArgs
            ]

            await shell.command('docker', dockerForgetArgs, { env })
            return
        }

        await shell.command('restic', forgetArgs, { env })
    }
}