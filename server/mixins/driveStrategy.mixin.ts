import type BaseStrategy from '../strategies/base.strategy'
import type { Constructor } from '#shared/utils/compose.ts'

import drive from '#server/facades/drive.facade.ts'

export function DriveStrategy() {
    return function DriveStrategyExtend<TBase extends Constructor>(Base: TBase) {
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
                    throw new Error('DriveStrategy mixin can only be used on Strategy classes')
                }

                cls.section('drive', {
                    title:  $t('Drive'),
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
                    label: $t('Directory'),
                })
            }

            public get drive(){
                const strategy = this as any as BaseStrategy

                const driveId = strategy.config.drive_id as string

                return drive.use(driveId)
            }
        }
    }
}