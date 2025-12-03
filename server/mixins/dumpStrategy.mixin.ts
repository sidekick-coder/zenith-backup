import path from 'path'
import type BaseStrategy from '../strategies/base.strategy.ts'
import type { Constructor } from '#shared/utils/compose.ts'
import { $t } from '#shared/lang.ts'
import drive from '#server/facades/drive.facade.ts'
import Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'

interface DumpStrategyOptions {
    dumpFilename?: string
    metadataFilename?: string
}

export function DumpStrategy<T extends string>(options?: DumpStrategyOptions) {
    const dumpFilename = options?.dumpFilename || 'dump.sql'
    const metadataFilename = options?.metadataFilename || 'metadata.json'

    return function DumpStrategyExtend<TBase extends Constructor>(Base: TBase) {
        return class extends Base {
            static {
                this.boot()
            }

            public static boot<T>(this: new (...args: any[]) => T){
                /** @ts-expect-error allow static super call */
                if (super.boot) {
                    /** @ts-expect-error allow static super call */
                    super.boot()
                }

                const cls = this as any as typeof BaseStrategy

                if (!cls.__is_strategy) {
                    throw new Error('DumpStrategy mixin can only be used on Strategy classes')
                }

                cls.section('drive', {
                    title: $t('Drive'),
                    description: $t('Settings related to the backup drive and directory.'),
                })

                cls.field('drive_id', {
                    component: 'select',
                    section_id: 'drive',
                    fetch: '/api/drives',
                    label: $t('Drive'),
                    valueKey: 'id',
                    labelKey: 'name',
                    descriptionKey: 'description',
                })

                cls.field('directory', {
                    component: 'text-field',
                    section_id: 'drive',
                    label: $t('Directory'),
                })

                cls.section('options', {
                    title: $t('Options'),
                    description: $t('Additional options for the backup process.'),
                })

                cls.field('max_length', {
                    component: 'text-field',
                    section_id: 'options',
                    type: 'number',
                    label: $t('Max quantity of backups'),
                    description: $t('Maximum quantity of backups to keep.'),
                })
            }

            public get drive(){
                const strategy = this as any as BaseStrategy

                const driveId = strategy.config.drive_id as string

                return drive.use(driveId)
            }

            public list = async (): Promise<Snapshot[]> => {
                const strategy = this as any as BaseStrategy
                const folder = strategy.config.directory as string | undefined

                if (!folder || folder.trim() === '') {
                    return []
                }

                if (!(await this.drive.exists(folder))) {
                    return []
                }
            
                const entries = await this.drive.list(folder || '')
            
                const snapshots = [] as Snapshot[]
            
                for (const entry of entries) {
                    if (!(await this.drive.exists(path.join(entry.path, dumpFilename)))) {
                        continue
                    }
                    
                    if (!(await this.drive.exists(path.join(entry.path, metadataFilename)))) {
                        continue
                    }
            
                    const uint8 = await this.drive.read(path.join(entry.path, metadataFilename))
                    const text = new TextDecoder().decode(uint8)
                    const metadata = JSON.parse(text) as Record<string, unknown>
            
                    if (metadata.plan_id !== strategy.plan.id) {
                        continue
                    }
            
                    snapshots.push(new Snapshot({
                        id: path.basename(entry.path),
                        plan_id: strategy.plan.id,
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
                const strategy = this as any as BaseStrategy
                const directory = strategy.config.directory as string | undefined
                const folder = directory ? path.join(directory, snapshot.id) : snapshot.id
            
                await this.drive.delete(folder)
            }

            public async cleanup(): Promise<void> {
                const strategy = this as any as BaseStrategy
                const maxLength = strategy.config.max_length as number | undefined
            
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
    }
}