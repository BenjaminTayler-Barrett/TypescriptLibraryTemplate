import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import packageJson from "./package.json" assert { type: "json" };

export default [
    {
        input: "src/index.ts",
        external: [],
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json",
                inlineSources: true,
                exclude: [
                    "**/*.spec.ts",
                ],
            })
        ],
    },
    {
        input: "dist/esm/index.d.ts",
        output: [{ file: "dist/types/index.d.ts", format: "esm" }],
        plugins: [dts.default()],
        external: [],
    },
];
