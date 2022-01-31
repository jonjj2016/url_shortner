module.exports = {
    env: {
      commonjs: true,
      es6: true,
      node: true,
    },
    extends: ['airbnb-base'],
    plugins: [],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2019,
    },
    rules: {
      'no-underscore-dangle': 'off',
      'implicit-arrow-linebreak': 'off',
      'function-paren-newline': 'off',
      'operator-linebreak': 'off',
    },
  };
