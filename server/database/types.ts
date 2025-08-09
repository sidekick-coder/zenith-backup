import type { ColumnType, Generated } from 'kysely'
import type { WithSoftDelete, WithTimestamp } from '#server/database/common.ts'

export interface PlanTable extends WithTimestamp, WithSoftDelete {
  id: Generated<number>
  name: string
  description: string | null
  cron: string | null
  options: string
  strategy: string
}

export interface PlanTargetTable extends WithTimestamp, WithSoftDelete {
  id: Generated<number>
  backup_plan_id: number
  path: string
  options: any
}

export interface PlanDestinationTable extends WithTimestamp, WithSoftDelete {
  id: Generated<number>
  backup_plan_id: number
  type: string
  options: any
}

declare module '#server/database/types.ts' {
    export interface Database  {
      backup_plans: PlanTable
      backup_plans_targets: PlanTargetTable
      backup_plan_destinations: PlanDestinationTable
    }
}
