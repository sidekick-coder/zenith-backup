import { PluginEntity, lifecycle } from '@sidekick-coder/zenith-kit/client'
import './assets/css/styles.css'

export default class extends PluginEntity {
    public async load() {
        lifecycle.addImports(import.meta.glob('./hooks/*.ts', { eager: true }))
    }
}

