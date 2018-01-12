/**
 * @file Color vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import Valid from './Valid';

function _getHueRGB(perCent) {

    const data = [[255, 0, 0], [255, 255, 0], [0, 255, 0], [0, 255, 255], [0, 0, 255], [255, 0, 255], [255, 0, 0]];

    if (Valid.isPerCent(perCent)) {
        return data[Math.floor(perCent * 6)];
    }

    return data[0];

}

function hue2rgb(hue) {

    if (!Valid.isDeg(hue)) {
        return;
    }

    const perCent = hue / 360,
        int = Math.floor(perCent * 6),
        offset = Math.round((perCent * 6 - int) * 255),
        rgb = _getHueRGB(perCent);

    rgb[(int * 2 + 1) % 3] += offset * (Valid.isOdd(int) ? -1 : 1);

    return rgb;

}

function rgb2hsb(rgb) {

    if (!Valid.isRGB(rgb)) {
        return;
    }

    const [r, g, b] = rgb,
        max = Math.max(...rgb),
        min = Math.min(...rgb);
    let h = 0;

    if (max == r && g >= b) {
        h = (g - b) * 60 / (max - min) + 0;
    } else if (max == r && g < b) {
        h = (g - b) * 60 / (max - min) + 360;
    } else if (max == g) {
        h = (b - r) * 60 / (max - min) + 120;
    } else if (max == b) {
        h = (r - g) * 60 / (max - min) + 240;
    }

    return [h, max === 0 ? 0 : (max - min) / max, max / 255];

}

function hsb2rgb() {

}

export default {
    hue2rgb,
    rgb2hsb,
    hsb2rgb
};