const ora = require('ora'),
    chalk = require('chalk'),
    webpack = require('webpack'),

    webpackConfig = require('./webpack.config.dll.js'),

    spinner = ora('Building DLL...');

spinner.start();

webpack(webpackConfig, (err, stats) => {

    spinner.stop();

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

    console.log(chalk.cyan('Build DLL Complete.'));

});