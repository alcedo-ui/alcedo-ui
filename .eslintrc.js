/**
 * @file .eslintrc.js
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

/* eslint-disable no-magic-numbers */
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
    'parser': '@babel/eslint-parser',
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

        'no-cond-assign': 2,
        'no-constant-condition': 2,
        'no-control-regex': 2,
        'comma-dangle': [1, 'never'],
        'no-debugger': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty': 2,
        'no-empty-character-class': 2,
        'no-ex-assign': 2,
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-inner-declarations': [2, 'functions'],
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-negated-in-lhs': 2,
        'no-obj-calls': 2,
        'no-prototype-builtins': 0,
        'no-regex-spaces': 2,
        'no-sparse-arrays': 2,
        'no-unexpected-multiline': 2,
        'no-unreachable': 2,
        'use-isnan': 2,
        'valid-typeof': 2,

        'accessor-pairs': 2,
        'complexity': [2, 20],
        'curly': [2, 'all'],
        'dot-location': [2, 'property'],
        'eqeqeq': [2, 'allow-null'],
        'guard-for-in': 2,
        'no-caller': 2,
        'no-case-declarations': 2,
        'no-div-regex': 2,
        'no-empty-function': 2,
        'no-empty-pattern': 2,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-fallthrough': 2,
        'no-floating-decimal': 2,
        'no-implicit-globals': 1,
        'no-implied-eval': 2,
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 1,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-native-reassign': 2,
        'no-new': 2,
        'no-new-wrappers': 2,
        'no-octal': 2,
        'no-octal-escape': 2,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-self-assign': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unmodified-loop-condition': 2,
        'no-unused-labels': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-with': 2,
        'radix': 2,
        'wrap-iife': [2, 'any'],
        'yoda': [2, 'never'],

        'no-delete-var': 2,
        'no-label-var': 2,
        'no-shadow-restricted-names': 2,
        'no-undef': 2,
        'no-undef-init': 2,
        'no-unused-vars': [2, {
            'vars': 'all',
            'args': 'none'
        }],

        'handle-callback-err': [2, '^(err|error)$'],
        'no-new-require': 2,

        'array-bracket-spacing': [2, 'never'],
        'block-spacing': [1, 'never'],
        'camelcase': 2,
        'comma-spacing': [2, {
            'before': false,
            'after': true
        }],
        'comma-style': [2, 'last'],
        'computed-property-spacing': [2, 'never'],
        'consistent-this': [1, 'that'],
        'eol-last': 2,
        'key-spacing': [2, {
            'beforeColon': false,
            'afterColon': true
        }],
        'linebreak-style': [1, 'unix'],
        'max-nested-callbacks': [1, 5],
        'keyword-spacing': 2,
        'max-params': [1, 7],
        'max-statements': [1, 200],
        'new-cap': [2, {
            'newIsCap': true,
            'capIsNew': false
        }],
        'new-parens': 2,
        'no-array-constructor': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': [2, {
            'max': 2
        }],
        'no-new-object': 2,
        'no-spaced-func': 2,
        'no-trailing-spaces': 2,
        'no-unneeded-ternary': 2,
        'operator-linebreak': [2, 'after', {
            'overrides': {
                '=': 'ignore',
                '==': 'ignore',
                '!==': 'ignore',
                '===': 'ignore',
                ':': 'ignore',
                '&&': 'ignore',
                '||': 'ignore',
                '+': 'ignore',
                '-': 'ignore',
                '*': 'ignore',
                '**': 'ignore',
                '/': 'ignore'
            }
        }],
        'quotes': [2, 'single', 'avoid-escape'],
        'require-jsdoc': 1,
        'semi': [2, 'always'],
        'space-before-blocks': [2, 'always'],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': 2,
        'space-unary-ops': [2, {
            'words': true,
            'nonwords': false
        }],
        'spaced-comment': [2, 'always', {
            'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!']
        }],

        'arrow-spacing': [2, {
            'before': true,
            'after': true
        }],
        'generator-star-spacing': [2, {
            'before': true,
            'after': true
        }],
        'no-class-assign': 2,
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-new-symbol': 2,
        'no-this-before-super': 2,
        'no-var': 2,
        'template-curly-spacing': 1,
        'yield-star-spacing': 2,

        'react/no-find-dom-node': 0,
        'react/display-name': 0,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 1

    }
};
