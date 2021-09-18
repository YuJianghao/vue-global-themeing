import { App, InjectionKey, ComputedRef } from "vue";
export interface ITheme {
    [key: string]: string | ITheme;
}
declare type ThemeMap<T> = {
    default: T;
    [key: string]: T;
};
declare class Theme<T extends ITheme = ITheme> {
    private name;
    private map;
    constructor(map: ThemeMap<T>);
    install(app: App, injectKey?: InjectionKey<Theme<any>> | string): void;
    changeTheme(name: string): void;
    setTheme(name: string, theme: T): void;
    deleteTheme(name: string): void;
    get data(): ComputedRef<T | undefined>;
    get styles(): ComputedRef<{
        [key: string]: string;
    }>;
    get currentTheme(): ComputedRef<string>;
    get themeList(): ComputedRef<string[]>;
}
export declare function useThemeController<T extends ITheme = ITheme>(key?: InjectionKey<Theme<T>> | string | null): Theme<T> | undefined;
export declare function useTheme<T extends ITheme = ITheme>(key?: InjectionKey<Theme<T>> | string | null): ComputedRef<T> | undefined;
export declare function createTheme<T extends ITheme = ITheme>(map: ThemeMap<T>): Theme<T>;
export {};
