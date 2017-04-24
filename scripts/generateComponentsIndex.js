'use strict';

var fs = require('fs'),
    path = require('path');

fs.readdir('./src', function (err, files) {

    if (err) {
        console.log('read src error');
    } else {

        try {

            let indexArray = [];

            files.forEach(function (item) {

                if (item.slice(0, 1) !== '_') {
                    indexArray.push('export ' + item + ' from \'./' + item + '\';');
                }

            });

            fs.writeFile(path.join(__dirname, '../src/index.js'), indexArray.join('\n'), function (error) {
                if (error) {
                    throw error;
                }
                console.log('Generate Components Index Successfully!');
            });

        } catch (e) {
            console.error(e);
        }

    }

});