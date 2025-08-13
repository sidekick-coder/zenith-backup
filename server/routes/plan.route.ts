import planValidator from '../../shared/validators/plan.validator.ts'
import { planRepository } from '../repositories/plan.repository.ts'
import backupService from '../services/backup.service.ts'
import BaseException from '#server/exceptions/base.ts'
import router from '#server/facades/router.facade.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import validator from '#shared/services/validator.service.ts'
import db from '#server/facades/db.facade.ts'
import { whereNotDeleted } from '#server/queries/softDelete.ts'

const group = router.prefix('/api/backup/plans')
    .use(authMiddleware)
    .group()


group.get('/', async () => {
    const data = await db.selectFrom('backup_plans')
        .$call(whereNotDeleted)
        .selectAll()
        .execute()

    return { data }
})

group.post('/', async ({ body }) => {
    const payload = validator.validate(body, planValidator.create)

    const plan = await planRepository.create(payload)

    return plan
})

group.get('/:id', async ({ params }) => {
    const plan = await planRepository.find(Number(params.id))
    
    if (!plan) {
        throw new BaseException('Not found', 404)
    }

    return plan
})

group.patch('/:id', async ({ params, body }) => {
    const payload = validator.validate(body, planValidator.update)

    const data = await planRepository.update(Number(params.id), payload)

    return {
        success: true,
        data
    }
})

group.delete('/:id', async ({ params }) => {
    const data = await planRepository.delete(Number(params.id))

    return {
        success: true,
        data 
    }
})

group.get('/:id/snapshots', async ({ params }) => {
    const snapshots = await backupService.list(Number(params.id))

    return { data: snapshots }
})

group.delete('/:id/snapshots', async ({ params, body }) => {
    const payload = validator.validate(body, v => v.object({ snapshotId: v.string() }))

    await backupService.delete(Number(params.id), payload.snapshotId)

    return { success: true, }
})

group.post('/:planId/restore', async ({ params, body }) => {
    const payload = validator.validate(body, v => v.object({ snapshotId: v.string() }))

    await backupService.restore(Number(params.planId), payload.snapshotId)

    return { success: true, }
})

group.post('/:id/execute', async ({ params }) => {
    await backupService.backup(Number(params.id))

    return { success: true, }
})

group.post('/:id/toggle', async ({ params }) => {
    const plan = await db.selectFrom('backup_plans')
        .$call(whereNotDeleted)
        .where('id', '=', Number(params.id))
        .selectAll()
        .executeTakeFirst()

    if (!plan) {
        throw new BaseException('Not found', 404)
    }

    if (plan.active) {
        await backupService.stop(plan.id)
    }

    if (!plan.active) {
        await backupService.start(plan.id)
    }

    await db.updateTable('backup_plans').set({ active: !plan.active }).execute()

    return { success: true, }
})