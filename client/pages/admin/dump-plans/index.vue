<script setup lang="ts">
import { ref } from 'vue'
import type { ComponentExposed } from 'vue-component-type-helpers'
import AppLayout from '#client/layouts/AppLayout.vue'
import PageCrud from '#client/components/PageCrud.vue'
import { defineFormFields } from '#client/components/FormAutoFieldList.vue'
import { $t } from '#shared/lang.ts'
import { defineColumns } from '#client/components/DataTable.vue'
import DumpPlan from '#zenith-backup/shared/entities/dumpPlan.entity.ts'
import Button from '#client/components/Button.vue'
import Icon from '#client/components/Icon.vue'
import DialogForm from '#client/components/DialogForm.vue'
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
    type: {
        component: 'select',
        label: $t('Type'),
        labelKey: 'label',
        valueKey: 'id',
        descriptionKey: 'description',
        options: DumpPlan.TYPE_OPTIONS
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

const columns = defineColumns<DumpPlan>([
    {
        id: 'active',
        label: $t('Active'),
        field: 'active'
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
        id: 'type',
        label: $t('Type'),
        field: 'typeLabel'
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

async function toggle(row: DumpPlan) {
    toggling.value.push(row.id)

    await $fetch(`/api/zbackup/dump-plans/${row.id}`, {
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
            fetch="/api/zbackup/dump-plans"
            :fields="fields"
            :fields-edit="{
                name: fields.name,
                cron: fields.cron,
                max: fields.max,
            }"
            :columns="columns"
            :title="$t('Dump Plans')"
            :description="$t('Manage how app database dumps are created and stored.')"
            :serialize="row => new DumpPlan(row)"
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
                <Switch :model-value="row.valid" />
            </template>

            <template #prepend-actions="{ row }">
                <DialogForm 
                    v-if="row.fields"
                    :fetch="data => $fetch(`/api/zbackup/dump-plans/${row.id}`, {
                        method: 'PUT',
                        data: {
                            config: data
                        }
                    })"
                    :title="$t('Edit')"
                    :description="$t('Fill in the details below to edit')"
                    :fields="row.fields"
                    :values="row.config"
                    :schema="row.schema"
                    @submit="load"
                >
                    <Button
                        size="icon"
                        variant="ghost"
                    >
                        <Icon name="Settings" />
                    </Button>
                </DialogForm>
            </template>
        </PageCrud>
    </AppLayout>
</template>