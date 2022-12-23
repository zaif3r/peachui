<template>
    <input
        :id="name"
        type="checkbox"
        class="modal-toggle"
        :checked="modelValue"
        @input="onChecked"
        @keydown.esc="onEscape"
    />
    <label
        class="modal"
        :for="closeOutsideProps.for"
        :class="[modalClass, closeOutsideProps.class]"
    >
        <label
            for=""
            tabindex="0"
            v-bind="$attrs"
            class="modal-box relative"
            @keydown.esc="onEscape"
        >
            <div
                v-if="closeIcon || $slots.closeIcon"
                class="absolute right-2 top-2"
            >
                <slot name="closeIcon">
                    <Button :for="name" tag="label" class="btn-sm btn-circle">
                        <XMarkIcon class="w-4 h-4" />
                    </Button>
                </slot>
            </div>
            <slot />
            <div v-if="$slots.actions" class="modal-action">
                <slot name="actions" />
            </div>
        </label>
    </label>
</template>
<script setup lang="ts">
import Button from "../Button";
import { computed } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

interface Emits {
    (e: "update:modelValue", value: boolean): void;
}

interface Props {
    name: string;
    modelValue?: boolean;
    closeOutside?: boolean;
    closeOnEscape?: boolean;
    closeIcon?: boolean;
    bottom?: boolean;
}

const emit = defineEmits<Emits>();

const props = withDefaults(defineProps<Props>(), {
    modelValue: false,
    closeOutside: true,
    closeOnEscape: true,
    closeIcon: true,
    bottom: false,
});

const modalClass = computed(() => ({
    "modal-bottom": props.bottom,
    "modal-middle": !props.bottom,
}));

const closeOutsideProps = computed(() => ({
    for: props.closeOutside ? props.name : undefined,
    class: props.closeOutside ? "cursor-pointer" : undefined,
}));

function onChecked(event: any) {
    emit("update:modelValue", event.target.checked);
}

function closeModal() {
    emit("update:modelValue", false);
}

function onEscape() {
    if (props.closeOnEscape) {
        console.log("onEscape");

        closeModal();
    }
}
</script>
<script lang="ts">
export default {
    inheritAttrs: false,
};
</script>
