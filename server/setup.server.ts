import path from 'path'
import dumpService from './facades/dumpService.facade.ts'
import { defineServerSetup } from '#server/utils/defineServerSetup.ts'

export default defineServerSetup(async ({ router, scheduler }) => {
    await router.loadDirectory(path.resolve(import.meta.dirname, 'routes'))
    await scheduler.loadDirectory(path.resolve(import.meta.dirname, 'routines'))

    await dumpService.load()
})