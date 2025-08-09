import { destinationRepository } from '../repositories/destination.repository.ts'
import router from '#server/facades/router.facade.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import validator from '#shared/services/validator.service.ts'
import BaseException from '#server/exceptions/base.ts'
import destinationValidator from '#modules/zenith-backup/shared/validators/destination.validator.ts'

const group = router.prefix('/api/backup/plans/:planId/destinations')
    .use(authMiddleware)
    .group()

group.get('/', async ({ params }) => {
    const data = await destinationRepository.list(Number(params.planId))
    return { data }
})

group.get('/:id', async ({ params }) => {
    const destination = await destinationRepository.find(Number(params.id))
    if (!destination) {
        throw new BaseException('Not found', 404)
    }
    return destination
})

group.post('/', async ({ params, body }) => {
    const payload = validator.validate(body, destinationValidator.create)

    const destination = await destinationRepository.create({
        ...payload,
        backup_plan_id: Number(params.planId)
    })
    if (!destination) {
        throw new BaseException('Create failed', 500)
    }
    return destination
})

group.patch('/:id', async ({ params, body }) => {
    const payload = validator.validate(body, destinationValidator.update)

    const destination = await destinationRepository.find(Number(params.id))

    if (!destination) {
        throw new BaseException('Not found', 404)
    }

    const updated = await destinationRepository.update(Number(params.id), payload)

    if (!updated) {
        throw new BaseException('Update failed', 500)
    }
    
    return { success: true }
})

group.delete('/:id', async ({ params }) => {
    const destination = await destinationRepository.find(Number(params.id))
    if (!destination) {
        throw new BaseException('Not found', 404)
    }
    const deleted = await destinationRepository.delete(Number(params.id))
    if (!deleted) {
        throw new BaseException('Delete failed', 500)
    }
    return { success: true }
})
