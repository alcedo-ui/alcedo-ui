const opn = require('opn'),
    webpack = require('webpack'),
    express = require('express'),

    config = require('../config.js'),
    webpackConfig = require('./webpack.config.dev.js'),

    uri = 'http://localhost:' + config.dev.port,
    app = express(),
    compiler = webpack(webpackConfig),

    devMiddleware = require('webpack-dev-middleware')(compiler, {
        publicPath: webpackConfig.output.publicPath,
        logLevel: 'error'
    }),
    hotMiddleware = require('webpack-hot-middleware')(compiler, {
        log: console.log
    });

compiler.plugin('compilation', compilation => {
    compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
        hotMiddleware.publish({action: 'reload'});
        cb();
    });
});

app.use(devMiddleware);
app.use(hotMiddleware);

app.use(config.dev.assetsVirtualRoot, express.static('./static'));

devMiddleware.waitUntilValid(() => {
    console.log('> Listening at ' + uri + '\n');
});

module.exports = app.listen(config.dev.port, err => {

    if (err) {
        return console.log(err);
    }

    opn(uri);

});