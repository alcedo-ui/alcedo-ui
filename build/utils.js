const path = require('path'),
    config = require('../config');

exports.assetsPath = _path => {
    return path.posix.join(config.assetsDirectory, _path);
};

exports.assetsSubPath = _path => {
    return path.posix.join(config.assetsSubDirectory, _path);
};