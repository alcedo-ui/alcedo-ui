delete process.env['DEBUG_FD'];

process.env.NODE_ENV = 'development';

var config = require('./config'),
    opn = require('opn'),
    path = require('path'),
    webpack = require('webpack'),
    history = require('connect-history-api-fallback'),

    port = process.env.PORT || config.port,
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

// html 模板改变时刷新页面
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({action: 'reload'});
        cb();
    });
});

// browserHistory 前端路由重定向
app.use(history());

app.use(devMiddleware);
app.use(hotMiddleware);

// 托管静态文件
app.use(config.assetsVirtualRoot, express.static('./static'));

devMiddleware.waitUntilValid(function () {
    console.log('> Listening at ' + uri + '\n');
});

module.exports = app.listen(port, function (err) {

    if (err) {
        console.log(err);
        return;
    }

    if (!!config.autoOpenBrowser) {
        opn(uri);
    }

});