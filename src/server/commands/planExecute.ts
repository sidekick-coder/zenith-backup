import backup from '../facades/backupService.ts'
import Plan from '../entities/PlanEntity.ts'
import arte from '#server/facades/arte.facade.ts'

arte.command('zbackups:plan-execute')
    .need('shell', 'drive')
    .option('-p, --plan-id <planId>', 'Plan ID to execute')
    .option('-d, --description <description>', 'Description for the backup')
    .description('Execute a raw SQL query')
    .helpGroup('zbackups')
    .action(async (options: { planId: string, description?: string }) => {
        const plans = await Plan.list()
        let plan: Plan | undefined = undefined

        if (options.planId) {
            plan = plans.find(p => p.id === options.planId)
        }

        if (!plan) {
            const id = await arte.inquirer.select({
                message: 'Select a plan to execute:',
                choices: plans.map(p => ({ 
                    name: `${p.name} (ID: ${p.id})`,
                    value: p.id 
                }))
            })

            plan = plans.find(p => p.id === id)
        }

        if (!plan) {
            console.error('No plan selected.')
            process.exit(1)
        }

        await backup.execute(plan, {
            trigger_type: 'manual',
            description: options.description || 'Manual backup executed from CLI',
        })
    })
