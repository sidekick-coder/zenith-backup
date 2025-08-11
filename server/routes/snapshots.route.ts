import { snapshotRepository } from '../repositories/snapshot.repository.ts'
import BaseException from '#server/exceptions/base.ts'
import router from '#server/facades/router.facade.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'

const group = router.prefix('/api/backup/plans/:planId/snapshots')
    .use(authMiddleware)
    .group()

group.get('/', async ({ params, query }) => {
    const planId = Number(params.planId)
    const targetId = query.targetId ? Number(query.targetId) : undefined
    const data = await snapshotRepository.list(planId, targetId)
    return { data }
})

group.get('/:id', async ({ params }) => {
    const snapshot = await snapshotRepository.find(Number(params.id))
    if (!snapshot) {
        throw new BaseException('Not found', 404)
    }
    return snapshot
})

group.delete('/:id', async ({ params }) => {
    const deleted = await snapshotRepository.delete(Number(params.id))
    
    if (!deleted) {
        throw new BaseException('Delete failed', 500)
    }

    return { success: true }
})

group.post('/restore', async ({ params, body }) => {
    throw new BaseException('Not implemented yet', 500)
    return { success: true }
})
