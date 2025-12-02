import DumpPlan from '../entities/dumpPlan.entity.ts'
import dumpService from '../facades/dumpService.facade.ts'
import Job from '#server/entities/job.entity.ts'

export default class DumpJob extends Job {
    public async handle(data: any) {
        const id = data.dump_plan_id

        const plan = await DumpPlan.findOrFail(id)

        await dumpService.execute(plan)
    }
}