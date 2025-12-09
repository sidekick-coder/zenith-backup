import BackupService from '../services/backup.service.ts'
import config from '#server/facades/config.facade.ts'

const backup = new BackupService({
    debug: config.get('zbackup.debug', false),
})

export default backup