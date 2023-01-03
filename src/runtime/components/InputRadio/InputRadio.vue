<template>
    <input
        type="radio"
        class="radio"
        :checked="modelValue"
        :disabled="disabled"
        @input="onChecked"
    />
</template>
<script setup lang="ts">
import type { InputEmits, InputRadioProps } from "@/types";

interface Emits extends InputEmits<boolean> {}

interface Props extends InputRadioProps {
    modelValue?: boolean;
    disabled?: boolean;
}

const emit = defineEmits<Emits>();

withDefaults(defineProps<Props>(), {
    modelValue: false,
});

function onChecked(event: any) {
    emit("update:modelValue", event.target.checked);
}
</script>
