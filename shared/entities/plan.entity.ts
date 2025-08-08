export default class Plan {
    public id: string
    public name: string
    public description: string | null
    public strategy: 'zip' | 'restic'
    public cron: string | null
    public options: Record<string, any>

    constructor(data: Plan){
        Object.assign(this, data)
    }
}