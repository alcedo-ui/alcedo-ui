/**
 * @file webpack.config.dll.js
 */

const {IgnorePlugin, DllPlugin} = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');

const config = require('../config.js');
const utils = require('../utils.js');

const library = '[name]_lib';

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

        new IgnorePlugin({
            contextRegExp: /^\.\/locale$/,
            resourceRegExp: /moment$/
        }),

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
