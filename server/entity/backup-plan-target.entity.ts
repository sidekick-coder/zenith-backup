export default class BackupPlanTarget {
    public id: string
    public path: string
    public options: Record<string, any>

    constructor(data: BackupPlanTarget){
        Object.assign(this, data)
    }
}