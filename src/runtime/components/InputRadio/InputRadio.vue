<template>
    <input
        type="radio"
        class="radio"
        :checked="modelValue.value"
        :disabled="disabled"
        @input="onChecked"
    />
</template>
<script setup lang="ts">
import type { InputEmits, InputRadioProps, InputRadioModel } from "@/types";

interface Emits extends InputEmits<boolean> {}

interface Props extends InputRadioProps {
    modelValue?: InputRadioModel;
    disabled?: boolean;
}

const emit = defineEmits<Emits>();

const props = withDefaults(defineProps<Props>(), {
    modelValue: () => ({
        value: false,
    }),
});

function onChecked(event: any) {
    emit("update:modelValue", {
        ...props.modelValue,
        value: event.target.checked,
    });
}
</script>
