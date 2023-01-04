<template>
    <input
        type="file"
        class="file-input"
        :class="inputFileClass"
        :disabled="disabled"
        @input="onInputFile"
    />
</template>
<script setup lang="ts">
import { computed } from "vue";
import type { InputEmits, InputFileProps, InputFileType } from "@/types";
import { inputHelpers } from "../../utils/input";

interface Emits extends InputEmits<File | FileList | string> {}

interface Props extends InputFileProps {
    type?: InputFileType;
    modelValue?: File | FileList | string;
    bordered?: boolean;
    disabled?: boolean;
}

const emit = defineEmits<Emits>();

const props = withDefaults(defineProps<Props>(), {
    type: "file",
});

const { isValid } = inputHelpers(props, emit);

const inputFileClass = computed(() => ({
    "file-input-bordered": props.bordered,
    "file-input-error": !isValid.value,
}));

function onInputFile(event: any) {
    if (props.type == "file") {
        return emit("update:modelValue", event.target.files[0]);
    } else if (props.type == "fileList") {
        return emit("update:modelValue", event.target.files);
    } else if (props.type == "dataUrl") {
        const reader = new FileReader();
        reader.onload = (e) => {
            emit("update:modelValue", e.target?.result as string);
        };

        return reader.readAsDataURL(event.target.files[0]);
    }
}
</script>
