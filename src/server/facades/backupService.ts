import { config, logger } from "@sidekick-coder/zenith-kit/server"
import BackupService from "../services/BackupService.ts"

const backupService = new BackupService({
    debug: config.getOne(['zbackups.debug', 'app.debug', 'debug'], false),
    logger: logger.child({ label: 'backup' })
})

export default backupService
