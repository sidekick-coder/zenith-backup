<script setup lang="ts">
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/valibot'
import { toast } from 'vue-sonner'
import * as v from 'valibot'
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
import { $t } from '#shared/lang.ts'
import type Snapshot from '#zenith-backup/shared/entities/snapshot.entity.ts'
import DriveEntryPicker from '#client/components/DriveEntryPicker.vue'

interface Props {
    snapshot: Snapshot
    planId: number
}

interface Emits {
    (e: 'submit'): void
    (e: 'close'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const loading = ref(false)

const schema = v.object({ restore_folder: v.optional(v.string(), '') })

const { handleSubmit, values, setValues } = useForm({
    validationSchema: toTypedSchema(schema),
    initialValues: { restore_folder: '' },
})

const onSubmit = handleSubmit(async (payload) => {
    loading.value = true

    const data: { snapshotId: string; restore_folder?: string } = { snapshotId: props.snapshot.id }
    
    if (payload.restore_folder) {
        data.restore_folder = payload.restore_folder
    }

    const [error] = await tryCatch(() => $fetch(`/api/backup/plans/${props.planId}/restore`, {
        method: 'POST',
        data
    }))

    if (error) {
        loading.value = false
        return
    }

    setTimeout(() => {
        loading.value = false
        toast.success($t('Snapshot restored successfully.'))
        emit('submit')
    }, 1000)
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
                    {{ $t('Restore Snapshot') }}
                </DialogTitle>
                <DialogDescription>
                    {{ $t('Restore snapshot :0 to a specific location.', [snapshot.id]) }}
                </DialogDescription>
            </DialogHeader>

            <form @submit.prevent="onSubmit">
                <div class="space-y-4">
                    <FormTextField
                        name="restore_folder"
                        :label="$t('Restore Folder')"
                        :placeholder="$t('Leave empty to restore to original location')"
                        :hint="$t('Optional: Specify a custom folder to restore the snapshot to')"
                    >
                        <template #append>
                            <DriveEntryPicker
                                drive-id="root"
                                class="h-10"
                                :initial-path="values.restore_folder"
                                @update:model-value="setValues({
                                    restore_folder: $event[0]?.path || ''
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
                        :loading="loading"
                    >
                        {{ $t('Restore') }}
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
</template>
