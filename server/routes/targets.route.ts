// import { now } from '#server/database/common.ts' // removed unused import
import targetValidator from '../../shared/validators/target.validator.ts'
import { targetRepository } from '../repositories/target.repository.ts'
import BaseException from '#server/exceptions/base.ts'
import router from '#server/facades/router.facade.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import validator from '#shared/services/validator.service.ts'
import db from '#server/facades/db.facade.ts'
import { whereNotDeleted } from '#server/queries/softDelete.ts'

const group = router.prefix('/api/backup/targets')
    .use(authMiddleware)
    .group()

group.get('/', async ({ query }) => {
    const planId = Number(query.plan_id)

    const data = await db.selectFrom('backup_targets')
        .selectAll()
        .where('plan_id', '=', planId)
        .$call(whereNotDeleted)
        .execute()

    return { data }
})

group.get('/:id', async ({ params }) => {
    const target = await targetRepository.find(Number(params.id))

    if (!target) {
        throw new BaseException('Not found', 404)
    }

    return target
})

group.post('/', async ({ body }) => {
    const payload = validator.validate(body, targetValidator.create)
    
    const target = await targetRepository.create(payload)
    
    if (!target) {
        throw new BaseException('Create failed', 500)
    }

    return target
})

group.patch('/:id', async ({ params, body }) => {
    const payload = validator.validate(body, targetValidator.update)

    const updated = await targetRepository.update(Number(params.id), payload)

    if (!updated) {
        throw new BaseException('Update failed', 500)
    }

    return { success: true }
})

group.delete('/:id', async ({ params }) => {
    const deleted = await targetRepository.delete(Number(params.id))

    if (!deleted) {
        throw new BaseException('Delete failed', 500)
    }

    return { success: true }
})