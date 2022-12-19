<template>
    <div class="relative group">
        <swiper
            v-bind="props"
            :modules="modules"
            :navigation="false"
            @swiper="setController"
        >
            <template v-if="items">
                <swiper-slide :key="item" v-for="item in items">
                    <slot name="item" :item="item" />
                </swiper-slide>
            </template>
        </swiper>
        <template v-if="showNavigation">
            <div class="swiper-navigation prev">
                <Button
                    class="btn-circle btn-sm btn-link"
                    @click="controller?.slidePrev()"
                >
                    <ChevronLeftIcon class="w-5" />
                </Button>
            </div>
            <div class="swiper-navigation next">
                <Button
                    class="btn-circle btn-sm btn-link"
                    @click="controller?.slideNext()"
                >
                    <ChevronRightIcon class="w-5" />
                </Button>
            </div>
        </template>
    </div>
</template>
<script setup lang="ts">
import Button from "../Button";
import { ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Controller, Pagination, Scrollbar, Grid } from "swiper";
import type { PaginationOptions, ScrollbarOptions } from "swiper/types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

interface Props {
    slidesPerView?: number | "auto";
    spaceBetween?: number;
    navigation?: boolean;
    pagination?: boolean | PaginationOptions | Object;
    scrollbar?: boolean | ScrollbarOptions | Object;
    loop?: boolean;
    grabCursor?: boolean;
    items?: any[];
}

const controller = ref<any>();

const modules = ref([Controller, Pagination, Scrollbar, Grid]);

const props = withDefaults(defineProps<Props>(), {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: false,
    pagination: false,
    scrollbar: false,
    loop: false,
    grabCursor: false,
});

function setController(swiper: any) {
    controller.value = swiper;
}

const showNavigation = computed(() => {
    if (props.items) {
        return props.navigation && props.items.length > 1;
    } else {
        return props.navigation;
    }
});
</script>
<script lang="ts">
export default {
    inheritAttrs: false,
};
</script>
<style>
.swiper-navigation {
    @apply absolute top-1/2 z-30;
    @apply opacity-0 group-hover:opacity-100 transition-opacity;
}
.swiper-navigation.prev {
    @apply left-2 md:left-4;
}
.swiper-navigation.next {
    @apply right-2 md:right-4;
}
</style>
