const path = require('path'),

    config = require('./config.js');

exports.assetsPath = _path => {
    return path.posix.join(config.assetsDirectory, _path);
};

exports.assetsSubPath = _path => {
    return path.posix.join(config.assetsSubDirectory, _path);
};

exports.assetsVendorsAbsolutePath = _path => {
    return path.posix.join(config.build.assetsRoot, exports.assetsSubPath(`vendors/${_path}`));
};