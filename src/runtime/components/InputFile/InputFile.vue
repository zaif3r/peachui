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
import type { InputEmits, InputFileProps, InputFileType, InputValidation, InputFile } from "@/types";
import { inputHelpers } from "../../utils/input";

interface Emits extends InputEmits<InputFile> {}

interface Props extends InputFileProps {
    type?: InputFileType;
    modelValue?: InputFile;
    bordered?: boolean;
    disabled?: boolean;
    validation?: InputValidation<InputFile>;
}

const emit = defineEmits<Emits>();

const props = withDefaults(defineProps<Props>(), {
    type: "file",
});

const { isValid, updateValue } = inputHelpers(props, emit);

const inputFileClass = computed(() => ({
    "file-input-bordered": props.bordered,
    "file-input-error": !isValid.value,
}));

function onInputFile(event: any) {
    if (!event.target.files || event.target.files.length == 0) {
        return updateValue(null as any);
    }

    if (props.type == "file") {
        return updateValue(event.target.files[0]);
    }
    if (props.type == "fileList") {
        return updateValue(event.target.files);
    }
    if (props.type == "dataUrl") {
        const reader = new FileReader();
        reader.onload = (readerEvent) => {
            updateValue({
                file: event.target.files[0],
                dataUrl: readerEvent.target?.result as string,
            });
        };

        return reader.readAsDataURL(event.target.files[0]);
    }
}
</script>
