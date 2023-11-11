// .eslintrcファイルは扱いやすくするために拡張子を.jsにして以下のように変更します。
/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: 'next/core-web-vitals',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
  },
  plugins: ['jsx-a11y'],
};
