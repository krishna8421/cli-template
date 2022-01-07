module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: [
    "airbnb-base",
    "prettier",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:promise/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
    project: "./tsconfig.json",
    createDefaultProgram: true,
  },
  plugins: [
    "@typescript-eslint",
    "prettier",
    "import",
    "eslint-comments",
    "promise",
  ],
  rules: {
    "no-console": "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "no-use-before-define": [
      "error",
      {
        functions: false,
        classes: true,
        variables: true,
      },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: false,
        classes: true,
        variables: true,
        typedefs: true,
      },
    ],
    "import/no-extraneous-dependencies": "off",
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
    },
  },
};
