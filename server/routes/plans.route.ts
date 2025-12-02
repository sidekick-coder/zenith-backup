import Plan from '../entities/plan.entity.ts'
import dumpService from '../facades/dumpService.facade.ts'
import backup from '../facades/backup.facade.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import root from '#server/facades/router.facade.ts'
import RouterResourceConfig from '#server/services/routerResourceConfig.service.ts'
import { AuthorizationMiddleware } from '#server/middlewares/authorization.middleware.ts'

const router = root.prefix('/api/zbackup/plans')
    .use(authMiddleware)
    .group()

router.get('/strategies', async ({ acl }) => {
    acl.authorize('read', 'ZBackupPlan')

    const strategies = await backup.strategies.list()

    const items = strategies.map(s => ({
        id: s.id,
        label: s.label,
        description: s.description,
    }))

    return {
        total: items.length,
        items: items
    }
})

router.post('/:id/backup', async ({ acl, params }) => {
    acl.authorize('manage', 'ZBackupPlan')

    const planId = params.id!

    const plan = await Plan.findOrFail(planId)

    await backup.backup(plan)
})

const read = AuthorizationMiddleware.create({
    action: 'read',
    resource: 'ZBackupPlan',
})

const write = AuthorizationMiddleware.create({
    action: 'manage',
    resource: 'ZBackupPlan',
})

const resource = new RouterResourceConfig(Plan, {
    middleware: {
        index: read,
        show: read,
        update: write,
        destroy: write,
    }
})

// resource.on('afterSave', async () => dumpService.reload())
// resource.on('afterDestroy', async () => dumpService.reload())

resource.register(router)


