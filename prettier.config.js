/** @type {import('prettier').Config} */
const prettierConfig = {
  printWidth: 125,
  semi: false,
  singleQuote: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrderTypeScriptVersion: '5.5.4',
  importOrder: ['^(react/(.*)$)|^(react$)', '<THIRD_PARTY_MODULES>', '^[.]'],
}

export default prettierConfig
