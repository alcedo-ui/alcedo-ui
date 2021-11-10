/**
 * @file prod.js
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

const webpack = require('webpack');

const webpackConfig = require('./webpack.config.prod.js');

console.log('WAIT', 'Building Production...');

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

    console.log('DONE', 'Build Complete');

});
