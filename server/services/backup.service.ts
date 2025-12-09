import { format } from 'date-fns'
import StrategyService from './strategy.service.ts'
import SnapshotService from './snapshots.service.ts'
import Plan from '#zenith-backup/server/entities/plan.entity.ts'
import BaseException from '#server/exceptions/base.ts'
import { tryCatch } from '#shared/utils/tryCatch.ts'
import logger from '#server/facades/logger.facade.ts'
import type Target from '#zenith-backup/shared/entities/target.entity.ts'
import scheduler from '#server/facades/scheduler.facade.ts'
import emmitter from '#server/facades/emmitter.facade.ts'
import { $t } from '#shared/lang.ts'

export default class BackupService {
    public strategies: StrategyService
    public snapshots: SnapshotService
    public logger = logger.child({ label: 'backup' })
    public debug = false

    constructor(data: Partial<BackupService> = {}) {
        this.strategies = data.strategies || new StrategyService()
        this.snapshots = data.snapshots || new SnapshotService(this.strategies)
    }

    public async load(){
        let plans = await Plan.list()
            
        plans = plans.filter(plan => plan.active)

        
        for (const plan of plans) {
            if (!plan.triggers) continue            

            for (const trigger of plan.triggers) {
                

                if (trigger.type === 'cron' && trigger.cron) {
                    const id = `${Plan.TRIGGER_PREFIX}:${plan.id}:${trigger.id}`

                    const cb = () => this.backup(plan, {
                        description: format(new Date(), 'yyyy-MM-dd HH:mm'),
                        origin: 'automated',
                        trigger_type: 'cron',
                        trigger_id: trigger.id,
                    })

                    scheduler.add(trigger.cron, cb, { id })
                    scheduler.start(id)
                }

                if (trigger.type === 'event' && trigger.events) {
                    const id = `${Plan.TRIGGER_PREFIX}:${plan.id}:${trigger.id}`

                    
                    for (const event of trigger.events) {
                        const cb = (eventPayload: any) => this.backup(plan, {
                            ...eventPayload,
                            description: `event:${event}`,
                            origin: 'automated',
                            trigger_type: 'event',
                            trigger_id: trigger.id,
                        })

                        emmitter.on(event, cb, {  id: `${id}:${event}` })
                    }
                }
            }
        }
    }

    public async unload(){
        const routines = await scheduler.list()
    
        const routineIds = routines
            .filter(routine => routine.id.startsWith(Plan.TRIGGER_PREFIX))
            .map(routine => routine.id)

        if (routineIds.length) {
            await scheduler.remove(routineIds)
        }

        const handlers = await emmitter.list()

        const handlerIds = handlers
            .filter(handler => handler.id.startsWith(Plan.TRIGGER_PREFIX))
            .map(handler => handler.id)

        if (handlerIds.length){
            await emmitter.remove(handlerIds)
        }

    }
    
    public async reload(){
        await this.unload()
        await this.load()
    }

    public async backup(plan: Plan, metadata?: Record<string, unknown>) {
        const Strategy = await this.strategies.find(plan.strategy)

        const instance = new Strategy(plan.config, plan)

        const [error] = await tryCatch(() => instance.backup(metadata || {}))

        if (error) {
            this.logger.error(error)

            throw new BaseException('backup failed')
        }

        this.logger.info('backup completed successfully', {
            plan_id: plan.id,
            plan_name: plan.name,
            metadata
        })
    }

    public async restore(planId: Target['plan_id'], snapshotId: string, restore_folder?: string) {
        // const snapshots = await this.list(planId)
        // const snapshot = snapshots.find(s => s.id === snapshotId)
        // const plan = await findPlan(planId)
        // const targets = await findPlanTargets(planId)
        // const target = await findTarget(snapshot!.target_id ?? '')
        // const strategy = this.findStrategy(plan)

        // if (!snapshot) {
        //     throw new BaseException('Snapshot not found', 404)
        // }
        
        // const [error] = await tryCatch(() => strategy.restore({
        //     plan,
        //     targets,
        //     target,
        //     snapshot,
        //     restore_folder
        // }))

        // if (error) {
        //     logger.error(error)

        //     console.log(error)

        //     throw new BaseException('Restore failed')
        // }

        // logger.info('Backup completed successfully', {
        //     plan,
        //     snapshot
        // })
    }

    public async delete(planId: Target['plan_id'], snapshotId: string) {
        // const snapshots = await this.list(planId)
        // const snapshot = snapshots.find(s => s.id === snapshotId)
        // const plan = await findPlan(planId)
        // const targets = await findPlanTargets(planId)
        // const target = await findTarget(snapshot!.target_id ?? '')

        // if (!snapshot){
        //     throw new BaseException('Snapshot not found', 404)
        // }

        // const strategy = this.findStrategy(plan)
        
        // const [error] = await tryCatch(() => strategy.delete({
        //     plan,
        //     targets,
        //     snapshot,
        //     target
        // }))

        // if (error) {
        //     logger.error(error)

        //     console.log(error)

        //     throw new BaseException('Delete failed')
        // }

        // logger.info('Snapshot deleted successfully', {
        //     plan,
        //     target,
        //     snapshotId 
        // })
    }
}
