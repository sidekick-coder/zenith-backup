import type RouterRegister from '@sidekick-coder/zenith-kit/server/services/RouterRegisterService'
import backup from './facades/backupService.ts'
import triggerService from './facades/triggerService.ts'
import { PluginEntity, RouterFileBaseRoutingService, RouterService, container, emmitter, router } from '@sidekick-coder/zenith-kit/server'
import path from 'node:path'

emmitter.on('router:registered', async () => {
    const register = container.get<RouterRegister>(RouterService)

    await RouterFileBaseRoutingService
        .create(path.resolve(import.meta.dirname, 'api'))
        .setPrefix('/api/zbackup')
        .setRouter(router)
        .setModule('zenith-backup')
        .load()

    register.addDir(path.resolve(import.meta.dirname, 'routes'), { plugin: 'zenith-backup' })
})



export default class extends PluginEntity {
    public async load() {
        // this.addRouterFolder(path.resolve(import.meta.dirname, 'routes'))

        await backup.strategies.load()
        await triggerService.loadEventTriggers()

        emmitter.on('http:booted', async () => await backup.load())

        emmitter.on('scheduler:booted', async () => triggerService.loadRoutineTriggers())
    }
}
