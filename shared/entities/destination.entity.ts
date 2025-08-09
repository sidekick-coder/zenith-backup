export default class Destination {
    public id: number
    public backup_plan_id: number
    public drive_id: string
    public folder: string
    public created_at: Date
    public updated_at: Date
    public deleted_at: Date | null

    constructor(data: Destination){
        Object.assign(this, data)
    }
}