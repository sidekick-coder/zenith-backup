import type Plan from '../entities/plan.entity.ts'
import validator from '#shared/services/validator.service.ts'
import type Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'

export interface StrategyFieldSection {
    title: string
    description?: string
    fields: Record<string, any>
}

export default class BaseStrategy {
    public static __is_strategy = true

    public static id: string = 'base'
    public static label: string = 'Base Strategy'
    public static description: string = 'This is the base strategy class.'

    public static schema: any = validator.create(v => v.any())            
    public static fields: any = {}
    public static fields_sections: StrategyFieldSection[] = []

    public config: Record<string, unknown> = {}
    public plan: Plan

    constructor(config: Record<string, unknown>, plan: Plan){
        this.plan = plan
        this.config = config
    }

    public async backup(metadata: Record<string, unknown>){
        const error = new Error('Not implemented')

        Object.assign(error, { metadata })

        throw error
    }

    public async restore(snapshot: Snapshot){
        const error = new Error('Not implemented')

        Object.assign(error, { snapshot })

        throw error
    }

    public async destroy(snapshot: Snapshot){
        const error = new Error('Not implemented')

        Object.assign(error, { snapshot })

        throw error
    }

    public async list(): Promise<Snapshot[]> {
        throw new Error('Not implemented')
    }
}