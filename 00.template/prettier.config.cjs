module.exports = {
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  printWidth: 120,
  bracketSpacing: true,
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrderSeparation: false,
  importOrder: ["<BUILTIN_MODULES>", "", "<THIRD_PARTY_MODULES>", "", "^@", "^[./]"],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
}
