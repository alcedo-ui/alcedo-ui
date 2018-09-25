const express = require('express'),
    path = require('path'),
    compression = require('compression'),

    app = express(),
    port = '3000',
    uri = 'http://localhost:' + port;


app
.use(compression())
.use(express.static(path.join(__dirname, 'dist'), {
    setHeaders: (res, path) => {
        res.setHeader('Cache-Control', path.endsWith('index.html') ?
            'no-cache, no-store, no_store, max-age=0, must-revalidate' : 'max-age=2592000'
        );
    }
}))
.listen(port, err => {

    if (err) {
        console.log(err);
        return;
    }

    console.log('> Listening at ' + uri);

});