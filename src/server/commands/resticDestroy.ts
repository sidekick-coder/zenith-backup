import Plan from '../entities/plan.entity.ts'
import arte from '#server/facades/arte.facade.ts'
import backup from '../facades/backup.facade.ts'
import ResticStrategy from '../strategies/ResticStrategy.ts'

arte.command('zbackups:restic-destroy')
    .need('shell')
    .option('-p, --plan-id <planId>', 'Plan ID')
    .option('-s, --snapshot-id <snapshotId>', 'Snapshot ID to destroy')
    .description('Delete a specific snapshot for a plan that uses the ResticStrategy')
    .helpGroup('zbackups')
    .action(async (options: { planId: string, snapshotId: string }) => {
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

        if (!(instance instanceof ResticStrategy)) {
            console.error(`Plan strategy "${plan.strategy}" does not support restic.`)
            process.exit(1)
        }

        const snapshots = await instance.list()

        let snapshotId: string | undefined = options.snapshotId

        if (!snapshotId) {
            snapshotId = await arte.inquirer.select({
                message: 'Select a snapshot to delete:',
                choices: snapshots.map(s => ({
                    name: `${s.id} - ${new Date(s.created_at).toLocaleString()} (${s.size} bytes) ${s.metadata.description ? '- ' + s.metadata.description : ''}`,
                    value: s.id,
                }))
            })
        }

        const snapshot = snapshots.find(s => s.id === snapshotId)

        if (!snapshot) {
            console.error(`Snapshot "${options.snapshotId}" not found.`)
            process.exit(1)
        }

        await instance.destroy(snapshot)

        console.log(`Snapshot "${snapshot.id}" deleted successfully.`)
    })
