var utils = require('./utils');
var webpack = require('webpack');
var config = require('./config');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./webpack.config.base.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = ['./server/dev-client'].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {

    module: {
        rules: utils.styleLoaders({sourceMap: config.cssSourceMap})
    },

    devtool: '#cheap-module-eval-source-map',

    plugins: [

        new webpack.DefinePlugin({
            'process.env': config.env
        }),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.NoEmitOnErrorsPlugin(),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './examples/index.html',
            inject: true
        }),

        new FriendlyErrorsPlugin()
    ]

});