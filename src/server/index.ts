import { emmitter, PluginEntity } from '@sidekick-coder/zenith-kit/server'
import path from 'node:path'
import backup from './facades/backupService.ts'
import triggerService from './facades/triggerService.ts'

export default class extends PluginEntity {
    public async load() {
        this.addRouterFolder(path.resolve(import.meta.dirname, 'routes'))
        this.addApiFolder(path.resolve(import.meta.dirname, 'api'))

        await backup.strategies.load()
        await triggerService.loadEventTriggers()

        emmitter.on('http:booted', async () => await backup.load())

        emmitter.on('scheduler:booted', async () => triggerService.loadRoutineTriggers())
    }
}
