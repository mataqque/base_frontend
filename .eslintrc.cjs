module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  rules: {
    // Define your custom ESLint rules here, if needed.

    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-no-target-blank": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  "ignorePatterns": [".eslintrc.cjs", "vite.config.ts","commitlint.config.js"],

};
