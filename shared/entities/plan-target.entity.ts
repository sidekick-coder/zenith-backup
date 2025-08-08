export default class PlanTarget {
    public id: string
    public path: string
    public options: Record<string, any>

    constructor(data: PlanTarget){
        Object.assign(this, data)
    }
}