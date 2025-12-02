
import { program } from 'commander'
import dumpService from '../facades/dumpService.facade.ts'
import DumpPlan from '../entities/dumpPlan.entity.ts'
import cli from '#server/services/cli.service.ts'

program.command('zbackups:dump')
    .option('-p, --plan-id <planId>', 'Dump plan ID to execute')
    .description('Execute a raw SQL query')
    .helpGroup('zbackups')
    .action(cli.with('all', async (options: { planId: string }) => {
        const plan = await DumpPlan.findOrFail(options.planId)
        
        await dumpService.execute(plan)
    }))
