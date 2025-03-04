module.exports = {
    tabWidth: 4,
    pluginSearchDirs: false,
    plugins: [
        'prettier-plugin-organize-imports',
        'prettier-plugin-packagejson',
    ],
    organizeImportsSkipDestructiveCodeActions: true,
    printWidth: 80,
    proseWrap: 'never',
    singleQuote: true,
    trailingComma: 'all',
    overrides: [
        {
            files: '*.md',
            options: {
                proseWrap: 'preserve',
            },
        },
    ],
};
