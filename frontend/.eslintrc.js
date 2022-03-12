module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    "generator-star-spacing": "off",
    indent: ["error", 2],
    semi: 0,
    quotes: ["off", "single"],
    "no-console": "off",
    "comma-dangle": 0,
    // "comma-dangle": [
    //   "error",
    //   {
    //     arrays: "ignore",
    //     objects: "ignore",
    //     imports: "ignore",
    //     exports: "ignore",
    //     functions: "ignore"
    //   },
    // ],
    "space-in-parens": ["error", "never"],
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "space-before-blocks": ["error", "always"],
    "no-empty": "error",
    "no-duplicate-imports": "error",
    "eol-last": 0,
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
    "no-unused-vars": "warn",
    "vue/no-unused-components": "warn",
    "quote-props": 0,
  },
  overrides: [
    {
      files: ['**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 0,
      },
    },
  ],
};
