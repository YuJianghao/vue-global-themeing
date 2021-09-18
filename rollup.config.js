import clear from "rollup-plugin-clear";
import { babel } from "@rollup/plugin-babel";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";
export default {
  input: "./index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "esm",
      globals: {
        vue: "Vue",
      },
    },
  ],
  plugins: [
    clear({ targets: ["dist"] }),
    typescript(),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env"],
    }),
    terser(),
    filesize(),
  ],
  external: ["vue"],
};
