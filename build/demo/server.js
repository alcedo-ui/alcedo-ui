/**
 * @file server.js
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

const express = require('express'),
    history = require('connect-history-api-fallback'),
    open = require('open'),

    config = require('../config.js'),

    app = express(),
    uri = 'http://localhost:' + config.demo.port;

app.use(history())
   .use(express.static(config.build.assetsRoot, {
       setHeaders: (res, path) => {
           res.setHeader('Cache-Control', path.endsWith('index.html') ?
               'no-cache, no-store, no_store, max-age=0, must-revalidate' : 'max-age=315360000'
           );
       }
   }))
   .listen(config.demo.port, err => {

       if (err) {
           console.log('ERROR', `${err}`);
           return;
       }

       console.log('DONE', `Listening At ${uri}`);

       open(uri);

   });
