import backup from './facades/backup.facade.ts'
import Module from '#server/entities/module.entity.ts'
import di from '#server/facades/di.facade.ts'
import RouterSevice from '#server/services/router.service.ts'
import RouterRegister from '#server/services/routerRegister.service.ts'
import env from '#server/facades/env.facade.ts'

export default class ZenithBackup extends Module {
    public async onLoad(): Promise<void> {
        const router = di.get<RouterRegister>(RouterSevice)

        router.addDir(this.makePath('server/routes'))

        await backup.strategies.load()

        if (!env.get('ZARTE')) {
            await backup.load()
        }
        
    }
}