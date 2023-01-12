<template>
    <input
        class="input"
        type="date"
        :class="inputClass"
        :value="dateString"
        :disabled="disabled"
        @focus="onFocus"
        @input="onInput"
    />
</template>
<script setup lang="ts">
import { computed } from "vue";
import type {
    InputEmits,
    InputDateProps,
    InputValidation,
} from "@/types";
import { inputHelpers } from "../../utils/input";

interface Emits extends InputEmits<Date> {}

interface Props extends InputDateProps {
    modelValue?: Date;
    validation?: InputValidation<Date>;
    bordered?: boolean;
    disabled?: boolean;
}

const emit = defineEmits<Emits>();

const props = withDefaults(defineProps<Props>(), {});

const { onFocus, isValid, updateValue } = inputHelpers(props, emit);

function onInput(event: Event) {
    const value = (event.target as HTMLInputElement).valueAsDate;
    updateValue(value as any)
}

const dateString = computed(() => {
    if (props.modelValue) {
        const date = props.modelValue;
        const year = date.toLocaleString("default", { year: "numeric" });
        const month = date.toLocaleString("default", { month: "2-digit" });
        const day = date.toLocaleString("default", { day: "2-digit" });
        return `${year}-${month}-${day}`;
    }
    return "";
});

const inputClass = computed(() => ({
    "input-bordered": props.bordered,
    "input-error": !isValid.value,
}));
</script>
