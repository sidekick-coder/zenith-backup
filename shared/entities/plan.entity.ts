import type Trigger from './trigger.entity.ts'

export default class Plan {
    public static TRIGGER_PREFIX = 'zbackups:plans'

    public id: string
    public name: string
    public description: string | null
    public cron: string | null
    public config: Record<string, any>
    public valid: boolean
    public active: boolean
    
    public strategy: string
    public strategy_label?: string
    public strategy_fields?: Record<string, any>
    public strategy_fields_sections?: Record<string, any>[]

    public triggers?: Trigger[]
    
    public created_at: string
    public updated_at: string

    constructor(data: Plan){
        Object.assign(this, data)
    }
}