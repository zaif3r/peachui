<template>
    <div class="card shadow-xl" :class="cardClass">
        <figure v-if="image"><img :src="image" alt="card image" /></figure>
        <div class="card-body" :class="bodyClass">
            <h2 v-if="title || $slots.title" class="card-title">
                <slot name="title">
                    {{ title }}
                </slot>
            </h2>
            <slot />
            <div v-if="$slots.actions" class="card-actions justify-end">
                <slot name="actions" />
            </div>
        </div>
        <figure v-if="imageBottom">
            <img :src="imageBottom" alt="card image bottom" />
        </figure>
    </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";

const props =
    defineProps<{
        title?: string;
        image?: string;
        imageBottom?: string;
        compact?: boolean;
        centered?: boolean;
        bordered?: boolean;
        side?: boolean;
        responsive?: boolean;
        imageFull?: boolean;
    }>();

const cardClass = computed(() => ({
    "card-compact": props.compact,
    "card-bordered": props.bordered,
    "card-side": props.side,
    "lg:card-side": props.responsive,
    "image-full": props.imageFull,
}));

const bodyClass = computed(() => ({
    "gap-2": props.compact,
    "gap-4": !props.compact,
    "items-center text-center": props.centered,
}));
</script>
