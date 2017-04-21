delete process.env['DEBUG_FD'];

var config = require('../../config');
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);
}

var opn = require('opn'),
    path = require('path'),
    webpack = require('webpack'),
    history = require('connect-history-api-fallback'),

    port = process.env.PORT || config.dev.port,
    uri = 'http://localhost:' + port,

    express = require('express'),
    app = express(),

    webpackConfig = require('./webpack.config.dev.js'),
    compiler = webpack(webpackConfig),

    devMiddleware = require('webpack-dev-middleware')(compiler, {
        publicPath: webpackConfig.output.publicPath,
        quiet: true
    }),

    hotMiddleware = require('webpack-hot-middleware')(compiler, {
        log: () => {
        }
    });

compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({action: 'reload'});
        cb();
    });
});


app.use(devMiddleware);
app.use(hotMiddleware);

app.use(config.dev.assetsVirtualRoot, express.static('./static'));

devMiddleware.waitUntilValid(function () {
    console.log('> Listening at ' + uri + '\n');
});

module.exports = app.listen(port, function (err) {

    if (err) {
        console.log(err);
        return;
    }

    if (!!config.dev.autoOpenBrowser) {
        opn(uri);
    }

});