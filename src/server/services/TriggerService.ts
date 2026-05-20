import { LoggerService } from "@sidekick-coder/zenith-kit/shared"
import triggerRepository from "../facades/triggerRepository.ts"

export interface TriggerServiceOptions {
    debug?: boolean
    logger?: LoggerService
}

export default class TriggerService {
    public debug: boolean
    public logger: LoggerService

    constructor(options: TriggerServiceOptions) {
        this.debug = options.debug || false
        this.logger = options.logger || new LoggerService()

        if (this.debug) {
            this.logger.debug(`initialized in debug mode`)
        }
    }

    public async load(){
        const triggers = await triggerRepository.

    }
}
