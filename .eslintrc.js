module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'jsx-a11y',
  ],
  rules: { 
    'prettier/prettier': ['error', { singleQuote: true },
    "react/jsx-filename-extension":  
      ["error", { extensions: [".js", ".jsx"] }],
    "global-require": "off",
    "import/prefer-default-export": "off",
    "no-unused-expressions": [
      "error", { allowTaggedTemplates: true }
    ]
  },
};
