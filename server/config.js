var path = require('path');

module.exports = {
    env: '"development"',
    port: 3000,
    autoOpenBrowser: true,
    srcRoot: path.resolve(__dirname, '../examples'),
    index: path.resolve(__dirname, '../examples/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    assetsVirtualRoot: path.posix.join('/', 'static'),
    cssSourceMap: false
};