import type Plan from './plan.entity.ts'

export default class Snapshot {
    public id: string
    public plan_id: string
    public data?: Record<string, any>
    public metadata?: Record<string, any>
    public created_at: string

    public plan?: Plan | null    

    constructor(data: any){
        Object.assign(this, data)
    }

    public get description(){
        return this.metadata?.description || ''
    }

    public get size(){
        return this.metadata?.size || 0
    }

    public get origin(){
        return this.metadata?.origin || 'unknown'
    }

    public get trigger_type(){
        return this.metadata?.trigger_type || 'unknown'
    }

    public get trigger_id(){
        return this.metadata?.trigger_id || null
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