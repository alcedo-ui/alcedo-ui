/**
 * @file Valid vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import isArray from 'lodash/isArray';
import isNumber from 'lodash/isNumber';
import FieldType from '../_statics/FieldType';

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

function isInteger(value) {
    return /^(0|-?[0-9][1-9]*)$/.test(value);
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
    return rgb && isArray(rgb) && rgb.length === 3
        && rgb.filter(item => item >= 0 && item <= 255).length === 3;
}

function isHSB(hsb) {
    return hsb && isArray(hsb) && hsb.length === 3
        && isDeg(hsb[0]) && isInRange(hsb[1], 0, 1) && isInRange(hsb[2], 0, 1);
}

function isHex(hex) {

    const hasHash = hex[0] === '#';

    if (!hex) {
        return false;
    }

    if ((!hasHash && hex.length !== 6) || (hasHash && hex.length !== 7)) {
        return false;
    }

    if (hasHash && hex[0] !== '#') {
        return false;
    }

    function fn(i) {
        const j = hasHash ? 1 : 0;
        return isInRange(parseInt(hex.slice(i + j, i + j + 2), 16), 0, 255);
    }

    return fn(0) && fn(2) && fn(4);

}

function isNumberType(type) {

    const {
        NUMBER, INTEGER, POSITIVE_INTEGER, NONNEGATIVE_INTEGER, NEGATIVE_INTEGER, NONPOSITIVE_INTEGER
    } = FieldType;

    return type === NUMBER || type === INTEGER || type === POSITIVE_INTEGER
        || type === NONNEGATIVE_INTEGER || type === NEGATIVE_INTEGER || type === NONPOSITIVE_INTEGER;

}

function fieldValid(value, props) {

    const {type, required, maxLength, max, min, pattern, patternInvalidMsg} = props;
    let invalidMsgs = [];

    if (required === true && value === '') {
        invalidMsgs.push('Required');
    }

    if (type === FieldType.EMAIL && value && !isEmail(value)) {
        invalidMsgs.push('Invalid E-mail address');
    }

    if (type === FieldType.URL && value && !isUrl(value)) {
        invalidMsgs.push('Invalid url');
    }

    if (maxLength !== undefined && !isNaN(maxLength) && maxLength > 0 && value && value.length > maxLength) {
        invalidMsgs.push(`Max length is ${maxLength}`);
    }

    if (isNumberType(type) && value) {

        if (type === FieldType.NUMBER && !isNumber(value)) {
            invalidMsgs.push('Not a valid number');
        }

        if (type === FieldType.INTEGER && !isInteger(value)) {
            invalidMsgs.push('Not a valid integer');
        }

        if (type === FieldType.POSITIVE_INTEGER && !isPositiveInteger(value)) {
            invalidMsgs.push('Not a valid positive integer');
        }

        if (type === FieldType.NONNEGATIVE_INTEGER && !isNonnegativeInteger(value)) {
            invalidMsgs.push('Not a valid nonnegative integer');
        }

        if (type === FieldType.NEGATIVE_INTEGER && !isNegativeInteger(value)) {
            invalidMsgs.push('Not a valid negative integer');
        }

        if (type === FieldType.NONPOSITIVE_INTEGER && !isNonpositiveInteger(value)) {
            invalidMsgs.push('Not a valid nonpositive integer');
        }

        if (max !== undefined && value > max) {
            invalidMsgs.push(`Maximum value is ${max}`);
        }

        if (min !== undefined && value < min) {
            invalidMsgs.push(`Minimum value is ${min}`);
        }

    }

    if (pattern !== undefined && !pattern.test(value)) {
        invalidMsgs.push(patternInvalidMsg);
    }

    return invalidMsgs;

}

export default {
    range,
    isChrome,
    isMac,
    isWindows,
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
    isHex,
    isNumberType,
    fieldValid
};
