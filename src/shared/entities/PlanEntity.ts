export default class Plan {
    public id: string
    public name: string
    public strategy: string
    public config: Record<string, any>

    constructor(data: Plan){
        Object.assign(this, data)
    }
}
