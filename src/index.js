import * as components from "./components";

const componentsMap = components?.default;
const PeachUI = {
    install(Vue) {
        Object.keys(componentsMap).forEach((name) => {
            Vue.component(name, componentsMap[name]);
        });
    },
};

export default PeachUI;
