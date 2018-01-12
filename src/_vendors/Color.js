/**
 * @file Color vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import Valid from './Valid';

function _getBaseHue(perCent) {

    const data = [[255, 0, 0], [255, 255, 0], [0, 255, 0], [0, 255, 255], [0, 0, 255], [255, 0, 255], [255, 0, 0]];

    if (Valid.isPerCent(perCent)) {
        return data[Math.floor(perCent * 6)];
    }

    return data[0];

}

function perCent2Hue(perCent) {

    if (!Valid.isPerCent(perCent)) {
        return;
    }

    const int = Math.floor(perCent * 6),
        offset = Math.round((perCent * 6 - int) * 255),
        baseHue = _getBaseHue(perCent);

    baseHue[(int * 2 + 1) % 3] += offset * (Valid.isOdd(int) ? -1 : 1);

    return baseHue;

}

function _getBasePerCentIndex(hue) {

    if (hue[0] === 255 && hue[2] === 0) {
        return 0;
    }

    if (hue[1] === 255 && hue[2] === 0) {
        return 1;
    }

    if (hue[0] === 0 && hue[1] === 255) {
        return 2;
    }

    if (hue[0] === 0 && hue[2] === 255) {
        return 3;
    }

    if (hue[1] === 0 && hue[2] === 255) {
        return 4;
    }

    if (hue[1] === 255 && hue[1] === 0) {
        return 5;
    }

}

function hue2PerCent(hue) {

    if (!Valid.isRGB(hue)) {
        return;
    }

    const basePerCentIndex = _getBasePerCentIndex(hue);

    switch (basePerCentIndex) {
        case 0:
            return (basePerCentIndex + hue[1] / 255) / 6;
        case 1:
            return (basePerCentIndex + (255 - hue[0]) / 255) / 6;
        case 2:
            return (basePerCentIndex + hue[2] / 255) / 6;
        case 3:
            return (basePerCentIndex + (255 - hue[1]) / 255) / 6;
        case 4:
            return (basePerCentIndex + hue[0] / 255) / 6;
        case 3:
            return (basePerCentIndex + (255 - hue[2]) / 255) / 6;
    }

}

export default {
    perCent2Hue,
    hue2PerCent
};