<template>
    <div class="stat">
        <div v-if="$slots.figure" class="stat-figure text-secondary">
            <slot name="figure" />
        </div>
        <slot />
        <div v-if="$slots.actions" class="stat-actions">
            <slot name="actions" />
        </div>
    </div>
</template>
