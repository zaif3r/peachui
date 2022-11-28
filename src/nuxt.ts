import { defineNuxtModule, createResolver, addComponent } from "@nuxt/kit";
import * as components from "./runtime/components";

export * from "./types";
export * from "./runtime/components";

export default defineNuxtModule({
    meta: {
        name: "@zaifer/peachui",
        configKey: "peachui",
    },
    setup(opt, nuxt) {
        const prefix = opt.prefix?.toUppercase() || "P";

        const distResolver = createResolver(import.meta.url);
        const srcResolver = createResolver(
            import.meta.url.replace("dist", "src/runtime")
        );

        const componentNames = Object.keys(components);
        for (const name of componentNames) {
            addComponent({
                name: prefix + name,
                filePath: srcResolver.resolve("components", name),
            });
        }

        nuxt.options.css.push(distResolver.resolve("style.css"));
    },
});
