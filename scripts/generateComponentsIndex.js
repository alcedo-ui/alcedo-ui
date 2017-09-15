'use strict';

var os = require('os'),
    fs = require('fs'),
    path = require('path');

function isDirectory(path) {
    try {
        return fs.lstatSync(path).isDirectory();
    } catch (e) {
        return false;
    }
}

fs.readdir('./src', function (err, files) {

    if (err) {
        console.log('read src error');
    } else {

        try {

            let indexArray = [],
                totalCount = 0;

            files.forEach(function (item) {
                if (item.slice(0, 1) !== '_' && isDirectory('./src/' + item)) {
                    indexArray.push('export ' + item + ' from \'./' + item + '\';');
                    totalCount++;
                }
            });
            indexArray.push('', 'export const COMPONENTS_TOTAL_COUNT = ' + totalCount + ';');

            fs.writeFile(path.join(__dirname, '../src/index.js'), indexArray.join(os.EOL), function (error) {
                if (error) {
                    throw error;
                }
                console.log('Generate Components Index Successfully!\n');
            });

        } catch (e) {
            console.error(e);
        }

    }

});