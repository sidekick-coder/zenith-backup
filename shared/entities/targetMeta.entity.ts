export default class TargetMeta {
    public id: number
    public target_id: number
    public name: string
    public value: string | null

    constructor(data: TargetMeta){
        Object.assign(this, data)
    }
}