import validator from '#shared/services/validator.service.ts'

export default class BaseStrategy {
    public static __is_strategy = true

    public static id: string = 'base'
    public static label: string = 'Base Strategy'
    public static description: string = 'This is the base strategy class.'

    public static schema = validator.create(v => v.any())            
    public static fields = {}

    public config: Record<string, unknown> = {}

    constructor(config: Record<string, unknown>) {
        this.config = config
    }
}