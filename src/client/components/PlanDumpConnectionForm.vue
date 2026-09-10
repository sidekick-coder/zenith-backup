<script setup lang="ts">
import FormSelect from '#client/components/FormSelect.vue'
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
            <TabsTrigger value="snapshots" class="min-w-60">
                {{ $t('Snapshots') }}
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
                        {{ $t('Select the database connection for this backup plan.') }}
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

        <TabsContent value="snapshots">
            <PlanDumpSnapshots :plan-id="plan.id" />
        </TabsContent>
    </Tabs>
</template>
