import typescript from "rollup-plugin-typescript2";
export default {
  input: "./index.ts",
  output: [
    {
      file: "dist/index.common.js",
      format: "commonjs",
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
    {
      file: "dist/index.esm.js",
      format: "umd",
      name: "VueGlobalTheming",
      globals: {
        vue: "Vue",
      },
    },
  ],
  plugins: [typescript()],
  external: ["vue"],
};
