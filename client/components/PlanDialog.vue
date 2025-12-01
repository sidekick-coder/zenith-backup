<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/valibot'
import { ref } from 'vue'
import { toast } from 'vue-sonner'
import { $t } from '#shared/lang.ts'
import FormTextField from '#client/components/FormTextField.vue'
import { $fetch } from '#client/utils/fetcher.ts'
import Button from '#client/components/Button.vue'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '#client/components/ui/dialog'
import { tryCatch } from '#shared/utils/tryCatch.ts'
import DialogClose from '#client/components/ui/dialog/DialogClose.vue'
import FormSelect from '#client/components/FormSelect.vue'
import planValidator from '#zenith-backup/shared/validators/plan.validator.ts'

const emit = defineEmits(['submit'])

const loading = ref(false)
const open = ref(false)

const { handleSubmit, resetForm } = useForm({
    validationSchema: toTypedSchema(planValidator.create),
    initialValues: { name: '', },
})

const onSubmit = handleSubmit(async (form) => {
    loading.value = true

    const [error] = await tryCatch(() => {
        return $fetch('/api/backup/plans', {
            method: 'POST',
            data: form,
        })
    })

    if (error) {
        loading.value = false
        return
    }

    
    setTimeout(() => {
        open.value = false
        loading.value = false
        resetForm()
        emit('submit')
        toast.success($t('Created successfully'))
    }, 1000)

})
</script>
<template>
    <Dialog v-model:open="open">
        <DialogTrigger>
            <Button>
                {{ $t('Add new') }}
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>{{ $t('Add new') }}</DialogTitle>
                <DialogDescription>
                    {{ $t('Create a new backup plan') }}
                </DialogDescription>
            </DialogHeader>
            <form
                class="space-y-4 py-2"
                @submit.prevent="onSubmit"
            >
                <FormTextField
                    name="name"
                    :label="$t('Name')"
                />
                
                <FormSelect
                    name="strategy"
                    :label="$t('Strategy')"
                    :options="planValidator.strategies"
                />

                <DialogFooter>
                    <DialogClose>
                        <Button
                            variant="outline"
                            :loading
                        >
                            {{ $t('Cancel') }}
                        </Button>
                    </DialogClose>
                    <Button
                        type="submit"
                        :loading
                    >
                        {{ $t('Create') }}
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
</template>