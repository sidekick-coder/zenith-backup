<script setup lang="ts">
import { ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import TargetDialog from './TargetDialog.vue'
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
import type Target from '#zenith-backup/shared/entities/target.entity.ts'

interface Props {
    planId: number
}

const props = defineProps<Props>()

const targets = ref<Target[]>([])
const loading = ref(false)
const deletingItems = ref<number[]>([])
const editingTarget = ref<Target | null>(null)
const showCreateDialog = ref(false)
const showEditDialog = ref(false)

const columns = defineColumns<Target>([
    {
        id: 'id',
        header: 'ID',
        accessorKey: 'id',
        size: 20,
    },
    {
        id: 'path',
        header: $t('Path'),
        accessorKey: 'path'
    },
    { id: 'actions' }
])

async function loadTargets() {
    loading.value = true
    
    const [error, response] = await tryCatch(() => $fetch('/api/backup/targets', { 
        method: 'GET', 
        query: { plan_id: props.planId }
    }))

    if (error) {
        console.error('Failed to load targets:', error)
        loading.value = false
        return
    }

    targets.value = (response as any).data || []
    loading.value = false
}

async function deleteTarget(id: number) {
    deletingItems.value.push(id)
    
    const [error] = await tryCatch(() => $fetch(`/api/backup/targets/${id}`, { method: 'DELETE' }))

    if (error) {
        toast.error($t('Failed to delete.'))
        deletingItems.value = deletingItems.value.filter(item => item !== id)
        return
    }

    setTimeout(() => {
        toast.success($t('Deleted successfully.'))
        deletingItems.value = deletingItems.value.filter(item => item !== id)
        loadTargets()
    }, 1000)
}

function openCreateDialog() {
    showCreateDialog.value = true
}

function closeCreateDialog() {
    showCreateDialog.value = false
}

function closeEditDialog() {
    showEditDialog.value = false
    editingTarget.value = null
}

function onTargetCreated() {
    closeCreateDialog()
    loadTargets()
}

function onTargetUpdated() {
    closeEditDialog()
    loadTargets()
}

watch(() => props.planId, loadTargets, { immediate: true })
</script>

<template>
    <Card>
        <CardHeader>
            <div class="flex items-center justify-between">
                <div>
                    <CardTitle>{{ $t('Targets') }}</CardTitle>
                    <CardDescription>
                        {{ $t('Manage folder targets for this plan.') }}
                    </CardDescription>
                </div>
                <Button @click="openCreateDialog">
                    {{ $t('Add new') }}
                </Button>
            </div>
        </CardHeader>
        <CardContent>
            <DataTable
                :rows="targets"
                :columns="columns"
                :loading="loading"
            >
                <template #row-actions="{ row }">
                    <div class="flex items-center gap-2 justify-end">
                        <Button
                            variant="ghost"
                            size="sm"
                            :to="`/admin/backup/targets/${row.id}`"
                        >
                            <Icon name="pen" />
                        </Button>
                        <AlertButton
                            variant="ghost"
                            size="sm"
                            :loading="deletingItems.includes(row.id)"
                            @confirm="deleteTarget(row.id)"
                        >
                            <Icon name="trash" />
                        </AlertButton>
                    </div>
                </template>
            </DataTable>
        </CardContent>
    </Card>

    <!-- Create Target Dialog -->
    <TargetDialog
        v-if="showCreateDialog"
        :plan-id="planId"
        @submit="onTargetCreated"
        @close="closeCreateDialog"
    />

    <!-- Edit Target Dialog -->
    <TargetDialog
        v-if="showEditDialog && editingTarget"
        :plan-id="planId"
        :target="editingTarget"
        @submit="onTargetUpdated"
        @close="closeEditDialog"
    />
</template>