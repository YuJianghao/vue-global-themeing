import{inject as e,ref as t,computed as n}from"vue";function a(e={},t="-"){return Object.keys(e).reduce(((n,r)=>{const s=e[r],u=`${t}-${r}`;if("string"==typeof s)return n[u]=s,n;{const e=a(s,u);return{...n,...e}}}),{})}const r=Symbol("theme");class s{name=t("default");map=new Map;constructor(e){this.map=new Map(Object.entries(e))}install(e,t){e.provide(t||r,this)}changeTheme(e){this.map.has(e)?this.name.value=e:console.warn(`theme ${e} not found`)}setTheme(e,t){this.map.set(e,t)}deleteTheme(e){"default"!==e?this.map.delete(e):console.warn("can not delete default theme, try change it by `setTheme('default', newTheme)`")}get data(){return n((()=>this.map.get(this.name.value)))}get styles(){return n((()=>a(this.data.value)))}get currentTheme(){return n((()=>this.name.value))}get themeList(){return n((()=>[...this.map.keys()]))}}function u(t=null){return e(null!==t?t:r)}function l(t=null){return e(null!==t?t:r)?.data}function h(e){return new s(e)}export{h as createTheme,l as useTheme,u as useThemeController};
