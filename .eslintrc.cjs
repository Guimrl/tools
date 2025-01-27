module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:styled-components-a11y/recommended',
        'plugin:prettier/recommended', // Integração com Prettier
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
        'react-hooks',
        '@typescript-eslint',
        'jsx-a11y',
        'styled-components-a11y',
        'import',
        'prettier',
    ],
    rules: {
        // Regras personalizadas
        'prettier/prettier': ['error'],
        'react/react-in-jsx-scope': 'off', // Não é necessário no Vite
        '@typescript-eslint/no-unused-vars': ['warn'], // Avisa sobre variáveis não usadas
        'react/prop-types': 'off', // Desabilita PropTypes (já usamos TypeScript)
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
