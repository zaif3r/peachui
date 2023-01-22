<template>
    <input
        class="input"
        type="number"
        :class="inputClass"
        :value="modelValue"
        v-bind="{ id, placeholder, disabled }"
        @focus="onFocus"
        @input="onInput"
    />
</template>
<script setup lang="ts">
import { computed } from "vue";
import type {
    InputEmits,
    InputNumberProps,
    InputValidation,
} from "@/types";
import { inputHelpers } from "../../utils/input";

interface Emits extends InputEmits<number> {}

interface Props extends InputNumberProps {
    id?: string;
    modelValue?: number;
    validation?: InputValidation<number>;
    placeholder?: string;
    bordered?: boolean;
    disabled?: boolean;
}

const emit = defineEmits<Emits>();

const props = withDefaults(defineProps<Props>(), {});

const { onFocus, isValid, updateValue } = inputHelpers(props, emit);

function onInput(event: Event) {
    const value = (event.target as HTMLInputElement).valueAsNumber;
    updateValue(value)
}

const inputClass = computed(() => ({
    "input-bordered": props.bordered,
    "input-error": !isValid.value,
}));
</script>
