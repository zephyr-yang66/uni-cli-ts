module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ['vue'],
  extends: [
    'eslint-config-prettier', // 解决 eslint 和 prettier 冲突
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  overrides: [
    {
      files: ['src/pages/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 0,
      },
    },
  ],
  rules: {
    'prettier/prettier': 'error',
    // 修改 eslint-plugin-vue 8 组件必须驼峰
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'],
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
