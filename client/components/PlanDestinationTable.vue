<script setup lang="ts">
import { ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import DestinationDialog from './DestinationDialog.vue'
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
import type Destination from '#modules/zenith-backup/shared/entities/destination.entity.ts'

interface Props {
    planId: string
}

const props = defineProps<Props>()

const destinations = ref<Destination[]>([])
const loading = ref(false)
const deletingItems = ref<number[]>([])
const editingDestination = ref<Destination | null>(null)
const showCreateDialog = ref(false)
const showEditDialog = ref(false)

const columns = defineColumns<Destination>([
    {
        id: 'id',
        header: 'ID',
        accessorKey: 'id',
        size: 20,
    },
    {
        id: 'drive_id',
        header: $t('Drive ID'),
        accessorKey: 'drive_id'
    },
    {
        id: 'folder',
        header: $t('Folder'),
        accessorKey: 'folder'
    },
    { id: 'actions' }
])

async function loadDestinations() {
    loading.value = true
    
    const [error, response] = await tryCatch(() => $fetch(`/api/backup/plans/${props.planId}/destinations`, { method: 'GET', }))

    if (error) {
        console.error('Failed to load destinations:', error)
        loading.value = false
        return
    }

    destinations.value = (response as any).data || []
    loading.value = false
}

async function deleteDestination(id: number) {
    deletingItems.value.push(id)
    
    const [error] = await tryCatch(() => $fetch(`/api/backup/plans/${props.planId}/destinations/${id}`, { method: 'DELETE' }))

    if (error) {
        toast.error($t('Failed to delete.'))
        deletingItems.value = deletingItems.value.filter(item => item !== id)
        return
    }

    setTimeout(() => {
        toast.success($t('Deleted successfully.'))
        deletingItems.value = deletingItems.value.filter(item => item !== id)
        loadDestinations()
    }, 1000)
}

function openCreateDialog() {
    showCreateDialog.value = true
}

function openEditDialog(destination: Destination) {
    editingDestination.value = destination
    showEditDialog.value = true
}

function closeCreateDialog() {
    showCreateDialog.value = false
}

function closeEditDialog() {
    showEditDialog.value = false
    editingDestination.value = null
}

function onDestinationCreated() {
    closeCreateDialog()
    loadDestinations()
}

function onDestinationUpdated() {
    closeEditDialog()
    loadDestinations()
}

watch(() => props.planId, loadDestinations, { immediate: true })
</script>

<template>
    <Card class="mt-6">
        <CardHeader>
            <div class="flex items-center justify-between">
                <div>
                    <CardTitle>{{ $t('Destinations') }}</CardTitle>
                    <CardDescription>
                        {{ $t('Manage backup destinations for this plan.') }}
                    </CardDescription>
                </div>
                <Button @click="openCreateDialog">
                    {{ $t('Add new') }}
                </Button>
            </div>
        </CardHeader>
        <CardContent>
            <DataTable
                :rows="destinations"
                :columns="columns"
                :loading="loading"
            >
                <template #row-actions="{ row }">
                    <div class="flex items-center gap-2 justify-end">
                        <Button
                            variant="ghost"
                            size="sm"
                            @click="openEditDialog(row)"
                        >
                            <Icon name="pen" />
                        </Button>
                        <AlertButton
                            variant="ghost"
                            size="sm"
                            :loading="deletingItems.includes(row.id)"
                            @confirm="deleteDestination(row.id)"
                        >
                            <Icon name="trash" />
                        </AlertButton>
                    </div>
                </template>
            </DataTable>
        </CardContent>
    </Card>

    <!-- Create Destination Dialog -->
    <DestinationDialog
        v-if="showCreateDialog"
        :plan-id="planId"
        @submit="onDestinationCreated"
        @close="closeCreateDialog"
    />

    <!-- Edit Destination Dialog -->
    <DestinationDialog
        v-if="showEditDialog && editingDestination"
        :plan-id="planId"
        :destination="editingDestination"
        @submit="onDestinationUpdated"
        @close="closeEditDialog"
    />
</template>
