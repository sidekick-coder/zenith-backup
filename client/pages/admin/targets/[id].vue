<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { toast } from 'vue-sonner'
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

const route = useRoute()
const targetId = route.params.id as string

const target = ref<Target | null>(null)
const loading = ref(false)

const tabs = [
    {
        value: 'general',
        label: $t('General'),
        content: $t('General settings will be available here')
    },
    {
        value: 'settings',
        label: $t('Settings'),
        content: $t('Target settings will be available here')
    },
    {
        value: 'history',
        label: $t('History'),
        content: $t('Backup history will be available here')
    },
    {
        value: 'advanced',
        label: $t('Advanced'),
        content: $t('Advanced options will be available here')
    }
]

async function loadTarget() {
    if (!targetId) {
        toast.error($t('Target ID is required'))
        return
    }

    loading.value = true
    
    const [error, response] = await tryCatch(() => 
        $fetch(`/api/backup/targets/${targetId}`, { method: 'GET' })
    )

    if (error) {
        console.error('Failed to load target:', error)
        toast.error($t('Failed to load target'))
        loading.value = false
        return
    }

    target.value = response as Target
    loading.value = false
}

onMounted(() => {
    loadTarget()
})
</script>

<template>
    <AppLayout>
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
    
                            <!-- Name (derived from path) -->
                            <div>
                                <label class="text-sm font-medium text-gray-700 block mb-1">
                                    {{ $t('Name') }}
                                </label>
                                <p class="text-sm text-gray-900 bg-gray-50 p-2 rounded border">
                                    {{ target.path.split('/').pop() || target.path }}
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
                    default-value="general" 
                    class="w-full"
                >
                    <TabsList class="grid w-full grid-cols-4">
                        <TabsTrigger 
                            v-for="tab in tabs"
                            :key="tab.value"
                            :value="tab.value"
                        >
                            {{ tab.label }}
                        </TabsTrigger>
                    </TabsList>
                                
                    <TabsContent 
                        v-for="tab in tabs"
                        :key="tab.value"
                        :value="tab.value" 
                        class="mt-6"
                    >
                        <Card class="h-fit text-center">
                            {{ tab.content }}
                            <CardContent />
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </AppLayout>
</template>
