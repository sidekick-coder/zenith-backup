import type BackupPlanTarget from '../../shared/entities/target.entity'
import type BackupPlan from '../../shared/entities/plan.entity'

export interface RunPayload {
    plan: BackupPlan
    targets: BackupPlanTarget[]
}

export default interface BackupStrategy {
    run(payload: RunPayload): Promise<void>;   
}