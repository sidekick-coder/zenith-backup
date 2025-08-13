import type { Generated } from 'kysely'
import type { WithSoftDelete, WithTimestamp } from '#server/database/common.ts'

export interface PlanTable extends WithTimestamp, WithSoftDelete {
  id: Generated<number>
  name: string
  description: string | null
  active: boolean
  cron: string | null
  options: string
  strategy: string
}

export interface TargetTable extends WithTimestamp, WithSoftDelete {
  id: Generated<number>
  backup_plan_id: number
  path: string
  metadata: string
}

export interface TargetMetaTable {
  id: Generated<number>
  target_id: number
  name: string
  value: string | null
}

declare module '#server/database/types.ts' {
    export interface Database  {
      backup_plans: PlanTable
      backup_targets: TargetTable
      backup_target_metas: TargetMetaTable
    }
}
