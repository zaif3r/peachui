<template>
    <div class="indicator">
        <span class="indicator-item badge" v-bind="$attrs">
            <slot name="content">
                {{ content }}
            </slot>
        </span>
        <slot />
    </div>
</template>
<script lang="ts">
export default {
    inheritAttrs: false,
};
</script>
<script setup lang="ts">
defineProps<{
    content?: string;
}>();
</script>
