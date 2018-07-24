const express = require('express'),
    history = require('connect-history-api-fallback'),
    opn = require('opn'),
    compression = require('compression'),

    config = require('../config.js'),

    app = express(),
    uri = 'http://localhost:' + config.demo.port;

app
.use(compression())
.use(history())
.use(express.static(config.build.assetsRoot, {
    setHeaders: (res, path) => {
        res.setHeader('Cache-Control', path.endsWith('index.html') ?
            'no-cache, no-store, no_store, max-age=0, must-revalidate' : 'max-age=315360000'
        );
    }
}))
.listen(config.demo.port, err => {

    if (err) {
        return console.log(err);
    }

    console.log('> Listening at ' + uri);

    opn(uri);

});