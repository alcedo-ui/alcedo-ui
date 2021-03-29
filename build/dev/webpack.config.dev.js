/**
 * @file webpack.config.dev.js
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

const {DefinePlugin, HotModuleReplacementPlugin, NoEmitOnErrorsPlugin} = require('webpack'),
    {merge} = require('webpack-merge'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin'),

    baseWebpackConfig = require('../webpack.config.base.js'),

    env = process.env.NODE_ENV;

Object.keys(baseWebpackConfig.entry).forEach(name => {
    baseWebpackConfig.entry[name] = ['./build/dev/dev-client'].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {

    mode: 'development',

    devtool: 'eval-cheap-source-map',

    watchOptions: {
        ignored: ['node_modules'],
        aggregateTimeout: 300,
        poll: 1500
    },

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

        new FriendlyErrorsPlugin()

    ]

});
