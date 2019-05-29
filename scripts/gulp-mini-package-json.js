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
                        'react-dom': data.dependencies['react-dom']
                    },
                    dependencies: {
                        '@babel/runtime': data.devDependencies['@babel/runtime'],
                        'classnames': data.dependencies['classnames'],
                        'lodash': data.dependencies['lodash'],
                        'moment': data.dependencies['moment'],
                        'react-dnd': data.dependencies['react-dnd'],
                        'react-dnd-html5-backend': data.dependencies['react-dnd-html5-backend'],
                        'react-beautiful-dnd': data.dependencies['react-beautiful-dnd'],
                        'react-transition-group': data.dependencies['react-transition-group']
                    }
                };

            chunk.contents = Buffer.from(JSON.stringify(miniData, null, 2));

            this.push(chunk);

        } catch (err) {
            this.emit('error', err);
        }

        callback();

    });
};
