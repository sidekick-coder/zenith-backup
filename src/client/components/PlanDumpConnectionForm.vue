<script setup lang="ts">
import FormSelect from '#client/components/FormSelect.vue'
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
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '#client/components/ui/tabs/index.ts'
import type Plan from '#zenith-backup/shared/entities/plan.entity.ts'
import PlanTriggers from '#zenith-backup/client/components/PlanTriggers.vue'

const plan = defineModel('plan', {
    type: Object as () => Plan,
    required: true,
})
</script>

<template>
    <Tabs default-value="details">
        <TabsList>
            <TabsTrigger
                value="details"
                class="min-w-60"
            >
                {{ $t('Details') }}
            </TabsTrigger>
            <TabsTrigger
                value="config"
                class="min-w-60"
            >
                {{ $t('Configuration') }}
            </TabsTrigger>
            <TabsTrigger
                value="triggers"
                class="min-w-60"
            >
                {{ $t('Triggers') }}
            </TabsTrigger>
        </TabsList>

        <TabsContent value="details">
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
        </TabsContent>

        <TabsContent value="config">
            <Card>
                <CardHeader>
                    <CardTitle>{{ $t('Dump Connection Config') }}</CardTitle>
                    <CardDescription>
                        {{ $t('Configure the dump connection backup strategy for this plan.') }}
                    </CardDescription>
                </CardHeader>
                <CardContent class="space-y-6">
                    <FormSelect
                        name="config.name"
                        fetch="/api/database-connections"
                        value-key="id"
                        label-key="name"
                        :label="$t('Connection Name')"
                        :hint="$t('Select the database connection to back up')"
                    />

                    <FormSelect
                        name="config.drive_id"
                        fetch="/api/drives"
                        fetch-key="data"
                        value-key="id"
                        label-key="name"
                        :label="$t('Drive')"
                        :hint="$t('Select the drive where the backup will be stored')"
                    />

                    <FormTextField
                        name="config.directory"
                        :label="$t('Directory')"
                        :placeholder="$t('backups')"
                        :hint="$t('Directory path within the drive where backups will be stored')"
                    />

                    <FormSelect
                        name="config.docker_enabled"
                        :label="$t('Use Docker')"
                        :hint="$t('Run the dump command inside a Docker container')"
                        :options="[
                            { label: $t('Yes'), value: 'true' },
                            { label: $t('No'), value: 'false' },
                        ]"
                        label-key="label"
                        value-key="value"
                        clearable
                    />

                    <FormTextField
                        name="config.docker_image"
                        :label="$t('Docker Image')"
                        :placeholder="$t('postgres:latest')"
                        :hint="$t('Docker image to use for running the dump command')"
                    />

                    <FormTextField
                        name="config.docker_extra_flags"
                        :label="$t('Docker Extra Flags')"
                        :placeholder="$t('Additional Docker flags')"
                        :hint="$t('Additional flags to pass to the Docker run command')"
                    />

                    <FormTextField
                        name="config.max_length"
                        type="number"
                        :label="$t('Max Backups')"
                        :hint="$t('Maximum number of backups to keep. Older ones will be removed.')"
                    />

                    <FormSelect
                        name="config.ignore_triggers"
                        :label="$t('Ignore Triggers')"
                        :hint="$t('Backup triggers to ignore during cleanup')"
                        :options="[
                            { label: $t('Manual'), value: 'manual' },
                            { label: $t('Cron'), value: 'cron' },
                            { label: $t('Event'), value: 'event' },
                        ]"
                        label-key="label"
                        value-key="value"
                        multiple
                    />
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="triggers">
            <PlanTriggers v-model:plan="plan" />
        </TabsContent>
    </Tabs>
</template>
