import { defineHandler } from '@sidekick-coder/zenith-kit/server'
import { BaseException } from '@sidekick-coder/zenith-kit/shared'
import Plan from '#zenith-backup/server/entities/PlanEntity.ts'
import backup from '#zenith-backup/server/facades/backupService.ts'
import DumpStrategy from '#zenith-backup/server/strategies/DumpStrategy.ts'

export default defineHandler(async (ctx) => {
    ctx.acl.authorize('read', 'ZBackupPlan')

    const plan = await Plan.findOrFail(ctx.params.planId)

    const strategyDef = await backup.strategies.find(plan.strategy)
    const instance = new strategyDef.ctor({ plan })

    if (!(instance instanceof DumpStrategy)) {
        throw new BaseException('Plan strategy does not support dumps', 422)
    }

    const items = await instance.list()

    return {
        page: 1,
        total: items.length,
        total_pages: 1,
        items,
    }
})
