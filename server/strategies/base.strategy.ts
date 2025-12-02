import type Plan from '../entities/plan.entity.ts'
import validator from '#shared/services/validator.service.ts'

export default class BaseStrategy {
    public static __is_strategy = true

    public static id: string = 'base'
    public static label: string = 'Base Strategy'
    public static description: string = 'This is the base strategy class.'

    public static schema: any = validator.create(v => v.any())            
    public static fields: any = {}

    public config: Record<string, unknown> = {}
    public plan: Plan

    constructor(config: Record<string, unknown>, plan: Plan){
        this.plan = plan
        this.config = config
    }

    public async backup(){
        throw new Error('Not implemented')
    }

    public async restore(){
        throw new Error('Not implemented')
    }

    public async list(){
        throw new Error('Not implemented')
    }
}