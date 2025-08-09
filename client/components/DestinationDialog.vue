<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/valibot'
import { toast } from 'vue-sonner'
import FormSelect from '#client/components/FormSelect.vue'
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
import Destination from '#modules/zenith-backup/shared/entities/destination.entity.ts'
import destinationValidator from '#modules/zenith-backup/shared/validators/destination.validator.ts'

interface Props {
    planId: string
    destination?: Destination
}

interface Emits {
    (e: 'submit'): void
    (e: 'close'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const saving = ref(false)
const loading = ref(false)
const isEdit = ref(!!props.destination)
const drives = ref<{ label: string; value: string }[]>([])

const { handleSubmit, setValues } = useForm({
    validationSchema: toTypedSchema(props.destination ? destinationValidator.update : destinationValidator.create),
    initialValues: { 
        drive_id: '', 
        folder: '/' 
    },
})

async function loadDrives() {
    loading.value = true
    
    const [error, response] = await tryCatch(() => $fetch('/api/drives', { method: 'GET' }))

    if (error) {
        console.error('Failed to load drives:', error)
        loading.value = false
        return
    }

    const data = response as { data: any[] }
    drives.value = (data.data || []).map((drive: any) => ({
        label: drive.metas?.name || drive.id,
        value: drive.id
    }))
    
    loading.value = false
}

const onSubmit = handleSubmit(async (payload) => {
    saving.value = true

    const url = isEdit.value ? `/api/backup/plans/${props.planId}/destinations/${props.destination?.id}` : `/api/backup/plans/${props.planId}/destinations`
    const method = isEdit.value ? 'PATCH' : 'POST'

    const [error] = await tryCatch(() => $fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
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

onMounted(() => {
    loadDrives()
    
    if (props.destination) {
        setValues({ 
            drive_id: props.destination.drive_id,
            folder: props.destination.folder 
        })
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
                    {{ isEdit ? $t('Edit Destination') : $t('Add Destination') }}
                </DialogTitle>
                <DialogDescription>
                    {{ isEdit ? $t('Edit backup destination details.') : $t('Add a new backup destination to this plan.') }}
                </DialogDescription>
            </DialogHeader>

            <form @submit.prevent="onSubmit">
                <div class="space-y-4">
                    <FormSelect
                        name="drive_id"
                        :label="$t('Drive ID')"
                        :options="drives"
                        label-key="label"
                        value-key="value"
                        :hint="$t('Select the drive where the backup will be stored')"
                        :loading="loading"
                    />
                    
                    <FormTextField
                        name="folder"
                        :label="$t('Folder')"
                        :placeholder="$t('Enter folder path')"
                        :hint="$t('Folder path within the drive where backups will be stored')"
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
