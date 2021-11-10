/**
 * @file utils.js
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

const fs = require('fs');
const path = require('path');

const config = require('./config.js');

/**
 * @param dir
 * @returns {string}
 */
function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

/**
 * @param p
 * @returns {string}
 */
function assetsPath(p) {
    return path.posix.join(config.assetsDirectory, p);
}

/**
 * @param p
 * @returns {string}
 */
function assetsSubPath(p) {
    return path.posix.join(config.assetsSubDirectory, p);
}

/**
 * @param p
 * @returns {string}
 */
function assetsVendorsAbsolutePath(p) {
    return path.posix.join(config.build.assetsRoot, exports.assetsSubPath(`vendors/${p}`));
}

/**
 * @param p
 * @returns {boolean}
 */
function fsExistsSync(p) {
    try {
        fs.accessSync(p, (fs.constants && fs.constants.F_OK) || fs.F_OK);
    } catch (e) {
        return false;
    }
    return true;
}

/**
 * @param src
 * @param dist
 * @param excludes
 */
function copyRecursionSync(src, dist, excludes) {

    const paths = fs.readdirSync(src);

    for (let p of paths) {

        if (excludes && excludes.findIndex(item => p.includes(item)) > -1) {
            continue;
        }

        const srcPath = src + '/' + p,
            distPath = dist + '/' + p,

            stat = fs.statSync(srcPath);

        if (stat.isDirectory()) {

            if (!fsExistsSync(distPath)) {
                fs.mkdirSync(distPath);
            }

            copyRecursionSync(srcPath, distPath, excludes);

        } else {
            fs.copyFileSync(srcPath, distPath);
        }

    }

}

/**
 * @param p
 */
function rmRecursionSync(p) {

    const paths = fs.readdirSync(p);

    for (let path of paths) {

        const rmPath = p + '/' + path,
            stat = fs.statSync(rmPath);

        if (stat.isDirectory()) {
            rmRecursionSync(rmPath);
            if (fsExistsSync(rmPath)) {
                fs.rmdirSync(rmPath);
            }
        } else {
            if (fsExistsSync(rmPath)) {
                fs.unlinkSync(rmPath);
            }
        }

    }

    if (fsExistsSync(p)) {
        fs.rmdirSync(p);
    }

}

exports.resolve = resolve;
exports.assetsPath = assetsPath;
exports.assetsSubPath = assetsSubPath;
exports.assetsVendorsAbsolutePath = assetsVendorsAbsolutePath;
exports.fsExistsSync = fsExistsSync;
exports.copyRecursionSync = copyRecursionSync;
exports.rmRecursionSync = rmRecursionSync;
