<template>
    <li>
        <component :is="tag" v-bind="$attrs" class="breadcrumb">
            <slot />
        </component>
    </li>
</template>
<script setup lang="ts">
interface Props {
    tag?: string | Object;
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
