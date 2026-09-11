<script setup lang="ts">
import { FormTextField, FormTextarea } from '@sidekick-coder/zenith-kit/components'
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
            <FormTextarea 
                name="config.docker_extra_args"
                :label="$t('Docker Extra Args')"
                :placeholder="$t('--network host')"
                :hint="$t('Extra arguments to pass to the docker run command.')"
                />
        </CardContent>
    </Card>
</template>
