import pluginVue from 'eslint-plugin-vue'

export default [
  ...pluginVue.configs['flat/recommended'],
  ...pluginVue.configs['flat/base'],
  ...pluginVue.configs['flat/essential'],
  ...pluginVue.configs['flat/strongly-recommended'],
  ...pluginVue.configs['flat/recommended'],
  {
    files: ["**/*.js", "**/*.vue"],
    ignores: ["**/jedi.js"],
    rules: {
      "vue/no-v-html": 0,
      "semi": ["error", "never"],
      "no-unused-vars": 2,
      "no-undef": 2,
      "vue/max-attributes-per-line": 0,
      "vue/html-closing-bracket-newline": 0,
      "vue/multi-word-component-names": 0
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
    }
  }
]