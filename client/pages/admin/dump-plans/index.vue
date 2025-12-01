<script setup lang="ts">
import AppLayout from '#client/layouts/AppLayout.vue'
import PageCrud from '#client/components/PageCrud.vue'
import { defineFormFields } from '#client/components/FormAutoFieldList.vue'
import { $t } from '#shared/lang.ts'
import { defineColumns } from '#client/components/DataTable.vue'
import DumpPlan from '#zenith-backup/shared/entities/dumpPlan.entity.ts'

const fields = defineFormFields({
    id: {
        component: 'text-field',
        label: 'ID',
    },
    name: {
        component: 'text-field',
        label: $t('Name'),
    },
    cron: {
        component: 'text-field',
        label: 'Cron',
    },
})

const columns = defineColumns<DumpPlan>([
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
        id: 'cron',
        label: 'Cron',
        field: 'cron'
    },
    { id: 'actions' }
])  

</script>

<template>
    <AppLayout>
        <PageCrud 
            fetch="/api/zbackup/dump-plans"
            :fields="fields"
            :fields-edit="{
                ...fields,
                id: {
                    ...fields.id,
                    disabled: true
                }
            }"
            :columns="columns"
            :title="$t('Dump Plans')"
            :description="$t('Manage how app database dumps are created and stored.')"
        />
    </AppLayout>
</template>