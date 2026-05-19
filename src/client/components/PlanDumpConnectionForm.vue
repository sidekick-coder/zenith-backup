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
import PlanDumpSnapshots from '#zenith-backup/client/components/PlanDumpSnapshots.vue'
import { useRouteQuery } from '@sidekick-coder/zenith-kit/components'


const plan = defineModel('plan', {
    type: Object as () => Plan,
    required: true,
})

const tab = useRouteQuery('tab', 'details')
</script>

<template>
    <Tabs v-model="tab" class="w-full" :unmount-on-hide="false">
        <TabsList>
            <TabsTrigger
                value="details"
                class="min-w-60"
            >
                {{ $t('Details') }}
            </TabsTrigger>
            <TabsTrigger
                value="connection"
                class="min-w-60"
            >
                {{ $t('Connection') }}
            </TabsTrigger>
            <TabsTrigger
                value="docker"
                class="min-w-60"
            >
                {{ $t('Docker') }}
            </TabsTrigger>
            <TabsTrigger
                value="retention"
                class="min-w-60"
            >
                {{ $t('Retention') }}
            </TabsTrigger>
            <TabsTrigger
                value="triggers"
                class="min-w-60"
            >
                {{ $t('Triggers') }}
            </TabsTrigger>
            <TabsTrigger
                value="snapshots"
                class="min-w-60"
            >
                {{ $t('Snapshots') }}
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

        <TabsContent value="connection">
            <Card>
                <CardHeader>
                    <CardTitle>{{ $t('Connection') }}</CardTitle>
                    <CardDescription>
                        {{ $t('Select the database connection and where to store the backups.') }}
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

                    <FormTextField
                        name="config.drive_id"
                        :label="$t('Drive id')"
                        :hint="$t('The drive where backups will be stored. Must be defined in the configuration file.')"
                    />

                    <FormTextField
                        name="config.directory"
                        :label="$t('Directory')"
                        :placeholder="$t('backups')"
                        :hint="$t('Directory path within the drive where backups will be stored')"
                    />
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="docker">
            <Card>
                <CardHeader>
                    <CardTitle>{{ $t('Docker') }}</CardTitle>
                    <CardDescription>
                        {{ $t('Configure Docker settings for running the dump command.') }}
                    </CardDescription>
                </CardHeader>
                <CardContent class="space-y-6">
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
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="retention">
            <Card>
                <CardHeader>
                    <CardTitle>{{ $t('Retention') }}</CardTitle>
                    <CardDescription>
                        {{ $t('Control how many backups are kept and which triggers are excluded from cleanup.') }}
                    </CardDescription>
                </CardHeader>
                <CardContent class="space-y-6">
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

        <TabsContent value="snapshots">
            <PlanDumpSnapshots :plan-id="plan.id" />
        </TabsContent>
    </Tabs>
</template>
