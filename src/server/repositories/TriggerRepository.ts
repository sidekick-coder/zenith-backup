import { config, ConfigRepository } from '@sidekick-coder/zenith-kit/server'
import type Trigger from '#zenith-backup/shared/entities/TriggerEntity.ts'

export default class TriggerRepository extends ConfigRepository<Trigger> {
    constructor() {
        super(config, 'zbackups.triggers')
    }

    async findManyByPlanId(planId: string): Promise<Trigger[]> {
        return this.getItems().filter(t => t.plan_id === planId)
    }

    async deleteManyByPlanId(planId: string): Promise<void> {
        const items = this.getItems().filter(t => t.plan_id !== planId)
        this.setItems(items)
    }
}
