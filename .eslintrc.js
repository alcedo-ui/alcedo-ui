module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es6': true
    },
    'extends': 'plugin:react/recommended',
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
        'react'
    ],
    'rules': {

        // no-var
        'no-var': 'error',

        // 要求或禁止var声明中的初始化
        'init-declarations': 'off',

        // 强制使用单引号
        'quotes': ['error', 'single'],

        // 要求或禁止使用分号而不是 ASI
        'semi': ['error', 'always'],

        // 禁止不必要的分号
        'no-extra-semi': 'error',

        // 强制使用一致的换行风格
        'linebreak-style': ['error', 'unix'],

        // 空格4个
        // 'indent': ['error', 4, {
        //     'SwitchCase': 1,
        //     'MemberExpression': 'off',
        //     'FunctionDeclaration': {'parameters': 'off'},
        //     'FunctionExpression': {'parameters': 'off'},
        //     'CallExpression': {'arguments': 'off'},
        //     'ArrayExpression': 'off',
        //     'ObjectExpression': 'off',
        //     'ImportDeclaration': 'off'
        // }],

        // 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
        'array-bracket-spacing': ['error', 'never'],

        // 在块级作用域外访问块内定义的变量是否报错提示
        'block-scoped-var': 'off',

        // if while function 后面的{必须与if在同一行，java风格。
        // 'brace-style': ['error', '1tbs', {'allowSingleLine': true}],

        // 双峰驼命名格式
        'camelcase': 'error',

        // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
        'comma-dangle': ['error', 'never'],

        // 控制逗号前后的空格
        'comma-spacing': ['error', {'before': false, 'after': true}],

        // 控制逗号在行尾出现还是在行首出现
        'comma-style': ['error', 'last'],

        // 圈复杂度
        'complexity': ['error', 20],

        // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
        'computed-property-spacing': ['error', 'never'],

        // 允许使用findDOMNode
        'react/no-find-dom-node': 'off'

    }
};
