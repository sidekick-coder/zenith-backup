<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Head } from '@unhead/vue/components'
import AdminLayout from '#client/layouts/AdminLayout.vue'
import DataTable, { defineColumns } from '#client/components/DataTable.vue'
import DialogForm, { defineFormFields } from '#client/components/DialogForm.vue'
import Button from '#client/components/Button.vue'
import Icon from '#client/components/Icon.vue'
import AlertButton from '#client/components/AlertButton.vue'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '#client/components/ui/card/index.ts'
import { fetcher } from '@sidekick-coder/zenith-kit/client'
import Switch from '#client/components/ui/switch/Switch.vue'
import type Trigger from '#zenith-backup/shared/entities/TriggerEntity.ts'

const triggers = ref<Trigger[]>([])
const loading = ref(false)
const toggling = ref<string[]>([])

const columns = defineColumns<Trigger>([
    {
        id: 'active',
        label: $t('Active'),
        field: 'active',
        width: 80,
    },
    {
        id: 'id',
        label: $t('ID'),
        field: 'id',
    },
    {
        id: 'plan_id',
        label: $t('Plan'),
        field: 'plan_id',
    },
    {
        id: 'type',
        label: $t('Type'),
        field: 'type',
    },
    {
        id: 'value',
        label: $t('Value'),
        field: 'value',
    },
    { id: 'actions' },
])

const fields = defineFormFields({
    plan_id: {
        component: 'select',
        label: $t('Plan'),
        fetch: '/api/zbackup/plans',
        valueKey: 'id',
        labelKey: 'name',
    },
    type: {
        component: 'select',
        label: $t('Type'),
        options: [
            { value: 'cron', label: $t('Cron') },
            { value: 'event', label: $t('Event') },
        ],
    },
    value: data => ({
        component: data?.type ? 'text-field' : 'hidden',
        label: data?.type === 'cron' ? $t('Cron Expression') : $t('Event Name'),
        placeholder: data?.type === 'cron' ? '0 0 * * *' : 'backup:completed',
    }),
})

async function load() {
    loading.value = true

    const [error, response] = await fetcher.try<{ items: Trigger[] }>(
        '/api/triggers',
        { method: 'GET' }
    )

    if (error) {
        loading.value = false
        return
    }

    triggers.value = response.items || []

    await new Promise(resolve => setTimeout(resolve, 300))

    loading.value = false
}

async function toggle(row: Trigger) {
    toggling.value.push(row.id)

    await fetcher.fetch(`/api/triggers/${row.id}`, {
        method: 'PATCH',
        data: { active: !row.active },
    })

    setTimeout(() => {
        load()
        toggling.value = toggling.value.filter(id => id !== row.id)
    }, 500)
}

onMounted(load)
</script>

<template>
    <Head>
        <title>{{ $t('Triggers') }}</title>
        <meta name="description" :content="$t('Manage your backup triggers')" />
    </Head>

    <AdminLayout>
        <Card>
            <CardHeader>
                <div class="flex items-center justify-between">
                    <div>
                        <CardTitle>{{ $t('Triggers') }}</CardTitle>
                        <CardDescription>
                            {{ $t('Manage your backup triggers') }}
                        </CardDescription>
                    </div>
                    <div class="flex items-center gap-2">
                        <DialogForm
                            :title="$t('Add Trigger')"
                            :fields="fields"
                            fetch="/api/triggers"
                            fetch-method="POST"
                            @submit="load"
                        >
                            <Button>
                                <Icon name="Plus" />
                                {{ $t('Add') }}
                            </Button>
                        </DialogForm>

                        <Button variant="outline" @click="load">
                            <Icon name="refreshCw" :class="{ 'animate-spin': loading }" />
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <DataTable :rows="triggers" :columns="columns" :loading="loading">
                    <template #row-active="{ row }">
                        <Icon
                            v-if="toggling.includes(row.id)"
                            name="Loader2"
                            class="animate-spin"
                        />
                        <Switch
                            v-else
                            :model-value="!!row.active"
                            @click="toggle(row)"
                        />
                    </template>
                    <template #row-actions="{ row }">
                        <div class="flex items-center gap-2 justify-end">
                            <DialogForm
                                :title="$t('Edit Trigger')"
                                :fields="fields"
                                :values="row"
                                :fetch="`/api/triggers/${row.id}`"
                                fetch-method="PATCH"
                                @submit="load"
                            >
                                <Button variant="ghost" size="sm">
                                    <Icon name="Edit" />
                                </Button>
                            </DialogForm>

                            <AlertButton
                                variant="ghost"
                                size="sm"
                                fetch-method="DELETE"
                                :fetch="`/api/triggers/${row.id}`"
                                :tooltip="$t('Delete this trigger')"
                                :description="$t('Are you sure you want to delete this trigger? This action cannot be undone.')"
                                :toast-on-success="$t('Trigger deleted.')"
                                @fetched="load"
                            >
                                <Icon name="trash" />
                            </AlertButton>
                        </div>
                    </template>
                </DataTable>
            </CardContent>
        </Card>
    </AdminLayout>
</template>
