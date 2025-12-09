import BackupService from '../services/backup.service.ts'
import di from '#server/facades/di.facade.ts'

const backup = di.proxy<BackupService>(BackupService)

export default backup