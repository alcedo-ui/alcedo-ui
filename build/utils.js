const path = require('path'),
    config = require('../config');

exports.assetsSubPath = _path => {
    return path.posix.join(config.assetsSubDirectory, _path);
};