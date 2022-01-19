module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        semi: ['error', 'never'],
        indent: 'off',
        'react/jsx-indent': 'off',
        'comma-dangle': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    },
}
