<script setup lang="ts">
import SnapshotTable from '#zenith-backup/client/components/SnapshotTable.vue'

interface Props {
    planId: string
}

const props = defineProps<Props>()
</script>

<template>
    <SnapshotTable :plan-id="props.planId" />
</template>
