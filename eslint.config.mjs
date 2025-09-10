import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // This adds Node.js global variables, including `global`
        global: true, // Explicitly allow `global
        describe: true, // Used for grouping tests
        test: true, // Used to create tests
        it: true, // Alternative way to create tests
        expect: true, // Used for test assertions
        require: true, // Used in Node.js files like Tailwind config
        module: true, // Used in Node.js files like Tailwind config
        process: true,
      },
    },
  },
  pluginJs.configs.recommended,
];
