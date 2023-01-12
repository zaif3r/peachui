<template>
    <div class="alert">
        <div>
            <template v-if="$slots.icon">
                <slot name="icon" />
            </template>
            <div>
                <slot>
                    <h3>{{ title }}</h3>
                    <p class="text-xs">{{ subtitle }}</p>
                </slot>
            </div>
        </div>
        <div v-if="$slots.actions" class="flex-none">
            <slot name="actions" />
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{
    title?: string;
    subtitle?: string;
}>();
</script>
