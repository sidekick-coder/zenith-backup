<script setup lang="ts">
import { ref, watch } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/valibot'
import { toast } from 'vue-sonner'
import FormTextField from '#client/components/FormTextField.vue'
import FormTextarea from '#client/components/FormTextarea.vue'
import Button from '#client/components/Button.vue'
import Icon from '#client/components/Icon.vue'
import ClientOnly from '#client/components/ClientOnly.vue'
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
import planValidator from '#zenith-backup/shared/validators/plan.validator.ts'
import Plan from '#zenith-backup/shared/entities/plan.entity.ts'
import validator from '#shared/services/validator.service.ts'

interface Props {
    plan: Plan
    planId: number
}

const props = defineProps<Props>()

const saving = ref(false)

const { handleSubmit, setValues, setFieldValue } = useForm({
    validationSchema: toTypedSchema(validator.create(v => v.omit(planValidator.update, ['options']))),
    initialValues: {
        name: props.plan.name,
        cron: props.plan.cron || '',
        description: props.plan.description || '',
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

const onSubmit = handleSubmit(async (data) => {
    saving.value = true

    const [error] = await tryCatch(() => 
        $fetch(`/api/backup/plans/${props.planId}`, {
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

// Watch for prop changes and update form values
watch(() => props.plan, (newPlan: Plan) => {
    if (newPlan) {
        setValues({
            name: newPlan.name,
            cron: newPlan.cron || '',
            description: newPlan.description || '',
        })
    }
}, { immediate: true })

// execute 
const executing = ref(false)

async function execute() {
    executing.value = true

    const [error] = await tryCatch(() => $fetch(`/api/backup/plans/${props.planId}/execute`, { method: 'POST', }))

    if (error) {
        executing.value = false
        return
    }

    setTimeout(() => {
        toast.success($t('Execution started.'))
        executing.value = false
    }, 800)

}
</script>

<template>
    <form @submit.prevent="onSubmit">
        <Card>
            <CardHeader>
                <CardTitle>{{ $t('Plan details') }}</CardTitle>
                <CardDescription>
                    {{ $t('Edit details and configuration.') }}
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
                    :loading="executing"
                    @click="execute"
                >
                    <Icon name="play" />
                    {{ $t('Run') }}
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
</template>
