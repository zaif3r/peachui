<template>
    <div class="form-control">
        <slot />
    </div>
</template>
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
