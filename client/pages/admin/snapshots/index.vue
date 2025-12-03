<script setup lang="ts">
import { ref } from 'vue'
import type { ComponentExposed } from 'vue-component-type-helpers'
import AppLayout from '#client/layouts/AppLayout.vue'
import PageCrud from '#client/components/PageCrud.vue'
import { $t } from '#shared/lang.ts'
import { defineColumns } from '#client/components/DataTable.vue'
import Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'

const crudRef = ref<ComponentExposed<typeof PageCrud>>()

const columns = defineColumns<Snapshot>([
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
        field: 'created_at'
    },
    { id: 'actions' }
])

</script>

<template>
    <AppLayout>
        <PageCrud 
            ref="crudRef"
            fetch="/api/zbackup/snapshots"
            fetch-destroy="/api/zbackup/plans/:plan_id/snapshots/:id"
            :columns="columns"
            :title="$t('Snapshots')"
            :description="$t('Snapshot list created from plans.')"
            :serialize="row => new Snapshot(row)"
            :actions="['destroy']"
        >
            <template #row-plan="{ row }">
                <router-link
                    class="text-primary hover:underline"
                    :to="`/admin/zbackup/plans/${row.plan_id}`"
                >
                    {{ row.plan?.name || $t('No plan') }}
                </router-link>
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