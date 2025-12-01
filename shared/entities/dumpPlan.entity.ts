export default class DumpPlan {
    public id: string
    public name: string
    public description: string | null
    public cron: string | null
    public created_at: Date
    public updated_at: Date

    constructor(data: DumpPlan){
        Object.assign(this, data)
    }
}