
import { ModelConfigMixin } from '@sidekick-coder/zenith-kit/server'
import { HooksStatic } from '@sidekick-coder/zenith-kit/shared'
import { composeWith } from '#shared/utils/compose.ts'
import Base from '#zenith-backup/shared/entities/trigger.entity.ts'

export default class Plan extends composeWith(
    Base,
    HooksStatic,
    ModelConfigMixin('zbackups.triggers')
) {
}
