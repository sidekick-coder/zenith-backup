import Plan from '../entities/plan.entity.ts'
import arte from '#server/facades/arte.facade.ts'
import backup from '../facades/backup.facade.ts'
import DumpStrategy from '../strategies/DumpStrategy.ts'

arte.command('zbackups:dumps-restore')
    .need('shell', 'drive')
    .option('-p, --plan-id <planId>', 'Plan ID')
    .option('-d, --dump-id <dumpId>', 'Dump ID to restore')
    .description('Restore a dump for a plan that uses the DumpStrategy')
    .helpGroup('zbackups')
    .action(async (options: { planId: string, dumpId: string }) => {
        const plan = await Plan.findOrFail(options.planId)

        const strategyDef = await backup.strategies.find(plan.strategy)
        const instance = new strategyDef.ctor({ plan })

        if (!(instance instanceof DumpStrategy)) {
            console.error(`Plan strategy "${plan.strategy}" does not support dumps.`)
            process.exit(1)
        }

        const dumps = await instance.list()
        const dump = dumps.find(d => d.id === options.dumpId)

        if (!dump) {
            console.error(`Dump "${options.dumpId}" not found.`)
            process.exit(1)
        }

        await instance.restore(dump)

        console.log(`Dump "${dump.id}" restored successfully.`)
    })
