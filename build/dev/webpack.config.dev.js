const utils = require('./../utils'),
    webpack = require('webpack'),
    config = require('../../config/index'),
    merge = require('webpack-merge'),
    baseWebpackConfig = require('./../webpack.config.base.js'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

Object.keys(baseWebpackConfig.entry).forEach(name => {
    baseWebpackConfig.entry[name] = ['./build/dev/dev-client'].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {

    mode: 'development',

    // module: {
    //     rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap})
    // },

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