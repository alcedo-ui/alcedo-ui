/**
 * @file webpack.config.dev.js
 */

const {DefinePlugin, HotModuleReplacementPlugin, NoEmitOnErrorsPlugin} = require('webpack');
const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const baseWebpackConfig = require('../webpack.config.base.js');

const env = process.env.NODE_ENV;

Object.keys(baseWebpackConfig.entry).forEach(name => {
    baseWebpackConfig.entry[name] = ['./build/dev/dev-client'].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {

    mode: 'development',

    devtool: 'eval-cheap-source-map',

    plugins: [

        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        }),

        new HotModuleReplacementPlugin(),

        new NoEmitOnErrorsPlugin(),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './examples/index.html',
            favicon: './examples/assets/images/favicon.ico',
            inject: true
        }),

        new ReactRefreshWebpackPlugin()

    ]

});
