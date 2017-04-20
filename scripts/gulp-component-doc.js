'use strict';

var gutil = require('gulp-util'),
    through = require('through2'),
    path = require('path'),
    generateDocJson = require('./generateDocJson');

module.exports = function () {
    return through.obj(function (chunk, encoding, callback) {

        if (chunk.isNull()) {
            callback(null, chunk);
            return;
        }

        if (chunk.isStream()) {
            callback(new gutil.PluginError('gulp-component-doc', 'Streaming not supported'));
            return;
        }

        try {

            var componentName = path.parse(chunk.path).name,
                fileString = chunk.contents.toString();

            chunk.contents = new Buffer(generateDocJson(componentName, fileString));

            this.push(chunk);

        } catch (err) {
            this.emit('error', err);
        }

        callback();

    });
};
