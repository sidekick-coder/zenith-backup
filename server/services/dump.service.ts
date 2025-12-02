
import DumpPlan from '../entities/dumpPlan.entity.ts'
import logger from '#server/facades/logger.facade.ts'
import scheduler from '#server/facades/scheduler.facade.ts'

export default class DumpService {
    public logger = logger.child({ label: 'dumps' })

    public async load(){
        const plans = await DumpPlan.list()

        for (const plan of plans) {
            if (!plan.cron) {
                this.logger.warn('Plan without cron expression found', { planId: plan.id })
                continue
            }

            scheduler.add(`zbackup:dumps:${plan.id}`, plan.cron!, () => this.execute(plan))
        }
    }

    public async unload(){
        const routines = await scheduler.list()

        for (const routine of routines) {
            if (!routine.id.startsWith('zbackup:dumps:')) {
                continue
            }

            await scheduler.remove(routine.id)
        }
    }

    public async execute(plan: DumpPlan){
        this.logger.info('Executing dump plan', { planId: plan.id })
        // Dump logic goes here
    }
}