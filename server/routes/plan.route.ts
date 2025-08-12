import planValidator from '../../shared/validators/plan.validator.ts'
import { planRepository } from '../repositories/plan.repository.ts'
import backupService from '../services/backup.service.ts'
import BaseException from '#server/exceptions/base.ts'
import router from '#server/facades/router.facade.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import validator from '#shared/services/validator.service.ts'

const group = router.prefix('/api/backup/plans')
    .use(authMiddleware)
    .group()


group.get('/', async () => {
    const plans = await planRepository.list()

    return { data: plans }
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

group.post('/:id/execute', async ({ params }) => {
    await backupService.backup(Number(params.id))

    return { success: true, }
})