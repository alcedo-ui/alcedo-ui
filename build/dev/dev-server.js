/**
 * @file dev-server.js
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

const os = require('os'),
    chokidar = require('chokidar'),
    open = require('open'),
    webpack = require('webpack'),
    express = require('express'),

    config = require('../config.js'),
    webpackConfig = require('./webpack.config.dev.js'),

    uri = 'http://localhost:' + config.dev.port,
    compiler = webpack(webpackConfig),

    devMiddleware = require('webpack-dev-middleware')(compiler, {
        publicPath: webpackConfig.output.publicPath
    }),
    hotMiddleware = require('webpack-hot-middleware')(compiler, {
        log: false
    }),
    app = express();

os.platform() !== 'win32' && chokidar.watch('.');

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
