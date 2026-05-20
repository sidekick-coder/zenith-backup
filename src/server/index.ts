import { emmitter, PluginEntity } from '@sidekick-coder/zenith-kit/server'
import path from 'node:path'
import backup from './facades/backup.facade.ts'

export default class extends PluginEntity {
    public async load() {
        this.addRouterFolder(path.resolve(import.meta.dirname, 'routes'))
        this.addApiFolder(path.resolve(import.meta.dirname, 'api'))

        await backup.strategies.load()

        emmitter.on('http:booted', async () => {
            await backup.load()
        })
    }
}
