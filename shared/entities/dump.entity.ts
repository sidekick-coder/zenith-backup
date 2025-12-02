export default class Dump {
    public id: string
    public plan_id: string
    public created_at: string

    constructor(data: Dump){
        Object.assign(this, data)
    }
}