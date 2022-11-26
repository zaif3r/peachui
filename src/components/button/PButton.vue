<template>
    <button class="p-btn p-gap-2" :class="{ 'p-loading': loading }">
        <slot />
    </button>
</template>
<script setup lang="ts">
defineProps<{ loading?: boolean }>();
</script>
