<template>
    <component class="tab" :is="tag" :class="tabClass" :disabled="disabled">
        <slot />
    </component>
</template>
<script setup lang="ts">
import { inject, computed, DefineComponent } from "vue";
import { TabProps, TabsProps } from "@/types";

interface Props extends TabProps {
    tag?: string | DefineComponent;
    active?: boolean;
    disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    tag: "a",
    active: false,
    disabled: false,
});

const tabsProps = inject<TabsProps>("tabs");

const tabClass = computed(() => {
    return {
        "tab-active": props.active,
        "tab-bordered": tabsProps?.bordered,
        "tab-lifted border-0": tabsProps?.lifted,
    };
});
</script>
<style>
.tabs > * {
    @apply gap-1;
}
</style>
