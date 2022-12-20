<template>
    <div class="dropdown" :class="dropdownClass">
        <label tabindex="0">
            <stot />
        </label>
        <div tabindex="0" class="dropdown-content">
            <slot name="content" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed } from "vue";

const props =
    defineProps<{
        open?: boolean;
        hover?: boolean;
    }>();

const dropdownClass = computed(() => ({
    "dropdown-open": props.open,
    "dropdown-hover": props.hover,
}));
</script>
