import backup from '../facades/backup.facade.ts'
import { HooksStatic } from '#server/mixins/hooks.mixin.ts'
import ModelConfig from '#server/mixins/modelConfig.mixin.ts'
import validator from '#shared/services/validator.service.ts'
import { composeWith } from '#shared/utils/compose.ts'
import Base from '#zenith-backup/shared/entities/plan.entity.ts'

export default class Plan extends composeWith(
    Base,
    HooksStatic,
    ModelConfig('zbackups.plans')
) {

    public static boot(){
        this.on('afterList', (items: Plan[]) => this.loadStrategy(items))
        this.on('afterFind', (item: Plan | null) => this.loadStrategy(item))
    }

    public static async loadStrategy(payload: null | Plan | Plan[]) {
        if (!payload) {
            return
        }

        const plans = Array.isArray(payload) ? payload : [payload]

        const strategies = await backup.strategies.list()

        for (const plan of plans) {
            const strategy = strategies.find(s => s.id === plan.strategy)

            if (!strategy) {
                plan.valid = false
                continue
            }

            plan.strategy_label = strategy.label
            plan.strategy_fields = strategy.fields

            if (strategy.schema) {
                plan.valid = validator.isValid(plan.config, strategy.schema)
            }
        }
    }

}