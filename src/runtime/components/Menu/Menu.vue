<template>
    <ul class="menu" :class="menuClass">
        <slot />
    </ul>
</template>
<script setup lang="ts">
import { computed, provide } from "vue";
import { MenuProps } from "@/types";

const props = withDefaults(defineProps<MenuProps>(), {
    rounded: false,
    bordered: false,
});

provide<MenuProps>("menu", {
    bordered: props.bordered,
});

const menuClass = computed(() => ({
    "rounded-box": props.rounded,
}));
</script>
