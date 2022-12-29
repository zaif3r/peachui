<template>
    <select class="select" :class="selectClass" @input="onInputSelect">
        <option v-if="placeholder" :selected="!modelValue || !modelValue.value" disabled>
            {{ placeholder }}
        </option>
        <option
            :key="option.value"
            :value="option.value"
            :selected="modelValue?.value == option.value"
            v-for="option in options"
        >
            {{ option.label }}
        </option>
    </select>
</template>
<script lang="ts" setup>
import {
    InputSelectProps,
    InputEmits,
    InputModel,
    SelectOption,
} from "@/types";
import { computed } from "vue";

interface Emits extends InputEmits<string> {}

interface Props extends InputSelectProps {
    modelValue?: InputModel<string>;
    options?: SelectOption[];
    placeholder?: string;
    disabled?: boolean;
    bordered?: boolean;
}

const emit = defineEmits<Emits>();

const props = withDefaults(defineProps<Props>(), {
    placeholder: "Select an option",
    disabled: false,
    options: () => [],
});

const selectClass = computed(() => ({
    "select-bordered": props.bordered,
    "select-error": props.modelValue?.valid != null && !props.modelValue.valid,
}));

function onInputSelect(event: any) {
    emit("update:modelValue", {
        ...props.modelValue,
        value: event.target.value,
    });
}
</script>
