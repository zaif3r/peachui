<template>
    <div class="collapse" :class="collapseClass">
        <input type="checkbox" />
        <div class="collapse-title">
            <slot name="title">
                <span class="text-xl font-medium">
                    {{ title }}
                </span>
            </slot>
        </div>
        <div class="collapse-content">
            <slot />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";

interface Props {
    title?: string;
    arrow?: boolean;
    plus?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    arrow: true,
    plus: false,
});

const collapseClass = computed(() => ({
    "collapse-arrow": props.arrow,
    "collapse-plus": props.plus,
}));
</script>
