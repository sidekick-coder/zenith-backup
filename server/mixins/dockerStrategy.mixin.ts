import type BaseStrategy from '../strategies/base.strategy'
import type { Constructor } from '#shared/utils/compose.ts'

import config from '#server/facades/config.facade.ts'

interface Options {
    configKeys?: string[]
    defaultImage?: string
}

export function DockerStrategy(options: Options = {}) {
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
                    clearable: true,
                    options: [
                        { 
                            value: 'true', 
                            label: $t('Yes') 
                        },
                        { 
                            value: 'false', 
                            label: $t('No') 
                        }
                    ],
                })

                cls.field('docker_image', {
                    component: 'text-field',
                    section_id: 'docker',
                    placeholder: options.defaultImage,
                    label: $t('Image'),
                })
            }

            public get dockerImage(): string | undefined {
                const strategy = this as any as BaseStrategy

                let image = strategy.config.docker_image as string | undefined

                if (!image) {
                    image = options.defaultImage
                }

                if (!image) {
                    return undefined
                }

                if (!image.includes(':')) {
                    image = `${image}:latest`
                }

                return image
            }

            public get useDocker(): boolean {
                const strategy = this as any as BaseStrategy
                const keys = options.configKeys || ['zbackups.docker.enabled']
                
                let result = strategy.config.docker === 'true'

                if (result !== undefined && result !== null) {
                    return result
                }

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