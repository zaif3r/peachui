<template>
    <nav class="navbar">
        <div class="navbar-start gap-1">
            <slot name="start" />
            <slot />
        </div>
        <div v-if="$slots.center" class="navbar-center gap-1">
            <slot name="center" />
        </div>
        <div v-if="$slots.end" class="navbar-end gap-1">
            <slot name="end" />
        </div>
    </nav>
</template>
