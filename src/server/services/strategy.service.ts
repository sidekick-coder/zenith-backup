import path from 'path'
import type BaseStrategy from '../strategies/BaseStrategy.ts'
import type Plan from '../entities/plan.entity.ts'
import { importAll } from '@sidekick-coder/zenith-kit/server'
import { LoggerService } from '@sidekick-coder/zenith-kit/shared'

interface StrategyDefinition {
    id: string
    label: string
    description: string
    ctor: typeof BaseStrategy
}

interface StrategyServiceOptions {
    debug?: boolean
    logger?: LoggerService
}

export default class StrategyService {
    public items: StrategyDefinition[] = []
    public debug = false
    public logger: LoggerService

    constructor(options: StrategyServiceOptions = {}) {
        this.debug = options.debug || false
        this.logger = options.logger || new LoggerService()

        if (this.debug) {
            this.logger.debug('initialized in debug mode')
        }
    }

    public async load() {
        this.items = []

        const folder = path.resolve(import.meta.dirname, '../strategies')

        const imports = await importAll(folder, {
            exclude: ['BaseStrategy'],
        })

        for (const mod of Object.values(imports)) {
            const ctor = mod.default as typeof BaseStrategy

            this.items.push({
                id: ctor.id,
                label: ctor.label,
                description: ctor.description,
                ctor,
            })

            if (this.debug) {
                this.logger.debug(`loaded strategy: ${ctor.id}`)
            }
        }

        if (this.debug) {
            this.logger.debug(`loaded ${this.items.length} strategies`, {
                strategies: this.items.map(i => i.id),
            })
        }

    }

    public async list() {
        return this.items
    }

    public async find(id: string) {
        const strategies = await this.list()

        const strategy = strategies.find(s => s.id === id)

        if (!strategy) {
            throw new Error('Strategy not found')
        }

        return strategy
    }

    public async instantiate(plan: Plan) {
        const Strategy = await this.find(plan.strategy)

        return new Strategy(plan.config, plan)
    }
}
