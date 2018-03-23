const express = require('express'),
    history = require('connect-history-api-fallback'),
    opn = require('opn'),
    compression = require('compression'),

    config = require('../config.js'),

    app = express(),
    uri = 'http://localhost:' + config.demo.port;

app.use(compression());

app.use(history());

app.use(express.static(config.build.assetsRoot));

app.listen(config.demo.port, err => {

    if (err) {
        return console.log(err);
    }

    console.log('> Listening at ' + uri);

    opn(uri);

});