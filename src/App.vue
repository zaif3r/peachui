<template>
    <div>
        <PeachButton> Hello </PeachButton>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PeachButton from "./components/button/PeachButton.vue";

export default defineComponent({
    name: "App",
    components: {
        PeachButton,
    },
});
</script>
