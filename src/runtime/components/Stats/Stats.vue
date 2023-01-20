<template>
    <div class="stats" :class="vertical ? 'stats-vertical' : 'stats-horizontal'">
        <slot />
    </div>
</template>
<script lang="ts" setup>
defineProps<{ vertical?: boolean }>();
</script>
