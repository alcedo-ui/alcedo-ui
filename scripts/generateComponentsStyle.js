'use strict';

const os = require('os'),
    fs = require('fs'),
    path = require('path');

function fsExistsSync(path) {
    try {
        fs.accessSync(path, (fs.constants && fs.constants.F_OK) || fs.F_OK);
    } catch (e) {
        return false;
    }
    return true;
}

fs.readdir('./src', (err, files) => {

    if (err) {
        console.log('read src error');
    } else {

        try {

            let indexArray = [];

            files.forEach(item => {

                let name = item;
                if (name.slice(0, 1) === '_') {
                    name = name.slice(1);
                }

                if (fsExistsSync('./src/' + item + '/' + name + '.scss')) {
                    indexArray.push('@import \'./' + item + '/' + name + '.scss\';');
                }

            });

            fs.writeFile(path.join(__dirname, '../src/components.scss'), indexArray.join(os.EOL), error => {
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