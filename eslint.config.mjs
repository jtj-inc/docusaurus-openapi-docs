export default [
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js"], // Specify file patterns
    ignores: ["node_modules", "build", "dist"], // Ignore these directories
    languageOptions: {
      parser: (await import("@typescript-eslint/parser")).default, // Dynamically import the TypeScript parser
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
    },
    plugins: {
      "@typescript-eslint": (await import("@typescript-eslint/eslint-plugin")).default, // Load the TypeScript ESLint plugin
      react: (await import("eslint-plugin-react")).default, // Load the React plugin
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];