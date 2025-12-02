import ModelConfig from '#server/mixins/modelConfig.mixin.ts'
import { composeWith } from '#shared/utils/compose.ts'
import Base from '#zenith-backup/shared/entities/dumpPlan.entity.ts'

export default class DumpPlan extends composeWith(
    Base,
    ModelConfig('zbackups.dump_plans')
) {

}