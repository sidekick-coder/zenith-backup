import type Target from '#zenith-backup/shared/entities/target.entity.ts'
import type Plan from '#zenith-backup/shared/entities/plan.entity.ts'
import type Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'

export interface BackupPayload {
    plan: Plan
    targets: Target[]
}

export interface ListPayload {
    plan: Plan 
}

export interface RestorePayload {
    plan: Plan
    snapshot: Snapshot
    target: Target
    restore_folder?: string
}

export interface DeletePayload {
    plan: Plan
    snapshot: Snapshot
    target: Target
}

export default interface BackupStrategy {
    list(payload: ListPayload): Promise<Snapshot[]>;
    backup(payload: BackupPayload): Promise<void>;
    restore(payload: RestorePayload): Promise<void>;
    delete(payload: DeletePayload): Promise<void>;
}