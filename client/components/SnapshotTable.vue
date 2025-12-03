<script setup lang="ts">
import { ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import SnapshotRestoreDialog from './SnapshotRestoreDialog.vue'
import DataTable, { defineColumns } from '#client/components/DataTable.vue'
import { $t } from '#shared/lang.ts'
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

interface Props {
    planId: string
}

defineOptions({
    inheritAttrs: false,
})

const props = defineProps<Props>()

const snapshots = ref<Snapshot[]>([])
const loading = ref(false)
const deletingItems = ref<string[]>([])
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
        id: 'origin',
        label: $t('Origin'),
        field: 'origin'
    },
    {
        id: 'size',
        label: $t('Size'),
        field: 'humanSize'
    },
    {
        id: 'created_at',
        label: $t('Created At'),
        field: 'created_at',
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
    const snapshot = snapshots.value.find(s => s.id === id)
    if (!snapshot) return
    
    restoreDialogSnapshot.value = snapshot
}

function onRestoreDialogSubmit() {
    restoreDialogSnapshot.value = null
    load()
}

function onRestoreDialogClose() {
    restoreDialogSnapshot.value = null
}

watch(() => [props.planId], load, { immediate: true })
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
                            fetch-method="DELETE"
                            :fetch="`/api/zbackup/plans/${planId}/snapshots/${row.id}`"
                            @fetched="load"
                        >
                            <Icon name="trash" />
                        </AlertButton>
                    </div>
                </template>
            </DataTable>
        </CardContent>
    </Card>

    <!-- Restore Dialog -->
    <SnapshotRestoreDialog
        v-if="restoreDialogSnapshot"
        :snapshot="restoreDialogSnapshot"
        :plan-id="planId"
        @submit="onRestoreDialogSubmit"
        @close="onRestoreDialogClose"
    />
</template>
