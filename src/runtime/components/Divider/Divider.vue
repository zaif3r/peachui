<template>
    <div class="divider" :class="{ 'divider-horizontal': horizontal }">
        <slot />
    </div>
</template>
<script lang="ts" setup>
defineProps<{
    horizontal?: boolean;
}>();
</script>
