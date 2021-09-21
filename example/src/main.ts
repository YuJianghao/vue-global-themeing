import { createApp } from "vue";
import App from "./App.vue";
import { createTheme } from "../..";

export type MyTheme = {
  primary: string;
};

const redTheme: MyTheme = {
  primary: "#e74c3c",
};
const blueTheme: MyTheme = {
  primary: "#3498db",
};

const theme = createTheme({
  default: redTheme,
  blue: blueTheme,
});

createApp(App).use(theme).mount("#app");
