<template>
    <textarea
        class="textarea"
        :value="modelValue"
        :class="textareaClass"
        v-bind="{ placeholder, disabled }"
        @focus="onFocus"
        @input="onInput"
    />
</template>
<script setup lang="ts">
import { computed } from "vue";
import type { InputEmits, InputTextProps, InputValidation } from "@/types";
import { inputHelpers } from "../../utils/input";

interface Emits extends InputEmits<string> {}

interface Props extends InputTextProps {
    placeholder?: string;
    bordered?: boolean;
    disabled?: boolean;
    modelValue?: string;
    validation?: InputValidation<string>
}

const emit = defineEmits<Emits>();

const props = withDefaults(defineProps<Props>(), {
    modelValue: "",
});

const { onInput, onFocus, isValid } = inputHelpers(props, emit);

const textareaClass = computed(() => ({
    "textarea-bordered": props.bordered,
    "textarea-error": !isValid.value,
}));
</script>
