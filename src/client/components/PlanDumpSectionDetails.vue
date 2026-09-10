<script setup lang="ts">
import FormTextField from '#client/components/FormTextField.vue'
import FormSwitch from '#client/components/FormSwitch.vue'
import FormTextarea from '#client/components/FormTextarea.vue'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '#client/components/ui/card/index.ts'
</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle>{{ $t('Plan details') }}</CardTitle>
            <CardDescription>
                {{ $t('Edit the name, status and description of this plan.') }}
            </CardDescription>
        </CardHeader>
        <CardContent class="space-y-6">
            <FormTextField
                name="name"
                :label="$t('Name')"
                :placeholder="$t('Enter plan name')"
            />
            <FormSwitch
                name="active"
                :label="$t('Active')"
                :hint="$t('Activate or deactivate this backup plan')"
            />
            <FormTextarea
                name="description"
                :label="$t('Description')"
                :placeholder="$t('Enter plan description')"
                :hint="$t('Optional description for this backup plan')"
            />
        </CardContent>
    </Card>
</template>
