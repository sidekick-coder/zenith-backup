<script setup lang="ts">
import {
    ref, onMounted, computed, 
    defineAsyncComponent
} from 'vue'
import { useRoute } from 'vue-router'
import { useRouteQuery } from '@vueuse/router'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '#client/components/ui/card'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '#client/components/ui/tabs'
import { $t } from '#shared/lang.ts'
import { $fetch } from '#client/utils/fetcher.ts'
import { tryCatch } from '#shared/tryCatch.ts'
import type Target from '#zenith-backup/shared/entities/target.entity.ts'
import AppLayout from '#client/layouts/AppLayout.vue'
import Plan from '#zenith-backup/shared/entities/plan.entity.ts'

const route = useRoute()
const targetId = route.params.id as string
const tab = useRouteQuery('tab', 'config')

const target = ref<Target>()
const plan = ref<Plan>()
const loading = ref(false)

const tabs = computed(() => {
    const items: any[] = [
        {
            value: 'snapshots',
            label: $t('Snapshots'),
            component: defineAsyncComponent(() => import('#zenith-backup/client/components/TargetSnapshots.vue')),
        },
    ]

    if (plan.value?.strategy === 'tar') {
        items.splice(0, 0, {
            value: 'config',
            label: $t('Config'),
            component: defineAsyncComponent(() => import('#zenith-backup/client/components/TargetTarForm.vue')),
        })
    }

    return items 
})

async function loadTarget() {
    const [error, response] = await tryCatch(() => 
        $fetch(`/api/backup/targets/${targetId}`, { method: 'GET' })
    )

    if (error) {
        return
    }

    target.value = response as Target
    loading.value = false
}

async function loadPlan(){
    if (!target.value?.plan_id) {
        return
    }

    const [error, response] = await tryCatch(() => $fetch(`/api/backup/plans/${target.value?.plan_id}`))

    if (error) {
        return
    }

    plan.value = response as Plan
}

async function load(){
    loading.value = true

    await loadTarget()
    await loadPlan()

    setTimeout(() => {
        loading.value = false
    }, 800)
}

onMounted(() => {
    load()
})
</script>

<template>
    <AppLayout
        :breadcrumbs="[
            { label: $t('Backup'), to: '/admin/backup' },
            { label: $t('Plans'), to: '/admin/backup/plans' },
            { label: plan?.name || $t('Plan'), to: `/admin/backup/plans/${plan?.id}` },
            { label: $t('Targets'), to: `/admin/backup/plans/${plan?.id}?tab=targets` },
            { label: target?.name || $t('Target Details') }
        ]"
    >
        <div class="flex gap-6 h-full">
            <!-- Left Sidebar -->
            <div class="w-full lg:w-4/12 xl:w-3/12">
                <Card class="h-fit">
                    <CardHeader>
                        <CardTitle>{{ $t('Target Details') }}</CardTitle>
                        <CardDescription>{{ $t('Basic information about this target') }}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div 
                            v-if="loading" 
                            class="space-y-4"
                        >
                            <div class="animate-pulse">
                                <div class="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                                <div class="h-3 bg-gray-100 rounded w-1/2" />
                            </div>
                            <div class="animate-pulse">
                                <div class="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                                <div class="h-3 bg-gray-100 rounded w-1/2" />
                            </div>
                            <div class="animate-pulse">
                                <div class="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                                <div class="h-3 bg-gray-100 rounded w-full" />
                            </div>
                        </div>
                            
                        <div 
                            v-if="!loading && target" 
                            class="space-y-6"
                        >
                            <!-- ID -->
                            <div>
                                <label class="text-sm font-medium text-gray-700 block mb-1">
                                    {{ $t('ID') }}
                                </label>
                                <p class="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
                                    {{ target.id }}
                                </p>
                            </div>
    
                            <!-- Path -->
                            <div>
                                <label class="text-sm font-medium text-gray-700 block mb-1">
                                    {{ $t('Path') }}
                                </label>
                                <p class="text-sm text-gray-900 bg-gray-50 p-2 rounded border break-all">
                                    {{ target.path }}
                                </p>
                            </div>
    
                            <!-- Created At -->
                            <div>
                                <label class="text-sm font-medium text-gray-700 block mb-1">
                                    {{ $t('Created At') }}
                                </label>
                                <p class="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
                                    {{ new Date(target.created_at).toLocaleString() }}
                                </p>
                            </div>
    
                            <!-- Updated At -->
                            <div>
                                <label class="text-sm font-medium text-gray-700 block mb-1">
                                    {{ $t('Updated At') }}
                                </label>
                                <p class="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
                                    {{ new Date(target.updated_at).toLocaleString() }}
                                </p>
                            </div>
                        </div>
    
                        <div 
                            v-if="!loading && !target" 
                            class="text-center py-8"
                        >
                            <p class="text-gray-500">
                                {{ $t('Target not found') }}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
    
            <!-- Right Content Area -->
            <div class="flex-1">
                <Tabs 
                    v-model="tab"
                    default-value="general" 
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
                            v-if="t.component && plan && target"
                            v-model:target="target"
                            v-model:plan="plan"
                            :plan-id="plan.id"
                            :target-id="target.id"
                        />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </AppLayout>
</template>
