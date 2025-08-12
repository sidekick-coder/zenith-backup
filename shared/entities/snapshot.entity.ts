export default class Snapshot {
    public id: string
    public plan_id: number
    public target_id: number
    public metadata: Record<string, any>

    constructor(data: Snapshot){
        Object.assign(this, data)
    }
}