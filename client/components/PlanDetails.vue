<script setup lang="ts">
import { ref, watch } from 'vue'
import { useForm } from 'vee-validate'
import { toast } from 'vue-sonner'
import FormTextField from '#client/components/FormTextField.vue'
import FormTextarea from '#client/components/FormTextarea.vue'
import FormSwitch from '#client/components/FormSwitch.vue'
import Button from '#client/components/Button.vue'
import Icon from '#client/components/Icon.vue'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from '#client/components/ui/card'
import { $fetch } from '#client/utils/fetcher.ts'

import Plan from '#zenith-backup/shared/entities/plan.entity.ts'
import DialogForm from '#client/components/DialogForm.vue'

interface Props {
    plan: Plan
    planId: string
}

const props = defineProps<Props>()

const saving = ref(false)

const { handleSubmit, setValues } = useForm({
    initialValues: props.plan,
})

const onSubmit = handleSubmit(async (data) => {
    saving.value = true

    const [error] = await $fetch.try(`/api/zbackup/plans/${props.planId}`, {
        method: 'PATCH',
        data: {
            name: data.name,
            description: data.description,
            active: data.active,
        }
    })

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
            description: newPlan.description || '',
        })
    }
}, { immediate: true })

// execute 
const executing = ref(false)

async function execute(data: any) {
    executing.value = true

    const [error] = await $fetch.try(`/api/zbackup/plans/${props.planId}/backup`, { 
        method: 'POST',
        data
    })

    if (error) {
        executing.value = false
        return
    }

    setTimeout(() => {
        toast.success($t('Executed'))
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

                <FormSwitch
                    name="active"
                    :label="$t('Active')"
                    :hint="$t('Activate or deactivate this backup plan')"
                />

                <FormTextarea
                    name="description"
                    :label="$t('Description')"
                    :placeholder="$t('Enter plan description')"
                    :hint="$t('Optional description for this backup plan')"
                />
            </CardContent>
            <CardFooter class="flex justify-end gap-4">
                <DialogForm
                    :title="$t('Execute Backup')"
                    :description="$t('Execute a manual backup for this plan.')"
                    :submit-text="$t('Run Backup')"
                    :handle="execute"
                    :fields="{
                        description: {
                            component: 'text-field',
                            label: $t('Description'),
                        }
                    }"
                >
                    <Button
                        variant="outline"
                        :loading="executing"
                    >
                        <Icon name="play" />
                        {{ $t('Run') }}
                    </Button>
                </DialogForm>
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
