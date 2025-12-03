import type Plan from './plan.entity.ts'

export default class Snapshot {
    public id: string
    public plan_id: string
    public origin?: string
    public description?: string
    public size?: number
    public created_at: string

    public plan?: Plan | null

    [key: string]: any

    constructor(data: any){
        Object.assign(this, data)
    }

    public get humanSize() {
        if (!this.size) {
            return '0 B'
        }

        const i = Math.floor(Math.log(this.size) / Math.log(1024))
        const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

        return (this.size / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i]
    }
}