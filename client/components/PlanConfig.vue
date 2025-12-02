<script setup lang="ts">
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import { toast } from 'vue-sonner'
import Button from '#client/components/Button.vue'
import { $t } from '#shared/lang.ts'
import Card from '#client/components/ui/card/Card.vue'
import CardHeader from '#client/components/ui/card/CardHeader.vue'
import CardTitle from '#client/components/ui/card/CardTitle.vue'
import CardDescription from '#client/components/ui/card/CardDescription.vue'
import CardContent from '#client/components/ui/card/CardContent.vue'
import CardFooter from '#client/components/ui/card/CardFooter.vue'
import { $fetch } from '#client/utils/fetcher.ts'
import type Plan from '#zenith-backup/shared/entities/plan.entity.ts'
import FormAutoFieldList from '#client/components/FormAutoFieldList.vue'

interface Props {
    plan: Plan
}

const props = defineProps<Props>()
const saving = ref(false)

const { handleSubmit } = useForm({
    initialValues: props.plan?.config || {}
})

const onSubmit = handleSubmit(async (payload) => {
    saving.value = true

    const [error] = await $fetch.try(`/api/zbackup/plans/${props.plan.id}`, {
        method: 'PATCH',
        data: { config: payload, }
    })

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
                <CardTitle>{{ $t('Config') }}</CardTitle>
                <CardDescription>
                    {{ $t('Configure the backup strategy for the plan.') }}
                </CardDescription>
            </CardHeader>
            <CardContent class="space-y-6">
                <FormAutoFieldList
                    v-if="props.plan.strategy_fields"
                    :fields="props.plan.strategy_fields"
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
