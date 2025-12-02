
import path from 'path'
import fs from 'fs'
import { format } from 'date-fns'
import DumpPlan from '../entities/dumpPlan.entity.ts'
import PgDumpStrategy from '../strategies/pgDump.strategy.ts'
import type DumpGateway from '../gateways/dump.gateway.ts'
import ConnectionDumpStrategy from '../strategies/connectionDump.strategy.ts'
import logger from '#server/facades/logger.facade.ts'
import scheduler from '#server/facades/scheduler.facade.ts'
import { storagePath } from '#server/utils/paths.ts'
import { cuid } from '#server/utils/cuid.util.ts'

export interface ExecuteOptions {
    immediate?: boolean
}

export default class DumpService {
    public logger = logger.child({ label: 'dumps' })
    public strategies: Record<string, typeof DumpGateway> = {
        'postgres': PgDumpStrategy,
        'connection': ConnectionDumpStrategy,
    }

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
        this.logger.info('execute dump plan', {
            plan,
            options
        })

        const StrategyClass = this.strategies[plan.type]

        if (!StrategyClass) {
            throw new Error(`Dump strategy '${plan.type}' not found`)
        }

        const strategy = new StrategyClass(plan.config)

        const folder = storagePath('dumps', cuid())
        const filename = path.join(folder, 'dump.sql')

        fs.mkdirSync(folder, { recursive: true })

        await strategy.dump(filename)

        const entries = fs.readdirSync(folder)

        if (!entries.length) {
            fs.rmSync(folder, { 
                recursive: true, 
                force: true 
            })

            throw new Error('Dump file was not created')
        }

        const metadata = {
            plan_id: plan.id,
            created_at: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
        }

        await fs.promises.writeFile(path.join(folder, 'metadata.json'), JSON.stringify(metadata, null, 4), 'utf-8')

        logger.info('Dump created successfully', {
            plan_id: plan.id,
            folder,
            filename
        })
    }
}