<template>
    <Button tag="label" class="btn-square btn-ghost">
        <Swap
            :modelValue="modelValue"
            @update:modelValue="emit('update:modelValue', $event)"
        >
            <template #off>
                <Bars3Icon class="w-5" />
            </template>
            <template #on>
                <XMarkIcon class="w-5" />
            </template>
        </Swap>
    </Button>
</template>
<script lang="ts" setup>
import Swap from "../Swap";
import Button from "../Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { DrawerButtonProps, DrawerEmits } from "@/types";

interface Props extends DrawerButtonProps {
    modelValue?: boolean;
}

defineProps<Props>();

const emit = defineEmits<DrawerEmits>();
</script>
