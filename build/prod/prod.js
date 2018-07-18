const chalk = require('chalk'),
    webpack = require('webpack'),

    webpackConfig = require('./webpack.config.prod.js');

console.log(chalk.cyan('Building For Production...\n'));

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

    console.log(chalk.cyan('Build Complete.'));

});