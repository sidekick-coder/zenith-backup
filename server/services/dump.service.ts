
import DumpPlan from '../entities/dumpPlan.entity.ts'
import DumpJob from '../jobs/dump.job.ts'
import logger from '#server/facades/logger.facade.ts'
import scheduler from '#server/facades/scheduler.facade.ts'

export interface ExecuteOptions {
    immediate?: boolean
}

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
            scheduler.start(`zbackup:dumps:${plan.id}`)
        }
    }

    public async unload(){
        const routines = await scheduler.list()
        const backupRoutineIdList = routines.filter(routine => routine.id.startsWith('zbackup:dumps:')).map(routine => routine.id)

        await scheduler.remove(backupRoutineIdList)
    }

    public async reload(){
        await this.unload()
        await this.load()
    }

    public async execute(plan: DumpPlan, options?: ExecuteOptions){
        this.logger.info('Executing dump plan', { planId: plan.id })

        if (options?.immediate) {
            await DumpJob.dump(plan.id)
            return
        }
        
        await DumpJob.dispatch({ dump_plan_id: plan.id })
    }
}