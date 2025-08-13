<script setup lang="ts">
import { ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import DataTable, { defineColumns } from '#client/components/DataTable.vue'
import { $t } from '#shared/lang.ts'
import { $fetch } from '#client/utils/fetcher.ts'
import { tryCatch } from '#shared/tryCatch.ts'
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
import type Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'

interface Props {
    planId: number
    targetId?: number
}

const props = defineProps<Props>()

const snapshots = ref<Snapshot[]>([])
const loading = ref(false)
const deletingItems = ref<string[]>([])
const restoringItems = ref<string[]>([])

const columns = defineColumns<Snapshot>([
    {
        id: 'id',
        header: $t('Snapshot ID'),
        accessorKey: 'id'
    },
   
    {
        id: 'created_at',
        header: $t('Created At'),
        accessorKey: 'created_at',
        cell: ({ getValue }) => new Date(getValue() as string).toLocaleString()
    },
    { id: 'actions' }
])

if (!props.targetId) {
    columns.splice(1,0,{
        id: 'target_id',
        header: $t('Target ID'),
        accessorKey: 'target_id',
        size: 30,
    })
}

async function load() {
    loading.value = true

    const url = `/api/backup/plans/${props.planId}/snapshots`

    const [error, response] = await tryCatch(() => $fetch<{ data: Snapshot[] }>(url, { method: 'GET' }))

    if (error) {
        console.error('Failed to load snapshots:', error)
        loading.value = false
        return
    }

    let items = response.data || []

    if (props.targetId) {
        items = items.filter(item => item.target_id === props.targetId)
    }

    snapshots.value = items

    loading.value = false
}

async function deleteSnapshot(id: string) {
    deletingItems.value.push(id)
    
    const [error] = await tryCatch(() => $fetch(`/api/backup/plans/${props.planId}/snapshots`, {
        method: 'DELETE',
        data: { snapshotId: id } 
    }))

    if (error) {
        deletingItems.value = deletingItems.value.filter(item => item !== id)
        return
    }

    setTimeout(() => {
        toast.success($t('Deleted successfully.'))
        deletingItems.value = deletingItems.value.filter(item => item !== id)
        load()
    }, 1000)
}

async function restore(id: string) {
    restoringItems.value.push(id)

    const [error] = await tryCatch(() => $fetch(`/api/backup/plans/${props.planId}/restore`, {
        method: 'POST',
        data: { snapshotId: id } 
    }))

    if (error) {
        restoringItems.value = restoringItems.value.filter(item => item !== id)
        return
    }

    setTimeout(() => {
        toast.success($t('Snapshot restored successfully.'))
        restoringItems.value = restoringItems.value.filter(item => item !== id)
    }, 1000)
}

watch(() => [props.planId, props.targetId], load, { immediate: true })
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
                <Button @click="load">
                    <Icon name="refreshCw" />
                    {{ $t('Refresh') }}
                </Button>
            </div>
        </CardHeader>
        <CardContent>
            <DataTable
                :rows="snapshots"
                :columns="columns"
                :loading="loading"
            >
                <template #row-actions="{ row }">
                    <div class="flex items-center gap-2 justify-end">
                        <AlertButton
                            variant="default"
                            size="sm"
                            :description="$t('This action can not be stopped once started.')"
                            :loading="restoringItems.includes(row.id)"
                            @confirm="restore(row.id)"
                        >
                            {{ $t('Restore') }}
                        </AlertButton>
                        <AlertButton
                            variant="destructive"
                            size="sm"
                            
                            :loading="deletingItems.includes(row.id)"
                            @confirm="deleteSnapshot(row.id)"
                        >
                            {{ $t('Delete') }}
                        </AlertButton>
                    </div>
                </template>
            </DataTable>
        </CardContent>
    </Card>
</template>
