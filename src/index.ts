import { App } from "vue";
import "./style.css";
import * as components from "./runtime/components";

type ComponentName = keyof typeof components;

const componentNames = Object.keys(components) as ComponentName[];

export default {
    install: (instance: App) => {
        for (const name of componentNames) {
            instance.component(name, components[name]);
        }
    },
};

export * from "./types";
export * from "./runtime/components";
