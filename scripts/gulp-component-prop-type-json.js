'use strict';

const gutil = require('gulp-util'),
    through = require('through2'),
    path = require('path'),
    generateComponentPropTypeJson = require('./generateComponentPropTypeJson');

module.exports = () => {
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

            const componentName = path.parse(chunk.path).name,
                fileString = chunk.contents.toString();

            chunk.contents = Buffer.from(generateComponentPropTypeJson(componentName, fileString));

            this.push(chunk);

        } catch (err) {
            this.emit('error', err);
        }

        callback();

    });
};
