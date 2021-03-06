/**
 * @file webpack.config.dll.js
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

const {IgnorePlugin, DllPlugin} = require('webpack'),
    AssetsPlugin = require('assets-webpack-plugin'),

    config = require('../config.js'),
    utils = require('../utils.js'),

    library = '[name]_lib';

module.exports = {

    mode: 'production',

    entry: {
        'polyfill': ['@babel/polyfill'],
        'moment': ['moment'],
        'react': ['react', 'react-dom', 'react-redux', 'react-router', 'react-router-config', 'react-router-dom',
                  'connected-react-router', 'redux', 'redux-thunk', 'react-transition-group'],
        'tools': ['classnames', 'history', 'dom-helpers']
    },

    output: {
        publicPath: './',
        path: config.build.assetsRoot,
        filename: utils.assetsSubPath('vendors/[name].[chunkhash].js'),
        library
    },

    plugins: [

        new IgnorePlugin(/^\.\/locale$/, /moment$/),

        new DllPlugin({
            context: __dirname,
            path: utils.assetsVendorsAbsolutePath('[name]-manifest.json'),
            name: library
        }),

        new AssetsPlugin({
            path: config.build.assetsRoot,
            filename: utils.assetsSubPath('vendors/vendors-assets.json')
        })

    ]

};
