import authMiddleware from '#server/middlewares/auth.middleware.ts'
import root from '#server/facades/router.facade.ts'

const router = root.prefix('/api/zbackup/dumps')
    .use(authMiddleware)
    .group()

router.get('/', async ({ acl }) => {
    acl.authorize('read', 'Dump')

    return { 
        total: 0,
        items: []
    }
})

router.delete('/:id', async ({ params, acl }) => {
    acl.authorize('manage', 'Dump')

    // const id = params.id as string
    // const dumps = []
    // const dump = dumps.find(d => d.id === id)

    // if (!dump) {
    //     throw new Error('Dump not found')
    // }

    // await dumpService.destroyDump(dump)

    return { success: true }
})

