'use strict';

var fs = require('fs');

fs.readdir('./src', function (err, files) {

    if (err) {
        console.log('read src error');
    } else {

        let indexArray = [];

        files.forEach(function (item) {

            if (item.slice(0, 1) !== '_') {
                indexArray.push();
            }

        });
    }

});