<template>
    <div class="avatar w-full" :class="avatarClass">
        <div v-bind="$attrs" :class="imageClass">
            <img v-if="src" :src="src" alt="avatar" />
            <span v-else>
                <slot name="placeholder">
                    {{ placeholder }}
                </slot>
            </span>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";

interface Props {
    src?: string;
    placeholder?: string;
    online?: boolean;
    rounded?: boolean;
    circle?: boolean;
    squircle?: boolean;
    hexagon?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    online: undefined,
});

const avatarClass = computed(() => ({
    online: props.online != undefined && props.online,
    offline: props.online != undefined && !props.online,
    placeholder: !props.src,
}));

const imageClass = computed(() => ({
    "rounded-xl": props.rounded,
    "rounded-full": props.circle,
    "mask mask-squircle": props.squircle,
    "mask mask-hexagon": props.hexagon,
    "bg-neutral-focus text-neutral-content": !props.src,
}));
</script>
<script lang="ts">
export default {
    inheritAttrs: false,
};
</script>
