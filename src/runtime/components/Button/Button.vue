<template>
    <component :is="tag" class="btn" :class="btnClass">
        <template v-if="$slots.icon && !loading">
            <slot name="icon" />
        </template>
        <div v-if="$slots.default" :class="{ 'btn-label': $slots.icon }">
            <slot />
        </div>
    </component>
</template>
<script setup lang="ts">
import { computed, DefineComponent } from "vue";
import { ButtonProps } from "@/types";

interface Props extends ButtonProps {
    tag?: string | DefineComponent;
    active?: boolean;
    disabled?: boolean;
    loading?: boolean;
    animation?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    tag: "button",
    animation: true,
});

const btnClass = computed(() => ({
    "btn-active": props.active,
    "btn-disabled": props.disabled,
    "no-animation": !props.animation,
    loading: props.loading,
}));
</script>
<style>
.btn {
    @apply gap-2;
}
.btn > .btn-label {
    @apply mt-0.5;
}
</style>
