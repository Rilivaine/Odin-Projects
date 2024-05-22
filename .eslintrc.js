import stylistic from '@stylistic/eslint-plugin';

const customized = stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: true,
});

export default {
    plugins: [
        '@stylistic'
    ],
    rules: {
        ...customized.rules,
    }
};
