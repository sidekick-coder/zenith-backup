import { defineHandler } from '@sidekick-coder/zenith-kit/server'
import triggerRepository from '#zenith-backup/server/facades/triggerRepository.facade.ts'

export default defineHandler(async (ctx) => {
    ctx.acl.authorize('read', 'ZBackupPlan')

    const trigger = await triggerRepository.findByIdOrFail(ctx.params.triggerId)

    return trigger
})
