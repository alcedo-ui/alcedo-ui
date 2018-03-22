delete process.env['DEBUG_FD'];

process.env.NODE_ENV = '"production"';

const express = require('express'),
    history = require('connect-history-api-fallback'),
    opn = require('opn'),
    compression = require('compression'),

    app = express(),
    config = require('../config'),
    port = config.demo.port,
    uri = 'http://localhost:' + port;

app.use(compression());

app.use(history());

app.use(express.static(config.build.assetsRoot));

app.listen(port, err => {

    if (err) {
        return console.log(err);
    }

    console.log('> Listening at ' + uri);

    opn(uri);

});