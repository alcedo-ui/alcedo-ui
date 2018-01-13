delete process.env['DEBUG_FD'];

process.env.NODE_ENV = '"production"';

const ora = require('ora'),
    chalk = require('chalk'),
    rm = require('rimraf'),
    mkdirp = require('mkdirp'),
    webpack = require('webpack'),
    config = require('../../config/index'),
    webpackConfig = require('./webpack.config.prod.js'),
    spinner = ora('building for production...');

spinner.start();

mkdirp(config.build.assetsSubDirectory, err => {

    if (err) {
        throw err;
    }

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

        console.log(chalk.cyan('Build complete.'));

        rm(config.build.assetsSubDirectory, err => {
            if (err) {
                throw err;
            }
        });

    });

});