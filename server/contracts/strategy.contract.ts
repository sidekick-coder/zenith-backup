import type BackupPlanTarget from '../../shared/entities/plan-target.entity'
import type BackupPlan from '../../shared/entities/plan.entity'

export default interface BackupStrategy {
    run(plan: BackupPlan, targets: BackupPlanTarget[]): Promise<void>;   
}