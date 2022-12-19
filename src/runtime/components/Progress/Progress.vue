<template>
    <progress class="progress" :value="value" :max="max"></progress>
</template>
<script setup lang="ts">
interface Props {
    max?: number;
    value?: number;
}

withDefaults(defineProps<Props>(), {
    max: 100,
    value: 0,
});
</script>
