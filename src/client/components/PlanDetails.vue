<script setup lang="ts">
import FormTextField from '#client/components/FormTextField.vue'
import FormTextarea from '#client/components/FormTextarea.vue'
import FormSwitch from '#client/components/FormSwitch.vue'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '#client/components/ui/card/index.ts'

import Plan from '#zenith-backup/shared/entities/PlanEntity.ts'

interface Props {
    plan: Plan
    planId: string
}

defineProps<Props>()
</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle>{{ $t('Plan details') }}</CardTitle>
            <CardDescription>
                {{ $t('Edit details and configuration.') }}
            </CardDescription>
        </CardHeader>
        <CardContent class="space-y-6">
            <FormTextField name="name" :label="$t('Name')" :placeholder="$t('Enter plan name')" />

            <FormSwitch name="active" :label="$t('Active')" :hint="$t('Activate or deactivate this backup plan')" />

            <FormTextarea name="description" :label="$t('Description')" :placeholder="$t('Enter plan description')"
                :hint="$t('Optional description for this backup plan')" />
        </CardContent>
    </Card>
</template>
