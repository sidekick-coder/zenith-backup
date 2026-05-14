export default class Trigger {
    public id: string
    public type: 'cron' | 'event'
    public cron?: string
    public events?: string[]

    constructor(data: Trigger){
        Object.assign(this, data)
    }
}