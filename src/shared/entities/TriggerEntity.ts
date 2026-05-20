export default class Trigger {
    public id: string
    public type: 'cron' | 'event'
    public plan_id: string
    public value: string

    constructor(data: Trigger) {
        Object.assign(this, data)
    }
}
