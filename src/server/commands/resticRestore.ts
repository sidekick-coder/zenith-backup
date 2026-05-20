import Plan from '../entities/plan.entity.ts'
import arte from '#server/facades/arte.facade.ts'
import backup from '../facades/backup.facade.ts'
import ResticStrategy from '../strategies/ResticStrategy.ts'

arte.command('zbackups:restic-restore')
    .need('shell')
    .option('-p, --plan-id <planId>', 'Plan ID')
    .option('-s, --snapshot-id <snapshotId>', 'Snapshot ID to restore')
    .description('Restore a snapshot for a plan that uses the ResticStrategy')
    .helpGroup('zbackups')
    .action(async (options: { planId: string, snapshotId: string }) => {
        const plans = await Plan.list()

        let plan: Plan | undefined = undefined

        if (options.planId) {
            plan = plans.find(p => p.id === options.planId)
        }

        if (!plan) {
            const id = await arte.inquirer.select({
                message: 'Select a plan to restore a snapshot for:',
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

        if (!(instance instanceof ResticStrategy)) {
            console.error(`Plan strategy "${plan.strategy}" does not support restic.`)
            process.exit(1)
        }

        const snapshots = await instance.list()

        let snapshot: any = undefined

        if (options.snapshotId) {
            snapshot = snapshots.find(s => s.id === options.snapshotId)
        }

        if (!snapshot) {
            const snapshotId = await arte.inquirer.select({
                message: 'Select a snapshot to restore:',
                choices: snapshots.map(s => ({
                    name: `${s.id} - ${new Date(s.created_at).toLocaleString()} (${(s.metadata.size / 1024 / 1024).toFixed(2)} MB) ${s.metadata.description ? '- ' + s.metadata.description : ''}`,
                    value: s.id,
                }))
            })

            snapshot = snapshots.find(s => s.id === snapshotId)
        }

        if (!snapshot) {
            console.error('No snapshot selected.')
            process.exit(1)
        }

        await instance.restore(snapshot)

        console.log(`Snapshot "${snapshot.id}" restored successfully.`)
    })
