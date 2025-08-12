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
    planId: string
    targetId?: number
}

const props = defineProps<Props>()

const snapshots = ref<Snapshot[]>([])
const loading = ref(false)
const deletingItems = ref<number[]>([])
const restoringItems = ref<number[]>([])

const columns = defineColumns<Snapshot>([
    {
        id: 'id',
        header: 'ID',
        accessorKey: 'id',
        size: 20,
    },
    {
        id: 'snapshot_id',
        header: $t('Snapshot ID'),
        accessorKey: 'snapshot_id'
    },
    {
        id: 'target_id',
        header: $t('Target ID'),
        accessorKey: 'target_id',
        size: 30,
    },
    {
        id: 'created_at',
        header: $t('Created At'),
        accessorKey: 'created_at',
        cell: ({ getValue }) => new Date(getValue() as string).toLocaleString()
    },
    { id: 'actions' }
])

async function loadSnapshots() {
    loading.value = true
    
    const params = new URLSearchParams()
    if (props.targetId) {
        params.append('targetId', props.targetId.toString())
    }

    const queryString = params.toString()
    const url = `/api/backup/plans/${props.planId}/snapshots${queryString ? '?' + queryString : ''}`
    
    const [error, response] = await tryCatch(() => $fetch(url, { method: 'GET' }))

    if (error) {
        console.error('Failed to load snapshots:', error)
        loading.value = false
        return
    }

    snapshots.value = (response as any).data || []
    loading.value = false
}

async function deleteSnapshot(id: number) {
    deletingItems.value.push(id)
    
    const [error] = await tryCatch(() => $fetch(`/api/backup/plans/${props.planId}/snapshots/${id}`, { method: 'DELETE' }))

    if (error) {
        toast.error($t('Failed to delete.'))
        deletingItems.value = deletingItems.value.filter(item => item !== id)
        return
    }

    setTimeout(() => {
        toast.success($t('Deleted successfully.'))
        deletingItems.value = deletingItems.value.filter(item => item !== id)
        loadSnapshots()
    }, 1000)
}

async function restoreSnapshot(id: number) {
    restoringItems.value.push(id)
    
    const [error] = await tryCatch(() => $fetch(`/api/backup/plans/${props.planId}/snapshots/${id}/restore`, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }))

    if (error) {
        toast.error($t('Failed to restore snapshot.'))
        restoringItems.value = restoringItems.value.filter(item => item !== id)
        return
    }

    setTimeout(() => {
        toast.success($t('Snapshot restored successfully.'))
        restoringItems.value = restoringItems.value.filter(item => item !== id)
    }, 1000)
}

watch(() => [props.planId, props.targetId], loadSnapshots, { immediate: true })
</script>

<template>
    <Card class="mt-6">
        <CardHeader>
            <div class="flex items-center justify-between">
                <div>
                    <CardTitle>{{ $t('Snapshots') }}</CardTitle>
                    <CardDescription>
                        {{ $t('View and manage snapshots for this plan.') }}
                    </CardDescription>
                </div>
                <Button @click="loadSnapshots">
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
                            :loading="restoringItems.includes(row.id)"
                            @confirm="restoreSnapshot(row.id)"
                        >
                            <Icon name="rotateCcw" />
                            {{ $t('Restore') }}
                        </AlertButton>
                        <AlertButton
                            variant="ghost"
                            size="sm"
                            :loading="deletingItems.includes(row.id)"
                            @confirm="deleteSnapshot(row.id)"
                        >
                            <Icon name="trash" />
                        </AlertButton>
                    </div>
                </template>
            </DataTable>
        </CardContent>
    </Card>
</template>
