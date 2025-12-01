<script setup lang="ts">
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/valibot'
import { toast } from 'vue-sonner'
import FormSelect from '#client/components/FormSelect.vue'
import FormTextField from '#client/components/FormTextField.vue'
import Button from '#client/components/Button.vue'
import { $t } from '#shared/lang.ts'
import Card from '#client/components/ui/card/Card.vue'
import CardHeader from '#client/components/ui/card/CardHeader.vue'
import CardTitle from '#client/components/ui/card/CardTitle.vue'
import CardDescription from '#client/components/ui/card/CardDescription.vue'
import CardContent from '#client/components/ui/card/CardContent.vue'
import CardFooter from '#client/components/ui/card/CardFooter.vue'
import { $fetch } from '#client/utils/fetcher.ts'
import { tryCatch } from '#shared/utils/tryCatch.ts'
import type Plan from '#zenith-backup/shared/entities/plan.entity.ts'
import validator from '#shared/services/validator.service'
import DriveEntryPicker from '#client/components/DriveEntryPicker.vue'

interface Props {
    plan: Plan
}

const props = defineProps<Props>()

const saving = ref(false)
const loading = ref(false)

const schema = validator.create(v => v.object({
    drive_id: v.string(),
    folder: v.optional(v.string())
}))

const { handleSubmit, values, setValues } = useForm({
    validationSchema: toTypedSchema(schema), 
    initialValues: JSON.parse(JSON.stringify(props.plan?.options || {}))
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
</script>

<template>
    <form @submit.prevent="onSubmit">
        <Card>
            <CardHeader>
                <CardTitle>{{ $t('Tar config') }}</CardTitle>
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
                    v-if="values?.drive_id"
                    name="folder"
                    :label="$t('Folder')"
                    :placeholder="$t('backups')"
                    :hint="$t('Folder path within the drive where backups will be stored')"
                >
                    <template #append>
                        <DriveEntryPicker
                            :drive-id="values?.drive_id"
                            class="h-10"
                            @update:model-value="setValues({
                                folder: $event[0]?.path || ''
                            })"
                        />
                    </template>
                </FormTextField>
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
