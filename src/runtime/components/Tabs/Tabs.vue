<template>
    <div>
        <nav class="tabs" :class="{ 'tabs-boxed': boxed }">
            <slot />
        </nav>
        <div v-if="$slots.content" class="tabs-content bg-base-100" :class="contentClass">
            <slot name="content" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { provide } from "vue";
import { TabsProps } from "@/types";

interface Props extends TabsProps {
    boxed?: boolean;
    lifted?: boolean;
    bordered?: boolean;
    contentClass?: string;
}

const props = defineProps<Props>();

provide<Props>("tabs", {
    lifted: props.lifted,
    bordered: props.bordered,
});
</script>
<style>
.tabs-content {
    @apply p-4;
}
</style>
