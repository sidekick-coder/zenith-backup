import { defineHandler } from '@sidekick-coder/zenith-kit/server'
import { validator } from '@sidekick-coder/zenith-kit/shared'
import triggerRepository from '#zenith-backup/server/facades/triggerRepository.ts'

export default defineHandler(async (ctx) => {
    ctx.acl.authorize('manage', 'ZBackupPlan')

    const body = validator.validate(ctx.body, v => v.object({
        plan_id: v.pipe(v.string(), v.nonEmpty()),
        type: v.picklist(['cron', 'event']),
        value: v.pipe(v.string(), v.nonEmpty()),
    }))

    const trigger = await triggerRepository.create(body)

    return trigger
})
