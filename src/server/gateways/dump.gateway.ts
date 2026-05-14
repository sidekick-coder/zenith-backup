export default class DumpGateway {
    public config: Record<string, any>

    constructor(config: Record<string, any>) {
        this.config = config
    }

    public async dump(filename: string): Promise<void> {
        const error = new Error('Not implemented')

        Object.assign(error, { filename })

        throw error
    }
}