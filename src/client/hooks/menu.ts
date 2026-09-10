import { menu } from "@sidekick-coder/zenith-kit/client"
import { LifecycleHook } from "@sidekick-coder/zenith-kit/shared"

export default class extends LifecycleHook {
    public async onLoad(): Promise<void> {
        menu.add({
            layout: 'admin',
            label: $t('Plans'),
            icon: 'FileText',
            group: $t('Backups'),
            to: '/admin/zbackup/plans',
        })

        menu.add({
            layout: 'admin',
            label: $t('Triggers'),
            icon: 'Clock',
            group: $t('Backups'),
            to: '/admin/zbackup/triggers',
        })
    }
}

