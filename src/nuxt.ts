import { defineNuxtModule, createResolver, addComponent, installModule } from "@nuxt/kit";
import * as components from "./runtime/components";

export * from "./types";
export * from "./runtime/components";

export interface ModuleOptions {
    prefix?: string;
    tailwind?: any;
}

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: "@zaifer/peachui",
        configKey: "peachui",
    },
    defaults: {
        prefix: "P",
        tailwind: {},
    },
    async setup(opt, nuxt) {
        const srcResolver = createResolver(
            import.meta.url.replace("dist", "src/runtime")
        );

        opt.tailwind.plugins = opt.tailwind.plugins || [];
        opt.tailwind.plugins.push(require("daisyui"));

        await installModule("@nuxtjs/tailwindcss", {
            config: opt.tailwind,
        });

        const componentNames = Object.keys(components);
        for (const name of componentNames) {
            addComponent({
                name: opt.prefix + name,
                filePath: srcResolver.resolve("components", name),
            });
        }

        nuxt.options.build.transpile.push("@heroicons/vue");
    },
});
