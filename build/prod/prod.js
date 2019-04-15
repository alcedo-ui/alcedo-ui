const webpack = require('webpack'),
    log = require('friendly-errors-webpack-plugin/src/output'),

    webpackConfig = require('./webpack.config.prod.js');

log.title('info', 'WAIT', 'Building Production...');

webpack(webpackConfig, (err, stats) => {

    if (err) {
        throw err;
    }

    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n');

    log.title('success', 'DONE', 'Build Complete');

});
