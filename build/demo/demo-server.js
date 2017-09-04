delete process.env['DEBUG_FD'];

process.env.NODE_ENV = '"production"';

var express = require('express'),
    history = require('connect-history-api-fallback'),
    opn = require('opn'),
    compression = require('compression'),

    app = express(),
    config = require('../../config'),
    port = config.demo.port,
    uri = 'http://localhost:' + port;

app.use(compression());

app.use(history());

app.use(express.static(config.build.assetsRoot));

app.listen(port, function (err) {

    if (err) {
        console.log(err);
        return;
    }

    console.log('> Listening at ' + uri);

    opn(uri);

});