import authGuard from '#client/guards/auth.guard.ts'
import { defineClientSetup } from '#client/utils/defineClientSetup'
import { $t } from '#shared/lang.ts'

export default defineClientSetup(({ router, menu }) => {
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
})