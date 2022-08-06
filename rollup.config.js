import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import visualizer from "rollup-plugin-visualizer";
import postcss from "rollup-plugin-postcss";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const formats = ["esm", "umd", "cjs"];

const plugins = [
  peerDepsExternal(),
  resolve({ extensions }),
  postcss({
    config: {
      path: "./postcss.config.js",
    },
    extract: true,
    extensions: [".css"],
    minimize: true,
    inject: {
      insertAt: "top",
    },
  }),
  tailwind({
    input: "./tw.css", // required
    // Tailor the emitted stylesheet to the bundle by removing any unused CSS
    // (highly recommended when packaging for distribution).
    purge: true,
  }),
  babel({ extensions, exclude: "node_modules/**", runtimeHelpers: true }),
  commonjs(),
  terser(),
  visualizer({ sourcemap: true }),
];

export default [
  {
    input: "src/index.ts",
    external: ["react", "react-dom"],
    plugins,
    output: formats.map((format) => ({
      file: `dist/browser.${format}.js`,
      format,
      sourcemap: true,
      name: "groundgametexas",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    })),
  },
];
