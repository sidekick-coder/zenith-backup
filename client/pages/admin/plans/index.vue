<script setup lang="ts">
import { watch, ref } from 'vue'
import { toast } from 'vue-sonner'
import DataTable, { defineColumns } from '#client/components/DataTable.vue'
import { $t } from '#shared/lang.ts'
import AppLayout from '#client/layouts/AppLayout.vue'
import { $fetch } from '#client/utils/fetcher.ts'
import { tryCatch } from '#shared/tryCatch.ts'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '#client/components/ui/alert-dialog'
import UserDialog from '#client/components/UserDialog.vue'
import ClientOnly from '#client/components/ClientOnly.vue'
import Button from '#client/components/Button.vue'
import Icon from '#client/components/Icon.vue'
import type { Drive } from '#client/types.ts'
import PlanDialog from '#modules/zenith-backup/client/components/PlanDialog.vue'
import AlertButton from '#client/components/AlertButton.vue'

const items = ref<Drive[]>([])
const page = ref(1)
const deletingItems = ref<string[]>([])

const columns = defineColumns<Drive>([
    {
        id: 'id',
        header: 'ID',
        accessorKey: 'id',
        size: 50,
    },
    {
        id: 'name',
        header: $t('Name'),
        accessorKey: 'name'
    },
    { id: 'actions' }
])

async function load(){
    const [error, response] = await tryCatch(() => $fetch('/api/backup/plans', {
        method: 'GET',
        query: {
            page: page.value,
            limit: 20,
        },
    }))

    if (error) {
        console.error('Failed to load backup/plans:', error)
        return
    }

    items.value = response.data || []
}

function reset() {
    page.value = 1
    return load()
}

async function destroy(id: string) {
    deletingItems.value.push(id)
    const [error] = await tryCatch(() => $fetch(`/api/backup/plans/${id}`, { method: 'DELETE', }))

    if (error) {
        toast.error($t('Failed to delete.'))
        deletingItems.value = []
        return
    }

    setTimeout(() => {
        toast.success($t('Deleted successfully.'))
        deletingItems.value = []
        reset()
    }, 1000)

}

watch(page, load, { immediate: true })
</script>
<template>
    <AppLayout>
        <div class="flex">
            <h1 class="text-2xl font-bold mb-4 text-foreground flex-1">
                {{ $t('Plans') }}
            </h1>
            <div>
                <ClientOnly>
                    <PlanDialog @submit="reset" />
                </ClientOnly>
            </div>
        </div>

        <DataTable 
            :rows="items"
            :page="page"
            :columns="columns"
        >
            <template #row-actions="{ row }">
                <div class="flex items-center gap-2 justify-end">
                    <Button
                        variant="ghost"
                        :to="`/admin/backup/plans/${row.id}`"
                        size="sm"
                    >
                        <Icon name="pen" />
                    </Button>
                    <AlertButton
                        variant="ghost"
                        size="sm"
                        :loading="deletingItems.includes(row.id)"
                        @confirm="destroy(row.id)"
                    >
                        <Icon name="trash" />
                    </AlertButton>
                </div>
            </template>
        </DataTable>
    </AppLayout>
</template>
