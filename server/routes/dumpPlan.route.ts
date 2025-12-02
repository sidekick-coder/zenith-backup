import DumpPlan from '../entities/dumpPlan.entity.ts'
import dumpService from '../facades/dumpService.facade.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import root from '#server/facades/router.facade.ts'
import RouterResourceConfigService from '#server/services/routerResourceConfig.service.ts'
import { AuthorizationMiddleware } from '#server/middlewares/authorization.middleware.ts'

const router = root.prefix('/api/zbackup/dump-plans')
    .use(authMiddleware)
    .group()

const read = AuthorizationMiddleware.create({
    action: 'read',
    resource: 'DumpPlan',
})

const write = AuthorizationMiddleware.create({
    action: 'manage',
    resource: 'DumpPlan',
})

const resource = new RouterResourceConfigService(DumpPlan, {
    middleware: {
        index: read,
        show: read,
        update: write,
        destroy: write,
    }
})

resource.on('afterSave', async () => dumpService.reload())
resource.on('afterDestroy', async () => dumpService.reload())

resource.register(router)