const path = require('path'),
    utils = require('./../utils'),
    webpack = require('webpack'),
    config = require('../../config/index'),
    merge = require('webpack-merge'),
    baseWebpackConfig = require('./../webpack.config.base.js'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    // OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin'),
    // UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
    CompressionWebpackPlugin = require('compression-webpack-plugin'),

    env = config.build.env;

module.exports = merge(baseWebpackConfig, {

    mode: 'production',

    module: {
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true
        })
    },

    devtool: config.build.productionSourceMap ? '#source-map' : false,

    output: {
        publicPath: './',
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    },

    // optimization: {
    //     // runtimeChunk: {
    //     //     name: 'manifest'
    //     // },
    //     splitChunks: {
    //         chunks: 'all'
    //         // minSize: 30000,
    //         // minChunks: 1,
    //         // maxAsyncRequests: 5,
    //         // maxInitialRequests: 3,
    //         // name: true,
    //         // cacheGroups: {
    //         //     default: {
    //         //         minChunks: 2,
    //         //         priority: -20,
    //         //         reuseExistingChunk: true
    //         //     },
    //         //     vendors: {
    //         //         test: /[\\/]node_modules[\\/]/,
    //         //         priority: -10
    //         //     }
    //         // }
    //     }
    // },

    plugins: [

        new webpack.DefinePlugin({
            'process.env': env
        }),

        // new UglifyJSPlugin(),

        new ExtractTextPlugin({
            allChunks: true,
            filename: utils.assetsPath('css/[name].[contenthash].css')
        }),

        // new OptimizeCSSPlugin(),

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

        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     minChunks: module => module.resource && /\.js$/.test(module.resource)
        //         && module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
        // }),

        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'manifest',
        //     chunks: ['vendor']
        // }),

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