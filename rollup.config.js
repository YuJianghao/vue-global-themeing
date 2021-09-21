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
      globals: {
        vue: "Vue",
      },
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      globals: {
        vue: "Vue",
      },
    },
  ],
  plugins: [clear({ targets: ["dist"] }), typescript(), terser(), filesize()],
  external: ["vue"],
};
