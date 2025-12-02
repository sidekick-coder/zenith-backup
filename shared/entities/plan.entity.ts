export default class Plan {
    public static ROUTINE_PREFIX = 'zbackups:plans'

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
    
    public created_at: string
    public updated_at: string

    constructor(data: Plan){
        Object.assign(this, data)
    }

    public get routineId(){
        return `${Plan.ROUTINE_PREFIX}:${this.id}`
    }
}