export default class Plan {
    public id: number
    public name: string
    public description: string | null
    public strategy: string
    public cron: string | null
    public options: Record<string, any>
    public created_at: Date
    public updated_at: Date
    public deleted_at: Date | null

    constructor(data: Plan){
        Object.assign(this, data)
    }
}