<template>
    <label class="label">
        <span class="label-text" v-bind="$attrs">
            <slot name="text"> {{ text }} </slot>
        </span>
        <slot />
        <span v-if="alt || $slots.alt" class="label-text-alt" v-bind="$attrs">
            <slot name="alt">
                {{ alt }}
            </slot>
        </span>
    </label>
</template>
<script lang="ts" setup>
defineProps<{
    text?: string;
    alt?: string;
}>();
</script>
<script lang="ts">
export default {
    inheritAttrs: false,
};
</script>
<style>
.label {
    @apply w-full;
}
</style>
