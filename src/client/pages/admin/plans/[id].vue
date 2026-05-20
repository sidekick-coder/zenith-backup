<script setup lang="ts">
import {
    ref, onMounted, computed, watch,
    defineAsyncComponent,
    onServerPrefetch,
} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Field } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/valibot'
import * as v from 'valibot'
import { toast } from 'vue-sonner'
import AdminLayout from '#client/layouts/AdminLayout.vue'
import $fetch from '#client/facades/fetch.facade.ts'
import Button from '#client/components/Button.vue'
import Icon from '#client/components/Icon.vue'
import { route, router } from '@sidekick-coder/zenith-kit/client'
import { useForm } from '@sidekick-coder/zenith-kit/components'
import DialogForm from '#client/components/DialogForm.vue'
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from '#client/components/ui/alert'

import Plan from '#zenith-backup/shared/entities/plan.entity.ts'
import PlanDumpConnectionForm from '#zenith-backup/client/components/PlanDumpConnectionForm.vue'
import { FormTextField } from '@sidekick-coder/zenith-kit/components'
import PlanDumpSQLiteForm from '#zenith-backup/client/components/PlanDumpSQLiteForm.vue'
import PlanDumpPostgresForm from '#zenith-backup/client/components/PlanDumpPostgresForm.vue'

const planId = computed(() => String(route.params.id))
const plan = ref<Plan>()
const loading = ref(false)
const saving = ref(false)
const executing = ref(false)

const schema = toTypedSchema(v.partial(v.object({
    name: v.string(),
    description: v.optional(v.string(), ''),
    active: v.boolean(),
    config: v.record(v.string(), v.any()),
    triggers: v.array(v.any()),
})))

const { handleSubmit, resetForm, values, errors } = useForm({
    validationSchema: schema,
    initialValues: {
        name: 'hello',
        description: '',
        active: false,
        config: {} as Record<string, any>,
        triggers: [],
    },
})

const save = handleSubmit(async (data) => {
    saving.value = true

    const [error] = await $fetch.try(`/api/zbackup/plans/${planId.value}`, {
        method: 'PATCH',
        data: {
            name: data.name,
            description: data.description,
            active: data.active,
            config: data.config,
            triggers: plan.value?.triggers || [],
        },
    })

    if (error) {
        saving.value = false
        toast.error($t('Failed to update.'))
        return
    }

    if (plan.value) {
        plan.value.name = data.name
        plan.value.description = data.description
        plan.value.active = data.active
        plan.value.config = data.config
        plan.value.triggers = plan.value.triggers || []
    }

    setTimeout(() => {
        saving.value = false
        toast.success($t('Updated successfully.'))
    }, 800)
})

function reset() {
    const defaultValues = {
        name: '',
        description: '',
        active: false,
        config: {},
        triggers: [],
    }

    if (plan.value) {
        resetForm({ values: defaultValues })
    }
}

async function execute(data: any) {
    executing.value = true

    const [error] = await $fetch.try(`/api/zbackup/plans/${planId.value}/backup`, {
        method: 'POST',
        data,
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

async function load() {
    loading.value = true

    const [error, response] = await $fetch.try<Plan>(`/api/zbackup/plans/${planId.value}`)

    if (error) {
        loading.value = false
        toast.error($t('Failed to load plan details.'))
        router.push('/admin/zbackup/plans')
        return
    }

    plan.value = response
    loading.value = false

    resetForm({
        values: {
            name: response.name,
            description: response.description || '',
            active: response.active || false,
            config: response.config || {},
            triggers: response.triggers || [],
        },
    })
}

async function loadIfNotDefined() {
    if (!plan.value) {
        await load()
    }
}

onMounted(loadIfNotDefined)
onServerPrefetch(loadIfNotDefined)
</script>

<template>
    <AdminLayout :breadcrumbs="[
        { label: $t('Backup'), to: '/admin/backup' },
        { label: $t('Plans'), to: '/admin/backup/plans' },
        { label: $t('Plan') },
    ]">

        <div v-if="loading" class="flex justify-center items-center h-64">
            <div class="text-lg">
                {{ $t('Loading...') }}
            </div>
        </div>

        <form v-if="!loading && plan" @submit.prevent="save">
            <div class="mb-6 flex items-start justify-between gap-4">
                <div>
                    <h1 class="text-2xl font-bold">
                        {{ $t('Plan') }}
                    </h1>
                    <p class="text-muted-foreground">
                        {{ $t('Edit plan details and configuration.') }}
                    </p>
                </div>

                <div class="flex shrink-0 items-center gap-2">
                    <Button type="button" variant="outline" @click="reset">
                        <Icon name="RotateCcw" />
                        {{ $t('Reset') }}
                    </Button>

                    <DialogForm :title="$t('Execute Backup')"
                        :description="$t('Execute a manual backup for this plan.')" :submit-text="$t('Run Backup')"
                        :handle="execute" :fields="{
                            description: {
                                component: 'text-field',
                                label: $t('Description'),
                            }
                        }">
                        <Button type="button" variant="outline" :loading="executing">
                            <Icon name="play" />
                            {{ $t('Execute') }}
                        </Button>
                    </DialogForm>

                    <Button type="submit" :loading="saving">
                        {{ $t('Save') }}
                    </Button>
                </div>
            </div>

            <Alert v-if="Object.keys(errors).length" variant="destructive" class="mb-6">
                <AlertTitle>{{ $t('Please fix the following errors before saving') }}</AlertTitle>
                <AlertDescription>
                    <ul class="mt-1 list-disc list-inside space-y-1">
                        <li v-for="(msg, field) in errors" :key="field">
                            <span class="font-medium">{{ field }}</span>: {{ msg }}
                        </li>
                    </ul>
                </AlertDescription>
            </Alert>

            <PlanDumpConnectionForm v-if="plan.strategy === 'dump_connection'" v-model:plan="plan" />
            <PlanDumpPostgresForm v-else-if="plan.strategy === 'dump_postgres'" v-model:plan="plan" />
            <PlanDumpSQLiteForm v-else-if="plan.strategy === 'dump_sqlite'" v-model:plan="plan" />

            <Alert v-else variant="destructive">
                <AlertTitle>{{ $t('Unsupported strategy') }}</AlertTitle>
                <AlertDescription>
                    {{ $t('No form is available for strategy ":strategy".', { strategy: plan.strategy }) }}
                </AlertDescription>
            </Alert>
        </form>
    </AdminLayout>
</template>
