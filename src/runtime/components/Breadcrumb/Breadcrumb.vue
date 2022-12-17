<template>
    <li>
        <component :is="tag" v-bind="$attrs" class="breadcrumb">
            <slot />
        </component>
    </li>
</template>
<script setup lang="ts">
import { DefineComponent } from "vue";

interface Props {
    tag?: string | DefineComponent;
}

withDefaults(defineProps<Props>(), {
    tag: "a",
});
</script>
<script lang="ts">
export default {
    inheritAttrs: false,
};
</script>
<style>
.breadcrumb {
    @apply gap-2;
}
</style>
