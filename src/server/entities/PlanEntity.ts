import { ModelConfigMixin } from '@sidekick-coder/zenith-kit/server'
import { HooksStatic, composeWith } from '@sidekick-coder/zenith-kit/shared'
import Base from '#zenith-backup/shared/entities/PlanEntity.ts'

export default class Plan extends composeWith(
    Base,
    HooksStatic,
    ModelConfigMixin('zbackups.plans')
) {
}
