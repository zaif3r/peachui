<template>
    <ul class="menu" :class="menuClass">
        <slot />
    </ul>
</template>
<script setup lang="ts">
import { computed, provide } from "vue";
import { MenuProps } from "@/types";

interface Props extends MenuProps {
    rounded?: boolean;
    bordered?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    rounded: false,
    bordered: false,
});

provide<Props>("menu", {
    bordered: props.bordered,
});

const menuClass = computed(() => ({
    "rounded-box": props.rounded,
}));
</script>
