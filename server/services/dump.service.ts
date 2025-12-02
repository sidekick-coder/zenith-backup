
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
        let plans = await DumpPlan.list()
        
        plans = plans.filter(plan => plan.active && plan.valid && plan.cron)

        for (const plan of plans) {            
            scheduler.add(plan.routineId, plan.cron!, () => this.execute(plan))

            scheduler.start(plan.routineId)
        }
    }

    public async unload(){
        const routines = await scheduler.list()

        const ids = routines
            .filter(routine => routine.id.startsWith(DumpPlan.ROUTINE_PREFIX))
            .map(routine => routine.id)

        await scheduler.remove(ids)
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