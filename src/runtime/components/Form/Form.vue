<template>
    <div class="form-control">
        <slot />
    </div>
</template>
<script lang="ts" setup>
import { provide } from "vue";
import { FormProps, FormValidation } from "@/types";

interface Props extends FormProps {
    action: () => void | Promise<void>;
    validations?: FormValidation[];
}

const props = defineProps<Props>();

provide<Props>("form", {
    action: props.action,
    validations: props.validations,
});
</script>
<style>
.form-control {
    @apply w-full gap-2;
}
.form-control > div,
.form-control .input,
.form-control .textarea {
    @apply w-full;
}
.form-control > .btn:last-child {
    @apply mt-4;
}
</style>
