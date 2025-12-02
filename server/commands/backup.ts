
import { program } from 'commander'
import backup from '../facades/backup.facade.ts'
import Plan from '../entities/plan.entity.ts'
import cli from '#server/services/cli.service.ts'

program.command('zbackups:backup')
    .option('-p, --plan-id <planId>', 'Dump plan ID to execute')
    .description('Execute a raw SQL query')
    .helpGroup('zbackups')
    .action(cli.with('all', async (options: { planId: string }) => {
        const plan = await Plan.findOrFail(options.planId)
        
        await backup.backup(plan)
    }))
