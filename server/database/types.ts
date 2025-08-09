import type { ColumnType, Generated } from 'kysely'
import type { WithSoftDelete, WithTimestamp } from '#server/database/common.ts'

export interface BackupPlanTable extends WithTimestamp, WithSoftDelete {
  id: Generated<number>
  name: string
  description: string | null
  cron: string | null
  options: ColumnType<string, never, string>
  strategy: string
}

export interface BackupPlanTargetTable extends WithTimestamp, WithSoftDelete {
  id: Generated<number>
  backup_plan_id: number
  path: string
  options: any
}

declare module '#server/database/types.ts' {
    export interface Database  {
      backup_plans: BackupPlanTable
      backup_plans_targets: BackupPlanTargetTable
    }
}
