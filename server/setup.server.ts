import path from 'path'
import backup from './facades/backup.facade.ts'
import { defineServerSetup } from '#server/utils/defineServerSetup.ts'

export default defineServerSetup(async ({ router }) => {
    router.addDir(path.resolve(import.meta.dirname, 'routes'))
    // await scheduler.loadDirectory(path.resolve(import.meta.dirname, 'routines'))
    // await queue.addDirectory(path.resolve(import.meta.dirname, 'jobs'))

    await backup.load()
})