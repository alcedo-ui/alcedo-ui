/**
 * @file Utils vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import moment from 'moment';

function isEnableLocalStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

function isEnableSessionStorage() {
    try {
        return 'sessionStorage' in window && window['sessionStorage'] !== null;
    } catch (e) {
        return false;
    }
}

function isEnableCookieAndStorage() {
    return navigator.cookieEnabled && isEnableLocalStorage() && isEnableSessionStorage();
}

function formatCapitalize(value) {
    return value ? value.charAt(0).toUpperCase() + value.substring(1).toLowerCase() : value;
}

function value2Timestamp(value, format) {

    const defaultValue = new Date().getTime();

    if (typeof value === 'number') {
        return new Date(value).toString() === 'Invalid Date' ? defaultValue : value;
    } else if (typeof value === 'string') {
        let date = moment(value, format);
        return date.isValid() ? date.valueOf() : defaultValue;
    } else if (moment.isDate(value)) {
        let date = moment(value);
        return date.isValid() ? date.valueOf() : defaultValue;
    }

    return defaultValue;

}

function value2Moment(value, format) {

    const defaultValue = moment();

    if (typeof value === 'string') {
        let date = moment(value, format);
        return date.isValid() ? date : defaultValue;
    } else {
        let date = moment(value);
        return date.isValid() ? date : defaultValue;
    }

}

function enumerateValue(enumerate) {
    return Object.keys(enumerate).map(key => enumerate[key]);
}

function tree(data, callback) {
    let loop = function loop(children, level) {

        children.forEach((item, index) => {
            var pos = level + '-' + (1 + index);
            if (item.children) {
                loop(item.children, pos);
            }
            callback(item, index, pos);
        });
    };

    loop(data, 1);
}

function getValueByValueField(data, valueField = 'value', displayField = 'text') {

    if (!data) {
        return;
    }

    if (typeof data === 'object') {
        return data[valueField] || data[displayField];
    }

    return data;

}

function getTextByDisplayField(data, displayField = 'text', valueField = 'value') {

    if (!data) {
        return '';
    }

    if (typeof data === 'object') {
        return data[displayField] || data[valueField];
    }

    return data;

}

function isValueEqual(data1, data2, valueField = 'value', displayField = 'text') {
    return getValueByValueField(data1, valueField, displayField)
        == getValueByValueField(data2, valueField, displayField);
}

function genIndexArray(len) {

    if (!len || isNaN(len) || len < 1) {
        return [];
    }

    const result = [];
    for (let i = 0; i < len; i++) {
        result[i] = i;
    }

    return result;

}

function getDiag(a, b) {
    return Math.sqrt((a * a) + (b * b));
}

function reorder(data, startIndex, endIndex) {
    const [removed] = data.splice(startIndex, 1);
    data.splice(endIndex, 0, removed);
};

export default {
    isEnableLocalStorage,
    isEnableSessionStorage,
    isEnableCookieAndStorage,
    formatCapitalize,
    value2Timestamp,
    value2Moment,
    enumerateValue,
    tree,
    getValueByValueField,
    getTextByDisplayField,
    isValueEqual,
    genIndexArray,
    getDiag,
    reorder
};