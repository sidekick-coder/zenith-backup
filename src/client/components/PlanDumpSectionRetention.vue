<script setup lang="ts">
import FormTextField from '#client/components/FormTextField.vue'
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
            <CardTitle>{{ $t('Retention') }}</CardTitle>
            <CardDescription>
                {{ $t('Control how many backups are kept before older ones are removed.') }}
            </CardDescription>
        </CardHeader>
        <CardContent class="space-y-6">
            <FormTextField
                name="config.retention_max_items"
                type="number"
                :label="$t('Max Backups')"
                :hint="$t('Maximum number of backups to keep. Older ones will be removed automatically.')"
            />
        </CardContent>
    </Card>
</template>
