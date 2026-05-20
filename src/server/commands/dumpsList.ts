import Plan from '../entities/PlanEntity.ts'
import arte from '#server/facades/arte.facade.ts'
import backup from '../facades/backupService.ts'
import DumpStrategy from '../strategies/DumpStrategy.ts'

arte.command('zbackups:dumps-list')
    .need('drive')
    .option('-p, --plan-id <planId>', 'Plan ID')
    .description('List dumps for a plan that uses the DumpStrategy')
    .helpGroup('zbackups')
    .action(async function (options: { planId: string }) {
        const plan = await Plan.findOrFail(options.planId)

        const strategyDef = await backup.strategies.find(plan.strategy)
        const instance = new strategyDef.ctor({ plan })

        if (!(instance instanceof DumpStrategy)) {
            console.error(`Plan strategy "${plan.strategy}" does not support dumps.`)
            process.exit(1)
        }

        const dumps = await instance.list()

        this.table(dumps, [
            { label: 'ID', value: 'id', width: 40 },
            { label: 'Size', value: d => d.size ? `${(d.size / 1024 / 1024).toFixed(2)} MB` : '0 B', width: 20 },
            { label: 'Created At', value: 'created_at', width: 40 },
        ])
    })
