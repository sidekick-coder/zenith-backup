import path from 'path'
import type BaseStrategy from '../strategies/base.strategy'
import type Plan from '../entities/plan.entity.ts'
import { importAll } from '#server/utils/index.ts'
import env from '#server/facades/env.facade.ts'

export default class StrategyService {
    public items: typeof BaseStrategy[] = []

    public async load(){
        const folder = path.resolve(import.meta.dirname, '../strategies')        
        
        const imports = await importAll(folder, {
            exclude: ['base.strategy.ts'],
            cache: env.production,
        })

        console.log('load stra2')

        const strategies = [] as typeof BaseStrategy[]

        for (const mod of Object.values(imports)) {
            if (!mod.default?.__is_strategy) {
                continue
            }

            strategies.push(mod.default || mod)
        }
        
        this.items = strategies
    }

    public async list(){
        return this.items
    }

    public async find(id: string){
        const strategies = await this.list()

        const strategy = strategies.find(s => s.id === id)

        if (!strategy) {
            throw new Error('Strategy not found')
        }

        return strategy
    }

    public async instantiate(plan: Plan){
        const Strategy = await this.find(plan.strategy)

        return new Strategy(plan.config, plan)
    }
}