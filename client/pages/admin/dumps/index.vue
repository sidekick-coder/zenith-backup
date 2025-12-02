<script setup lang="ts">
import { ref } from 'vue'
import type { ComponentExposed } from 'vue-component-type-helpers'
import AppLayout from '#client/layouts/AppLayout.vue'
import PageCrud from '#client/components/PageCrud.vue'
import { $t } from '#shared/lang.ts'
import { defineColumns } from '#client/components/DataTable.vue'
import Dump from '#zenith-backup/shared/entities/dump.entity.ts'

const crudRef = ref<ComponentExposed<typeof PageCrud>>()

const columns = defineColumns<Dump>([
    {
        id: 'id',
        label: 'ID',
        field: 'id',
    },
    {
        id: 'plan',
        label: $t('Plan'),
    },
    {
        id: 'label',
        label: $t('Label'),
        field: 'label'
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
        field: 'created_at'
    },
    { id: 'actions' }
])

</script>

<template>
    <AppLayout>
        <PageCrud 
            ref="crudRef"
            fetch="/api/zbackup/dumps"
            :columns="columns"
            :title="$t('Dumps')"
            :description="$t('Dump list created from dump plans and manual dumps.')"
            :serialize="row => new Dump(row)"
            :actions="['destroy']"
        >
            <template #row-plan="{ row }">
                <div class="text-primary">
                    {{ row.plan?.name || $t('No plan') }}
                </div>
            </template>

            <template #row-label="{ row }">
                <span>{{ row.label || $t('No label') }}</span>
                <div
                    v-if="row.description"
                    class="text-sm text-muted-foreground"
                >
                    {{ row.description }}
                </div>
            </template>
        </PageCrud>
    </AppLayout>
</template>