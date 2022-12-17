<template>
    <nav class="navbar">
        <div class="navbar-start gap-1">
            <slot name="start" />
            <slot />
        </div>
        <div class="navbar-center gap-1">
            <slot name="center" />
        </div>
        <div class="navbar-end gap-1">
            <slot name="end" />
        </div>
    </nav>
</template>
