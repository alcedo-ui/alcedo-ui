var utils = require('./../utils');
var webpack = require('webpack');
var config = require('../../config/index');
var merge = require('webpack-merge');
var baseWebpackConfig = require('./../webpack.config.base.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

Object.keys(baseWebpackConfig.entry).forEach(name => {
    baseWebpackConfig.entry[name] = ['./build/dev/dev-client'].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {

    module: {
        rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap})
    },

    devtool: '#cheap-module-eval-source-map',

    plugins: [

        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.NoEmitOnErrorsPlugin(),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './examples/index.html',
            favicon: './examples/assets/images/favicon.ico',
            inject: true
        }),

        new FriendlyErrorsPlugin()

    ]

});