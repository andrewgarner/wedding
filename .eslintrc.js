module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    webextensions: true,
  },
  extends: [
    "standard",
    "plugin:react/all",
    "plugin:jest/recommended",
    "plugin:jest-formatting/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-use-before-define": ["off"],
    "no-unused-vars": ["off"],
    "react/prop-types": ["off"],
    "react/jsx-max-depth": ["off"],
    "react/jsx-props-no-spreading": ["off"],
    "react/jsx-no-literals": ["off"],
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react/function-component-definition": [
      "error",
      { namedComponents: "arrow-function" },
    ],
  },
  settings: {
    react: {
      linkComponents: ["Link", { name: "Link", linkAttribute: "href" }],
    },
  },
};
