import { LoggerService } from '@sidekick-coder/zenith-kit/shared'
import type Plan from '../entities/plan.entity.ts'

export interface BaseStrategyOptions {
    plan: Plan
    debug?: boolean
    logger?: LoggerService
}

export default class BaseStrategy {
    public static id: string = 'base'
    public static label: string = 'Base Strategy'
    public static description: string = 'This is the base strategy class.'

    public plan: Plan
    public debug: boolean = false
    public logger: LoggerService

    constructor(options: BaseStrategyOptions) {
        this.plan = options.plan
        this.logger = options.logger || new LoggerService()
        this.debug = options.debug || false

        if (this.debug) {
            this.logger.debug(`initialized strategy ${this.constructor.name} with plan ID ${this.plan.id}`)
        }
    }

    public get config() {
        return this.plan.config || {}
    }

    public get triggers() {
        return this.plan.triggers || []
    }

    public async execute(metadata: Record<string, any> = {}) {
        // implementation for executing the strategy, if needed
    }
}
