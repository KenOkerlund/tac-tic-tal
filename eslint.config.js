import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
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
    },
  },
);
