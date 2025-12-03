import type Plan from '../entities/plan.entity.ts'
import validator from '#shared/services/validator.service.ts'
import type Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'

export interface StrategySection {
    id: string
    title: string
    description?: string
    order?: number
}

export interface StrategyField {
    component: string
    section_id?: string
    [key: string]: any
}

export default class BaseStrategy {
    public static __is_strategy = true
    public static __sections: Map<string, StrategySection>
    public static __fields: Map<string, StrategyField>

    public static id: string = 'base'
    public static label: string = 'Base Strategy'
    public static description: string = 'This is the base strategy class.'

    public static schema: any = validator.create(v => v.any())            
    public static fields: any = {}
    public static sections = [] as StrategySection[]

    public config: Record<string, unknown> = {}
    public plan: Plan

    public static boot(){
        // boot method for subclasses to override
    }

    static {
        this.boot()
    }

    public static section<T>(this: new (...args: any[]) => T, id: string, payload: Omit<StrategySection, 'id'>) {
        const cls = this as any as typeof BaseStrategy

        if (!cls.__sections) {
            cls.__sections = new Map<string, StrategySection>()
        }

        const exists = cls.__sections.get(id) || {}

        const section = {
            ...exists,
            ...payload,
            id,
        }

        cls.__sections.set(id, section)
    }

    public static field<T>(this: new (...args: any[]) => T, id: string, field: StrategyField) {
        const cls = this as any as typeof BaseStrategy

        if (!cls.__fields) {
            cls.__fields = new Map<string, StrategyField>()
        }

        cls.__fields.set(id, field)
    }

    public static listFieldSections<T>(this: new (...args: any[]) => T) {
        const cls = this as any as typeof BaseStrategy

        if (!cls.__sections) {
            cls.__sections = new Map<string, StrategySection>()
        }
        
        const items = cls.sections?.slice() || [] as any[]
        
        for (const s of cls.__sections.values()){

            const section = { ...s } as StrategySection & { fields?: Record<string, StrategyField> }

            for (const [id, field] of cls.__fields.entries()) {
                if (field.section_id !== section.id) {
                    continue
                }

                if (!section.fields) {
                    section.fields = {}
                }

                section.fields[id] = field
            }

            items.push(section)
            
        }

        items.sort((a, b) => {
            const orderA = a.order || 0
            const orderB = b.order || 0

            return orderA - orderB
        })

        return items
    }

    constructor(config: Record<string, unknown>, plan: Plan){
        this.plan = plan
        this.config = config
    }

    public async backup(metadata: Record<string, unknown>){
        const error = new Error('Not implemented')

        Object.assign(error, { metadata })

        throw error
    }

    public async restore(snapshot: Snapshot){
        const error = new Error('Not implemented')

        Object.assign(error, { snapshot })

        throw error
    }

    public async destroy(snapshot: Snapshot){
        const error = new Error('Not implemented')

        Object.assign(error, { snapshot })

        throw error
    }

    public async list(): Promise<Snapshot[]> {
        throw new Error('Not implemented')
    }
}