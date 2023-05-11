module.exports = {
    root: true,
    env: {
        node: true,
    },
    plugins: ['vue'],
    extends: ['plugin:vue/essential', 'eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        parser: '@babel/eslint-parser',
    },
    rules: {},
};
