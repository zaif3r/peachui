<template>
    <Button :for="modal" tag="label" v-bind="props">
        <template #icon>
            <slot name="icon" />
        </template>
        <slot />
    </Button>
</template>
<script setup lang="ts">
import Button from "../Button";
import { ModalButtonProps } from "@/types";

interface Props extends ModalButtonProps {
    modal: string;
    active?: boolean;
    disabled?: boolean;
    loading?: boolean;
    animation?: boolean;
}

const props = defineProps<Props>();
</script>
