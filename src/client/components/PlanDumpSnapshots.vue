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

interface DumpSnapshot {
    id: string
    created_at: string
    size: number
    metadata: Record<string, unknown>
}

interface Props {
    planId: string
}

defineOptions({ inheritAttrs: false })

const props = defineProps<Props>()

const dumps = ref<DumpSnapshot[]>([])
const loading = ref(false)
const inspect = ref<Record<string, unknown>>()

function humanSize(size: number): string {
    if (!size) return '0 B'
    const i = Math.floor(Math.log(size) / Math.log(1024))
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
    return (size / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i]
}

const columns = defineColumns<DumpSnapshot>([
    {
        id: 'id',
        label: 'ID',
        field: 'id',
    },
    {
        id: 'description',
        label: $t('Description'),
        field: 'metadata.description',
    },
    {
        id: 'size',
        label: $t('Size'),
        field: row => humanSize(row.size),
    },
    {
        id: 'created_at',
        label: $t('Created At'),
        field: row => row.created_at ? $dt(row.created_at) : '-',
    },
    { id: 'actions' },
])

async function load() {
    loading.value = true

    const [error, response] = await fetcher.try<{ items: DumpSnapshot[] }>(
        `/api/plans/${props.planId}/dumps`,
        { method: 'GET' }
    )

    if (error) {
        loading.value = false
        return
    }

    dumps.value = response.items || []

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
                    <CardTitle>{{ $t('Dumps') }}</CardTitle>
                    <CardDescription>
                        {{ $t('View and manage dump snapshots for this plan.') }}
                    </CardDescription>
                </div>
                <div class="flex items-center gap-2">
                    <AlertButton variant="outline" fetch-method="POST" :fetch="`/api/plans/${planId}/dumps/cleanup`"
                        :tooltip="$t('Remove old dumps based on retention settings')"
                        :description="$t('Are you sure you want to run cleanup? Old dumps exceeding the retention limit will be deleted.')"
                        :toast-on-success="$t('Cleanup completed.')" @fetched="load">
                        <Icon name="Eraser" />
                        {{ $t('Cleanup') }}
                    </AlertButton>

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

            <DataTable :rows="dumps" :columns="columns" :loading="loading" hide-pagination>
                <template #row-actions="{ row }">
                    <div class="flex items-center gap-2 justify-end">
                        <AlertButton variant="ghost" size="sm" fetch-method="POST"
                            :fetch="`/api/plans/${planId}/dumps/${row.id}/restore`" :tooltip="$t('Restore this dump')"
                            :description="$t('Are you sure you want to restore this dump? This action cannot be undone.')"
                            :toast-on-success="$t('Restore started successfully.')" @fetched="load">
                            <Icon name="TimerReset" />
                        </AlertButton>

                        <AlertButton variant="ghost" size="sm" fetch-method="DELETE"
                            :fetch="`/api/plans/${planId}/dumps/${row.id}`" :tooltip="$t('Delete this dump')"
                            :description="$t('Are you sure you want to delete this dump? This action cannot be undone.')"
                            :toast-on-success="$t('Dump deleted.')" @fetched="load">
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
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </template>
            </DataTable>
        </CardContent>
    </Card>
</template>
