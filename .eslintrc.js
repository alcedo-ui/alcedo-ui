/**
 * @file .eslintrc.js
 */

module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    settings: {
        react: {
            createClass: 'createReactClass',
            pragma: 'React',
            version: 'detect',
            flowVersion: '0.53',
        },
        propWrapperFunctions: [
            'forbidExtraProps',
            { property: 'freeze', object: 'Object' },
            { property: 'myFavoriteWrapper' },
        ],
        linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }],
    },
    plugins: ['react', 'react-hooks'],
    rules: {
        'react/no-find-dom-node': 0,
        'react/display-name': 0,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 1,
    },
};
