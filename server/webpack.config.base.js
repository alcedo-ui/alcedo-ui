var path = require('path');
var utils = require('./utils');
var config = require('./config');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    entry: {
        app: './examples/index.js'
    },
    output: {
        path: config.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.assetsPublicPath
            : config.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            'src': resolve('examples'),
            'assets': resolve('examples/assets'),
            'sass': resolve('examples/assets/sass'),
            'stylesheets': resolve('examples/assets/stylesheets'),
            'containers': resolve('examples/containers'),
            'dist': resolve('dist'),
            'vendors': resolve('examples/vendors'),
            'reduxes': resolve('examples/reduxes')
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: resolve('examples')
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 1000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 1000,
                name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            }
        }]
    }
};