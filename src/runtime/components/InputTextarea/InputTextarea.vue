<template>
    <textarea
        class="textarea"
        :value="modelValue.value"
        :class="textareaClass"
        v-bind="{ placeholder, disabled }"
        @focus="onFocus"
        @input="onInput"
    />
</template>
<script setup lang="ts">
import { computed } from "vue";
import type { InputTextProps, InputEmits, FormInputText } from "@/types";

interface Emits extends InputEmits<string> {}

interface Props extends InputTextProps {
    placeholder?: string;
    bordered?: boolean;
    disabled?: boolean;
    modelValue?: FormInputText;
}

const emit = defineEmits<Emits>();

const props = withDefaults(defineProps<Props>(), {
    modelValue: () => ({
        valid: null,
        value: "",
    }),
});

function onInput(event: any) {
    emit("update:modelValue", {
        ...props.modelValue,
        value: event.target.value,
    });
}

function onFocus() {
    emit("update:modelValue", {
        ...props.modelValue,
        valid: null,
    });
}

const textareaClass = computed(() => ({
    "textarea-bordered": props.bordered,
    "textarea-error": props.modelValue.valid != null && !props.modelValue.valid,
}));
</script>
