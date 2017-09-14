'use strict';

var os = require('os'),
    fs = require('fs'),
    path = require('path');

function fsExistsSync(path) {
    try {
        fs.accessSync(path, fs.constants.F_OK);
    } catch (e) {
        return false;
    }
    return true;
}

fs.readdir('./src', function (err, files) {

    if (err) {
        console.log('read src error');
    } else {

        try {

            let indexArray = [];

            files.forEach(function (item) {

                var name = item;
                if (name.slice(0, 1) === '_') {
                    name = name.slice(1);
                }

                if (fsExistsSync('./src/' + item + '/' + name + '.scss')) {
                    indexArray.push('@import \'./' + item + '/' + name + '.scss\';');
                }

            });

            fs.writeFile(path.join(__dirname, '../src/components.scss'), indexArray.join(os.EOL), function (error) {
                if (error) {
                    throw error;
                }
                console.log('Generate Components Style Index Successfully!\n');
            });

        } catch (e) {
            console.error(e);
        }

    }

});