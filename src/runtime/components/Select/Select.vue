<template>
    <select class="select" :class="selectClass">
        <option v-if="placeholder" :selected="!modelValue" disabled>
            {{ placeholder }}
        </option>
        <option
            :key="option.value"
            :selected="modelValue?.value?.value === option.value"
            v-for="option in options"
            @click="selectOption(option)"
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

interface Emits extends InputEmits<SelectOption> {}

interface Props extends InputSelectProps {
    modelValue?: InputModel<SelectOption>;
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

function selectOption(option: SelectOption) {
    emit("update:modelValue", {
        ...props.modelValue,
        value: option,
    });
}
</script>
