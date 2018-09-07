const opn = require('opn'),
    webpack = require('webpack'),
    express = require('express'),
    log = require('friendly-errors-webpack-plugin/src/output'),

    config = require('../config.js'),
    webpackConfig = require('./webpack.config.dev.js'),

    uri = 'http://localhost:' + config.dev.port,
    compiler = webpack(webpackConfig),

    devMiddleware = require('webpack-dev-middleware')(compiler, {
        publicPath: webpackConfig.output.publicPath,
        logLevel: 'error'
    }),
    hotMiddleware = require('webpack-hot-middleware')(compiler, {
        log: false
    }),
    app = express();

compiler.hooks.compilation.tap('html-webpack-plugin-after-emit', () => {
    hotMiddleware.publish({action: 'reload'});
});

app
.use(devMiddleware)
.use(hotMiddleware)
.use(config.dev.assetsVirtualRoot, express.static('./static'));

devMiddleware.waitUntilValid(() => {
    log.title('success', 'DONE', `Listening At ${uri} `);
});

module.exports = app.listen(config.dev.port, err => {

    if (err) {
        log.title('error', 'ERROR', `${err} `);
        return;
    }

    opn(uri);

});