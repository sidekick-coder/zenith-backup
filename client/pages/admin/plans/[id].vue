<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import AppLayout from '#client/layouts/AppLayout.vue'
import { $fetch } from '#client/utils/fetcher.ts'
import { tryCatch } from '#shared/tryCatch.ts'
import { $t } from '#shared/lang.ts'
import TargetTable from '#zenith-backup/client/components/TargetTable.vue'
import Plan from '#zenith-backup/shared/entities/plan.entity.ts'
import PlanStrategyZip from '#zenith-backup/client/components/PlanStrategyZip.vue'
import PlanDetails from '#zenith-backup/client/components/PlanDetails.vue'

const route = useRoute()
const router = useRouter()
const planId = route.params.id as string
const plan = ref<Plan>()

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

        <div
            v-if="!loading && plan"
            class="flex flex-col gap-y-5"
        >
            <PlanDetails
                :plan="plan"
                :plan-id="planId"
            />

            <PlanStrategyZip
                v-if="plan?.strategy === 'zip'"
                :plan="plan"
            />

            <TargetTable :plan-id="planId" />
        </div>
    </AppLayout>
</template>