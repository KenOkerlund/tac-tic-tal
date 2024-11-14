import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier, // Corrected plugin reference
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'array-bracket-spacing': ['error', 'never'],
      'comma-spacing': ['error', { after: true, before: false }],
      'eol-last': ['error', 'always'],
      eqeqeq: ['error', 'always'],
      'no-duplicate-imports': ['error', { includeExports: true }],
      'no-eq-null': 'error',
      'no-lonely-if': 'error',
      'no-self-compare': 'error',
      'no-unneeded-ternary': 'error',
      'no-use-before-define': ['error', { functions: false }],
      'no-useless-assignment': 'error',
      'no-var': 'error',
      'object-curly-spacing': ['error', 'always'],
      'prefer-template': 'error',
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      'prettier/prettier': 'error',
    },
  },
];
