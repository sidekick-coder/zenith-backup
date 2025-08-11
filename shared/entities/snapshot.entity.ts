export default class Snapshot {
    public id: number
    public plan_id: number
    public target_id: number
    public snapshot_id: string
    public metadata: Record<string, any>
    public created_at: Date
    public updated_at: Date
    public deleted_at: Date | null

    constructor(data: Snapshot){
        Object.assign(this, data)
    }
}