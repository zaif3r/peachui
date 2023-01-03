<template>
    <Button v-bind="props" :loading="loading ?? form.loading" @click.stop="onInputClick">
        <template #icon>
            <slot name="icon" />
        </template>
        <slot />
    </Button>
</template>
<script setup lang="ts">
import Button from "../Button";
import { FormProps, FormButtonProps } from "@/types";

interface Props extends FormButtonProps {
    form: FormProps;
    active?: boolean;
    disabled?: boolean;
    animation?: boolean;
    loading?: boolean;
}

const props = defineProps<Props>();

async function submitForm() {
    if (props.form.action) {
        props.form.loading = true;

        try {
            await props.form.action();
        } catch (error: any) {
            props.form.error = error.message;
        }

        props.form.loading = false;
    }
}

async function onInputClick() {
    const formInputs = props.form.inputs;

    if (!formInputs) {
        return await submitForm();
    }

    props.form.error = undefined;

    for (const inputKey in formInputs) {
        const validation = formInputs[inputKey].validation;
        if (validation && validation.validator) {
            validation.valid = validation.validator(formInputs[inputKey].value);
        }
    }

    const inputs = Object.values(formInputs);
    const firstInvalidInput = inputs.find((input) => !input.validation?.valid);

    if (firstInvalidInput) {
        props.form.error = firstInvalidInput.validation?.error;
    } else {
        await submitForm();
    }
}
</script>
