import { defineHandler } from '@sidekick-coder/zenith-kit/server'
import triggerRepository from '#zenith-backup/server/facades/triggerRepository.ts'

export default defineHandler(async (ctx) => {
    ctx.acl.authorize('read', 'ZBackupPlan')

    const items = await triggerRepository.findMany()

    return {
        page: 1,
        total: items.length,
        total_pages: 1,
        items,
    }
})
