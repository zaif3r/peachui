<template>
    <div class="stats" :class="{ 'stats-vertical': vertical }">
        <slot />
    </div>
</template>
<script lang="ts" setup>
defineProps<{ vertical?: boolean }>();
</script>
<style>
.stats {
    @apply w-full;
}
</style>
