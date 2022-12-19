<template>
    <Button v-bind="props" :loading="form.loading" @click.stop="onInputClick">
        <template #icon>
            <slot name="icon" />
        </template>
        <slot />
    </Button>
</template>
<script setup lang="ts">
import Button from "../Button";
import { FormProps, FormInputModel, FormButtonProps } from "@/types";

interface Props extends FormButtonProps {
    form: FormProps;
    active?: boolean;
    disabled?: boolean;
    animation?: boolean;
}

const props = defineProps<Props>();

function validateInput(input: FormInputModel<any>): boolean {
    if (!input.validator) return true;

    if (typeof input.validator == "function") {
        return input.validator(input.value);
    } else {
        switch (input.validator) {
            case "required":
                return !!input.value && input.value != "";
            default:
                return true;
        }
    }
}

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
    if (formInputs) {
        props.form.error = undefined;

        for (const inputKey in formInputs) {
            formInputs[inputKey].valid = validateInput(formInputs[inputKey]);
        }

        const inputs = Object.values(formInputs);
        const firstInvalidInput = inputs.find((input) => !input.valid);

        if (firstInvalidInput) {
            props.form.error =
                firstInvalidInput.error ||
                "Please fill in all required fields.";
        } else {
            await submitForm();
        }
    } else {
        await submitForm();
    }
}
</script>
