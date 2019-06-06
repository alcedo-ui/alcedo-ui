'use strict';

const os = require('os'),
    fs = require('fs'),
    path = require('path'),
    log = require('friendly-errors-webpack-plugin/src/output');

function isDirectory(path) {
    try {
        return fs.lstatSync(path).isDirectory();
    } catch (e) {
        return false;
    }
}

log.title('info', 'WAIT', 'Generating Components Index...');

fs.readdir('./src', (err, files) => {

    if (err) {
        log.title('error', 'ERROR', 'read src error');
    } else {

        try {

            let indexArray = [],
                totalCount = 0;

            files.forEach(item => {
                if (item.slice(0, 1) !== '_' && isDirectory(`./src/${item}`)) {
                    indexArray.push(`export ${item} from \'./${item}\';`);
                    totalCount++;
                }
            });
            indexArray.push('', `export const COMPONENTS_TOTAL_COUNT = ${totalCount - 1};`);

            fs.writeFile(path.join(__dirname, '../src/index.js'), indexArray.join(os.EOL), error => {
                if (error) {
                    throw error;
                }
                log.title('success', 'DONE', 'Generate Components Index Successfully!');
            });

        } catch (e) {
            log.title('error', 'ERROR', e);
        }

    }

});
