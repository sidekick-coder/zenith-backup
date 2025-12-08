import { useMenu } from '#client/composables/useMenu.ts'
import Module from '#client/entities/module.entity.ts'
import router from '#client/facades/router.facade.ts'
import authGuard from '#client/guards/auth.guard.ts'
import { $t } from '#shared/lang.ts'

import './assets/css/styles.css'

export default class MyModule extends Module {
    public async onLoad(): Promise<void> {
        const menu = useMenu()
        
        router.auto(import.meta.glob<any>('./pages/admin/**/*.vue'), {
            strip: ['pages', 'admin'],
            prefix: '/admin/zbackup',
            guards: [authGuard],
        })
        
        router.addRoute({
            path: '/admin/zbackup',
            redirect: '/admin/zbackup/plans',
        })

        menu.add({
            id: 'zbackup-snapshots',
            label: $t('Snapshots'),
            icon: 'DatabaseBackup',
            group: $t('Backups'),
            to: '/admin/zbackup/snapshots',
        })
        
        menu.add({
            id: 'zbackup-plans',
            label: $t('Plans'),
            icon: 'CalendarCheck',
            group: $t('Backups'),
            to: '/admin/zbackup/plans',
        })
    }
}