import { config, logger } from "@sidekick-coder/zenith-kit/server"
import TriggerService from "../services/TriggerService.ts"

const triggerService = new TriggerService({
    debug: config.getOne(['zbackups.debug', 'app.debug', 'debug'], false),
    logger: logger.child({ label: 'backup' })
})

export default triggerService
