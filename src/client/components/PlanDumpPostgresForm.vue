<script setup lang="ts">
import FormTextField from '#client/components/FormTextField.vue'
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
import PlanDumpSnapshots from '#zenith-backup/client/components/PlanDumpSnapshots.vue'
import PlanDumpSectionDetails from '#zenith-backup/client/components/PlanDumpSectionDetails.vue'
import PlanDumpSectionDrive from '#zenith-backup/client/components/PlanDumpSectionDrive.vue'
import PlanDumpSectionDocker from '#zenith-backup/client/components/PlanDumpSectionDocker.vue'
import PlanDumpSectionRetention from '#zenith-backup/client/components/PlanDumpSectionRetention.vue'
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
            <TabsTrigger value="connection" class="min-w-60">
                {{ $t('Connection') }}
            </TabsTrigger>
            <TabsTrigger value="drive" class="min-w-60">
                {{ $t('Drive') }}
            </TabsTrigger>
            <TabsTrigger value="docker" class="min-w-60">
                {{ $t('Docker') }}
            </TabsTrigger>
            <TabsTrigger value="retention" class="min-w-60">
                {{ $t('Retention') }}
            </TabsTrigger>
            <TabsTrigger value="triggers" class="min-w-60">
                {{ $t('Triggers') }}
            </TabsTrigger>
            <TabsTrigger value="dumps" class="min-w-60">
                {{ $t('Dumps') }}
            </TabsTrigger>
        </TabsList>

        <TabsContent value="details">
            <PlanDumpSectionDetails />
        </TabsContent>

        <TabsContent value="connection">
            <Card>
                <CardHeader>
                    <CardTitle>{{ $t('Connection') }}</CardTitle>
                    <CardDescription>
                        {{ $t('Configure the PostgreSQL database connection settings.') }}
                    </CardDescription>
                </CardHeader>
                <CardContent class="space-y-6">
                    <FormTextField
                        name="config.postgres_host"
                        :label="$t('Host')"
                        :placeholder="$t('localhost')"
                        :hint="$t('Hostname or IP address of the PostgreSQL server.')"
                    />
                    <FormTextField
                        name="config.postgres_port"
                        type="number"
                        :label="$t('Port')"
                        :placeholder="$t('5432')"
                        :hint="$t('Port number of the PostgreSQL server.')"
                    />
                    <FormTextField
                        name="config.postgres_username"
                        :label="$t('Username')"
                        :placeholder="$t('postgres')"
                        :hint="$t('PostgreSQL user with read access to the target database.')"
                    />
                    <FormTextField
                        name="config.postgres_password"
                        type="password"
                        :label="$t('Password')"
                        :hint="$t('Password for the PostgreSQL user.')"
                    />
                    <FormTextField
                        name="config.postgres_database"
                        :label="$t('Database')"
                        :placeholder="$t('postgres')"
                        :hint="$t('Name of the database to back up.')"
                    />
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="drive">
            <PlanDumpSectionDrive />
        </TabsContent>

        <TabsContent value="docker">
            <PlanDumpSectionDocker />
        </TabsContent>

        <TabsContent value="retention">
            <PlanDumpSectionRetention />
        </TabsContent>

        <TabsContent value="triggers">
            <PlanTriggers v-model:plan="plan" />
        </TabsContent>

        <TabsContent value="dumps">
            <PlanDumpSnapshots :plan-id="plan.id" />
        </TabsContent>
    </Tabs>
</template>
