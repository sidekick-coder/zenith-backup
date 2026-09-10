import { defineHandler } from '@sidekick-coder/zenith-kit/server'
import { validator } from '@sidekick-coder/zenith-kit/shared'
import triggerRepository from '#zenith-backup/server/facades/triggerRepository.ts'
import triggerService from '#zenith-backup/server/facades/triggerService.ts'

export default defineHandler(async (ctx) => {
    ctx.acl.authorize('manage', 'ZBackupPlan')

    const id = validator.validate(ctx.params.triggerId, v => v.string())

    const body = validator.validate(ctx.body, v => v.object({
        plan_id: v.optional(v.pipe(v.string(), v.nonEmpty())),
        type: v.optional(v.picklist(['cron', 'event'])),
        value: v.optional(v.pipe(v.string(), v.nonEmpty())),
        active: v.optional(v.boolean()),
    }))

    const trigger = await triggerRepository.findByIdOrFail(id)

    if (triggerService.isLoaded(id)) {
        await triggerService.unloadTrigger(trigger)
    }

    const updated = await triggerRepository.updateById(ctx.params.triggerId, body)

    if (updated.active) {
        await triggerService.loadTrigger(updated)
    }

    return trigger
})
