<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/valibot'
import { toast } from 'vue-sonner'
import * as v from 'valibot'
import { Eye, EyeOff } from 'lucide-vue-next'
import FormTextField from '#client/components/FormTextField.vue'
import FormTextarea from '#client/components/FormTextarea.vue'
import FormSelect from '#client/components/FormSelect.vue'
import Button from '#client/components/Button.vue'
import { $t } from '#shared/lang.ts'
import Card from '#client/components/ui/card/Card.vue'
import CardHeader from '#client/components/ui/card/CardHeader.vue'
import CardTitle from '#client/components/ui/card/CardTitle.vue'
import CardDescription from '#client/components/ui/card/CardDescription.vue'
import CardContent from '#client/components/ui/card/CardContent.vue'
import CardFooter from '#client/components/ui/card/CardFooter.vue'
import { $fetch } from '#client/utils/fetcher.ts'
import { tryCatch } from '#shared/tryCatch.ts'
import type Plan from '#zenith-backup/shared/entities/plan.entity.ts'
import DriveEntryPicker from '#client/components/DriveEntryPicker.vue'
import Meta from '#shared/entities/meta.entity.ts'

interface Props {
    plan: Plan
}

const props = defineProps<Props>()

const saving = ref(false)
const loading = ref(false)
const showPassword = ref(false)

const schema = toTypedSchema(
    v.object({
        repository_type: v.pipe(v.string()),
        repository: v.optional(v.string()),
        drive_id: v.optional(v.string()),
        folder: v.optional(v.string()),
        password: v.pipe(v.string()),
        backup_flags: v.optional(v.string()),
        forget_flags: v.optional(v.string())
    })
)

const { handleSubmit, setValues, values } = useForm({ validationSchema: schema, })

const loadMetas = async () => {
    loading.value = true

    const [error, response] = await tryCatch(() => 
        $fetch<{ data: Meta[] }>(`/api/backup/plans/${props.plan.id}/metas`)
    )

    if (error) {
        loading.value = false
        return
    }

    const metas: Record<string, any> = {}

    response.data.forEach((meta: Meta) => {
        metas[meta.name] = meta.value
    })

    setValues(metas)

    loading.value = false
}

const updateMeta = async (name: string, value: string) => {
    return $fetch(`/api/backup/plans/${props.plan.id}/metas`, {
        method: 'PUT',
        data: { 
            name, 
            value 
        }
    })
}

const onSubmit = handleSubmit(async (payload) => {
    saving.value = true

    await Promise.all([
        updateMeta('repository_type', payload.repository_type),
        updateMeta('repository', payload.repository || ''),
        updateMeta('drive_id', payload.drive_id || ''),
        updateMeta('folder', payload.folder || ''),
        updateMeta('password', payload.password),
        updateMeta('backup_flags', payload.backup_flags || ''),
        updateMeta('forget_flags', payload.forget_flags || '')
    ])

    setTimeout(() => {
        toast.success($t('Updated successfully'))
        saving.value = false
    }, 800)
})

onMounted(() => {
    loadMetas()
})
</script>

<template>
    <form @submit.prevent="onSubmit">
        <Card>
            <CardHeader>
                <CardTitle>{{ $t('Restic config') }}</CardTitle>
                <CardDescription>
                    {{ $t('Configure the Restic repository and credentials for the backup plan.') }}
                </CardDescription>
            </CardHeader>
            <CardContent class="space-y-6">
                <FormSelect
                    name="repository_type"
                    :label="$t('Repository Type')"
                    :hint="$t('Choose how to configure the repository')"
                    :loading="loading"
                    :options="[
                        { label: $t('Raw Repository'), value: 'raw' },
                        { label: $t('Drive'), value: 'drive' }
                    ]"
                    label-key="label"
                    value-key="value"
                />
                
                <FormTextField
                    v-if="values?.repository_type === 'raw'"
                    name="repository"
                    :label="$t('Repository')"
                    :placeholder="$t('/path/to/repo or sftp:user@host:/path/to/repo')"
                    :hint="$t('Restic repository location (local path, SFTP, S3, etc.)')"
                    :loading="loading"
                />

                <template v-if="values?.repository_type === 'drive'">
                    <FormSelect
                        name="drive_id"
                        label-key="name"
                        value-key="id"
                        fetch="/api/drives"
                        fetch-key="data"
                        :label="$t('Drive')"
                        :hint="$t('Select the drive where the repository will be stored')"
                        :loading="loading"
                    />
                    <FormTextField
                        v-if="values?.drive_id"
                        name="folder"
                        :label="$t('Folder')"
                        :placeholder="$t('repository')"
                        :hint="$t('Folder path within the drive where the repository will be stored')"
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
                </template>

                <FormTextField
                    name="password"
                    :type="showPassword ? 'text' : 'password'"
                    :label="$t('Password')"
                    :placeholder="$t('Enter repository password')"
                    :hint="$t('Password to encrypt/decrypt the repository')"
                    :loading="loading"
                >
                    <template #append>
                        <Button
                            variant="outline"
                            class="h-10"
                            @click="showPassword = !showPassword"
                        >
                            <Eye 
                                v-if="!showPassword" 
                                class="h-4 w-4" 
                            />
                            <EyeOff 
                                v-else 
                                class="h-4 w-4" 
                            />
                        </Button>
                    </template>
                </FormTextField>
            </CardContent>
            <CardHeader>
                <CardTitle>{{ $t('Backup Config') }}</CardTitle>
                <CardDescription>
                    {{ $t('Configure backup.') }}
                </CardDescription>
            </CardHeader>
            <CardContent class="space-y-6">
                <FormTextarea
                    name="backup_flags"
                    :label="$t('Backup Flags')"
                    :placeholder="$t('Enter additional restic backup flags here...')"
                />
            </CardContent>
            <CardHeader>
                <CardTitle>{{ $t('Forget Config') }}</CardTitle>
                <CardDescription>
                    {{ $t('Configure forgetting policies.') }}
                </CardDescription>
            </CardHeader>
            <CardContent class="space-y-6">
                <FormTextarea
                    name="forget_flags"
                    :label="$t('Forget Flags')"
                    :placeholder="$t('Enter restic forget flags here (e.g., --keep-daily 7 --keep-weekly 4)...')"
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
        </Card>
    </form>
</template>

<style>
/* Add any custom styles if needed */
</style>
