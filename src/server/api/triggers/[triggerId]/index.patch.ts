import { defineHandler } from '@sidekick-coder/zenith-kit/server'
import { validator } from '@sidekick-coder/zenith-kit/shared'
import triggerRepository from '#zenith-backup/server/facades/triggerRepository.ts'

export default defineHandler(async (ctx) => {
    ctx.acl.authorize('manage', 'ZBackupPlan')

    const body = validator.validate(ctx.body, v => v.object({
        plan_id: v.optional(v.pipe(v.string(), v.nonEmpty())),
        type: v.optional(v.picklist(['cron', 'event'])),
        value: v.optional(v.pipe(v.string(), v.nonEmpty())),
        active: v.optional(v.boolean()),
    }))

    const trigger = await triggerRepository.updateById(ctx.params.triggerId, body)

    return trigger
})
