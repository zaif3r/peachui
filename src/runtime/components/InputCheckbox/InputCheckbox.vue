<template>
    <input
        type="checkbox"
        :class="type"
        :checked="modelValue"
        :disabled="disabled"
        @input="onChecked"
    />
</template>
<script setup lang="ts">
import type {
    InputEmits,
    InputCheckboxProps,
    InputCheckboxType,
} from "@/types";

interface Emits extends InputEmits<boolean> {}

interface Props extends InputCheckboxProps {
    type?: InputCheckboxType;
    modelValue?: boolean;
    bordered?: boolean;
    disabled?: boolean;
}

const emit = defineEmits<Emits>();

withDefaults(defineProps<Props>(), {
    type: "checkbox",
    modelValue: false,
});

function onChecked(event: any) {
    emit("update:modelValue", event.target.checked);
}
</script>
