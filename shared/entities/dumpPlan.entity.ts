import { $t } from '#shared/lang.ts'
import validator from '#shared/services/validator.service.ts'

export const TYPE_OPTIONS = [
    {
        id: 'connection',
        label: $t('Connection'),
        description: $t('Generate dumps from a zenith connection config.'),
        schema: validator.create(v => v.object({
            name: v.string(),
        })),
        fields: {
            name: { 
                component: 'autocomplete',
                fetch: '/api/database-connections',
                fetchOption: '/api/database-connections/:value',
                label: $t('Name'),
                valueKey: 'id',
                labelKey: 'id',
            }
        }
    },
    {
        id: 'sqlite',
        label: $t('SQLite'),
        description: $t('Generate dumps from a local SQLite database file.'),
        schema: validator.create(v => v.object({
            filename: v.string(),
        })),
        fields: {
            filename: { 
                component: 'text-field',
                label: $t('Filename'),
                hint: $t('Path to the SQLite database file. relative to the project root.'),
            }
        }
    },
    {
        id: 'postgres',
        label: 'PostgreSQL',
        description: $t('Generate dumps directly from a PostgreSQL database.'),
        schema: validator.create(v => v.object({
            host: v.string(),
            port: v.number(),
            database: v.string(),
            username: v.string(),
            password: v.string(),
        })),
        fields: {
            host: { 
                component: 'text-field',
                label: $t('Host'),
            },
            port: { 
                component: 'text-field',
                type: 'number',
                label: $t('Port'),
            },
            database: { 
                component: 'text-field',
                label: $t('Database'),
            },
            username: { 
                component: 'text-field',
                label: $t('Username'),
            },
            password: { 
                component: 'text-field',
                label: $t('Password'),
                type: 'password',
            }
        }
    }
]

export default class DumpPlan {
    public static TYPE_OPTIONS = TYPE_OPTIONS
    public static ROUTINE_PREFIX = 'zbackups:dumps'

    public id: string
    public name: string
    public type: string
    public description: string | null
    public cron: string | null
    public config: Record<string, any>
    public active: boolean
    public created_at: Date
    public updated_at: Date

    constructor(data: DumpPlan){
        Object.assign(this, data)
    }

    public get routineId(){
        return `${DumpPlan.ROUTINE_PREFIX}:${this.id}`
    }

    public get fields() {
        const option = TYPE_OPTIONS.find(o => o.id === this.type)
        
        return option ? option.fields : {}
    }

    public get schema() {
        const option = TYPE_OPTIONS.find(o => o.id === this.type)
        
        return option ? option.schema : undefined
    }

    public get typeLabel() {
        const option = TYPE_OPTIONS.find(o => o.id === this.type)
        
        return option ? option.label : this.type
    }

    public get valid() {
        if (!this.schema) {
            return true
        }

        return validator.isValid(this.config, this.schema)
    }
}