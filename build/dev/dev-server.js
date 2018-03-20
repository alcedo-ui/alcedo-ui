delete process.env['DEBUG_FD'];

const config = require('../../config');

process.env.NODE_ENV = config.dev.env.NODE_ENV;

const opn = require('opn'),
    webpack = require('webpack'),

    port = process.env.PORT || config.dev.port,
    uri = 'http://localhost:' + port,

    express = require('express'),
    app = express(),

    webpackConfig = require('./webpack.config.dev.js'),
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

module.exports = app.listen(port, err => {

    if (err) {
        return console.log(err);
    }

    opn(uri);

});