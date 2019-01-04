/**
 * @file Color vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import Valid from './Valid';

/**
 * Convert Hue percent value to RGB value
 * @param Hue percent value {number}
 * @returns RGB {number[R, G, B]}
 * @private
 */
function _getHueRGB(percent) {

    const data = [[255, 0, 0], [255, 255, 0], [0, 255, 0], [0, 255, 255], [0, 0, 255], [255, 0, 255], [255, 0, 0]];

    if (Valid.isPerCent(percent)) {
        return data[Math.floor(percent * 6)];
    }

    return data[0];

}

/**
 * Convert Hue degree value to RGB value
 * @param Hue degree value {number}
 * @returns RGB {number[R, G, B]}
 */
function hue2rgb(hue) {

    if (!Valid.isDeg(hue)) {
        return;
    }

    const percent = hue / 360,
        int = Math.floor(percent * 6),
        offset = Math.round((percent * 6 - int) * 255),
        rgb = _getHueRGB(percent);

    rgb[(int * 2 + 1) % 3] += offset * (Valid.isOdd(int) ? -1 : 1);

    return rgb;

}

/**
 * Convert RGB value to HSB value
 * @param RGB value {number[R, G, B]}
 * @returns HSB value {number[H, S, B]}
 */
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

/**
 * Convert HSB value to RGB value
 * @param HSB value {number[H, S, B]}
 * @returns RGB value {number[R, G, B]}
 */
function hsb2rgb(hsb) {

    if (!Valid.isHSB(hsb)) {
        return;
    }

    let [h, s, v] = hsb;
    h = h === 360 ? 0 : h;

    const i = Math.floor(h / 60) % 6,
        f = h / 60 - i,
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

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];

}

/**
 * Convert RGB value to hex format
 * @param RGB value {number[R, G, B]}
 * @returns RGB hex value {string}
 */
function rgb2hex(rgb) {

    if (!rgb || !Valid.isRGB(rgb)) {
        return;
    }

    return rgb.map(item => item.toString(16)).join('');

}

/**
 * Convert RGB hex value to RGB format
 * @param RGB hex value {string}
 * @param hasHash {bool}
 * @returns RGB value {number[R, G, B]}
 */
function hex2rgb(hex, hasHash) {

    if (!Valid.isHex(hex, hasHash)) {
        return;
    }

    function fn(i) {
        const j = hasHash ? 1 : 0;
        return parseInt(hex.slice(i + j, i + j + 2), 16);
    }

    return [fn(0), fn(2), fn(4)];

}

export default {
    hue2rgb,
    rgb2hsb,
    hsb2rgb,
    rgb2hex,
    hex2rgb
};
