import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import ts from 'typescript-eslint'

export default ts.config(
  // ignore patterns (.eslintignore)
  { ignores: ['*-report', 'coverage', 'dist', 'playwright', 'test-results', 'eslint.config.js', 'prettier.config.js'] },
  // Files to scan
  { files: ['**/*.{js,ts,tsx}'] },
  // typescript eslint
  js.configs.recommended,
  ...ts.configs.strictTypeChecked,
  ...ts.configs.stylisticTypeChecked,
  // storybook, react hooks, react
  ...fixupConfigRules(
    new FlatCompat().extends(
      'plugin:storybook/recommended',
      'plugin:storybook/csf',
      'plugin:storybook/csf-strict',
      'plugin:react-hooks/recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
    ),
  ),
  // misc
  {
    plugins: {
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.worker,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        project: ['./tsconfig.json', 'tsconfig.app.json', './tsconfig.node.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
)
