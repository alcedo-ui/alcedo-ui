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

        'no-cond-assign': 2,
        // 'no-console': 0,
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
        // 'no-extra-boolean-cast': 0,
        // 'no-extra-parens': 0,
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
        // 'valid-jsdoc': 0,
        'valid-typeof': 2,

        'accessor-pairs': 2,
        // 'array-callback-return': 0,
        // 'block-scoped-var': 0,
        'complexity': [2, 20],
        // 'consistent-return': 0,
        'curly': [2, 'all'],
        // 'default-case': 2,
        'dot-location': [2, 'property'],
        // 'dot-notation': [0, {
        //     'allowKeywords': true
        // }],
        // 'eqeqeq': [2, 'allow-null'],
        'guard-for-in': 2,
        // 'no-alert': 0,
        'no-caller': 2,
        'no-case-declarations': 2,
        'no-div-regex': 2,
        // 'no-else-return': 0,
        'no-empty-function': 2,
        'no-empty-pattern': 2,
        // 'no-eq-null': 0,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        // 'no-extra-label:': 0,
        'no-fallthrough': 2,
        'no-floating-decimal': 2,
        // 'no-implicit-coercion': 0,
        'no-implicit-globals': 1,
        'no-implied-eval': 2,
        // 'no-invalid-this': 0,
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 1,
        // 'no-magic-numbers': [0, {
        //     'ignore': [-1, 0, 1, 2, 3, 4, 10, 100]
        // }],
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-native-reassign': 2,
        'no-new': 2,
        // 'no-new-func': 0,
        'no-new-wrappers': 2,
        'no-octal': 2,
        'no-octal-escape': 2,
        // 'no-param-reassign': 0,
        'no-proto': 2,
        'no-redeclare': 2,
        // 'no-return-assign': 0,
        // 'no-script-url': 0,
        'no-self-assign': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unmodified-loop-condition': 2,
        // 'no-unused-expressions': 0,
        'no-unused-labels': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        // 'no-useless-escape': 0,
        // 'no-void': 0,
        // 'no-warning-comments': 0,
        'no-with': 2,
        'radix': 2,
        // 'vars-on-top': 0,
        'wrap-iife': [2, 'any'],
        'yoda': [2, 'never'],
        // 'strict': 0,

        // 'init-declarations': 0,
        // 'no-catch-shadow': 0,
        'no-delete-var': 2,
        'no-label-var': 2,
        // 'no-restricted-globals': 0,
        // 'no-shadow': 0,
        'no-shadow-restricted-names': 2,
        'no-undef': 2,
        'no-undef-init': 2,
        // 'no-undefined': 0,
        'no-unused-vars': [2, {
            'vars': 'all',
            'args': 'none'
        }],
        // 'no-use-before-define': 0,

        // 'callback-return': 0,
        // 'global-require': 0,
        'handle-callback-err': [2, '^(err|error)$'],
        // 'no-mixed-requires': 0,
        'no-new-require': 2,
        // 'no-path-concat': 0,
        // 'no-process-env': 0,
        // 'no-process-exit': 0,
        // 'no-sync': 0,

        'array-bracket-spacing': [2, 'never'],
        'block-spacing': [1, 'never'],
        // 'brace-style': [0, '1tbs', {
        //     'allowSingleLine': true
        // }],
        'camelcase': 2,
        'comma-spacing': [2, {
            'before': false,
            'after': true
        }],
        'comma-style': [2, 'last'],
        'computed-property-spacing': [2, 'never'],
        'consistent-this': [1, 'that'],
        // 'func-names': 0,
        'eol-last': 2,
        // 'indent': [0, 4, {
        //     'SwitchCase': 1
        //     // 'MemberExpression': 'off',
        //     // 'FunctionDeclaration': {'parameters': 'off'},
        //     // 'FunctionExpression': {'parameters': 'off'},
        //     // 'CallExpression': {'arguments': 'off'},
        //     // 'ArrayExpression': 'off',
        //     // 'ObjectExpression': 'off',
        //     // 'ImportDeclaration': 'off'
        // }],
        'key-spacing': [2, {
            'beforeColon': false,
            'afterColon': true
        }],
        'linebreak-style': [1, 'unix'],
        'lines-around-comment': [1, {
            'beforeBlockComment': true
        }],
        // 'func-style': 0,
        'max-nested-callbacks': [1, 5],
        // 'id-blacklist': 0,
        // 'id-length': 0,
        // 'id-match': 0,
        // 'jsx-quotes': 0,
        'keyword-spacing': 2,
        // 'max-len': [0, 200],
        // 'max-lines': 0,
        'max-params': [1, 7],
        'max-statements': [1, 200],
        // 'max-statements-per-line': 0,
        'new-cap': [2, {
            'newIsCap': true,
            'capIsNew': false
        }],
        'new-parens': 2,
        // 'newline-after-var': 0,
        'no-array-constructor': 2,
        // 'no-bitwise': 0,
        // 'newline-before-return': 0,
        'newline-per-chained-call': 1,
        // 'no-continue': 0,
        // 'no-inline-comments': 0,
        // 'no-lonely-if': 0,
        // 'no-mixed-operators': 0,
        'no-mixed-spaces-and-tabs': 2,
        'no-multiple-empty-lines': [2, {
            'max': 2
        }],
        // 'no-negated-condition': 0,
        // 'no-nested-ternary': 0,
        'no-new-object': 2,
        // 'no-plusplus': 0,
        // 'no-restricted-syntax': 0,
        'no-spaced-func': 2,
        // 'no-ternary': 0,
        'no-trailing-spaces': 2,
        // 'no-underscore-dangle': 0,
        'no-unneeded-ternary': 2,
        // 'no-whitespace-before-property': 0,
        // 'object-curly-newline': 0,
        // 'object-curly-spacing': 0,
        // 'object-property-newline': 0,
        // 'one-var': [0, {
        //     'initialized': 'never'
        // }],
        // 'one-var-declaration-per-line': 0,
        // 'operator-assignment': 0,
        'operator-linebreak': [2, 'after', {
            'overrides': {
                '=': 'ignore',
                '!=': 'ignore',
                '==': 'ignore',
                '!==': 'ignore',
                '===': 'ignore',
                ':': 'ignore',
                '&&': 'before',
                '||': 'before',
                '+': 'before',
                '-': 'before',
                '*': 'before',
                '**': 'before',
                '/': 'before'
            }
        }],
        // 'padded-blocks': 0,
        // 'quote-props': 0,
        'quotes': [2, 'single', 'avoid-escape'],
        'require-jsdoc': 1,
        'semi': [2, 'always'],
        // 'semi-spacing': 0,
        // 'sort-vars': 0,
        'space-before-blocks': [2, 'always'],
        // 'space-before-function-paren': [0, 'always'],
        'space-in-parens': [2, 'never'],
        'space-infix-ops': 2,
        'space-unary-ops': [2, {
            'words': true,
            'nonwords': false
        }],
        'spaced-comment': [2, 'always', {
            'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!']
        }],
        // 'unicode-bom': 0,
        // 'wrap-regex': 0,

        // 'arrow-body-style': 0,
        // 'arrow-parens': 0,
        'arrow-spacing': [2, {
            'before': true,
            'after': true
        }],
        // 'constructor-super': 0,
        'generator-star-spacing': [2, {
            'before': true,
            'after': true
        }],
        'no-class-assign': 2,
        // 'no-confusing-arrow': 0,
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        // 'no-duplicate-imports': 0,
        'no-new-symbol': 2,
        // 'no-restricted-imports': 0,
        'no-this-before-super': 2,
        // 'no-useless-computed-key': 0,
        'no-var': 2,
        // 'object-shorthand': 0,
        // 'prefer-arrow-callback': 0,
        // 'prefer-const': 0,
        // 'prefer-reflect': 0,
        // 'prefer-spread': 0,
        // 'prefer-template': 0,
        // 'prefer-rest-params': 0,
        // 'require-yield': 0,
        // 'rest-spread-spacing': 0,
        // 'sort-imports': 0,
        'template-curly-spacing': 1,
        'yield-star-spacing': 2,

        'react/no-find-dom-node': 0,
        'react/display-name': 0,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 1

    }
};
