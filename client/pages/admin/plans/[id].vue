<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/valibot'
import * as v from 'valibot'
import { toast } from 'vue-sonner'
import AppLayout from '#client/layouts/AppLayout.vue'
import FormTextField from '#client/components/FormTextField.vue'
import FormSelect from '#client/components/FormSelect.vue'
import Button from '#client/components/Button.vue'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from '#client/components/ui/card'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '#client/components/ui/dropdown-menu'
import { $fetch } from '#client/utils/fetcher.ts'
import { tryCatch } from '#shared/tryCatch.ts'
import { $t } from '#shared/lang.ts'
import FormTextarea from '#client/components/FormTextarea.vue'
import Icon from '#client/components/Icon.vue'

const route = useRoute()
const router = useRouter()
const planId = route.params.id as string

const loading = ref(false)
const saving = ref(false)

const strategies = [
    { 
        label: 'ZIP', 
        value: 'zip' 
    },
    { 
        label: 'Restic', 
        value: 'restic' 
    }
]

const schema = v.object({
    name: v.pipe(v.string(), v.minLength(1, $t('Name is required'))),
    strategy: v.picklist(['zip', 'restic'], $t('Strategy is required')),
    cron: v.optional(v.string()),
    description: v.optional(v.string()),
})

const { handleSubmit, setValues, setFieldValue } = useForm({
    validationSchema: toTypedSchema(schema),
    initialValues: {
        name: '',
        strategy: 'zip' as 'zip' | 'restic',
        cron: '',
        description: '',
    },
})

const cronShortcuts = [
    { 
        label: $t('Every minute'), 
        value: '* * * * *' 
    },
    { 
        label: $t('Every hour'), 
        value: '0 * * * *' 
    },
    { 
        label: $t('Every day at 2 AM'), 
        value: '0 2 * * *' 
    },
    { 
        label: $t('Every week (Sunday at 2 AM)'), 
        value: '0 2 * * 0' 
    },
    { 
        label: $t('Every month (1st at 2 AM)'), 
        value: '0 2 1 * *' 
    },
    { 
        label: $t('Every year (Jan 1st at 2 AM)'), 
        value: '0 2 1 1 *' 
    }
]

function setCronShortcut(cronValue: string) {
    setFieldValue('cron', cronValue)
}

async function loadPlan() {
    loading.value = true

    const [error, response] = await tryCatch(() => 
        $fetch(`/api/backup/plans/${planId}`, { method: 'GET' })
    )

    if (error) {
        loading.value = false
        toast.error($t('Failed to load plan details.'))
        router.push('/admin/plans')
        return
    }

    const plan = response as any
    const options = plan.options ? JSON.parse(plan.options) : {}
    
    setValues({
        name: plan.name,
        strategy: plan.strategy,
        cron: plan.cron || '',
        description: options.description || '',
    })

    loading.value = false
}

const onSubmit = handleSubmit(async (form) => {
    saving.value = true

    // Extract description and put it in options
    const { description, ...planData } = form
    const options = JSON.stringify({ description })

    const payload = {
        ...planData,
        options,
    }

    const [error] = await tryCatch(() => 
        $fetch(`/api/backup/plans/${planId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        })
    )

    if (error) {
        saving.value = false
        toast.error($t('Failed to update.'))
        return
    }

    setTimeout(() => {
        saving.value = false
        toast.success($t('Updated successfully.'))
    }, 800)
})

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

        <form 
            v-if="!loading" 
            @submit.prevent="onSubmit"
        >
            <Card>
                <CardHeader>
                    <CardTitle>{{ $t('Edit Plan') }}</CardTitle>
                    <CardDescription>
                        {{ $t('Edit backup plan details and configuration.') }}
                    </CardDescription>
                </CardHeader>
                <CardContent class="space-y-6">
                    <FormTextField
                        name="name"
                        :label="$t('Name')"
                        :placeholder="$t('Enter plan name')"
                    />

                    <FormSelect
                        name="strategy"
                        :label="$t('Strategy')"
                        :options="strategies"
                        disabled
                        label-key="label"
                        value-key="value"
                    />
                    
                    <FormTextarea
                        name="description"
                        :label="$t('Description')"
                        :placeholder="$t('Enter plan description')"
                        :hint="$t('Optional description for this backup plan')"
                    />

                    <div class="flex gap-x-2 items-end">
                        <div class="flex-1">
                            <FormTextField
                                name="cron"
                                :label="$t('Cron Schedule')"
                                :placeholder="$t('0 2 * * *')"
                            />
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button
                                    variant="outline"
                                    class="h-10"
                                >
                                    <Icon name="calendar" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>
                                    {{ $t('Common schedules') }}
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    v-for="shortcut in cronShortcuts"
                                    :key="shortcut.value"
                                    @click="setCronShortcut(shortcut.value)"
                                >
                                    {{ shortcut.label }}
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </CardContent>
                <CardFooter class="flex justify-end gap-4">
                    <Button
                        variant="outline"
                        @click="router.back()"
                    >
                        {{ $t('Cancel') }}
                    </Button>
                    <Button
                        type="submit"
                        :loading="saving"
                    >
                        {{ $t('Save') }}
                    </Button>
                </CardFooter>
            </Card>
        </form>
    </AppLayout>
</template>