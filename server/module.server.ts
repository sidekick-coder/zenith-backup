import Module from '#server/entities/module.entity.ts'
import di from '#server/facades/di.facade.ts'
import RouterSevice from '#server/services/router.service.ts'
import RouterRegister from '#server/services/routerRegister.service.ts'

export default class MyModule extends Module {
    public async onLoad(): Promise<void> {
        const router = di.get<RouterRegister>(RouterSevice)

        router.addDir(this.makePath('server/routes'))
    }
}