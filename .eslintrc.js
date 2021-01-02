module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': ['off'],
    'react/no-unescaped-entities': ['off'],
    'react/prop-types': [2],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['utils', './src/utils']
          ['apollo', './src/apollo']
          ['queries', './src/apollo/queries']
          ['mutations', './src/apollo/mutations']
          ['fragments', './src/apollo/fragments']
          ['components', './src/components']
          ['context', './src/context']
          ['HoC', './src/HoC']
          ['ownHooks', './src/ownHooks']
          ['cpages', './src/components/pages']
          ['static', './src/static']
        ],
      },
    },
  },
};
