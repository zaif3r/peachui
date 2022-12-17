<template>
    <div class="mockup-phone">
        <div class="camera"></div>
        <div class="display">
            <div class="artboard artboard-demo phone" v-bind="$attrs">
                <slot />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    inheritAttrs: false,
};
</script>
<style scoped>
.artboard {
    aspect-ratio: 5/9;
}
</style>
