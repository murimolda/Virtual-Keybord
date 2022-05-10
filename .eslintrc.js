module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'no-var': 'error',
    semi: 'error',
    indent: 'error',
    'max-classes-per-file': ['error', 20],
    'linebreak-style': 'off',
    'prefer-destructuring': 'off',
    'no-param-reassign': 'off',
    'no-multi-assign': 'off',
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'guard-for-in': 'off',
    'no-console': 'off',
    'prefer-const': 'off',
  },
};
