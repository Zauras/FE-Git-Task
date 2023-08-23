module.exports = {
    plugins: ['@typescript-eslint'],
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    rules: {
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/no-explicit-any': ['warn'],
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
    },
};
