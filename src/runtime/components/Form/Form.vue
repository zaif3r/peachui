<template>
    <div class="form-control gap-4">
        <slot />
    </div>
</template>
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
