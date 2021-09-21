<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { computed } from "@vue/reactivity";
import { useTheme, useThemeController } from "../../";
import { MyTheme } from "./main";
const t = useTheme<MyTheme>();
const controller = useThemeController();
const setBlue = () => controller?.changeTheme("blue");
const setRed = () => controller?.changeTheme("default");
const h1Style = computed(() => ({ color: t?.value.primary }));
const styles = computed(() => controller?.styles.value);
</script>

<template>
  <div :style="styles">
    <h1 :style="h1Style">Hello Vue 3 + @winwin/vue-global-theming!</h1>
    <div>
      <button @click="setBlue">chaneg to blue</button>
      <button @click="setRed">chaneg to red</button>
    </div>
    <h2>CSS 变量：</h2>
    <pre style="text-align: left">{{ styles }}</pre>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  background-color: var(--primary);
  color: white;
  padding: 5px 10px;
  border: none;
  margin-right: 10px;
  cursor: pointer;
}
</style>
