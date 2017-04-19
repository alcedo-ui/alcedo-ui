'use strict';

var gutil = require('gulp-util'),
    through = require('through2');

module.exports = function () {
    return through.obj(function (chunk, encoding, callback) {

        if (chunk.isNull()) {
            callback(null, chunk);
            return;
        }

        if (chunk.isStream()) {
            cb(new gutil.PluginError('miniPackageJson', 'Streaming not supported'));
            return;
        }

        try {

            var data = JSON.parse(chunk.contents.toString());

            let dependencies = data.dependencies;
            delete dependencies['react-redux'];
            delete dependencies['react-router'];
            delete dependencies['react-router-redux'];
            delete dependencies['redux'];
            delete dependencies['redux-thunk'];

            var miniData = {
                name: 'alcedo-ui',
                author: data.author,
                version: data.version,
                description: data.description,
                main: './index.js',
                keywords: data.keywords,
                repository: data.repository,
                license: data.license,
                homepage: data.homepage,
                dependencies: dependencies
            };

            chunk.contents = new Buffer(JSON.stringify(miniData, null, 2));

            this.push(chunk);

        } catch (err) {
            this.emit('error', err);
        }

        callback();

    });
};
