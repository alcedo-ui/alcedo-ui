/**
 * @file server.js
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

const path = require('path'),
    express = require('express'),
    history = require('connect-history-api-fallback'),
    log = require('friendly-errors-webpack-plugin/src/output'),

    port = process.env.port || 3000,

    app = express();

app.use(history())
   .use(express.static(path.join(__dirname, 'dist'), {
       setHeaders: (res, p) => {
           res.setHeader('Cache-Control', p.endsWith('index.html') ?
               'no-cache, no-store, no_store, max-age=0, must-revalidate' : 'max-age=315360000'
           );
       }
   }))
   .listen(port, err => {

       if (err) {
           log.title('error', 'ERROR', `${err}`);
           return;
       }

       log.title('success', 'DONE', `Listening At ${port}`);

   });
