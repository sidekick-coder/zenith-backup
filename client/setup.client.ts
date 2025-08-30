import authGuard from '#client/guards/auth.guard.ts'
import { defineClientSetup } from '#client/utils/defineClientSetup'
import { $t } from '#shared/lang.ts'

export default defineClientSetup(({ router, menu }) => {
    router.auto(import.meta.glob<any>('./pages/admin/**/*.vue'), {
        strip: ['pages', 'admin'],
        prefix: '/admin/backup',
        guards: [authGuard],
    })

    router.addRoute({
        path: '/admin/backup',
        redirect: '/admin/backup/plans',
    })

    menu.add({
        id: 'backups',
        label: $t('Plans'),
        icon: 'FolderIcon',
        group: $t('Backups'),
        to: '/admin/backup/plans',
    })
})