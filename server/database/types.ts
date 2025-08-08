import type { Generated } from 'kysely'
import type { WithSoftDelete, WithTimestamp } from '#server/database/common.ts'

export interface BackupPlanTable extends WithTimestamp, WithSoftDelete {
  id: Generated<number>
  name: string
}

declare module '#server/database/types.ts' {
    export interface Database  {
      backup_plans: BackupPlanTable
    }
}
