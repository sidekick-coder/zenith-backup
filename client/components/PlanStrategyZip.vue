<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/valibot'
import { toast } from 'vue-sonner'
import FormSelect from '#client/components/FormSelect.vue'
import FormTextField from '#client/components/FormTextField.vue'
import Button from '#client/components/Button.vue'
import { $t } from '#shared/lang.ts'
import planValidator from '#zenith-backup/shared/validators/plan.validator.ts'
import Card from '#client/components/ui/card/Card.vue'
import CardHeader from '#client/components/ui/card/CardHeader.vue'
import CardTitle from '#client/components/ui/card/CardTitle.vue'
import CardDescription from '#client/components/ui/card/CardDescription.vue'
import CardContent from '#client/components/ui/card/CardContent.vue'
import CardFooter from '#client/components/ui/card/CardFooter.vue'
import { $fetch } from '#client/utils/fetcher.ts'
import { tryCatch } from '#shared/tryCatch.ts'
import type Plan from '#zenith-backup/shared/entities/plan.entity.ts'

interface Props {
    plan: Plan
}

const props = defineProps<Props>()

const saving = ref(false)
const loading = ref(false)

const { handleSubmit, setValues } = useForm({
    validationSchema: toTypedSchema(planValidator.zipOptions),
    initialValues: {
        drive_id: props.plan?.options?.drive_id || '',
        folder: props.plan?.options?.folder || '/',
    },
})

const onSubmit = handleSubmit(async (payload) => {
    saving.value = true

    const [error] = await tryCatch(() => 
        $fetch(`/api/backup/plans/${props.plan.id}`, {
            method: 'PATCH',
            data: { options: payload, }
        })
    )

    if (error) {
        saving.value = false
        return
    }    

    setTimeout(() => {
        toast.success($t('Updated successfully'))
        saving.value = false
    }, 800)
})

onMounted(() => {
    if (props.plan?.options) {
        setValues({
            drive_id: props.plan.options.drive_id || '',
            folder: props.plan.options.folder || '/',
        })
    }
})
</script>

<template>
    <form @submit.prevent="onSubmit">
        <Card>
            <CardHeader>
                <CardTitle>{{ $t('Strategy') }}</CardTitle>
                <CardDescription>
                    {{ $t('Configure the backup strategy for the plan.') }}
                </CardDescription>
            </CardHeader>
            <CardContent class="space-y-6">
                <FormSelect
                    name="drive_id"
                    label-key="name"
                    value-key="id"
                    fetch="/api/drives"
                    fetch-key="data"
                    :label="$t('Drive')"
                    :hint="$t('Select the drive where the backup will be stored')"
                    :loading="loading"
                />
                <FormTextField
                    name="folder"
                    :label="$t('Folder')"
                    :placeholder="$t('Enter folder path')"
                    :hint="$t('Folder path within the drive where backups will be stored')"
                />
            </CardContent>
            <CardFooter class="flex justify-end gap-4">
                <Button
                    type="submit"
                    :loading="saving"
                >
                    {{ $t('Save') }}
                </Button>
            </CardFooter>
        </card>
    </form>
</template>

<style>
/* Add any custom styles if needed */
</style>
