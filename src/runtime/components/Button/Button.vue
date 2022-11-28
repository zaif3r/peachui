<template>
    <component :is="tag" class="btn" :class="computedClasses">
        <template v-if="!loading">
            <slot name="icon" />
        </template>
        <span>
            <slot />
        </span>
    </component>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { ButtonProps } from "@/types";

interface Props extends ButtonProps {
    tag?: string;
    active?: boolean;
    disabled?: boolean;
    loading?: boolean;
    noAnimation?: boolean;
    glass?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    tag: "button",
});

const computedClasses = computed(() => ({
    "btn-active": props.active,
    "btn-disabled": props.disabled,
    "no-animation": props.noAnimation,
    loading: props.loading,
    glass: props.glass,
}));
</script>
<style>
.btn {
    @apply gap-2;
}
.btn span {
    @apply mt-1;
}
</style>
