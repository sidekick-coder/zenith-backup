export default class Destination {
    public id: number
    public backup_plan_id: number
    public type: string
    public options: Record<string, any>
    public created_at: Date
    public updated_at: Date
    public deleted_at: Date | null

    constructor(data: Destination){
        Object.assign(this, data)
    }
}