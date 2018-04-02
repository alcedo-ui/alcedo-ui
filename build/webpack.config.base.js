const path = require('path'),
    autoprefixer = require('autoprefixer'),

    config = require('./config.js'),
    utils = require('./utils.js'),

    cssLoaderConfig = ['style-loader', {
        loader: 'css-loader',
        options: {
            minimize: true,
            importLoaders: 1
        }
    }, {
        loader: 'postcss-loader',
        options: {
            ident: 'postcss',
            plugins: [
                autoprefixer({
                    broswer: 'last 5 versions'
                })
            ]
        }
    }];

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    entry: {
        app: './examples/index.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: config.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            'src': resolve('src'),
            'examples': resolve('examples'),
            'assets': resolve('examples/assets'),
            'sass': resolve('examples/assets/sass'),
            'stylesheets': resolve('examples/assets/stylesheets'),
            'components': resolve('examples/components'),
            'containers': resolve('examples/containers'),
            'modules': resolve('examples/containers/app/modules'),
            'dist': resolve('dist'),
            'vendors': resolve('examples/vendors'),
            'reduxes': resolve('examples/reduxes'),
            'docs': resolve('docs')
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: [resolve('examples'), resolve('src')]
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 1000,
                name: utils.assetsSubPath('img/[name].[hash:7].[ext]')
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 1000,
                name: utils.assetsSubPath('fonts/[name].[hash:7].[ext]')
            }
        }, {
            test: /\.scss$/,
            use: [...cssLoaderConfig, 'sass-loader']
        }, {
            test: /\.css$/,
            use: cssLoaderConfig
        }, {
            test: /\.ht?ml/,
            loader: 'html-loader'
        }]
    }
};