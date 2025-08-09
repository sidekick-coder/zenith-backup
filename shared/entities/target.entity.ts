export default class Target {
    public id: number
    public path: string
    public options: Record<string, any>
    public created_at: Date
    public updated_at: Date
    public deleted_at: Date | null

    constructor(data: Target){
        Object.assign(this, data)
    }
}