'use strict';

const gutil = require('gulp-util'),
    through = require('through2');

module.exports = () => {
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

            const data = JSON.parse(chunk.contents.toString()),

                miniData = {
                    name: 'alcedo-ui',
                    author: data.author,
                    version: data.version,
                    description: data.description,
                    keywords: data.keywords,
                    repository: data.repository,
                    license: data.license,
                    homepage: data.homepage,
                    peerDependencies: {
                        'prop-types': data.dependencies['prop-types'],
                        'react': data.dependencies['react'],
                        'react-addons-transition-group': data.dependencies['react-addons-transition-group'],
                        'react-transition-group': data.dependencies['react-transition-group'],
                        'react-dom': data.dependencies['react-dom']
                    },
                    dependencies: {
                        'classnames': data.dependencies['classnames'],
                        'lodash': data.dependencies['lodash'],
                        'moment': data.dependencies['moment'],
                        'react-dnd': data.dependencies['react-dnd'],
                        'react-dnd-html5-backend': data.dependencies['react-dnd-html5-backend'],
                        'react-dnd-scrollzone': data.dependencies['react-dnd-scrollzone'],
                        'react-beautiful-dnd': data.dependencies['react-beautiful-dnd']
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