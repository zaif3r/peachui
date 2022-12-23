<template>
    <div class="rating">
        <input type="radio" name="rating" class="rating-hidden" />
        <input
            type="radio"
            :key="i"
            :value="i"
            :name="name"
            :class="[color, ratingShape]"
            :checked="i == modelValue"
            @input="onChecked(i)"
            v-for="i in count"
        />
    </div>
</template>
<script setup lang="ts">
import { computed } from "vue";

type Ratingshape = "star" | "heart";

interface Emits {
    (e: "update:modelValue", value: number): void;
}

interface Props {
    name: string;
    count?: number;
    shape?: Ratingshape;
    color?: string;
    modelValue?: number;
}

const emit = defineEmits<Emits>();

const props = withDefaults(defineProps<Props>(), {
    count: 5,
    shape: "star",
    modelValue: 1,
});

const ratingShape = computed(() => {
    switch (props.shape) {
        case "heart":
            return "mask mask-heart";
        default:
            return "mask mask-star-2";
    }
});

function onChecked(index: number) {
    emit("update:modelValue", index);
}
</script>
