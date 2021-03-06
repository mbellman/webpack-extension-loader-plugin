module.exports = {
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018
  },
  extends: ['eslint:recommended'],
  rules: {
    'indent': ['error', 2]
  }
};