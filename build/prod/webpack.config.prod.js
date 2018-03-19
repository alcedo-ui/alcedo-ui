const path = require('path'),
    webpack = require('webpack'),
    merge = require('webpack-merge'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CompressionWebpackPlugin = require('compression-webpack-plugin'),

    config = require('../../config'),
    baseWebpackConfig = require('./../webpack.config.base'),
    utils = require('./../utils'),

    env = config.build.env;

module.exports = merge(baseWebpackConfig, {

    mode: 'production',

    devtool: config.build.productionSourceMap ? '#source-map' : false,

    output: {
        publicPath: './',
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    },

    optimization: {
        runtimeChunk: {
            name: 'manifest'
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },

    plugins: [

        new webpack.DefinePlugin({
            'process.env': env
        }),

        new HtmlWebpackPlugin({
            filename: config.build.index,
            template: './examples/index.html',
            favicon: './examples/assets/images/favicon.ico',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            chunksSortMode: 'dependency'
        }),

        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../../static'),
            to: config.build.assetsSubDirectory,
            ignore: ['.*']
        }]),

        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(' + config.productionGzipExtensions.join('|') + ')$'),
            threshold: 10240,
            minRatio: 0.8
        })

    ]

});