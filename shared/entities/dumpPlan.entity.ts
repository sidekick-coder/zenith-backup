import { $t } from '#shared/lang.ts'

export const TYPE_OPTIONS = [
    {
        id: 'connection',
        label: $t('Connection'),
        description: $t('Generate dumps from a zenith connection config.'),
        config_fields: {
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
        id: 'postgres',
        label: 'PostgreSQL',
        description: $t('Generate dumps directly from a PostgreSQL database.'),
        config_fields: {
            host: { 
                component: 'text-field',
                label: $t('Host'),
            },
            port: { 
                component: 'number-field',
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
    public id: string
    public name: string
    public type: string
    public description: string | null
    public cron: string | null
    public config: Record<string, any>
    public created_at: Date
    public updated_at: Date

    constructor(data: DumpPlan){
        Object.assign(this, data)
    }

    public get configFields() {
        const option = TYPE_OPTIONS.find(o => o.id === this.type)
        
        return option ? option.config_fields : {}
    }

    public get typeLabel() {
        const option = TYPE_OPTIONS.find(o => o.id === this.type)
        
        return option ? option.label : this.type
    }
}