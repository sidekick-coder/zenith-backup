import authGuard from '#client/guards/auth.guard.ts'
import { defineClientSetup } from '#client/utils/defineClientSetup'
import { $t } from '#shared/lang.ts'

export default defineClientSetup(({ router, menu }) => {
    router.auto(import.meta.glob<any>('./pages/admin/**/*.vue'), {
        guards: [authGuard],
        strip: ['pages'] 
    })

    menu.add({
        label: $t('Backups'),
        group: true,
        items: [
            {
                label: $t('Plans'),
                to: '/admin/plans',
                icon: 'FolderIcon'
            }
        ]
    })
})