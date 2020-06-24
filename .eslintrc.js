module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es6': true
    },
    'extends': [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'settings': {
        'react': {
            'createClass': 'createReactClass',
            'pragma': 'React',
            'version': 'detect',
            'flowVersion': '0.53'
        },
        'propWrapperFunctions': [
            'forbidExtraProps',
            {'property': 'freeze', 'object': 'Object'},
            {'property': 'myFavoriteWrapper'}
        ],
        'linkComponents': [
            'Hyperlink',
            {'name': 'Link', 'linkAttribute': 'to'}
        ]
    },
    'plugins': [
        'react',
        'react-hooks'
    ],
    'rules': {
        'no-var': 'error',
        'init-declarations': 'off',
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'no-extra-semi': 'error',
        'linebreak-style': ['error', 'unix'],
        'array-bracket-spacing': ['error', 'never'],
        'block-scoped-var': 'off',
        'camelcase': 'error',
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ['error', {'before': false, 'after': true}],
        'comma-style': ['error', 'last'],
        'complexity': ['error', 20],
        'computed-property-spacing': ['error', 'never'],
        'react/display-name': 'off',
        'react/no-find-dom-node': 'off'
    }
};
