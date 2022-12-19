<template>
    <li :class="itemActive">
        <a :class="linkActive">
            <slot />
        </a>
    </li>
</template>
<script setup lang="ts">
import { inject, computed } from "vue";
import { MenuProps } from "@/types";

const props =
    defineProps<{
        active?: boolean;
    }>();

const menu = inject<MenuProps>("menu");

const itemActive = computed(() => ({
    bordered: menu?.bordered && props.active,
}));

const linkActive = computed(() => ({
    active: !menu?.bordered && props.active,
}));
</script>
