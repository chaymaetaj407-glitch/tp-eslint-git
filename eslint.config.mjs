import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node
      },
      ecmaVersion: 2022,
      sourceType: 'commonjs'
    },
    rules: {
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-console': 'warn',
      'no-unused-vars': 'error',
      'eqeqeq': ['error', 'always'],
      'no-debugger': 'error',
      'no-unreachable': 'error'
    }
  },
  js.configs.recommended
];