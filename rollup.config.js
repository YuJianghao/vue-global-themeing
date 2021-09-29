import autoExternal from "rollup-plugin-auto-external";
import clear from "rollup-plugin-clear";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";
export default {
  input: "./index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
    },
  ],
  plugins: [
    clear({ targets: ["dist"] }),
    autoExternal(),
    typescript(),
    terser(),
    filesize(),
  ],
  external: ["vue"],
};
