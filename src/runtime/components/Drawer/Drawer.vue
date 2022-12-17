<template>
    <div class="drawer-container">
        <Transition name="overlay">
            <label
                v-if="modelValue"
                class="drawer-overlay"
                @click="emit('update:modelValue', false)"
            />
        </Transition>
        <Transition :name="transtion">
            <div v-if="modelValue" class="drawer group">
                <div class="p-4">
                    <slot />
                </div>
            </div>
        </Transition>
    </div>
</template>
<script setup lang="ts">
import { DrawerProps, DrawerEmits } from "@/types";

interface Props extends DrawerProps {
    modelValue?: boolean;
    transtion?: string;
}

interface Emits extends DrawerEmits {}

withDefaults(defineProps<Props>(), {
    modelValue: false,
    transtion: "drawer"
});

const emit = defineEmits<Emits>();
</script>
<style>
.drawer {
    @apply w-full max-w-xs bg-base-100 fixed left-0 z-50 pointer-events-auto;
}
.drawer-container {
    @apply absolute inset-0 pointer-events-none;
}
.drawer-overlay {
    @apply fixed inset-0 bg-black bg-opacity-50 z-40 pointer-events-auto;
}

/* Transition */
.drawer-default-enter-active,
.drawer-default-leave-active {
    @apply transition-all duration-300 ease-in-out;
}

.drawer-default-enter-from,
.drawer-default-leave-to {
    opacity: 0;
    @apply -translate-x-40;
}

.overlay-enter-active,
.overlay-leave-active {
    @apply transition-opacity duration-500 ease-in-out;
}

.overlay-enter-from,
.overlay-leave-to {
    opacity: 0;
}
</style>
