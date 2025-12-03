import { DriveStrategy } from '../mixins/driveStrategy.mixin.ts'
import BaseStrategy from './base.strategy.ts'
import config from '#server/facades/config.facade.ts'
import { $t } from '#shared/lang.ts'
import { composeWith } from '#shared/utils/compose.ts'

export default class ResticStrategy extends composeWith(
    BaseStrategy,
    DriveStrategy()
) {
    public static id = 'restic'
    public static label = 'Restic'
    public static description = $t('Backup folders and files to a Restic repository.')

    static {
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
    }



    public async backup(_metadata: Record<string, any>): Promise<void> {
        let docker = this.config.docker as boolean | undefined

        if (docker === undefined) {
            docker = config.get<boolean>('zbackups.connection.docker')
        }

        if (docker === undefined) {
            docker = config.get<boolean>('zbackups.docker.enabled', false)
        }
        
        await this.cleanup()
    }

    public async cleanup(): Promise<void> {}
}