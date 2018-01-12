/**
 * @file Valid vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import _ from 'lodash';

function range(value, min, max) {
    max !== undefined && (value = value > max ? max : value);
    min !== undefined && (value = value < min ? min : value);
    return value;
}

function isChrome() {
    return /chrome/i.test(navigator.userAgent);
}

function isMac() {
    return /macintosh|mac os x/i.test(navigator.userAgent);
}

function isWindows() {
    return /windows|win32/i.test(navigator.userAgent);
};

function isNumber(value) {
    return !Number.isNaN(value);
}

function isInteger(value) {
    return Number.isInteger(value);
}

function isPositiveInteger(value) {
    return isInteger(value) && value > 0;
}

function isNonnegativeInteger(value) {
    return isInteger(value) && value >= 0;
}

function isNegativeInteger(value) {
    return isInteger(value) && value < 0;
}

function isNonpositiveInteger(value) {
    return isInteger(value) && value <= 0;
}

function isOdd(value) {
    return isInteger(value) && value % 2 === 1;
}

function isEven(value) {
    return isInteger(value) && value % 2 === 0;
}

function isInRange(value, min, max) {
    return isNumber(value) && isNumber(min) && isNumber(max) && value >= min && value <= max;
}

function isEmail(value) {
    return /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/.test(value);
}

function isUrl(value) {
    return /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+$/.test(value);
}

function isPerCent(perCent) {
    return isNumber(perCent) && perCent >= 0 && perCent <= 1;
}

function isDeg(deg) {
    return isNumber(deg) && deg >= 0 && deg <= 360;
}

function isRGB(rgb) {
    return rgb && _.isArray(rgb) && rgb.length === 3
        && rgb.filter(item => isInteger(item) && item >= 0 && item <= 255).length === 3;
}

function isHSB(hsb) {
    return hsb && _.isArray(hsb) && hsb.length === 3
        && isDeg(hsb[0]) && isInRange(hsb[1], 0, 1) && isInRange(hsb[2], 0, 1);
}

function isHex(hex) {

    if (!hex || hex.length !== 6) {
        return false;
    }

    return isInRange(parseInt(hex.slice(0, 2), 16), 0, 255)
        && isInRange(parseInt(hex.slice(2, 4), 16), 0, 255)
        && isInRange(parseInt(hex.slice(4, 6), 16), 0, 255);

}

export default {
    range,
    isChrome,
    isMac,
    isWindows,
    isNumber,
    isInteger,
    isPositiveInteger,
    isNonnegativeInteger,
    isNegativeInteger,
    isNonpositiveInteger,
    isOdd,
    isEven,
    isInRange,
    isEmail,
    isUrl,
    isPerCent,
    isDeg,
    isRGB,
    isHSB,
    isHex
};