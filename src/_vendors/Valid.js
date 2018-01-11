/**
 * @file Valid vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

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

function isEmail(value) {
    return /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/.test(value);
}

function isUrl(value) {
    return /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+$/.test(value);
}

function isPerCent(perCent) {
    return !isNaN(perCent) && perCent >= 0 && perCent <= 1;
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
    isEmail,
    isUrl,
    isPerCent
};