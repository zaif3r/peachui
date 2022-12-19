<template>
    <li :class="itemActive">
        <component :is="tag" v-bind="$attrs" :class="linkActive">
            <slot />
        </component>
    </li>
</template>
<script setup lang="ts">
import { inject, computed } from "vue";
import { MenuProps } from "@/types";

interface Props {
    tag?: string | Object;
    active?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    tag: "a",
    active: false,
});

const menu = inject<MenuProps>("menu");

const itemActive = computed(() => ({
    bordered: menu?.bordered && props.active,
}));

const linkActive = computed(() => ({
    active: !menu?.bordered && props.active,
}));
</script>
<script lang="ts">
export default {
    inheritAttrs: false,
};
</script>
