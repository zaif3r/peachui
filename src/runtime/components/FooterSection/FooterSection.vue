<template>
    <div>
        <span v-if="title || $slots.title" class="footer-title">
            <slot name="title">
                {{ title }}
            </slot>
        </span>
        <slot />
    </div>
</template>
<script setup lang="ts">
import { FooterSectionProps } from "@/types";

interface Props extends FooterSectionProps {
    title?: string;
}

defineProps<Props>();
</script>
