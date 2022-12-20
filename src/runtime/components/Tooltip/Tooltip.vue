<template>
    <div class="tooltip" :data-tip="value" :class="tooltipClass">
        <slot />
    </div>
</template>
<script setup lang="ts">
import { computed } from "vue";

const props =
    defineProps<{
        value?: string;
        open?: boolean;
    }>();

const tooltipClass = computed(() => ({
    "tooltip-open": props.open,
}));
</script>
