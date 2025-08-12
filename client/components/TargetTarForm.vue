<script setup lang="ts">
import {
    ref, onMounted, watch 
} from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/valibot'
import * as v from 'valibot'
import { toast } from 'vue-sonner'
import FormTextField from '#client/components/FormTextField.vue'
import Button from '#client/components/Button.vue'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '#client/components/ui/card'
import { $fetch } from '#client/utils/fetcher.ts'
import { tryCatch } from '#shared/tryCatch.ts'
import { $t } from '#shared/lang.ts'
import type TargetMeta from '#zenith-backup/shared/entities/targetMeta.entity.ts'
import type Target from '#zenith-backup/shared/entities/target.entity.ts'

interface Props {
    target?: Target
}

const props = defineProps<Props>()

const loading = ref(false)
const saving = ref(false)
const slugMeta = ref<TargetMeta>()

const schema = toTypedSchema(v.object({
    slug: v.pipe(
        v.string(),
        v.minLength(1, $t('Slug is required')),
        v.regex(/^[a-zA-Z0-9-_]+$/, $t('Slug can only contain lowercase letters, numbers, hyphens and underscores'))
    )
}))

const { handleSubmit, setValues, values } = useForm({
    validationSchema: schema,
    initialValues: { slug: '' }
})

async function loadSlugMeta() {
    if (!props.target?.id) {
        return
    }

    loading.value = true

    const [error, response] = await tryCatch(() => 
        $fetch(`/api/backup/targets/${props.target?.id}/metas`, { method: 'GET' })
    )

    if (error) {
        loading.value = false
        return
    }

    const metas = (response as { data: TargetMeta[] }).data
    slugMeta.value = metas.find(meta => meta.name === 'slug')

    if (slugMeta.value?.value) {
        setValues({ slug: slugMeta.value.value })
    }

    loading.value = false
}


const onSubmit = handleSubmit(async (payload) => {
    saving.value = true

    const [error] = await tryCatch(() => 
        $fetch(`/api/backup/targets/${props.target?.id}/metas`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            data: {
                name: 'slug',
                value: payload.slug
            }
        })
    )

    if (error) {
        saving.value = false
        return
    }

    toast.success($t('Saved successfully'))

    saving.value = false
})

watch(() => props.target?.id, () => {
    if (props.target?.id) {
        loadSlugMeta()
    }
}, { immediate: true })

onMounted(() => {
    if (props.target?.id) {
        loadSlugMeta()
    }
})
</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle>{{ $t('Tar Configuration') }}</CardTitle>
            <CardDescription>{{ $t('Configure tar-specific settings for this target') }}</CardDescription>
        </CardHeader>
        <CardContent>
            <div 
                v-if="loading" 
                class="space-y-4"
            >
                <div class="animate-pulse">
                    <div class="h-4 bg-gray-200 rounded w-1/4 mb-2" />
                    <div class="h-10 bg-gray-100 rounded" />
                </div>
            </div>

            <form 
                v-if="!loading"
                class="space-y-6"
                @submit.prevent="onSubmit"
            >
                <FormTextField
                    name="slug"
                    :label="$t('Slug')"
                    :placeholder="$t('Enter slug for this target')"
                    :hint="$t('A unique identifier for this target. This is used to create files and map snapshots to the target')"
                />

                <div class="flex justify-end">
                    <Button
                        type="submit"
                        :loading="saving"
                        :disabled="!values.slug || values.slug === slugMeta?.value"
                    >
                        {{ $t('Save') }}
                    </Button>
                </div>
            </form>
        </CardContent>
    </Card>
</template>
