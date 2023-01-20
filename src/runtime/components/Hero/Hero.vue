<template>
    <div class="hero" :style="heroStyle">
        <div v-if="bgImage" class="hero-overlay bg-opacity-70"></div>
        <div :class="[contentClass, contentClasses]" class="hero-content">
            <slot />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";

const props =
    defineProps<{
        bgImage?: string;
        contentClass?: string;
    }>();

const heroStyle = computed(() => ({
    backgroundImage: `url(${props.bgImage})`,
}));

const contentClasses = computed(() => ({
    "text-neutral-content": !!props.bgImage,
}));
</script>
