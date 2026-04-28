<script setup lang="ts">
import {
    ref, onMounted, computed, shallowRef,
    defineAsyncComponent,
    onServerPrefetch,
} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { useRouteQuery } from '@vueuse/router'
import { useHead } from '@unhead/vue'
import AdminLayout from '#client/layouts/AdminLayout.vue'
import $fetch from '#client/facades/fetch.facade.ts'

import Plan from '#zenith-backup/shared/entities/plan.entity.ts'
import PlanDetails from '#zenith-backup/client/components/PlanDetails.vue'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '#client/components/ui/tabs'
import { useState } from '#client/composables/useState.ts'

const route = useRoute()
const router = useRouter()
const planId = computed(() => String(route.params.id))
const plan = useState<Plan>(`zbackup-plan-${planId.value}`)
const tab = useRouteQuery('tab', 'config')
const loading = ref(false)

const PlanConfigComponent = defineAsyncComponent(() => import('#zenith-backup/client/components/PlanConfig.vue'))
const PlanTriggersComponent = defineAsyncComponent(() => import('#zenith-backup/client/components/PlanTriggers.vue'))
const SnapshotTableComponent = defineAsyncComponent(() => import('#zenith-backup/client/components/SnapshotTable.vue'))

const tabs = shallowRef([] as { value: string, label: string, component: any, props?: Record<string, any> }[])

function loadTabs() {
    const result = [] as typeof tabs.value

    const sections = plan.value?.strategy_fields_sections || []
    const unsectionedFields = plan.value?.strategy_fields || {}

    if (Object.keys(unsectionedFields).length) {
        result.push({
            value: 'config',
            label: $t('Configuration'),
            component: PlanConfigComponent,
        })
    }

    for (const section of sections) {
        result.push({
            value: `config-${section.id}`,
            label: section.title,
            component: PlanConfigComponent,
            props: { sectionId: section.id },
        })
    }

    result.push(
        { value: 'triggers', label: $t('Triggers'), component: PlanTriggersComponent },
        { value: 'snapshots', label: $t('Snapshots'), component: SnapshotTableComponent },
    )

    tabs.value = result

    const values = result.map(t => t.value)

    if (values.length && !values.includes(tab.value)) {
        tab.value = values[0]
    }
}

async function load() {
    loading.value = true

    const [error, response] = await $fetch.try<Plan>(`/api/zbackup/plans/${planId.value}`)

    if (error) {
        loading.value = false
        toast.error($t('Failed to load plan details.'))
        router.push('/admin/zbackup/plans')
        return
    }

    plan.value = response
    loading.value = false

    loadTabs()
}

useHead({
    title: () => plan.value ? plan.value.name : $t('Loading...'),
})

onMounted(async () => {
    if (!plan.value) {
        await load()
    } else {
        loadTabs()
    }
})

onServerPrefetch(async () => {
    if (!plan.value) {
        await load()
    } else {
        loadTabs()
    }
})

</script>

<template>
    <AdminLayout
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
                            v-bind="t.props || {}"
                            :plan="plan"
                            :plan-id="planId"
                        />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </AdminLayout>
</template>
