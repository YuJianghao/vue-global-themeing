import { inject, ref, computed } from 'vue';

function serialize(obj = {}, prefix = "-") {
    return Object.keys(obj).reduce((o, key) => {
        const value = obj[key];
        const name = `${prefix}-${key}`;
        if (typeof value === "string") {
            o[name] = value;
            return o;
        }
        else {
            const res = serialize(value, name);
            return { ...o, ...res };
        }
    }, {});
}
const themeProviderInjectionKey = Symbol("theme");
class Theme {
    name = ref("default");
    map = new Map();
    constructor(map) {
        this.map = new Map(Object.entries(map));
    }
    install(app, injectKey) {
        app.provide(injectKey || themeProviderInjectionKey, this);
    }
    changeTheme(name) {
        if (!this.map.has(name)) {
            console.warn(`theme ${name} not found`);
            return;
        }
        this.name.value = name;
    }
    setTheme(name, theme) {
        this.map.set(name, theme);
    }
    deleteTheme(name) {
        if (name === "default") {
            console.warn(`can not delete default theme, try change it by \`setTheme('default', newTheme)\``);
            return;
        }
        this.map.delete(name);
    }
    get data() {
        return computed(() => this.map.get(this.name.value));
    }
    get styles() {
        return computed(() => serialize(this.data.value));
    }
    get currentTheme() {
        return computed(() => this.name.value);
    }
    get themeList() {
        return computed(() => [...this.map.keys()]);
    }
}
function useThemeController(key = null) {
    return inject(key !== null ? key : themeProviderInjectionKey);
}
function useTheme(key = null) {
    return inject(key !== null ? key : themeProviderInjectionKey)?.data;
}
function createTheme(map) {
    return new Theme(map);
}

export { createTheme, useTheme, useThemeController };
