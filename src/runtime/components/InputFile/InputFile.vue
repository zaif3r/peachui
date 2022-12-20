<template>
    <input
        type="file"
        class="file-input"
        :class="inputFileClass"
        :files="modelValue.value"
        :disabled="disabled"
        @input="onInputFile"
    />
</template>
<script setup lang="ts">
import { computed } from "vue";
import type { InputEmits, InputFileProps, InputFileModel } from "@/types";

interface Emits extends InputEmits<File[]> {}

interface Props extends InputFileProps {
    modelValue?: InputFileModel;
    bordered?: boolean;
    disabled?: boolean;
}

const emit = defineEmits<Emits>();

const props = withDefaults(defineProps<Props>(), {
    modelValue: () => ({
        value: [],
    }),
});

const inputFileClass = computed(() => ({
    "file-input-bordered": props.bordered,
}));

function onInputFile(event: any) {
    emit("update:modelValue", {
        ...props.modelValue,
        value: event.target.files,
    });
}
</script>
