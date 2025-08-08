export default class BackupPlan {
    public id: string
    public name: string
    public strategy: 'zip' | 'restic'
    public cron: string | null
    public options: Record<string, any>

    constructor(data: BackupPlan){
        Object.assign(this, data)
    }
}