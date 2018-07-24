const path = require('path'),

    config = require('./config.js');

exports.assetsPath = p => {
    return path.posix.join(config.assetsDirectory, p);
};

exports.assetsSubPath = p => {
    return path.posix.join(config.assetsSubDirectory, p);
};

exports.assetsVendorsAbsolutePath = p => {
    return path.posix.join(config.build.assetsRoot, exports.assetsSubPath(`vendors/${p}`));
};