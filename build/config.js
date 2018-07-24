const path = require('path');

module.exports = {

    assetsPublicPath: '/',
    assetsDirectory: 'docs',
    assetsSubDirectory: 'static',
    productionGzipExtensions: ['js', 'css'],

    dev: {
        port: 3001,
        srcRoot: path.resolve(__dirname, '../examples'),
        index: path.resolve(__dirname, '../examples/index.html'),
        assetsVirtualRoot: path.posix.join('/', 'static'),
        proxyTable: {},
        cssSourceMap: false
    },

    build: {
        index: path.resolve(__dirname, '../docs/index.html'),
        assetsRoot: path.resolve(__dirname, '../docs'),
        productionSourceMap: false
    },

    demo: {
        port: 3002
    }

};