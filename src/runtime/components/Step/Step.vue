<template>
    <li class="step" :data-content="content">
        <slot />
    </li>
</template>
<script setup lang="ts">
defineProps<{
    content?: string;
}>();
</script>
