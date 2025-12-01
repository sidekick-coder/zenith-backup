<script setup lang="ts">
import {
    ref, onMounted, computed, 
    defineAsyncComponent
} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { useRouteQuery } from '@vueuse/router'
import AppLayout from '#client/layouts/AppLayout.vue'
import { $fetch } from '#client/utils/fetcher.ts'
import { tryCatch } from '#shared/utils/tryCatch.ts'
import { $t } from '#shared/lang.ts'
import Plan from '#zenith-backup/shared/entities/plan.entity.ts'
import PlanDetails from '#zenith-backup/client/components/PlanDetails.vue'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '#client/components/ui/tabs'

const route = useRoute()
const router = useRouter()
const planId = computed(() => Number(route.params.id))
const plan = ref<Plan>()
const tab = useRouteQuery('tab', 'targets')

const loading = ref(false)

const tabs = computed(() => {
    const items: any[] = [
        {
            value: 'targets',
            label: $t('Targets'),
            component: defineAsyncComponent(() => import('#zenith-backup/client/components/TargetTable.vue')),
        },
        {
            value: 'snapshots',
            label: $t('Snapshots'),
            component: defineAsyncComponent(() => import('#zenith-backup/client/components/SnapshotTable.vue')),
        },
    ]

    if (plan.value?.strategy === 'tar') {
        items.push({
            value: 'configuration',
            label: $t('Configuration'),
            component: defineAsyncComponent(() => import('#zenith-backup/client/components/PlanTarForm.vue')),
        })
    }
    
    if (plan.value?.strategy === 'restic') {
        items.push({
            value: 'configuration',
            label: $t('Configuration'),
            component: defineAsyncComponent(() => import('#zenith-backup/client/components/PlanResticForm.vue')),
        })
    }

    return items 
})

async function loadPlan() {
    loading.value = true

    const [error, response] = await tryCatch(() => 
        $fetch<Plan>(`/api/backup/plans/${planId.value}`, { method: 'GET' })
    )

    if (error) {
        loading.value = false
        toast.error($t('Failed to load plan details.'))
        router.push('/admin/plans')
        return
    }

    plan.value = response
    loading.value = false
}

onMounted(loadPlan)
</script>

<template>
    <AppLayout
        :breadcrumbs="[
            { label: $t('Backup'), to: '/admin/backup' },
            { label: $t('Plans'), to: '/admin/backup/plans' },
            { label: plan?.name || $t('Plan'), to: `/admin/backup/plans/${plan?.id}` },
        ]"
    >
        <div 
            v-if="loading" 
            class="flex justify-center items-center h-64"
        >
            <div class="text-lg">
                {{ $t('Loading...') }}
            </div>
        </div>

        <div 
            v-if="!loading && plan"
            class="flex gap-6 h-full"
        >
            <!-- Left Sidebar -->
            <div class="w-full lg:w-4/12 xl:w-3/12">
                <PlanDetails
                    :plan="plan"
                    :plan-id="planId"
                />
            </div>

            <!-- Right Content Area -->
            <div class="flex-1">
                <Tabs 
                    v-model="tab"
                    default-value="configuration" 
                >
                    <TabsList>
                        <TabsTrigger 
                            v-for="t in tabs"
                            :key="t.value"
                            :value="t.value"
                            class="min-w-60"
                        >
                            {{ t.label }}
                        </TabsTrigger>
                    </TabsList>
                                
                    <TabsContent 
                        v-for="t in tabs"
                        :key="t.value"
                        :value="t.value"
                    >
                        <component
                            :is="t.component"
                            v-if="t.component && plan"
                            :plan="plan"
                            :plan-id="planId"
                        />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </AppLayout>
</template>