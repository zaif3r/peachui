<template>
    <div class="aos" :class="containerClass">
        <div ref="targetEl" :class="targetAnimation">
            <slot />
        </div>
    </div>
</template>
<script setup lang="ts">
import { onBeforeUnmount, ref, computed } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

interface Props {
    once?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    once: true,
});

const targetEl = ref<any>(null);
const targetAnimation = ref("");

const onIntersection: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (props.once) {
        if (isIntersecting && targetAnimation.value == "") {
            targetAnimation.value = "scroll-pop-up";
        }
    } else {
        if (isIntersecting) {
            targetAnimation.value = "scroll-pop-up";
        } else {
            targetAnimation.value = "";
        }
    }
};

const { stop: stopObserver } = useIntersectionObserver(
    targetEl,
    onIntersection,
    {
        threshold: 0.5,
    }
);

const containerClass = computed(() => ({
    "opacity-0": targetAnimation.value == "",
}));

onBeforeUnmount(() => {
    stopObserver();
});
</script>
<style>
.aos {
    @apply relative transition-opacity ease-in-out duration-700;
}
.scroll-pop-up {
    animation-duration: 0.8s;
    animation-name: animate-pop-up;
    @apply ease-in;
}

@keyframes animate-pop-up {
    0% {
        opacity: 0;
        transform: scale(0.5, 0.5);
    }

    100% {
        opacity: 1;
        transform: scale(1, 1);
    }
}
</style>
