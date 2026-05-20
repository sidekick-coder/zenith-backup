import Plan from '../entities/PlanEntity.ts'
import arte from '#server/facades/arte.facade.ts'
import backup from '../facades/backup.facade.ts'
import ResticStrategy from '../strategies/ResticStrategy.ts'

arte.command('zbackups:restic-list')
    .need('shell')
    .option('-p, --plan-id <planId>', 'Plan ID')
    .description('List snapshots for a plan that uses the ResticStrategy')
    .helpGroup('zbackups')
    .action(async function (options: { planId: string }) {
        const plan = await Plan.findOrFail(options.planId)

        const strategyDef = await backup.strategies.find(plan.strategy)
        const instance = new strategyDef.ctor({ plan })

        if (!(instance instanceof ResticStrategy)) {
            console.error(`Plan strategy "${plan.strategy}" does not support restic.`)
            process.exit(1)
        }

        const snapshots = await instance.list()

        this.table(snapshots, [
            { label: 'ID', value: 'id', width: 20 },
            { label: 'Size', value: s => s.metadata.size ? `${(s.metadata.size / 1024 / 1024).toFixed(2)} MB` : '0 B', width: 20 },
            { label: 'Created At', value: 'created_at', width: 40 },
        ])
    })
