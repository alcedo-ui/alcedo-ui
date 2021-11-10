/**
 * @file dev-server.js
 */

// const os = require('os');
// const chokidar = require('chokidar');
const open = require('open');
const webpack = require('webpack');
const express = require('express');

const config = require('../config.js');
const webpackConfig = require('./webpack.config.dev.js');

const uri = 'http://localhost:' + config.dev.port;
const compiler = webpack(webpackConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath
});
const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: false
});
const app = express();

// os.platform() !== 'win32' && chokidar.watch('.');

compiler.hooks.compilation.tap('html-webpack-plugin-after-emit', () =>
    hotMiddleware.publish({action: 'reload'})
);

app.use(devMiddleware)
   .use(hotMiddleware)
   .use(config.dev.assetsVirtualRoot, express.static('./static'));

devMiddleware.waitUntilValid(() =>
    console.log('DONE', `Listening At ${uri}`)
);

module.exports = app.listen(config.dev.port, err => {

    if (err) {
        console.log('ERROR', `${err}`);
        return;
    }

    open(uri);

});
