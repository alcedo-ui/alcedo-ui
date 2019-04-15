const webpack = require('webpack'),
    log = require('friendly-errors-webpack-plugin/src/output'),

    webpackConfig = require('./webpack.config.dll.js');

log.title('info', 'WAIT', 'Building DLL...');

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

    log.title('success', 'DONE', 'Build DLL Complete');

});
