import { defineHandler } from '@sidekick-coder/zenith-kit/server'
import { BaseException } from '@sidekick-coder/zenith-kit/shared'
import Plan from '#zenith-backup/server/entities/PlanEntity.ts'
import backup from '#zenith-backup/server/facades/backup.facade.ts'
import ResticStrategy from '#zenith-backup/server/strategies/ResticStrategy.ts'

export default defineHandler(async (ctx) => {
    ctx.acl.authorize('manage', 'ZBackupPlan')

    const plan = await Plan.findOrFail(ctx.params.planId)

    const strategyDef = await backup.strategies.find(plan.strategy)
    const instance = new strategyDef.ctor({ plan })

    if (!(instance instanceof ResticStrategy)) {
        throw new BaseException('Plan strategy does not support restic', 422)
    }

    const snapshots = await instance.list()
    const snapshot = snapshots.find((s) => s.id === ctx.params.snapshotId)

    if (!snapshot) {
        throw new BaseException('Snapshot not found', 404)
    }

    await instance.restore(snapshot)
})
