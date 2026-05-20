import Plan from '../entities/PlanEntity.ts'
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
        const plans = await Plan.list()

        let plan: Plan | undefined = undefined

        if (options.planId) {
            plan = plans.find(p => p.id === options.planId)
        }

        if (!plan) {
            const id = await arte.inquirer.select({
                message: 'Select a plan to restore a dump for:',
                choices: plans.map(p => ({ name: `${p.name} (${p.id})`, value: p.id }))
            })

            plan = plans.find(p => p.id === id)
        }

        if (!plan) {
            console.error('No plan selected.')
            process.exit(1)
        }


        const strategyDef = await backup.strategies.find(plan.strategy)
        const instance = new strategyDef.ctor({ plan })

        if (!(instance instanceof DumpStrategy)) {
            console.error(`Plan strategy "${plan.strategy}" does not support dumps.`)
            process.exit(1)
        }

        const dumps = await instance.list()

        let dump: any = undefined

        if (options.dumpId) {
             dump = dumps.find(d => d.id === options.dumpId)
        }

        if (!dump) {
             const dumpId = await arte.inquirer.select({
                message: 'Select a dump to restore:',
                choices: dumps.map(d => ({ 
                    name: `${d.id} - ${new Date(d.created_at).toLocaleString()} (${d.size} bytes) ${d.metadata.description ? '- ' + d.metadata.description : ''}`,
                    value: d.id, 
                }))
            })

             dump = dumps.find(d => d.id === dumpId)
        }

        if (!dump) {
            console.error('No dump selected.')
            process.exit(1)
        }

        if (!dump) {
            console.error(`Dump "${options.dumpId}" not found.`)
            process.exit(1)
        }

        await instance.restore(dump)

        console.log(`Dump "${dump.id}" restored successfully.`)
    })
