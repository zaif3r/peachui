<template>
    <div class="form-control gap-2">
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
.form-control .input-file {
    @apply w-full;
}
.form-control > .btn:last-child {
    @apply mt-4;
}
</style>
