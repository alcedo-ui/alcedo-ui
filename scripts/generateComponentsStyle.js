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

console.log('WAIT', 'Generating Components Style Index...');

fs.readdir('./src', (err, files) => {

    if (err) {
        console.log('ERROR', 'read src error');
    } else {

        try {

            let indexArray = [];

            files.forEach(item => {

                let name = item;
                if (name.slice(0, 1) === '_') {
                    name = name.slice(1);
                }

                if (fsExistsSync(`./src/${item}/${name}.scss`)) {
                    indexArray.push(`@import \'./${item}/${name}.scss\';`);
                }

            });

            fs.writeFile(path.join(__dirname, '../src/components.scss'), indexArray.join(os.EOL), error => {
                if (error) {
                    throw error;
                }
                console.log('DONE', 'Generate Components Style Index Successfully!');
            });

        } catch (e) {
            console.log('ERROR', e);
        }

    }

});
