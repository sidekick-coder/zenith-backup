import { defineHandler } from '@sidekick-coder/zenith-kit/server'
import { BaseException } from '@sidekick-coder/zenith-kit/shared'
import Plan from '#zenith-backup/server/entities/plan.entity.ts'
import backup from '#zenith-backup/server/facades/backup.facade.ts'
import DumpStrategy from '#zenith-backup/server/strategies/DumpStrategy.ts'

export default defineHandler(async (ctx) => {
    ctx.acl.authorize('manage', 'ZBackupPlan')

    const plan = await Plan.findOrFail(ctx.params.planId)

    const strategyDef = await backup.strategies.find(plan.strategy)
    const instance = new strategyDef.ctor({ plan })

    if (!(instance instanceof DumpStrategy)) {
        throw new BaseException('Plan strategy does not support dumps', 422)
    }

    const dumps = await instance.list()
    const dump = dumps.find((d) => d.id === ctx.params.dumpId)

    if (!dump) {
        throw new BaseException('Dump not found', 404)
    }

    await instance.restore(dump)
})
