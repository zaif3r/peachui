<template>
    <label :for="props.for" class="label">
        <span class="label-text" v-bind="$attrs">
            <slot> {{ text }} </slot>
        </span>
        <slot name="content" />
        <span v-if="alt || $slots.alt" class="label-text-alt" v-bind="$attrs">
            <slot name="alt">
                {{ alt }}
            </slot>
        </span>
    </label>
</template>
<script lang="ts" setup>
const props = defineProps<{
    text?: string;
    alt?: string;
    for?: string;
}>();
</script>
<script lang="ts">
export default {
    inheritAttrs: false,
};
</script>