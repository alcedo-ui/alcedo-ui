const path = require('path'),
    webpack = require('webpack'),
    {merge} = require('webpack-merge'),
    CopyPlugin = require('copy-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin'),
    // BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,

    config = require('../config.js'),
    baseWebpackConfig = require('../webpack.config.base.js'),
    utils = require('../utils.js'),
    vendorsAssets = require(utils.assetsVendorsAbsolutePath('vendors-assets.json')),

    env = process.env.NODE_ENV;

module.exports = merge(baseWebpackConfig, {

    mode: 'production',

    devtool: config.build.productionSourceMap ? 'source-map' : false,

    output: {
        publicPath: './',
        path: config.build.assetsRoot,
        filename: utils.assetsSubPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsSubPath('js/[id].[chunkhash].js')
    },

    optimization: {
        runtimeChunk: {
            name: 'runtime'
        },
        splitChunks: {
            cacheGroups: {
                nodeModules: {
                    name: 'nodeModules',
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all'
                }
            }
        }
    },

    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `'${env}'`
            }
        }),

        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, '../../static'),
                to: config.assetsSubDirectory
            }]
        }),

        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(utils.assetsVendorsAbsolutePath('polyfill-manifest.json'))
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(utils.assetsVendorsAbsolutePath('moment-manifest.json'))
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(utils.assetsVendorsAbsolutePath('react-manifest.json'))
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(utils.assetsVendorsAbsolutePath('tools-manifest.json'))
        }),

        new HtmlWebpackPlugin({
            filename: config.build.index,
            template: './examples/index.html',
            favicon: './examples/assets/images/favicon.ico',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),

        new HtmlWebpackTagsPlugin({
            tags: [
                vendorsAssets['polyfill'].js,
                vendorsAssets['moment'].js,
                vendorsAssets['react'].js,
                vendorsAssets['tools'].js
            ],
            append: false
        })

        // new BundleAnalyzerPlugin()

    ]

});
