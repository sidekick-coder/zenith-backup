import { defineHandler } from '@sidekick-coder/zenith-kit/server'
import triggerRepository from '#zenith-backup/server/facades/triggerRepository.ts'

export default defineHandler(async (ctx) => {
    ctx.acl.authorize('manage', 'ZBackupPlan')

    await triggerRepository.deleteById(ctx.params.triggerId)
})
