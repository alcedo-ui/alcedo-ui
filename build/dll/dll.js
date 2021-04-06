/**
 * @file dll.js
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

const webpack = require('webpack'),

    webpackConfig = require('./webpack.config.dll.js');

console.log('WAIT', 'Building DLL...');

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

    console.log('DONE', 'Build DLL Complete');

});
