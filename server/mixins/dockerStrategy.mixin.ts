import type BaseStrategy from '../strategies/base.strategy'
import type { Constructor } from '#shared/utils/compose.ts'
import { $t } from '#shared/lang.ts'
import config from '#server/facades/config.facade.ts'

interface Options {
    configKeys?: string[]
}

export function DockerStrategy<T extends string>(options: Options = {}) {
    return function DockerStrategyExtend<TBase extends Constructor>(Base: TBase) {
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
                    throw new Error('DockerStrategy mixin can only be used on Strategy classes')
                }

                cls.section('docker', {
                    title:  $t('Docker'),
                    description: $t('Settings related to Docker execution and container configuration.'),
                })

                cls.field('docker', {
                    component: 'select',
                    section_id: 'docker',
                    label: $t('Use Docker'),
                    options: [
                        { 
                            value: true, 
                            label: $t('Yes') 
                        },
                        { 
                            value: false, 
                            label: $t('No') 
                        }
                    ],
                    clearable: true,
                })

                cls.field('image_tag', {
                    component: 'text-field',
                    section_id: 'docker',
                    label: $t('Image Tag'),
                })
            }

            public get useDocker(): boolean {
                const strategy = this as any as BaseStrategy
                const keys = options.configKeys || ['zbackups.docker.enabled']
                
                let result = strategy.config.docker as boolean | undefined | null

                for (const key of keys) {
                    if (result !== undefined && result !== null) {
                        break
                    }

                    const value = config.get<boolean>(key)

                    if (value !== undefined) {
                        result = value
                    }
                }

                return result ?? false
            }
        }
    }
}