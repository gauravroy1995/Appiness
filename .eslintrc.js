module.exports = {
  env: {
    'jest/globals': true,
  },
  root: true,
  extends: ['@react-native-community'],
  plugins: ['jest'],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
}
