<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { format } from 'date-fns'
import DataTable, { defineColumns } from '#client/components/DataTable.vue'
import Button from '#client/components/Button.vue'
import Icon from '#client/components/Icon.vue'
import AlertButton from '#client/components/AlertButton.vue'
import ObjectInspect from '#client/components/ObjectInspect.vue'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '#client/components/ui/card/index.ts'
import DropdownMenu from '#client/components/ui/dropdown-menu/DropdownMenu.vue'
import DropdownMenuTrigger from '#client/components/ui/dropdown-menu/DropdownMenuTrigger.vue'
import DropdownMenuItem from '#client/components/ui/dropdown-menu/DropdownMenuItem.vue'
import DropdownMenuContent from '#client/components/ui/dropdown-menu/DropdownMenuContent.vue'
import { fetcher } from '@sidekick-coder/zenith-kit/client'

interface ResticSnapshot {
    id: string
    plan_id: string
    created_at: string
    data: Record<string, unknown>
    metadata: Record<string, unknown>
}

interface Props {
    planId: string
}

defineOptions({ inheritAttrs: false })

const props = defineProps<Props>()

const snapshots = ref<ResticSnapshot[]>([])
const loading = ref(false)
const inspect = ref<Record<string, unknown>>()

function humanSize(size: number): string {
    if (!size) return '0 B'
    const i = Math.floor(Math.log(size) / Math.log(1024))
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
    return (size / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i]
}

const columns = defineColumns<ResticSnapshot>([
    {
        id: 'id',
        label: $t('Snapshot ID'),
        field: 'id',
    },
    {
        id: 'size',
        label: $t('Size'),
        field: row => humanSize(row.metadata.size as number),
    },
    {
        id: 'created_at',
        label: $t('Created At'),
        field: row => row.created_at ? format(new Date(row.created_at), 'yyyy-MM-dd HH:mm:ss') : '-',
    },
    { id: 'actions' },
])

async function load() {
    loading.value = true

    const [error, response] = await fetcher.try<{ items: ResticSnapshot[] }>(
        `/api/plans/${props.planId}/restic`,
        { method: 'GET' }
    )

    if (error) {
        loading.value = false
        return
    }

    snapshots.value = response.items || []

    await new Promise(resolve => setTimeout(resolve, 300))

    loading.value = false
}

onMounted(load)
</script>

<template>
    <Card>
        <CardHeader>
            <div class="flex items-center justify-between">
                <div>
                    <CardTitle>{{ $t('Snapshots') }}</CardTitle>
                    <CardDescription>
                        {{ $t('View and manage Restic snapshots for this plan.') }}
                    </CardDescription>
                </div>
                <div class="flex items-center gap-2">
                    <Button variant="outline" @click="load">
                        <Icon name="refreshCw" :class="{ 'animate-spin': loading }" />
                    </Button>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <ObjectInspect v-if="inspect" :model-value="inspect" :open="true"
                @update:open="val => { if (!val) inspect = undefined }">
                <div class="hidden" />
            </ObjectInspect>

            <DataTable :rows="snapshots" :columns="columns" :loading="loading">
                <template #row-actions="{ row }">
                    <div class="flex items-center gap-2 justify-end">
                        <AlertButton variant="ghost" size="sm" fetch-method="POST"
                            :fetch="`/api/plans/${planId}/restic/${row.id}/restore`"
                            :tooltip="$t('Restore this snapshot')"
                            :description="$t('Are you sure you want to restore this snapshot? This action cannot be undone.')"
                            :toast-on-success="$t('Restore started successfully.')" @fetched="load">
                            <Icon name="TimerReset" />
                        </AlertButton>

                        <AlertButton variant="ghost" size="sm" fetch-method="DELETE"
                            :fetch="`/api/plans/${planId}/restic/${row.id}`"
                            :tooltip="$t('Delete this snapshot')"
                            :description="$t('Are you sure you want to delete this snapshot? This action cannot be undone.')"
                            :toast-on-success="$t('Snapshot deleted.')" @fetched="load">
                            <Icon name="trash" />
                        </AlertButton>

                        <DropdownMenu>
                            <DropdownMenuTrigger as-child>
                                <Button variant="ghost" class="w-8 h-8 p-0">
                                    <span class="sr-only">{{ $t('More') }}</span>
                                    <Icon name="MoreVertical" class="w-3 h-3 sm:w-4 sm:h-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent class="max-h-60 overflow-y-auto">
                                <DropdownMenuItem class="cursor-pointer" @click="inspect = row.metadata">
                                    {{ $t('Metadata') }}
                                </DropdownMenuItem>
                                <DropdownMenuItem class="cursor-pointer" @click="inspect = row.data">
                                    {{ $t('Raw Data') }}
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </template>
            </DataTable>
        </CardContent>
    </Card>
</template>
