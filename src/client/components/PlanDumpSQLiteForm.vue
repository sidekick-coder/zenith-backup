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
            <TabsTrigger value="database" class="min-w-60">
                {{ $t('Database') }}
            </TabsTrigger>
            <TabsTrigger value="drive" class="min-w-60">
                {{ $t('Drive') }}
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

        <TabsContent value="database">
            <Card>
                <CardHeader>
                    <CardTitle>{{ $t('Database') }}</CardTitle>
                    <CardDescription>
                        {{ $t('Configure the SQLite database file to back up.') }}
                    </CardDescription>
                </CardHeader>
                <CardContent class="space-y-6">
                    <FormTextField
                        name="config.sqlite_filename"
                        :label="$t('Database File Path')"
                        :placeholder="$t('/var/data/app.sqlite')"
                        :hint="$t('Absolute path to the SQLite database file on the host machine.')"
                    />
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="drive">
            <PlanDumpSectionDrive />
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
