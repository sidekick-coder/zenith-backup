import { BaseException, LoggerService } from "@sidekick-coder/zenith-kit/shared"
import triggerRepository from "../facades/triggerRepository.ts"
import type Trigger from "#zenith-backup/shared/entities/TriggerEntity.ts"
import backupService from "../facades/backupService.ts"
import Plan from "../entities/PlanEntity.ts"
import { RoutineEntity, scheduler, emmitter } from "@sidekick-coder/zenith-kit/server"
import { tryCatch } from "@sidekick-coder/zenith-kit/shared"

export interface TriggerServiceOptions {
    debug?: boolean
    logger?: LoggerService
}

export default class TriggerService {
    public debug: boolean
    public logger: LoggerService

    public loadedTriggersRoutines: Map<string, RoutineEntity> = new Map()
    public loadedTriggersEvents: Map<string, () => void> = new Map()

    constructor(options: TriggerServiceOptions) {
        this.debug = options.debug || false
        this.logger = options.logger || new LoggerService()

        if (this.debug) {
            this.logger.debug(`initialized in debug mode`)
        }
    }

    public async execute(trigger: Trigger, metadata?: Record<string, any>) {
        if (!trigger.plan_id) {
            this.logger.warn(`Trigger ${trigger.id} has no plan_id, skipping`)
            return
        }

        const plan = await Plan.findOrFail(trigger.plan_id)

        await backupService.execute(plan, {
            description: `Triggered by ${trigger.type} trigger ${trigger.id}`,
            trigger_type: trigger.type,
            trigger_id: trigger.id,
            trigger_value: trigger.value,
            ...metadata,
        })
    }

    public async loadTrigger(trigger: Trigger) {
        if (!trigger.plan_id) {
            this.logger.warn(`Trigger ${trigger.id} has no plan_id, skipping`)
            return
        }


        if (trigger.type === 'cron') {
            const cb = () => this.execute(trigger, {
                description: `Cron: ${trigger.value}`,
            })

            const routine = RoutineEntity.create()
                .setId(`zbackup:trigger:${trigger.id}`)
                .setCron(trigger.value)
                .setHandler(cb)

            scheduler.addAndStart(routine)

            this.logger.info(`loaded cron trigger ${trigger.id}`, {
                trigger_id: trigger.id,
                plan_id: trigger.plan_id,
                cron: trigger.value,
            })

            this.loadedTriggersRoutines.set(trigger.id, routine)

            return
        }

        if (trigger.type === 'event') {
            const cb = () => this.execute(trigger, {
                description: `Event: ${trigger.value}`,
            })

            emmitter.on(trigger.value, cb)

            this.logger.info(`loaded event trigger ${trigger.id}`, {
                trigger_id: trigger.id,
                plan_id: trigger.plan_id,
                event: trigger.value,
            })

            this.loadedTriggersEvents.set(trigger.id, cb)

            return
        }

        throw new BaseException(`Unsupported trigger type: ${trigger.type}`)
    }

    public async unloadTriggerRoutine(triggerId: string) {
        const routine = this.loadedTriggersRoutines.get(triggerId)

        if (!routine) {
            this.logger.warn(`No loaded routine found for trigger ${triggerId}, skipping unload`)
            return
        }

        await scheduler.stopAndRemove(routine.id)

        this.loadedTriggersRoutines.delete(triggerId)

        this.logger.info(`unloaded cron trigger ${triggerId}`, {
            trigger_id: triggerId,
        })
    }

    public async unloadTriggerEvent(triggerId: string) {
        const cb = this.loadedTriggersEvents.get(triggerId)

        if (!cb) {
            this.logger.warn(`no loaded event handler found for trigger ${triggerId}, skipping unload`)
            return
        }

        // We need to find the trigger to get the event name
        const trigger = await triggerRepository.findById(triggerId)

        if (!trigger) {
            this.logger.warn(`trigger ${triggerId} not found in repository, skipping unload`)
            return
        }

        emmitter.off(trigger.value, cb)

        this.loadedTriggersEvents.delete(triggerId)

        this.logger.info(`unloaded event trigger ${triggerId}`, {
            trigger_id: triggerId,
            event: trigger.value,
        })
    }

    public async unloadTrigger(trigger: Trigger) {
        if (trigger.type === 'cron') {
            return this.unloadTriggerRoutine(trigger.id)
        }

        if (trigger.type === 'event') {
            return this.unloadTriggerEvent(trigger.id)
        }

        throw new BaseException(`Unsupported trigger type: ${trigger.type}`)
    }

    public isLoaded(triggerId: string) {
        return this.loadedTriggersRoutines.has(triggerId) || this.loadedTriggersEvents.has(triggerId)
    }

    public async loadRoutineTriggers() {
        let triggers = await triggerRepository.findMany()

        triggers = triggers.filter(trigger => trigger.type === 'cron' && trigger.active)

        for (const trigger of triggers) {
            const [error] = await tryCatch(() => this.loadTrigger(trigger))

            if (error) {
                Object.assign(error, { trigger_id: trigger.id })

                this.logger.error(error)
            }
        }
    }

    public async loadEventTriggers() {
        let triggers = await triggerRepository.findMany()

        triggers = triggers.filter(trigger => trigger.type === 'event' && trigger.active)

        for (const trigger of triggers) {
            const [error] = await tryCatch(() => this.loadTrigger(trigger))

            if (error) {
                Object.assign(error, { trigger_id: trigger.id })

                this.logger.error(error)
            }
        }
    }

    public async load() {
        await this.loadRoutineTriggers()
        await this.loadEventTriggers()
    }

    public async unload() {
        const triggers = await triggerRepository.findMany()

        const loadedTriggerIds = new Set([...this.loadedTriggersRoutines.keys(), ...this.loadedTriggersEvents.keys()])
        const loadedTriggers = triggers.filter(trigger => loadedTriggerIds.has(trigger.id))

        for (const trigger of loadedTriggers) {
            const [error] = await tryCatch(() => this.unloadTrigger(trigger))

            if (error) {
                Object.assign(error, { trigger_id: trigger.id })

                this.logger.error(error)
            }
        }
    }
}
