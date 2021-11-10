/**
 * @file webpack.config.prod.js
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

const path = require('path');
const {DefinePlugin, DllReferencePlugin} = require('webpack');
const {merge} = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = require('../config.js');
const baseWebpackConfig = require('../webpack.config.base.js');
const utils = require('../utils.js');
const vendorsAssets = require(utils.assetsVendorsAbsolutePath('vendors-assets.json'));

const env = process.env.NODE_ENV;

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

        new DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(env)
        }),

        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, '../../static'),
                to: config.assetsSubDirectory
            }]
        }),

        new DllReferencePlugin({
            context: __dirname,
            manifest: require(utils.assetsVendorsAbsolutePath('polyfill-manifest.json'))
        }),
        new DllReferencePlugin({
            context: __dirname,
            manifest: require(utils.assetsVendorsAbsolutePath('moment-manifest.json'))
        }),
        new DllReferencePlugin({
            context: __dirname,
            manifest: require(utils.assetsVendorsAbsolutePath('react-manifest.json'))
        }),
        new DllReferencePlugin({
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
