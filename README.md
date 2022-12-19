# Peach UI 🍑

<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/npm/l/buefy.svg?logo=github" /></a>

Vue component library for easy web development.

## Features

-   [Vue 3](https://vuejs.org/) plugin
-   [Nuxt](https://nuxtjs.org/) module
-   [TailwindCSS](https://tailwindcss.com/) utility classes
-   [DaisyUI](https://daisyui.com/) CSS components
-   [Heroicons](https://heroicons.dev) svg icons
-   Animate on scroll

## Install

```bash
# npm
npm i @zaifer/peachui

# yarn
yarn add @zaifer/peachui
```

### Vue plugin

```js
import Vue from "vue";
import PeachUI from "@zaifer/peachui";

Vue.use(PeachUI);
```

### Nuxt module

```js
// nuxt.config.js
export default defineNuxtConfig({
    modules: ["@zaifer/peachui/nuxt"],
});
```

## Use

### Local component

```vue
<script setup>
import { PButton } from "@zaifer/peachui";
</script>

<template>
    <p-button class="btn-primary"> Peach Button </p-button>
</template>
```