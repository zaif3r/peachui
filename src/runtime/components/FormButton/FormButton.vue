<template>
    <Button v-bind="props" :loading="loading ?? form.loading" @click.stop="onSubmit">
        <template #icon>
            <slot name="icon" />
        </template>
        <slot />
    </Button>
</template>
<script setup lang="ts">
import Button from "../Button";
import { FormState, FormButtonProps } from "@/types";
import { computed } from "vue"

interface Props extends FormButtonProps {
    form: FormState;
    active?: boolean;
    disabled?: boolean;
    animation?: boolean;
    loading?: boolean;
    action?: (form: FormState) => Promise<void>;
}

const emit = defineEmits<{
    (event: "error", message: string): void;
    (event: "error:input", inputKey: string): void;
}>()

const props = defineProps<Props>();

const validationKeys = computed(() => Object.keys(props.form).filter((key) => {
    return key != "error" && key != "loading" && props.form[key].validator
}))

async function onSubmit() {
    props.form.loading = true;
    props.form.error = undefined;

    if (validateForm()) {
        await submitForm();
    }

    props.form.loading = false;
}

function validateForm() {
    for (const inputKey of validationKeys.value) {
        const validator = props.form[inputKey].validator!!;
        props.form[inputKey].valid = validator(props.form[inputKey].value);
    }

    const invalid = validationKeys.value.find((key) => !props.form[key].valid)

    if (invalid) {
        emit("error:input", invalid)
        props.form.error = props.form[invalid].error ?? `Invalid ${invalid}`
    }

    return !invalid
}

async function submitForm() {
    if (props.action) {
        try {
            await props.action(props.form);
        } catch (error: any) {
            emit("error", error.message);
            props.form.error = error.message;
        }
    }
}
</script>
