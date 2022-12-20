<template>
    <div>
        <footer class="footer p-10" :class="footerClass">
            <div class="footer-start">
                <slot name="start" />
            </div>
            <slot />
            <div v-if="$slots.end" class="footer-end">
                <slot name="end" />
            </div>
        </footer>
        <footer
            v-if="$slots.bottom || $slots.bottomStart || $slots.bottomEnd"
            class="footer footer-bottom border-base-300"
        >
            <div v-if="$slots.bottomStart" class="footer-start">
                <slot name="bottomStart" />
                <slot name="bottom" />
            </div>
            <div v-if="$slots.bottomEnd" class="footer-end">
                <slot name="bottomEnd" />
            </div>
        </footer>
    </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { FooterProps } from "@/types";

interface Props extends FooterProps {
    centered?: boolean;
}

const props = defineProps<Props>();

const footerClass = computed(() => ({
    "footer-center": props.centered,
}));
</script>
<style>
.footer-start {
    @apply gap-4 grid-flow-col items-center;
}
.footer-end {
    @apply gap-4 grid-flow-col md:place-self-center md:justify-self-end;
}
.footer-bottom {
    @apply px-10 py-4 border-t;
}
</style>
