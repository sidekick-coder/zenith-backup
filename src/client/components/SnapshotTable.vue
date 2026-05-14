<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import { format } from 'date-fns'
import SnapshotRestoreDialog from './SnapshotRestoreDialog.vue'
import DataTable, { defineColumns } from '#client/components/DataTable.vue'

import { $fetch } from '#client/utils/fetcher.ts'
import { tryCatch } from '#shared/utils/tryCatch.ts'
import Button from '#client/components/Button.vue'
import Icon from '#client/components/Icon.vue'
import AlertButton from '#client/components/AlertButton.vue'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '#client/components/ui/card'
import Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'
import ObjectInspect from '#client/components/ObjectInspect.vue'
import DropdownMenu from '#client/components/ui/dropdown-menu/DropdownMenu.vue'
import DropdownMenuTrigger from '#client/components/ui/dropdown-menu/DropdownMenuTrigger.vue'
import DropdownMenuItem from '#client/components/ui/dropdown-menu/DropdownMenuItem.vue'
import DropdownMenuContent from '#client/components/ui/dropdown-menu/DropdownMenuContent.vue'

interface Props {
    planId: string
}

defineOptions({
    inheritAttrs: false,
})

const props = defineProps<Props>()

const snapshots = ref<Snapshot[]>([])
const loading = ref(false)
const inspect = ref<Record<string, any>>()
const restoreDialogSnapshot = ref<Snapshot | null>(null)

const columns = defineColumns<Snapshot>([
    {
        id: 'id',
        label: $t('Snapshot ID'),
        field: 'id'
    },
    {
        id: 'description',
        label: $t('Description'),
        field: 'description'
    },
    {
        id: 'trigger',
        label: $t('Trigger'),
        field: 'trigger_type'
    },
    {
        id: 'size',
        label: $t('Size'),
        field: 'humanSize'
    },
    {
        id: 'created_at',
        label: $t('Created At'),
        field: row => row.created_at ? format(new Date(row.created_at), 'yyyy-MM-dd HH:mm:ss') : '-',
    },
    { id: 'actions' }
])

async function load() {
    loading.value = true

    const url = `/api/zbackup/plans/${props.planId}/snapshots`

    const [error, response] = await $fetch.try<{ items: Snapshot[] }>(url, { method: 'GET' })

    if (error) {
        loading.value = false
        return
    }

    const items = response.items || []

    snapshots.value = items.map(item => new Snapshot(item))

    setTimeout(() => {
        loading.value = false
    }, 500)
}
onMounted(load)
</script>

<template>
    <Card>
        <CardHeader>
            <div class="flex items-center justify-between">
                <div>
                    <CardTitle>{{ $t('Snapshots') }}</CardTitle>
                    <CardDescription>
                        {{ $t('View and manage snapshots for this plan.') }}
                    </CardDescription>
                </div>
                <Button
                    variant="outline"
                    
                    @click="load"
                >
                    <Icon
                        name="refreshCw"
                        :class="{ 'animate-spin': loading }"
                    />
                </Button>
            </div>
        </CardHeader>
        <CardContent>
            <ObjectInspect
                v-if="inspect"
                :model-value="inspect"
                :open="true"
                @update:open="val => { if (!val) inspect = undefined }"
            >
                <div class="hidden" />
            </ObjectInspect>
            <DataTable
                :rows="snapshots"
                :columns="columns"
                :loading="loading"
            >
                <template #row-actions="{ row }">
                    <div class="flex items-center gap-2 justify-end">
                        <!-- <Button
                            variant="default"
                            size="sm"
                            @click="restore(row.id)"
                        >
                            {{ $t('Restore') }}
                        </Button> -->                      

                        <AlertButton
                            variant="ghost"
                            size="sm"
                            fetch-method="POST"
                            :fetch="`/api/zbackup/plans/${planId}/snapshots/${row.id}/restore`"
                            :tooltip="$t('Restore this snapshot')"
                            :description="$t('Are you sure you want to restore this snapshot? This action cannot be stopped.')"
                            :toast-on-success="$t('Restore successfully.')"
                            @fetched="load"
                        >
                            <Icon name="TimerReset" />
                        </AlertButton>
                        
                        <AlertButton
                            variant="ghost"
                            size="sm"
                            fetch-method="DELETE"
                            :fetch="`/api/zbackup/plans/${planId}/snapshots/${row.id}`"
                            @fetched="load"
                        >
                            <Icon name="trash" />
                        </AlertButton>

                        <DropdownMenu>
                            <DropdownMenuTrigger as-child>
                                <Button
                                    variant="ghost"
                                    class="w-8 h-8 p-0"
                                >
                                    <span class="sr-only">{{ $t('More') }}</span>
                                    <Icon
                                        name="MoreVertical"
                                        class="w-3 h-3 sm:w-4 sm:h-4"
                                    />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent class="max-h-60 overflow-y-auto">
                                <DropdownMenuItem
                                    class="cursor-pointer"
                                    @click="inspect = row.metadata"
                                >
                                    {{ $t('Metadata') }}
                                </DropdownMenuItem>
                                
                                <DropdownMenuItem
                                    class="cursor-pointer"
                                    @click="inspect = row.data"
                                >
                                    {{ $t('Data') }}
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </template>
            </DataTable>
        </CardContent>
    </Card>
</template>
