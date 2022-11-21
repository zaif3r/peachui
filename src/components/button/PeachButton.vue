<template>
    <button class="p-btn p-gap-2" :class="{ loading: props.loading }">
        <slot />
    </button>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{ loading?: boolean }>();
</script>
