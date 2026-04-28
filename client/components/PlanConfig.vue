<script setup lang="ts">
import { ref, computed } from 'vue'
import { useForm } from 'vee-validate'
import { toast } from 'vue-sonner'
import Button from '#client/components/Button.vue'
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
    sectionId?: string
}

const props = defineProps<Props>()
const saving = ref(false)

const currentSection = computed(() => {
    if (!props.sectionId) return null
    return props.plan.strategy_fields_sections?.find(s => s.id === props.sectionId) ?? null
})

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
            <template v-if="!props.sectionId && plan.strategy_fields && Object.keys(plan.strategy_fields).length">
                <CardHeader>
                    <CardTitle>{{ $t('Config') }}</CardTitle>
                    <CardDescription>
                        {{ $t('Configure the backup strategy for the plan.') }}
                    </CardDescription>
                </CardHeader>
                <CardContent class="space-y-6">
                    <FormAutoFieldList
                        :fields="props.plan.strategy_fields"
                    />
                </CardContent>
            </template>

            <template v-if="props.sectionId && currentSection">
                <CardHeader>
                    <CardTitle>{{ currentSection.title }}</CardTitle>
                    <CardDescription v-if="currentSection.description">
                        {{ currentSection.description }}
                    </CardDescription>
                </CardHeader>
                <CardContent class="space-y-6">
                    <FormAutoFieldList
                        :fields="currentSection.fields"
                    />
                </CardContent>
            </template>

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
