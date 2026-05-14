import { PluginEntity, authGuard, menu, router } from '@sidekick-coder/zenith-kit/client'
import './assets/css/styles.css'

export default class extends PluginEntity {
    public async load() {
        this.addPagesFolder(import.meta.glob('./pages/admin/**/*.vue'), {
            strip: ['pages', 'admin'],
            prefix: `/admin/zbackup`,
            guards: [authGuard]
        })

        this.addPagesFolder(import.meta.glob('./pages/public/**/*.vue'), {
            strip: ['pages', 'public'],
            prefix: `/zbackup`,
            guards: [authGuard]
        })

        router.addRoute({
            path: '/admin/zbackup',
            redirect: '/admin/zbackup/plans',
        })

        menu.add({
            id: 'zbackup-snapshots',
            layout: 'admin',
            label: $t('Snapshots'),
            icon: 'DatabaseBackup',
            group: $t('Backups'),
            to: '/admin/zbackup/snapshots',
        })

        menu.add({
            id: 'zbackup-plans',
            layout: 'admin',
            label: $t('Plans'),
            icon: 'CalendarCheck',
            group: $t('Backups'),
            to: '/admin/zbackup/plans',
        })


    }
}

