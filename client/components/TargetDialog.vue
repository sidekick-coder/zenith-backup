<script setup lang="ts">
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/valibot'
import { toast } from 'vue-sonner'
import FormTextField from '#client/components/FormTextField.vue'
import Button from '#client/components/Button.vue'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '#client/components/ui/dialog'
import { $fetch } from '#client/utils/fetcher.ts'
import { tryCatch } from '#shared/utils/tryCatch.ts'

import targetValidator from '#zenith-backup/shared/validators/target.validator.ts'
import DriveEntryPicker from '#client/components/DriveEntryPicker.vue'
import type Target from '#zenith-backup/shared/entities/target.entity.ts'
import validator from '#shared/services/validator.service'

interface Props {
    planId: number
}

interface Emits {
    (e: 'submit'): void
    (e: 'close'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const saving = ref(false)

const schema = validator.create(v => v.omit(targetValidator.create, ['plan_id']))

const { handleSubmit, values, setValues } = useForm({
    validationSchema: toTypedSchema(schema),
    initialValues: { path: '' },
})

const onSubmit = handleSubmit(async (payload) => {
    saving.value = true

    const url = '/api/backup/targets'

    const [error] = await tryCatch(() => $fetch<Target>(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: {
            plan_id: props.planId,
            path: payload.path
        }
    }))

    if (error) {
        saving.value = false
        return
    }

    setTimeout(() => {
        saving.value = false
        toast.success($t('Saved successfully.'))
        emit('submit')
    }, 800)
})

function close() {
    emit('close')
}
</script>

<template>
    <Dialog 
        :open="true" 
        @update:open="close"
    >
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    {{ $t('Add Target') }}
                </DialogTitle>
                <DialogDescription>
                    {{ $t('Add a new backup target to this plan.') }}
                </DialogDescription>
            </DialogHeader>

            <form @submit.prevent="onSubmit">
                <div class="space-y-4">
                    <FormTextField
                        name="path"
                        :label="$t('Path')"
                        :placeholder="$t('Enter path to backup')"
                    >
                        <template #append>
                            <DriveEntryPicker
                                drive-id="root"
                                class="h-10"
                                :initial-path="values.path"
                                @update:model-value="setValues({
                                    path: $event[0]?.path || ''
                                })"
                            />
                        </template>
                    </FormTextField>
                </div>

                <DialogFooter class="mt-6">
                    <Button
                        variant="outline"
                        @click="close"
                    >
                        {{ $t('Cancel') }}
                    </Button>
                    <Button
                        type="submit"
                        :loading="saving"
                    >
                        {{ $t('Create') }}
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
</template>
