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
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': ['off'],
    'react/no-unescaped-entities': ['off'],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['utils', './src/utils']
          ['apollo', './src/apollo']
          ['components', './src/components']
          ['statuc', './src/static']
        ]
      }
    }
  }
};
