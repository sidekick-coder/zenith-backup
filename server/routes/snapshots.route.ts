import Plan from '../entities/plan.entity.ts'
import backup from '../facades/backup.facade.ts'
import root from '#server/facades/router.facade.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import type Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'

const router = root.prefix('/api/zbackup/snapshots')
    .use(authMiddleware)
    .group()

router.get('/', async ({ acl }) => {
    acl.authorize('read', 'Snapshot')

    const all = await backup.snapshots.all()

    return { 
        total: all.length,
        items: all
    }
})

