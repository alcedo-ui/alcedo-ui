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
            callback(new gutil.PluginError('gulp-mini-package-json', 'Streaming not supported'));
            return;
        }

        try {

            var data = JSON.parse(chunk.contents.toString());

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
                peerDependencies: {
                    'lodash': data.dependencies['lodash'],
                    'moment': data.dependencies['moment'],
                    'react': data.dependencies['react'],
                    'prop-types': data.dependencies['prop-types'],
                    'react-addons-transition-group': data.dependencies['react-addons-transition-group'],
                    'react-dom': data.dependencies['react-dom'],
                    'react-dnd': data.dependencies['react-dnd'],
                    'react-dnd-html5-backend': data.dependencies['react-dnd-html5-backend']
                }
            };

            chunk.contents = new Buffer(JSON.stringify(miniData, null, 2));

            this.push(chunk);

        } catch (err) {
            this.emit('error', err);
        }

        callback();

    });
};
