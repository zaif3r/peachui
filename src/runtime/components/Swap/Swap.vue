<template>
    <label
        class="swap"
        :class="[{ 'swap-active': modelValue }, effect]"
        @click.stop="emit('update:modelValue', !modelValue)"
    >
        <div class="swap-on">
            <slot name="on"> On </slot>
        </div>
        <div class="swap-off">
            <slot name="off"> Off </slot>
        </div>
    </label>
</template>
<script setup lang="ts">
type SwapEffect = "swap-rotate" | "swap-flip";

defineProps<{ modelValue?: boolean; effect?: SwapEffect }>();

const emit = defineEmits<{
    (event: "update:modelValue", modelValue: boolean): void;
}>();
</script>
