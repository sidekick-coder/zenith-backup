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

    const plans = await Plan.list()

    const all = [] as Snapshot[]

    for (const plan of plans) {
        const strategy = await backup.strategies.instantiate(plan)

        const items = await strategy.list()

        items.forEach(item => {
            item.plan = plan
        })

        all.push(...items)
    }

    return { 
        total: all.length,
        items: all
    }
})

router.delete('/:id', async ({ params, acl }) => {
    acl.authorize('manage', 'Snapshot')

    // const id = params.id as string
    // const dumps = []
    // const dump = dumps.find(d => d.id === id)

    // if (!dump) {
    //     throw new Error('Dump not found')
    // }

    // await dumpService.destroyDump(dump)

    return { success: true }
})

