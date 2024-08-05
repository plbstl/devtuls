import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import ts from 'typescript-eslint'

export default ts.config(
  // ignore patterns (.eslintignore)
  { ignores: ['dist', 'eslint.config.js', 'prettier.config.js'] },
  // Files to scan
  { files: ['**/*.{js,ts,tsx}'] },
  // typescript eslint
  js.configs.recommended,
  ...ts.configs.strictTypeChecked,
  ...ts.configs.stylisticTypeChecked,
  // react hooks, react
  ...fixupConfigRules(
    new FlatCompat().extends('plugin:react-hooks/recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime'),
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
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
)
