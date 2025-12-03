import path from 'path'
import BaseStrategy from './base.strategy.ts'
import type { StrategyFieldSection } from './base.strategy.ts'
import { $t } from '#shared/lang.ts'
import drive from '#server/facades/drive.facade.ts'
import Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'


const sections = [] as StrategyFieldSection[]

sections.push({
    title: $t('Drive'),
    description: $t('Settings related to the backup drive and directory.'),
    fields: {
        drive_id: {
            component: 'select',
            fetch: '/api/drives',
            label: $t('Drive'),
            valueKey: 'id',
            labelKey: 'name',
            descriptionKey: 'description',
        },
        directory: {
            component: 'text-field',
            label: $t('Directory'),
        },
    }
})

sections.push({
    title: $t('Options'),
    description: $t('Additional options for the backup process.'),
    fields: {
        max_length: { 
            component: 'text-field',
            type: 'number',
            label: $t('Max quantity of backups'),
            description: $t('Maximum quantity of backups to keep.'),
        },
    }
})

// use to create common
export default class BaseDump extends BaseStrategy {
    public static sections(refine: (items: StrategyFieldSection[]) => StrategyFieldSection[] ) {
        const items = refine(sections.slice())

        return items
    }

    public get drive(){
        const driveId = this.config.drive_id as string

        return drive.use(driveId)
    }

    public list: BaseStrategy['list']  = async () => {
        const folder = this.config.directory as string | undefined
    
        const entries = await this.drive.list(folder || '')
    
        const snapshots = [] as Snapshot[]
    
        for (const entry of entries) {
            if (!(await this.drive.exists(path.join(entry.path, 'dump.sql')))) {
                continue
            }
    
            if (!(await this.drive.exists(path.join(entry.path, 'metadata.json')))) {
                continue
            }
    
            const uint8 = await this.drive.read(path.join(entry.path, 'metadata.json'))
            const text = new TextDecoder().decode(uint8)
            const metadata = JSON.parse(text) as Record<string, unknown>
    
            if (metadata.plan_id !== this.plan.id) {
                continue
            }
    
            snapshots.push(new Snapshot({
                id: path.basename(entry.path),
                plan_id: this.plan.id,
                origin: metadata.origin as string | undefined,
                description: metadata.description as string | undefined,
                size: metadata.size as number | undefined,
                metadata,
                created_at: metadata.created_at as string,
            }))
        }
    
        snapshots.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    
        return snapshots
    }

    public async destroy(snapshot: Snapshot): Promise<void> {
        const directory = this.config.directory as string | undefined
        const folder = directory ? path.join(directory, snapshot.id) : snapshot.id
    
        await this.drive.delete(folder)
    }

    public async cleanup(): Promise<void> {
        const maxLength = this.config.max_length as number | undefined
    
        if (!maxLength || maxLength <= 0) {
            return
        }
    
        let snapshots = await this.list()
    
        snapshots = snapshots.filter(s => s.origin === 'automated')
    
        snapshots.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
            
        if (snapshots.length <= maxLength) {
            return
        }
            
        const toDelete = snapshots.slice(0, snapshots.length - maxLength)
    
        for (const snapshot of toDelete) {
            await this.destroy(snapshot)
        }
    }
}