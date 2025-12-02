
import { program } from 'commander'
import DumpJob from '../jobs/dump.job.ts'
import cli from '#server/services/cli.service.ts'
import logger from '#server/facades/logger.facade.ts'


program.command('zbackups:dump')
    .option('-p, --plan-id <planId>', 'Dump plan ID to execute')
    .description('Execute a raw SQL query')
    .helpGroup('zbackups')
    .action(cli.with('all', async (options: { planId: string }) => {
        const result = await DumpJob.dump(options.planId)

        logger.info('Database dump created', result)
    }))
