<template>
    <div
        class="radial-progress"
        :style="{
            '--size': size,
            '--value': modelValue,
            '--thickness': thickness,
        }"
    >
        <slot> {{ modelValue }}% </slot>
    </div>
</template>
<script setup lang="ts">
interface Props {
    size?: string;
    thickness?: string;
    modelValue?: number;
}

const props = withDefaults(defineProps<Props>(), {
    size: "7rem",
    thickness: "0.7rem",
    modelValue: 0,
});

</script>
