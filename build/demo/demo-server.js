const express = require('express'),
    history = require('connect-history-api-fallback'),
    opn = require('opn'),
    compression = require('compression'),
    moment = require('moment'),

    config = require('../config.js'),

    app = express(),
    uri = 'http://localhost:' + config.demo.port;

app
.use(compression())
.use(history())
.use(express.static(config.build.assetsRoot, {
    setHeaders: res => {
        res.setHeader('Cache-Control', 'max-age=2592000');
        res.setHeader('Expires', `${moment().add(1, 'months').utc().format('ddd, DD MMM YYYY HH:mm:ss')} GTM`);
    }
}))
.listen(config.demo.port, err => {

    if (err) {
        return console.log(err);
    }

    console.log('> Listening at ' + uri);

    opn(uri);

});