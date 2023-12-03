module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.eslint.json', // Adjust this path as needed
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // Define your project's specific rules here
    '@typescript-eslint/no-explicit-any': 'off',
  },
  ignorePatterns: ['.eslintrc.js', 'babel.config.js'],
};
