import type Plan from '../entities/plan.entity.ts'

export default class BaseStrategy {
    public static id: string = 'base'
    public static label: string = 'Base Strategy'
    public static description: string = 'This is the base strategy class.'

    public plan: Plan

    constructor(plan: Plan){
        this.plan = plan
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
