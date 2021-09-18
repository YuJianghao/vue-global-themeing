'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

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
    name = vue.ref("default");
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
        return vue.computed(() => this.map.get(this.name.value));
    }
    get styles() {
        return vue.computed(() => serialize(this.data.value));
    }
    get currentTheme() {
        return vue.computed(() => this.name.value);
    }
    get themeList() {
        return vue.computed(() => [...this.map.keys()]);
    }
}
function useThemeController(key = null) {
    return vue.inject(key !== null ? key : themeProviderInjectionKey);
}
function useTheme(key = null) {
    return vue.inject(key !== null ? key : themeProviderInjectionKey)?.data;
}
function createTheme(map) {
    return new Theme(map);
}

exports.createTheme = createTheme;
exports.useTheme = useTheme;
exports.useThemeController = useThemeController;
