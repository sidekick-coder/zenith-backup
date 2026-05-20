import Plan from '../entities/PlanEntity.ts'
import arte from '#server/facades/arte.facade.ts'
import backup from '../facades/backup.facade.ts'
import DumpStrategy from '../strategies/DumpStrategy.ts'

arte.command('zbackups:dumps-cleanup')
    .need('drive')
    .option('-p, --plan-id <planId>', 'Plan ID')
    .description('Remove old dumps exceeding the retention limit for a plan that uses the DumpStrategy')
    .helpGroup('zbackups')
    .action(async (options: { planId: string }) => {
        const plan = await Plan.findOrFail(options.planId)

        const strategyDef = await backup.strategies.find(plan.strategy)
        const instance = new strategyDef.ctor({ plan })

        if (!(instance instanceof DumpStrategy)) {
            console.error(`Plan strategy "${plan.strategy}" does not support dumps.`)
            process.exit(1)
        }

        await instance.cleanup()

        console.log('Cleanup completed successfully.')
    })
