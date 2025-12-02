<script setup lang="ts">
import { ref } from 'vue'
import type { ComponentExposed } from 'vue-component-type-helpers'
import AppLayout from '#client/layouts/AppLayout.vue'
import PageCrud from '#client/components/PageCrud.vue'
import { defineFormFields } from '#client/components/FormAutoFieldList.vue'
import { $t } from '#shared/lang.ts'
import { defineColumns } from '#client/components/DataTable.vue'
import Plan from '#zenith-backup/shared/entities/plan.entity.ts'
import Button from '#client/components/Button.vue'
import Icon from '#client/components/Icon.vue'
import { $fetch } from '#client/utils'
import Switch from '#client/components/ui/switch/Switch.vue'

const crudRef = ref<ComponentExposed<typeof PageCrud>>()
const toggling = ref<string[]>([])

const fields = defineFormFields({
    id: {
        component: 'text-field',
        label: 'ID',
    },
    name: {
        component: 'text-field',
        label: $t('Name'),
    },
    strategy: {
        component: 'select',
        label: $t('Strategy'),
        labelKey: 'label',
        valueKey: 'id',
        descriptionKey: 'description',
        fetch: '/api/zbackup/plans/strategies'
    },
    cron: {
        component: 'text-field',
        label: 'Cron',
        presets: [
            {
                label: $t('Every hour'),
                value: '0 * * * *'
            },
            {
                label: $t('Every day at midnight'),
                value: '0 0 * * *'
            },
            {
                label: $t('Every week on Sunday at midnight'),
                value: '0 0 * * 0'
            },
            {
                label: $t('Every month on the 1st at midnight'),
                value: '0 0 1 * *'
            }
        ]
    },
    max: {
        component: 'text-field',
        type: 'number',
        label: $t('Max Dumps to Keep'),
        hint: $t('The maximum number of dumps to keep (Excluding manual dumps). leave empty for unlimited.'),
        min: 0,
        clearable: true,
    }
})

const columns = defineColumns<Plan>([
    {
        id: 'active',
        label: $t('Active'),
        field: 'active',
        width: 80
    },
    {
        id: 'id',
        label: 'ID',
        field: 'id',
    },
    {
        id: 'name',
        label: $t('Name'),
        field: 'name'
    },
    {
        id: 'strategy',
        label: $t('Strategy'),
        field: 'strategy_label'
    },
    {
        id: 'cron',
        label: 'Cron',
        field: 'cron',
    },
    {
        id: 'valid',
        label: $t('Valid'),
        field: 'valid'
    },
    { id: 'actions' }
])

async function load(){
    crudRef.value?.load()
}

async function toggle(row: Plan) {
    toggling.value.push(row.id)

    await $fetch(`/api/zbackup/plans/${row.id}`, {
        method: 'PUT',
        data: {
            active: !row.active
        }
    })

    setTimeout(() => {
        load()
        toggling.value = toggling.value.filter(id => id !== row.id)
    }, 500)
}

</script>

<template>
    <AppLayout>
        <PageCrud 
            ref="crudRef"
            fetch="/api/zbackup/plans"
            :fields="fields"
            :fields-edit="{
                name: fields.name,
                cron: fields.cron,
                max: fields.max,
            }"
            :columns="columns"
            :title="$t('Plans')"
            :description="$t('Manage your backup plans')"
            :serialize="row => new Plan(row)"
            :actions="['create', 'destroy']"
        >
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
            
            <template #row-valid="{ row }">
                <Icon
                    v-if="row.valid"
                    name="CheckCircle2"
                    class="text-green-500 size-5"
                />
                <Icon
                    v-else
                    name="AlertCircle"
                    class="text-yellow-500 size-5"
                />
            </template>

            <template #prepend-actions="{ row }">
                <Button
                    size="icon"
                    variant="ghost"
                    :to="`/admin/zbackup/plans/${row.id}`"
                >
                    <Icon name="Edit" />
                </Button>
            </template>
        </PageCrud>
    </AppLayout>
</template>