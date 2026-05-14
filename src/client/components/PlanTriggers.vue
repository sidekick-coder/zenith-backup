<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { toast } from 'vue-sonner'
import { format } from 'date-fns'
import DataTable, { defineColumns } from '#client/components/DataTable.vue'

import { $fetch } from '#client/utils/fetcher.ts'
import { tryCatch } from '#shared/utils/tryCatch.ts'
import Button from '#client/components/Button.vue'
import Icon from '#client/components/Icon.vue'
import AlertButton from '#client/components/AlertButton.vue'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '#client/components/ui/card'
import Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'
import Trigger from '#zenith-backup/shared/entities/trigger.entity.ts'
import ObjectInspect from '#client/components/ObjectInspect.vue'
import type Plan from '#zenith-backup/shared/entities/plan.entity.ts'
import DialogForm from '#client/components/DialogForm.vue'
import { defineFormFields } from '#client/components/DialogForm.vue'
import { createId } from '#client/utils'
import Badge from '#client/components/ui/badge/Badge.vue'
import DropdownMenu from '#client/components/ui/dropdown-menu/DropdownMenu.vue'
import DropdownMenuTrigger from '#client/components/ui/dropdown-menu/DropdownMenuTrigger.vue'
import DropdownMenuContent from '#client/components/ui/dropdown-menu/DropdownMenuContent.vue'
import DropdownMenuItem from '#client/components/ui/dropdown-menu/DropdownMenuItem.vue'

const plan = defineModel('plan', {
    type: Object as () => Plan,
    required: true
})

defineOptions({
    inheritAttrs: false,
})

const triggers = ref<Trigger[]>([])
const loading = ref(false)
const deletingId = ref<string>()

const columns = defineColumns<Trigger>([
    {
        id: 'type',
        label: $t('Type'),
        field: 'type'
    },
    {
        id: 'value',
        label: $t('Value'),
    },
    { id: 'actions' }
])

const fields = defineFormFields({
    type: {
        component: 'select',
        label: $t('Type'),
        options: [
            {
                label: $t('Cron'),
                value: 'cron'
            },
            {
                label: $t('Event'),
                value: 'event'
            }
        ]
    },
    cron: data => ({
        component: data?.type === 'cron' ? 'text-field' : 'hidden',
        label: 'Cron',
        presets: [
            {
                label: $t('Every hour'),
                value: '0 * * * *'
            },
            {
                label: $t('Every day at midnight'),
                value: '0 0 * * *'
            },
            {
                label: $t('Every week on Sunday at midnight'),
                value: '0 0 * * 0'
            },
            {
                label: $t('Every month on the 1st at midnight'),
                value: '0 0 1 * *'
            }
        ]
    }),
    events: data => ({
        component: data?.type === 'event' ? 'string-list-input' : 'hidden',
        label: $t('Events'),
        description: $t('List of events that will trigger the backup.'),
    })
})

function load() {
    loading.value = true

    const items = JSON.parse(JSON.stringify(plan.value.triggers || []))

    triggers.value = items.map((item: any) => new Trigger(item))

    setTimeout(() => {
        loading.value = false
    }, 500)
}

async function create(data: any) {
    const id = createId()

    const item = {
        id,
        ...data
    }

    const items = JSON.parse(JSON.stringify(plan.value.triggers || []))

    items.push(item)

    const [error] = await $fetch.try(`/api/zbackup/plans/${plan.value.id}`, {
        method: 'PUT',
        data: {
            triggers: items
        }
    })

    if (error) {
        return
    }

    plan.value.triggers = items.map((item: any) => new Trigger(item))
}

async function update(id: string, data: any) {
    const items = JSON.parse(JSON.stringify(plan.value.triggers || []))
    
    const index = items.findIndex((i: any) => i.id === id)
    
    if (index === -1) return

    items[index] = {
        id,
        ...data
    }

    const [error] = await $fetch.try(`/api/zbackup/plans/${plan.value.id}`, {
        method: 'PUT',
        data: {
            triggers: items
        }
    })

    if (error) {
        return
    }

    plan.value.triggers = items.map((item: any) => new Trigger(item))
}

async function destroy(id: string) {
    const items = JSON.parse(JSON.stringify(plan.value.triggers || []))
    
    const index = items.findIndex((i: any) => i.id === id)
    
    if (index === -1) return
    
    deletingId.value = id

    items.splice(index, 1)

    const [error] = await $fetch.try(`/api/zbackup/plans/${plan.value.id}`, {
        method: 'PUT',
        data: {
            triggers: items
        }
    })

    if (error) {
        deletingId.value = undefined
        return
    }

    
    setTimeout(() => {
        triggers.value = triggers.value.filter(t => t.id !== id)
        plan.value.triggers = items.map((item: any) => new Trigger(item))
        deletingId.value = undefined
    }, 500)
}
onMounted(load)
</script>

<template>
    <Card>
        <CardHeader>
            <div class="flex items-center justify-between">
                <div class="flex-1">
                    <CardTitle>{{ $t('Triggers') }}</CardTitle>
                    <CardDescription>
                        {{ $t('View and manage triggers for this plan.') }}
                    </CardDescription>
                </div>

                <div class="flex space-x-2">
                    <Button
                        variant="outline"
                        @click="load"
                    >
                        <Icon
                            name="refreshCw"
                            :class="{ 'animate-spin': loading }"
                        />
                    </Button>
                    <DialogForm
                        :title="$t('Add Trigger')"
                        :fields="fields"
                        :handle="create"
                        @submit="load"
                    >
                        <Button>
                            {{ $t('Add') }}
                        </Button>
                    </DialogForm>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <DataTable
                :rows="triggers"
                :columns="columns"
                :loading="loading"
            >
                <template #row-value="{ row }">
                    <div v-if="row.type === 'cron'">
                        {{ row.cron }}
                    </div>
                    <div
                        v-else-if="row.type === 'event' && row.events?.length"
                        class="flex items-center gap-1"
                    >
                        <Badge
                            v-for="e in row.events.slice(0, 2)"
                            :key="e"
                            class="h-6"
                        >
                            {{ e }}
                        </Badge>

                        <DropdownMenu v-if="row.events.length > 2">
                            <DropdownMenuTrigger as-child>
                                <Badge
                                    class="h-6 cursor-pointer"
                                >
                                    <Icon name="MoreHorizontal" />
                                </Badge>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent class="max-h-60 overflow-y-auto flex flex-col gap-1 p-2">
                                <Badge
                                    v-for="e in row.events?.slice(2)"
                                    :key="e"
                                >
                                    {{ e }}
                                </Badge>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </template>

                <template #row-actions="{ row }">
                    <div class="flex items-center gap-2 justify-end">
                        <DialogForm
                            :title="$t('Edit')"
                            :fields="fields"
                            :values="row"
                            :handle="data => update(row.id, data)"
                            @submit="load"
                        >
                            <Button
                                variant="ghost"
                                size="sm"
                            >
                                <Icon name="Edit" />
                            </Button>
                        </DialogForm>

                        <AlertButton
                            variant="ghost"
                            size="sm"
                            :loading="deletingId === row.id"
                            @confirm="destroy(row.id)"
                        >
                            <Icon name="trash" />
                        </AlertButton>
                    </div>
                </template>
            </DataTable>
        </CardContent>
    </Card>
</template>
