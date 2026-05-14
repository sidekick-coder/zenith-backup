import Plan from '../entities/plan.entity.ts'
import backup from '../facades/backup.facade.ts'
import root from '#server/facades/router.facade.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import type Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'

const router = root.prefix('/api/zbackup/plans/:planId/snapshots')
    .use(authMiddleware)
    .group()

router.get('/', async ({ params, acl }) => {
    acl.authorize('read', 'Snapshot')

    const planId = params.planId!

    const items = await backup.snapshots.list(planId)

    return { 
        total: items.length,
        items: items
    }
})

router.get('/:snapshotId', async ({ params, acl }) => {
    acl.authorize('read', 'Snapshot')

    const planId = params.planId!
    const snapshotId = params.snapshotId!

    const snapshot = await backup.snapshots.find(planId, snapshotId)

    return snapshot
})

router.delete('/:snapshotId', async ({ params, acl }) => {
    acl.authorize('delete', 'Snapshot')

    const planId = params.planId!
    const snapshotId = params.snapshotId!

    const snapshot = await backup.snapshots.find(planId, snapshotId)

    await backup.snapshots.destroy(snapshot)
})

router.post('/:snapshotId/restore', async ({ params, acl }) => {
    acl.authorize('create', 'Snapshot')

    const planId = params.planId!
    const snapshotId = params.snapshotId!

    const snapshot = await backup.snapshots.find(planId, snapshotId)

    await backup.snapshots.restore(snapshot)
})

