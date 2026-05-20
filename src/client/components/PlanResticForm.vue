<script setup lang="ts">
import FormTextField from '#client/components/FormTextField.vue'
import FormTextarea from '#client/components/FormTextarea.vue'
import FormSelect from '#client/components/FormSelect.vue'
import FormStringListInput from '#client/components/FormStringListInput.vue'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '#client/components/ui/card/index.ts'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '#client/components/ui/tabs/index.ts'
import type Plan from '#zenith-backup/shared/entities/PlanEntity.ts'
import PlanTriggers from '#zenith-backup/client/components/PlanTriggers.vue'
import PlanResticSnapshots from '#zenith-backup/client/components/PlanResticSnapshots.vue'
import PlanDumpSectionDetails from '#zenith-backup/client/components/PlanDumpSectionDetails.vue'
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
            <TabsTrigger value="details" class="min-w-60">
                {{ $t('Details') }}
            </TabsTrigger>
            <TabsTrigger value="repository" class="min-w-60">
                {{ $t('Repository') }}
            </TabsTrigger>
            <TabsTrigger value="backup" class="min-w-60">
                {{ $t('Backup') }}
            </TabsTrigger>
            <TabsTrigger value="cleanup" class="min-w-60">
                {{ $t('Cleanup') }}
            </TabsTrigger>
            <TabsTrigger value="docker" class="min-w-60">
                {{ $t('Docker') }}
            </TabsTrigger>
            <TabsTrigger value="triggers" class="min-w-60">
                {{ $t('Triggers') }}
            </TabsTrigger>
            <TabsTrigger value="snapshots" class="min-w-60">
                {{ $t('Snapshots') }}
            </TabsTrigger>
        </TabsList>

        <TabsContent value="details">
            <PlanDumpSectionDetails />
        </TabsContent>

        <TabsContent value="repository">
            <Card>
                <CardHeader>
                    <CardTitle>{{ $t('Repository Configuration') }}</CardTitle>
                    <CardDescription>
                        {{ $t('Settings related to the Restic repository where backups will be stored.') }}
                    </CardDescription>
                </CardHeader>
                <CardContent class="space-y-6">
                    <FormTextField
                        name="config.restic_repository"
                        :label="$t('Repository')"
                        :placeholder="$t('/path/to/repo or s3:bucket/path')"
                        :hint="$t('File path or URL to the Restic repository.')"
                    />
                    <FormTextField
                        name="config.restic_password"
                        type="password"
                        :label="$t('Repository Password')"
                        :hint="$t('Password for encrypting/decrypting the Restic repository.')"
                    />
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="backup">
            <Card>
                <CardHeader>
                    <CardTitle>{{ $t('Backup') }}</CardTitle>
                    <CardDescription>
                        {{ $t('Settings related to the files and directories to be backed up.') }}
                    </CardDescription>
                </CardHeader>
                <CardContent class="space-y-6">
                    <FormStringListInput
                        name="config.source_paths"
                        :label="$t('Paths')"
                        :placeholder="$t('Absolute path to file or directory (e.g., /var/www/html)')"
                        :hint="$t('List of file and directory paths to include in the backup.')"
                    />
                    <FormTextarea
                        name="config.backup_flags"
                        :label="$t('Backup Flags')"
                        :placeholder="$t('--exclude /path/to/exclude')"
                        :hint="$t('Additional Restic backup command flags, one per line.')"
                    />
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="cleanup">
            <Card>
                <CardHeader>
                    <CardTitle>{{ $t('Cleanup') }}</CardTitle>
                    <CardDescription>
                        {{ $t('Settings related to automatic cleanup of old snapshots.') }}
                    </CardDescription>
                </CardHeader>
                <CardContent class="space-y-6">
                    <FormSelect
                        name="config.forget_enabled"
                        :label="$t('Enable Forget')"
                        :hint="$t('Enable automatic cleanup of old snapshots after backup.')"
                        :clearable="true"
                        :options="[
                            { value: true, label: $t('Yes') },
                            { value: false, label: $t('No') },
                        ]"
                    />
                    <FormTextarea
                        name="config.forget_flags"
                        :label="$t('Forget Flags')"
                        :placeholder="$t('--keep-daily 7 --keep-weekly 4')"
                        :hint="$t('Restic forget command flags for controlling snapshot retention.')"
                    />
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="docker">
            <Card>
                <CardHeader>
                    <CardTitle>{{ $t('Docker') }}</CardTitle>
                    <CardDescription>
                        {{ $t('Configure the Docker image used to run Restic commands.') }}
                    </CardDescription>
                </CardHeader>
                <CardContent class="space-y-6">
                    <FormTextField
                        name="config.docker_image"
                        :label="$t('Docker Image')"
                        :placeholder="$t('restic/restic:latest')"
                        :hint="$t('Docker image used to run Restic commands. Defaults to restic/restic:latest.')"
                    />
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="triggers">
            <PlanTriggers v-model:plan="plan" />
        </TabsContent>

        <TabsContent value="snapshots">
            <PlanResticSnapshots :plan-id="plan.id" />
        </TabsContent>
    </Tabs>
</template>
