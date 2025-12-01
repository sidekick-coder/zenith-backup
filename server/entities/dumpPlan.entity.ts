import { ConfigModelMixin } from '#server/mixins/configModel.mixin.ts'
import { composeWith } from '#shared/utils/compose.ts'
import Base from '#zenith-backup/shared/entities/dumpPlan.entity.ts'

export default class DumpPlan extends composeWith(
    Base,
    ConfigModelMixin('zbackups.dump_plans')
) {

}