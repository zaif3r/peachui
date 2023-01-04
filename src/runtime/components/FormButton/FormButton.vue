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
        const validator = formInputs[inputKey].validator;
        if (validator) {
            formInputs[inputKey].valid = validator(formInputs[inputKey].value);
        } else {
            formInputs[inputKey].valid = true;
        }
    }

    const inputs = Object.values(formInputs);
    const firstInvalidInput = inputs.find((input) => !input.valid);

    if (firstInvalidInput) {
        props.form.error = firstInvalidInput.error;
    } else {
        await submitForm();
    }
}
</script>
