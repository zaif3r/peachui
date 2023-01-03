<template>
    <select class="select" :class="selectClass" @input="onInput">
        <option v-if="placeholder" :selected="!modelValue" disabled>
            {{ placeholder }}
        </option>
        <option
            :key="option.value"
            :value="option.value"
            :selected="modelValue == option.value"
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
    SelectOption,
} from "@/types";
import { computed } from "vue";
import { inputHelpers } from "@/runtime/utils/input";

interface Emits extends InputEmits<string> {}

interface Props extends InputSelectProps {
    modelValue?: string;
    options?: SelectOption[];
    placeholder?: string;
    disabled?: boolean;
    bordered?: boolean;
}

const emit = defineEmits<Emits>();

const props = withDefaults(defineProps<Props>(), {
    placeholder: "Select an option",
    options: () => [],
});

const { onInput, isValid } = inputHelpers(props, emit);

const selectClass = computed(() => ({
    "select-bordered": props.bordered,
    "select-error": !isValid,
}));
</script>
