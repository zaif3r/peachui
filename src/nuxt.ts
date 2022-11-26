import { defineNuxtModule, createResolver, addComponent } from "@nuxt/kit";
import * as components from "./components";

type ComponentName = keyof typeof components;

const componentNames = Object.keys(components) as ComponentName[];

export default defineNuxtModule({
    meta: {
        name: "@zaifer/peachui",
        configKey: "peachui",
    },
    setup(_opt, nuxt) {
        nuxt.options.css.push(
            createResolver(import.meta.url).resolve("style.css")
        );

        const resolver = createResolver(import.meta.url.replace("dist", "src"));

        for (const name of componentNames) {
            const nameNormalized = name.replace("P", "").toLowerCase();
            addComponent({
                name: name,
                filePath: resolver.resolve("components", nameNormalized),
            });
        }
    },
});
