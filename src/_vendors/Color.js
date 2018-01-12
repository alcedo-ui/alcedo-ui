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

function hsb2rgb(hsb) {

    if (!Valid.isHSB(hsb)) {
        return;
    }

    const [h, s, v] = hsb,
        i = Math.floor((h / 60) % 6),
        f = (h / 60) - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s);

    let r = 0, g = 0, b = 0;

    switch (i) {
        case 0:
            r = v;
            g = t;
            b = p;
            break;
        case 1:
            r = q;
            g = v;
            b = p;
            break;
        case 2:
            r = p;
            g = v;
            b = t;
            break;
        case 3:
            r = p;
            g = q;
            b = v;
            break;
        case 4:
            r = t;
            g = p;
            b = v;
            break;
        case 5:
            r = v;
            g = p;
            b = q;
            break;
    }

    return [Math.floor(r * 255.0), Math.floor(g * 255.0), Math.floor(b * 255.0)];

}

function rgb2hex(rgb) {

    if (!Valid.isRGB(rgb)) {
        return;
    }

    return rgb.map(item => item.toString(16)).join('');

}

export default {
    hue2rgb,
    rgb2hsb,
    hsb2rgb,
    rgb2hex
};