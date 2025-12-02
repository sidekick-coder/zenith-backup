import DumpPlan from '../entities/dumpPlan.entity.ts'
import dumpService from '../facades/dumpService.facade.ts'
import authMiddleware from '#server/middlewares/auth.middleware.ts'
import root from '#server/facades/router.facade.ts'
import RouterResourceConfigService from '#server/services/routerResourceConfig.service.ts'

const router = root.prefix('/api/zbackup/dump-plans')
    .use(authMiddleware)
    .group()

const resource = new RouterResourceConfigService(DumpPlan)

resource.on('afterSave', async () => dumpService.reload())
resource.on('afterDestroy', async () => dumpService.reload())

resource.register(router)