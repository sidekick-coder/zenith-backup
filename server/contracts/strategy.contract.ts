import type BackupPlanTarget from '../entity/backup-plan-target.entity'
import type BackupPlan from '../entity/backup-plan.entity'

export default interface BackupStrategy {
    run(plan: BackupPlan, targets: BackupPlanTarget[]): Promise<void>;   
}