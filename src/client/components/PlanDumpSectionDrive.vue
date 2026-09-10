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
            <CardTitle>{{ $t('Drive') }}</CardTitle>
            <CardDescription>
                {{ $t('Configure where backups will be stored.') }}
            </CardDescription>
        </CardHeader>
        <CardContent class="space-y-6">
            <FormTextField
                name="config.drive_id"
                :label="$t('Drive ID')"
                :hint="$t('The drive where backups will be stored. Must be defined in the configuration file.')"
            />
            <FormTextField
                name="config.drive_prefix"
                :label="$t('Drive Prefix')"
                :placeholder="$t('backups/my-plan')"
                :hint="$t('Directory prefix within the drive where backups will be stored.')"
            />
        </CardContent>
    </Card>
</template>
