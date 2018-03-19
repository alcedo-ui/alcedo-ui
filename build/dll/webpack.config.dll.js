const webpack = require('webpack'),
    AssetsPlugin = require('assets-webpack-plugin'),
    CompressionPlugin = require('compression-webpack-plugin'),

    utils = require('../utils'),
    config = require('../../config'),

    library = '[name]_lib';

module.exports = {

    mode: 'production',

    entry: {
        polyfill: ['babel-polyfill'],
        react: ['prop-types', 'react', 'react-dom', 'react-redux', 'react-router', 'react-router-config', 'react-router-dom',
            'react-router-redux', 'redux', 'redux-thunk']
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
            path: utils.assetsVendorsAbsolutePath('[name]-manifest.json'),
            name: library
        }),

        new AssetsPlugin({
            path: config.build.assetsRoot,
            filename: utils.assetsSubPath('vendors/vendors-assets.json')
        }),

        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(' + config.productionGzipExtensions.join('|') + ')$'),
            threshold: 10240,
            minRatio: 0.8
        })

    ]

};