import { authGuard, router } from "@sidekick-coder/zenith-kit/client"
import { LifecycleHook } from "@sidekick-coder/zenith-kit/shared"

export default class extends LifecycleHook {
    public async onLoad(): Promise<void> {

        router.addRoute({
            path: '/admin/zbackup',
            redirect: '/admin/zbackup/plans',
        })

        router.auto(import.meta.glob<any>('../pages/**/*.vue'), {
            strip: ['pages'],
            prefix: '/admin/zbackup',
            guards: [authGuard],
            refine: (records) => records.map(record => {
                record.meta = { layout: 'admin', }

                return record
            })
        })

        // router.auto(import.meta.glob<any>('../pages/public/**/*.vue'), {
        //     strip: ['pages', 'public'],
        //     prefix: '/zbackup',
        //     guards: [authGuard],
        // })
    }
}

