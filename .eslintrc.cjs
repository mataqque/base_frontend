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
    "standard",
    'standard-with-typescript',
    'eslint-config-prettier'
  ],
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  rules: {
    // Define your custom ESLint rules here, if needed.

    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-no-target-blank": "off",
    "semi": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-require-imports": "off",
    "@typescript-eslint/naming-convention": "off" ,
    "@typescript-eslint/strict-boolean-expressions": "off"
    
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  "ignorePatterns": [".eslintrc.cjs", "vite.config.ts","commitlint.config.js",'vite-env.d.ts'],

};
