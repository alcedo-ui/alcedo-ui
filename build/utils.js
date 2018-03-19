const path = require('path'),
    config = require('../config');

exports.assetsPath = _path => {

    const assetsSubDirectory = process.env.NODE_ENV === 'production' ?
        config.build.assetsSubDirectory
        :
        config.dev.assetsSubDirectory;

    return path.posix.join(assetsSubDirectory, _path);

};