const path = require('path'),
    config = require('../config'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.assetsPath = _path => {

    const assetsSubDirectory = process.env.NODE_ENV === 'production' ?
        config.build.assetsSubDirectory
        :
        config.dev.assetsSubDirectory;

    return path.posix.join(assetsSubDirectory, _path);

};

exports.cssLoaders = options => {

    options = options || {};

    const cssLoader = {
        loader: 'css-loader',
        options: {
            minimize: process.env.NODE_ENV === 'production',
            sourceMap: options.sourceMap
        }
    };

    function generateLoaders(loader, loaderOptions) {

        const loaders = [cssLoader];

        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap
                })
            });
        }

        if (options.extract) {
            return {
                use: loaders,
                fallback: 'style-loader',
                publicPath: '../../'
            };
        }

        return ['style-loader'].concat(loaders);

    }

    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        scss: generateLoaders('sass')
    };

};

exports.styleLoaders = options => {

    const output = [],
        loaders = exports.cssLoaders(options);

    for (let extension in loaders) {
        const loader = loaders[extension];
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader
        });
    }

    return output;

};