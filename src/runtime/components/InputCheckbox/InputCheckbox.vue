<template>
    <input
        type="checkbox"
        :class="type"
        :checked="modelValue.value"
        :disabled="disabled"
        @input="onChecked"
    />
</template>
<script setup lang="ts">
import type {
    InputEmits,
    InputCheckboxProps,
    InputCheckboxType,
    FormInputCheckbox,
} from "@/types";

interface Emits extends InputEmits<boolean> {}

interface Props extends InputCheckboxProps {
    type?: InputCheckboxType;
    modelValue?: FormInputCheckbox;
    bordered?: boolean;
    disabled?: boolean;
}

const emit = defineEmits<Emits>();

const props = withDefaults(defineProps<Props>(), {
    type: "checkbox",
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
