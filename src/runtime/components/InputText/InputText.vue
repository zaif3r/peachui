<template>
    <input
        class="input"
        :class="inputClass"
        :value="modelValue.value"
        v-bind="{ type, placeholder, disabled }"
        @focus="onFocus"
        @input="onInput"
    />
</template>
<script setup lang="ts">
import { computed } from "vue";
import type {
    InputEmits,
    InputTextProps,
    InputTextType,
    InputTextModel,
} from "@/types";

interface Emits extends InputEmits<string> {}

interface Props extends InputTextProps {
    type?: InputTextType;
    modelValue?: InputTextModel;
    placeholder?: string;
    bordered?: boolean;
    disabled?: boolean;
}

const emit = defineEmits<Emits>();

const props = withDefaults(defineProps<Props>(), {
    type: "text",
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

const inputClass = computed(() => ({
    "input-bordered": props.bordered,
    "input-error": props.modelValue.valid != null && !props.modelValue.valid,
}));
</script>
