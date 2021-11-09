/**
 * @file Util vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

// Vendors
import moment from 'moment';

/**
 * @returns {boolean}
 */
export function isEnableLocalStorage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

/**
 * @returns {boolean}
 */
export function isEnableSessionStorage() {
    try {
        return 'sessionStorage' in window && window['sessionStorage'] !== null;
    } catch (e) {
        return false;
    }
}

/**
 * @returns {boolean}
 */
export function isEnableCookieAndStorage() {
    return navigator.cookieEnabled && isEnableLocalStorage() && isEnableSessionStorage();
}

/**
 * @param value
 * @returns {string|*}
 */
export function formatCapitalize(value) {
    return value ? value.charAt(0).toUpperCase() + value.substring(1).toLowerCase() : value;
}

/**
 * @param value
 * @param format
 * @returns {number|number}
 */
export function value2Timestamp(value, format) {

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

/**
 * @param value
 * @param format
 * @returns {moment.Moment}
 */
export function value2Moment(value, format) {

    const defaultValue = moment();

    if (typeof value === 'string') {
        let date = moment(value, format);
        return date.isValid() ? date : defaultValue;
    } else {
        let date = moment(value);
        return date.isValid() ? date : defaultValue;
    }

}

/**
 * enumerate object value for PropTypes.oneOf
 * @param enumerate
 * @returns {*[]}
 */
export function enumerateValue(enumerate) {

    if (!enumerate) {
        return null;
    }

    return Object.keys(enumerate).map(key => enumerate[key]);

}

/**
 * @param data
 * @param callback
 */
export function tree(data, callback) {
    let loop = function loop(children, level) {

        children.forEach((item, index) => {
            const pos = level + '-' + (1 + index);
            if (item.children) {
                loop(item.children, pos);
            }
            callback(item, index, pos);
        });
    };

    loop(data, 1);
}

/**
 * @param data
 * @param valueField
 * @param displayField
 * @returns {*}
 */
export function getValueByValueField(data, valueField = 'value', displayField = 'text') {

    if (data == null) {
        return;
    }

    if (typeof data === 'object') {
        return data[valueField] == null ? data[displayField] : data[valueField];
    }

    return data;

}

/**
 * @param data
 * @param displayField
 * @param valueField
 * @returns {string|*}
 */
export function getTextByDisplayField(data, displayField = 'text', valueField = 'value') {

    if (data == null) {
        return '';
    }

    if (typeof data === 'object') {
        return data[displayField] == null ? data[valueField] : data[displayField];
    }

    return data;

}

/**
 * @param data1
 * @param data2
 * @param valueField
 * @param displayField
 * @returns {boolean}
 */
export function isValueEqual(data1, data2, valueField = 'value', displayField = 'text') {
    return getValueByValueField(data1, valueField, displayField)
        === getValueByValueField(data2, valueField, displayField);
}

/**
 * @param len
 * @returns {*[]}
 */
export function genIndexArray(len) {

    if (!len || isNaN(len) || len < 1) {
        return [];
    }

    const result = [];
    for (let i = 0; i < len; i++) {
        result[i] = i;
    }

    return result;

}

/**
 * @param a
 * @param b
 * @returns {number}
 */
export function getDiag(a, b) {
    return Math.sqrt((a * a) + (b * b));
}

/**
 * @param data
 * @param startIndex
 * @param endIndex
 */
export function reorder(data, startIndex, endIndex) {

    if (!data || !(startIndex in data) || !(startIndex in data)) {
        return;
    }

    const [removed] = data.splice(startIndex, 1);
    data.splice(endIndex, 0, removed);

}

/**
 * @param node
 * @param callback
 * @param depth
 * @param index
 * @param parent
 * @param path
 * @returns {boolean}
 */
export function preOrderTraverse(node, callback, depth = 0, index = 0, parent = null, path = null) {

    if (callback(node, depth, index, parent, path) === false) {
        return false;
    }

    if (node.children && node.children.length > 0) {
        for (let i = 0, len = node.children.length; i < len; i++) {
            if (preOrderTraverse(
                node.children[i], callback, depth + 1, i, node, path ? [...path, i] : [i]
            ) === false) {
                break;
            }
        }
    }

}

/**
 * @param node
 * @param callback
 * @param depth
 * @param index
 * @param parent
 * @param path
 * @returns {boolean}
 */
export function postOrderTraverse(node, callback, depth = 0, index = 0, parent = null, path = null) {

    if (node.children && node.children.length > 0) {
        for (let i = 0, len = node.children.length; i < len; i++) {
            if (postOrderTraverse(
                node.children[i], callback, depth + 1, i, node, path ? [...path, i] : [i]
            ) === false) {
                break;
            }
        }
    }

    if (callback(node, depth, index, parent, path) === false) {
        return false;
    }

}

/**
 * @param map
 * @returns {Map<any, any>}
 */
export function shallowCloneMap(map) {
    const result = new Map();
    for (let [key, value] of map.entries()) {
        result.set(key, value);
    }
    return result;
}

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
    reorder,
    preOrderTraverse,
    postOrderTraverse,
    shallowCloneMap
};
