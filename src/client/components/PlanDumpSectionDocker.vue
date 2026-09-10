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
            <CardTitle>{{ $t('Docker') }}</CardTitle>
            <CardDescription>
                {{ $t('Configure the Docker image used to run the dump command.') }}
            </CardDescription>
        </CardHeader>
        <CardContent class="space-y-6">
            <FormTextField
                name="config.docker_image"
                :label="$t('Docker Image')"
                :placeholder="$t('postgres:latest')"
                :hint="$t('Docker image used to run the dump command.')"
            />
        </CardContent>
    </Card>
</template>
