<template>
    <ul class="steps" :class="stepsClass">
        <slot />
    </ul>
</template>
<script setup lang="ts">
import { computed } from "vue";

const props =
    defineProps<{
        vertical?: boolean;
    }>();

const stepsClass = computed(() => {
    return {
        "steps-vertical": props.vertical,
    };
});
</script>
