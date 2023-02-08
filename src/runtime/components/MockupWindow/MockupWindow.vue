<template>
    <div class="mockup-window">
        <div v-if="title || $slots.title" class="mockup-window-title">
            <slot name="title">
                <span class="font-semibold">{{ title }} </span>
            </slot>
        </div>
        <div v-if="$slots.title" class="mockup-window-actions">
            <slot name="actions" />
        </div>
        <slot />
    </div>
</template>
<script lang="ts" setup>
defineProps<{
    title?: string;
}>();
</script>
<style>
.mockup-window-title {
    @apply absolute top-0 left-0 h-12 pl-24 md:pl-28 flex items-center pt-1;
}
.mockup-window-actions {
    @apply absolute top-0 right-2 h-12 md:right-4 flex items-center;
}
</style>
