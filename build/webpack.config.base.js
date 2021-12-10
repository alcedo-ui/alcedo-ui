/**
 * @file webpack.config.base.js
 */

const HappyPack = require('happypack');

const config = require('./config.js');
const {resolve, assetsSubPath} = require('./utils.js');

const cssLoaderConfig = ['style-loader', {
    loader: 'css-loader',
    options: {
        importLoaders: 1
    }
}, {
    loader: 'postcss-loader',
    options: {
        postcssOptions: {
            plugins: [
                'postcss-preset-env'
            ]
        }
    }
}];

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
            'scss': resolve('examples/assets/scss'),
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
            use: 'happypack/loader?id=js',
            include: [resolve('examples'), resolve('src')]
        }, {
            test: /\.(png|jpe?g|gif|svg|cur|ico)(\?.*)?$/,
            type: 'asset/resource',
            generator: {
                filename: 'img/[name]-[contenthash:8][ext]'
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            type: 'asset/resource',
            generator: {
                filename: 'font/[name]-[contenthash:8][ext]'
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
    },

    plugins: [
        new HappyPack({
            id: 'js',
            loaders: [{
                loader: 'babel-loader?cacheDirectory=true'
            }],
            threads: 4,
            verbose: false
        })
    ]

};
