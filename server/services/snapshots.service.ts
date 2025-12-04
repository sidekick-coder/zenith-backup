import path from 'path'
import type BaseStrategy from '../strategies/base.strategy'
import Plan from '../entities/plan.entity.ts'
import type StrategyService from './strategy.service.ts'
import { importAll } from '#server/utils/index.ts'
import type Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'

export default class SnapshotService {
    private strategies: StrategyService

    constructor(strategies: StrategyService){
        this.strategies = strategies
    }

    public async all(){
        const plans = await Plan.list()
        
        const all = [] as Snapshot[]
        
        for (const plan of plans) {
            const strategy = await this.strategies.instantiate(plan)
        
            const items = await strategy.list()
        
            items.forEach(item => {
                item.plan = plan
            })
        
            all.push(...items)
        }

        all.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

        return all
    }

    public async list(planId: string){
        const plan = await Plan.findOrFail(planId)
        const strategy = await this.strategies.instantiate(plan)

        const items = await strategy.list()

        items.forEach(item => {
            item.plan = plan
        })

        items.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

        return items
    }

    public async find(planId: string, snapshotId: string){
        const items = await this.list(planId)

        const snapshot = items.find(item => item.id === snapshotId)

        if (!snapshot) {
            throw new Error('Snapshot not found')
        }

        return snapshot
    }

    public async destroy(snapshot: Snapshot){
        const plan = await Plan.findOrFail(snapshot.plan_id)
        const strategy = await this.strategies.instantiate(plan)

        await strategy.destroy(snapshot)
    }
}