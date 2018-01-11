/**
 * @file Color vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import Valid from './Valid';

function _getBaseRGB(perCent) {

    const data = [[255, 0, 0], [255, 255, 0], [0, 255, 0], [0, 255, 255], [0, 0, 255], [255, 0, 255]];

    if (!Valid.isPerCent(perCent)) {
        return data[0];
    }

    return data[Math.floor(perCent * 6)];

}

function perCent2RGB(perCent) {

    if (!Valid.isPerCent(perCent)) {
        return;
    }

    const int = Math.floor(perCent * 6),
        offset = Math.round((perCent * 6 - int) * 255),
        baseRGB = _getBaseRGB(perCent);

    baseRGB[((int + 2) % 3 * 2) % 3] += offset * (Valid.isOdd(int) ? -1 : 1);

    return baseRGB;

}

export default {
    perCent2RGB
};