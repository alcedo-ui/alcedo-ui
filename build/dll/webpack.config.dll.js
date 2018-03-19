const webpack = require('webpack'),
    CompressionWebpackPlugin = require('compression-webpack-plugin'),

    utils = require('../utils'),
    config = require('../../config'),

    library = '[name]_lib';

module.exports = {

    mode: 'production',

    entry: {
        vendors: ['react']
    },

    output: {
        publicPath: './',
        path: config.build.assetsRoot,
        filename: utils.assetsSubPath('vendors/[name].[chunkhash].js'),
        library
    },

    plugins: [

        new webpack.DllPlugin({
            context: __dirname,
            path: utils.assetsSubPath('vendors/[name]-manifest.json'),
            name: library
        }),

        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(' + config.productionGzipExtensions.join('|') + ')$'),
            threshold: 10240,
            minRatio: 0.8
        })

    ]

};