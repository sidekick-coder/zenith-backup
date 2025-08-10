<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/valibot'
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
import PlanTargetTable from '#zenith-backup/client/components/PlanTargetTable.vue'
import PlanDestinationTable from '#zenith-backup/client/components/PlanDestinationTable.vue'
import planValidator from '#zenith-backup/shared/validators/plan.validator.ts'
import Plan from '#zenith-backup/shared/entities/plan.entity.ts'
import ClientOnly from '#client/components/ClientOnly.vue'
import PlanStrategyZip from '#zenith-backup/client/components/PlanStrategyZip.vue'
import validator from '#shared/services/validator.service.ts'

const route = useRoute()
const router = useRouter()
const planId = route.params.id as string
const plan = ref<Plan>()

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


const { handleSubmit, setValues, setFieldValue } = useForm({
    validationSchema: toTypedSchema(validator.create(v => v.omit(planValidator.update, ['options']))),
    initialValues: {
        name: '',
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
        $fetch<Plan>(`/api/backup/plans/${planId}`, { method: 'GET' })
    )

    if (error) {
        loading.value = false
        toast.error($t('Failed to load plan details.'))
        router.push('/admin/plans')
        return
    }
    
    setValues({
        name: response.name,
        cron: response.cron || '',
        description: response.description || '',
    })

    plan.value = response

    loading.value = false
}

const onSubmit = handleSubmit(async (data) => {
    saving.value = true

    const [error] = await tryCatch(() => 
        $fetch(`/api/backup/plans/${planId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            data
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

        <div
            v-if="!loading && plan"
            class="flex flex-col gap-y-5"
        >
            <form @submit.prevent="onSubmit">
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

                        <div class="flex gap-x-2 items-end">
                            <div class="flex-1">
                                <FormTextField
                                    name="cron"
                                    :label="$t('Cron Schedule')"
                                    :placeholder="$t('0 2 * * *')"
                                />
                            </div>
                            <ClientOnly>
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
                            </ClientOnly>
                        </div>

                        <FormSelect
                            name="strategy"
                            :model-value="plan?.strategy"
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

            <PlanStrategyZip
                v-if="plan?.strategy === 'zip'"
                :plan="plan"
            />

            <PlanTargetTable :plan-id="planId" />

            <PlanDestinationTable :plan-id="planId" />
        </div>
    </AppLayout>
</template>