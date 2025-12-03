import path from 'path'
import type BaseStrategy from '../strategies/base.strategy'
import type Plan from '../entities/plan.entity.ts'
import { importAll } from '#server/utils/index.ts'

export default class StrategyService {
    public async list(){
        const folder = path.resolve(import.meta.dirname, '../strategies')        
        const imports = await importAll(folder, {
            exclude: ['base.strategy.ts', 'baseDump.strategy.ts']
        })
        const strategies = [] as typeof BaseStrategy[]

        for (const mod of Object.values(imports)) {
            if (!mod.default?.__is_strategy) {
                continue
            }

            strategies.push(mod.default || mod)
        }
        
        return strategies
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