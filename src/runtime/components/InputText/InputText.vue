<template>
    <input
        class="input"
        :class="inputClass"
        :value="modelValue"
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
    InputValidation,
} from "@/types";
import { inputHelpers } from "@/runtime/utils/input";

interface Emits extends InputEmits<string> {}

interface Props extends InputTextProps {
    type?: InputTextType;
    modelValue?: string;
    validation?: InputValidation<string>;
    placeholder?: string;
    bordered?: boolean;
    disabled?: boolean;
}

const emit = defineEmits<Emits>();

const props = withDefaults(defineProps<Props>(), {
    type: "text",
    modelValue: "",
});

const { onInput, onFocus, isValid } = inputHelpers(props, emit);

const inputClass = computed(() => ({
    "input-bordered": props.bordered,
    "input-error": !isValid.value,
}));
</script>
