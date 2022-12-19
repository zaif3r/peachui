<template>
    <component :is="tag" class="link" :class="linkClass">
        <slot />
    </component>
</template>
<script setup lang="ts">
import { computed } from "vue";

interface Props {
    tag?: string | Object;
    hover?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    tag: "a",
    hover: false,
});

const linkClass = computed(() => ({
    "link-hover": props.hover,
}));
</script>
