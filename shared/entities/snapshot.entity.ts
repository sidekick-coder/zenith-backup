export default class Snapshot {
    public id: string
    public plan_id: number
    public target_id: number
    public metadata: Record<string, any>
    public created_at: Date

    constructor(data: Snapshot){
        Object.assign(this, data)
    }
}