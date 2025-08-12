<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { useRouteQuery } from '@vueuse/router'
import AppLayout from '#client/layouts/AppLayout.vue'
import { $fetch } from '#client/utils/fetcher.ts'
import { tryCatch } from '#shared/tryCatch.ts'
import { $t } from '#shared/lang.ts'
import TargetTable from '#zenith-backup/client/components/TargetTable.vue'
import Plan from '#zenith-backup/shared/entities/plan.entity.ts'
import PlanStrategyZip from '#zenith-backup/client/components/PlanTarForm.vue'
import PlanDetails from '#zenith-backup/client/components/PlanDetails.vue'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '#client/components/ui/tabs'

const route = useRoute()
const router = useRouter()
const planId = route.params.id as string
const plan = ref<Plan>()
const tab = useRouteQuery('tab', 'details')

const loading = ref(false)

async function loadPlan() {
    loading.value = true

    const [error, response] = await tryCatch(() => 
        $fetch<Plan>(`/api/backup/plans/${planId}`, { method: 'GET' })
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
    <AppLayout>
        <div 
            v-if="loading" 
            class="flex justify-center items-center h-64"
        >
            <div class="text-lg">
                {{ $t('Loading...') }}
            </div>
        </div>

        
        <Tabs
            v-if="!loading && plan"
            v-model="tab"
            default-value="details"
            class="w-full"
        >
            <TabsList class="grid w-full grid-cols-4">
                <TabsTrigger value="details">
                    {{ $t('Details') }}
                </TabsTrigger>
                <TabsTrigger value="configuration">
                    {{ $t('Configuration') }}
                </TabsTrigger>
                <TabsTrigger value="targets">
                    {{ $t('Targets') }}
                </TabsTrigger>
            </TabsList>

            <TabsContent 
                value="details"
            >
                <PlanDetails
                    :plan="plan"
                    :plan-id="planId"
                />
            </TabsContent>

            <TabsContent 
                value="configuration"
            >
                <PlanStrategyZip
                    v-if="plan?.strategy === 'tar'"
                    :plan="plan"
                />
            </TabsContent>

            <TabsContent 
                value="targets"
            >
                <TargetTable :plan-id="planId" />
            </TabsContent>
        </Tabs>
    </AppLayout>
</template>