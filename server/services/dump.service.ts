
import path from 'path'
import fs from 'fs'
import { format } from 'date-fns'
import DumpPlan from '../entities/dumpPlan.entity.ts'
import PgDumpStrategy from '../strategies/pgDump.strategy.ts'
import type DumpGateway from '../gateways/dump.gateway.ts'
import ConnectionDumpStrategy from '../strategies/connectionDump.strategy.ts'
import SQLiteDumpStrategy from '../strategies/sqliteDump.strategy.ts'
import Dump from '#zenith-backup/shared/entities/dump.entity.ts'
import logger from '#server/facades/logger.facade.ts'
import scheduler from '#server/facades/scheduler.facade.ts'
import { storagePath } from '#server/utils/paths.ts'
import { cuid } from '#server/utils/cuid.util.ts'

export interface ExecuteOptions {
    origin?: string
    label?: string
    description?: string
}

export default class DumpService {
    public logger = logger.child({ label: 'dumps' })
    public strategies: Record<string, typeof DumpGateway> = {
        'postgres': PgDumpStrategy,
        'connection': ConnectionDumpStrategy,
        'sqlite': SQLiteDumpStrategy,
    }

    public async listDumps(){
        if (!fs.existsSync(storagePath('dumps'))) {
            return []
        }

        const folders = await fs.promises.readdir(storagePath('dumps'))
        const plans = await DumpPlan.list()
        const dumps = [] as Dump[]

        for (const folder of folders) {
            const id = folder
            const filepath = path.join(storagePath('dumps'), folder)
            const metadataPath = path.join(storagePath('dumps', folder), 'metadata.json')

            if (!fs.existsSync(metadataPath)) {
                this.logger.warn('Dump folder without metadata found, skipping', { folder })
                continue
            }

            const metadataContent = await fs.promises.readFile(metadataPath, 'utf-8')
            const metadata = JSON.parse(metadataContent)

            const plan = plans.find(p => p.id === metadata.plan_id) || null

            dumps.push(new Dump({
                ...metadata,
                filepath,
                id: id,
                plan,
            }))
        }

        return dumps
    }

    public async destroyDump(dump: Dump){
        if (fs.existsSync(dump.filepath)) {
            fs.rmSync(dump.filepath, { 
                recursive: true, 
                force: true 
            })

            this.logger.info('Dump deleted successfully', {
                dump_id: dump.id,
            })
        }
        
        this.logger.warn('Dump folder not found, cannot delete', {
            dump_id: dump.id,
        })
    }

    public async load(){
        let plans = await Plan.list()
        
        plans = plans.filter(plan => plan.active && plan.valid && plan.cron)

        for (const plan of plans) {            
            scheduler.add(plan.routineId, plan.cron!, () => this.execute(plan, {
                label: `Automated dump from plan '${plan.name}'`,
                description: `Automated dump executed from dump plan '${plan.name}'`,
                origin: 'automated',
            }))

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

        const stats = fs.statSync(filename)

        const metadata = {
            plan_id: plan.id,
            origin: options?.origin || 'unknown',
            size: stats.size,
            label: options?.label || null,
            description: options?.description || null,
            created_at: format(new Date(), 'yyyy-MM-dd HH:mm'),
        }

        await fs.promises.writeFile(path.join(folder, 'metadata.json'), JSON.stringify(metadata, null, 4), 'utf-8')

        logger.info('Dump created successfully', {
            plan_id: plan.id,
            folder,
            filename
        })

        await this.cleanup(plan)
    }

    public async cleanup(plan: DumpPlan){
        if (plan.max == null) {
            return
        }

        let dumps = await this.listDumps()

        dumps = dumps
            .filter(dump => dump.plan_id === plan.id)
            .filter(dump => dump.origin === 'automated')

        dumps.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())

        const toDelete = dumps.length - plan.max

        if (toDelete <= 0) {
            return
        }

        for (let i = 0; i < toDelete; i++) {
            const dump = dumps[i]
            const dumpPath = dump.filepath

            fs.rmSync(dumpPath, { 
                recursive: true, 
                force: true 
            })

            this.logger.info('Deleted old dump', {
                dump_id: dump.id,
                plan_id: plan.id,
            })
        }

    }
}