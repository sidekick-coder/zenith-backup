<script setup lang="ts">
import { watch, ref } from 'vue'
import { toast } from 'vue-sonner'
import DataTable, { defineColumns } from '#client/components/DataTable.vue'
import { $t } from '#shared/lang.ts'
import AppLayout from '#client/layouts/AppLayout.vue'
import { $fetch } from '#client/utils/fetcher.ts'
import { tryCatch } from '#shared/tryCatch.ts'
import ClientOnly from '#client/components/ClientOnly.vue'
import Button from '#client/components/Button.vue'
import Icon from '#client/components/Icon.vue'
import PlanDialog from '#zenith-backup/client/components/PlanDialog.vue'
import AlertButton from '#client/components/AlertButton.vue'
import type Plan from '#zenith-backup/shared/entities/plan.entity.ts'
import Switch from '#client/components/ui/switch/Switch.vue'
import Alert from '#client/components/Alert.vue'

const items = ref<Plan[]>([])
const page = ref(1)
const deletingItems = ref<string[]>([])

const columns = defineColumns<Plan>([
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
    {
        id: 'strategy',
        header: $t('Strategy'),
        accessorKey: 'strategy'
    },
    {
        id: 'active',
        header: $t('Active'),
        accessorKey: 'active'
    },
    {
        id: 'cron',
        header: $t('Cron'),
        accessorKey: 'cron'
    },
    { id: 'actions' }
])

async function load(){
    const [error, response] = await tryCatch(() => $fetch<{ data: Plan[] }>('/api/backup/plans', {
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

// excute 

const executingId = ref<number[]>([])

async function execute(id: number) {
    if (executingId.value.includes(id)) return

    executingId.value.push(id)

    const [error] = await tryCatch(() => $fetch(`/api/backup/plans/${id}/execute`, { method: 'POST', }))

    if (error) {
        executingId.value = executingId.value.filter(i => i !== id)
        return
    }

    setTimeout(() => {
        toast.success($t('Execution started.'))
        executingId.value = executingId.value.filter(i => i !== id)
    }, 800)

}

// toggle 
const togglingId = ref<number[]>([])

async function toggle(row: Plan) {
    togglingId.value.push(row.id)

    const [error] = await tryCatch(() => $fetch(`/api/backup/plans/${row.id}/toggle`, { method: 'POST', }))

    if (error) {
        togglingId.value = togglingId.value.filter(i => i !== row.id)
        return
    }

    setTimeout(() => {
        toast.success($t('Toggled successfully.'))
        togglingId.value = togglingId.value.filter(i => i !== row.id)
        load()
    }, 800)
}

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
            <template #row-active="{ row }">
                <Alert
                    :title="$t('Toggle active status')"
                    :description="$t('This will toggle the active status of the plan.')"
                    @confirm="toggle(row)"
                >
                    <Icon
                        v-if="togglingId.includes(row.id)"
                        name="Loader2"
                        class="animate-spin"
                    />
                    <Switch
                        v-else
                        :model-value="!!row.active"
                        class="pointer-events-none"
                        loading
                    />
                </Alert>
            </template>

            <template #row-actions="{ row }">
                <div class="flex items-center gap-2 justify-end">
                    <AlertButton
                        variant="ghost"
                        size="sm"
                        :title="$t('Execute backup')"
                        :description="$t('This action can not be stopped once started.')"
                        :loading="executingId.includes(row.id)"
                        @confirm="execute(row.id)"
                    >
                        <Icon name="play" />
                    </AlertButton>
                    <Button
                        variant="ghost"
                        :to="`/admin/backup/plans/${row.id}`"
                        size="sm"
                    >
                        <Icon name="eye" />
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
