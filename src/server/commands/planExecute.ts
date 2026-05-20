import backup from '../facades/backup.facade.ts'
import Plan from '../entities/plan.entity.ts'
import arte from '#server/facades/arte.facade.ts'

arte.command('zbackups:plan-execute')
    .need('shell', 'drive')
    .option('-p, --plan-id <planId>', 'Plan ID to execute')
    .option('-d, --description <description>', 'Description for the backup')
    .description('Execute a raw SQL query')
    .helpGroup('zbackups')
    .action(async (options: { planId: string, description?: string }) => {
        const plan = await Plan.findOrFail(options.planId)

        await backup.execute(plan, {
            trigger_type: 'manual',
            description: options.description || 'Manual backup executed from CLI',
        })
    })
