import path from 'path'
import type BaseStrategy from '../strategies/base.strategy'
import { importAll } from '#server/utils/index.ts'

export default class StrategyService {
    public async list(){
        const folder = path.resolve(import.meta.dirname, '../strategies')        
        const imports = await importAll(folder)
        const strategies = [] as typeof BaseStrategy[]

        for (const [key, value] of Object.entries(imports)) {
            if (key.endsWith('base.strategy.ts')) {
                continue
            }

            if (!value.default?.__is_strategy) {
                continue
            }

            strategies.push(value.default || value)
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
}