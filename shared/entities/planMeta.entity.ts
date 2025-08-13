export default class PlanMeta {
    public id: number
    public plan_id: number
    public name: string
    public value: string | null

    constructor(data: PlanMeta){
        Object.assign(this, data)
    }
}