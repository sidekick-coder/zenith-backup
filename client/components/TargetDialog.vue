<script setup lang="ts">
import { ref, onMounted } from 'vue'
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
import { tryCatch } from '#shared/tryCatch.ts'
import { $t } from '#shared/lang.ts'
import Target from '#zenith-backup/shared/entities/target.entity.ts'
import targetValidator from '#zenith-backup/shared/validators/target.validator.ts'

interface Props {
    planId: string
    target?: Target
}

interface Emits {
    (e: 'submit'): void
    (e: 'close'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const saving = ref(false)
const isEdit = ref(!!props.target)

const { handleSubmit, setValues } = useForm({
    validationSchema: toTypedSchema(props.target ? targetValidator.update : targetValidator.create),
    initialValues: { path: '' },
})

const onSubmit = handleSubmit(async (payload) => {
    saving.value = true

    const url = isEdit.value ? `/api/backup/plans/${props.planId}/${props.target?.id}` : `/api/backup/plans/${props.planId}/targets`
    const method = isEdit.value ? 'PATCH' : 'POST'

    const [error] = await tryCatch(() => $fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    }))

    if (error) {
        saving.value = false
        toast.error($t('Failed to save.'))
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

onMounted(() => {
    if (props.target) {
        setValues({ path: props.target.path })
    }
})
</script>

<template>
    <Dialog 
        :open="true" 
        @update:open="close"
    >
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    {{ isEdit ? $t('Edit Target') : $t('Add Target') }}
                </DialogTitle>
                <DialogDescription>
                    {{ isEdit ? $t('Edit backup target details.') : $t('Add a new backup target to this plan.') }}
                </DialogDescription>
            </DialogHeader>

            <form @submit.prevent="onSubmit">
                <div class="space-y-4">
                    <FormTextField
                        name="path"
                        :label="$t('Path')"
                        :placeholder="$t('Enter path to backup')"
                        :hint="$t('Full path to the file or directory to backup')"
                    />
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
                        {{ isEdit ? $t('Update') : $t('Create') }}
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
</template>
