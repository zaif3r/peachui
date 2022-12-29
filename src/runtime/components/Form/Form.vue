<template>
    <div class="form-control gap-4">
        <slot />
    </div>
</template>
<script lang="ts" setup>
import { FormProps, FormInputModel } from "@/types";

interface Props extends FormProps {
    error?: string;
    loading?: boolean;
    inputs?: {
        [key: string]: FormInputModel<any>;
    };
    action?: () => Promise<void>;
}

withDefaults(defineProps<Props>(), {
    loading: false,
    inputs: () => ({}),
});
</script>
<style>
.form-control {
    @apply w-full;
}
.form-control > div,
.form-control .input,
.form-control .textarea,
.form-control .file-input,
.form-control .label,
.form-control .select {
    @apply w-full;
}
</style>
