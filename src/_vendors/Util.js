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

function MonthDays(year) {
    // debugger
    let dateArray = [];
    for (let i = 0; i < 12; i++) {
        switch (i + 1) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                dateArray.push(31);
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                dateArray.push(30);
                break;
            case 2:
                if (moment(year + '-02-29', 'YYYY-MM-DD', true).isValid()) {
                    dateArray.push(29);
                } else {
                    dateArray.push(28);
                }
                break;
            default:
                break;
        }
    }
    return dateArray;
}

function setDateRange(start, end) {

    if (start.year == end.year && start.month == end.month) {
        if (start.month == 12) {
            end.year = +(end.year) + 1;
            end.month = 1;
        } else {
            end.year = end.year;
            end.month = +(end.month) + 1;
        }
    } else {
        end.year = end.year;
        end.month = end.month;
    }

    return {
        start,
        end
    };
}


function getYearArr(num) {
    let yearString = num.toString();
    yearString = yearString.substr(0, yearString.length - 1);
    let YearArr = [];
    for (let i = 0; i < 10; i++) {
        YearArr.push(yearString + i);
    }
    return YearArr;
}

function getMonth(num) {
    return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][num - 1];
}

/**
 * enumerate object value for PropTypes.oneOf
 * @param enumerate
 * @returns {*[]}
 */
function enumerateValue(enumerate) {

    if (!enumerate) {
        return null;
    }

    return Object.keys(enumerate).map(key => enumerate[key]);

}

function tree(data, callback) {
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

function getValueByValueField(data, valueField = 'value', displayField = 'text') {

    if (data == null) {
        return;
    }

    if (typeof data === 'object') {
        return data[valueField] == null ? data[displayField] : data[valueField];
    }

    return data;

}

function getTextByDisplayField(data, displayField = 'text', valueField = 'value') {

    if (data == null) {
        return '';
    }

    if (typeof data === 'object') {
        return data[displayField] == null ? data[valueField] : data[displayField];
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

    if (!data || !(startIndex in data) || !(startIndex in data)) {
        return;
    }

    const [removed] = data.splice(startIndex, 1);
    data.splice(endIndex, 0, removed);

}

function preOrderTraverse(node, callback, depth = 0, parent = null, path = null) {

    if (callback(node, depth, parent, path) === false) {
        return false;
    }

    if (node.children && node.children.length > 0) {
        for (let i = 0, len = node.children.length; i < len; i++) {
            if (preOrderTraverse(node.children[i], callback, depth + 1, node, path ? [...path, i] : [i]) === false) {
                break;
            }
        }
    }

}

function postOrderTraverse(node, callback, depth = 0, parent = null, path = null) {

    if (node.children && node.children.length > 0) {
        for (let i = 0, len = node.children.length; i < len; i++) {
            if (postOrderTraverse(node.children[i], callback, depth + 1, node, path ? [...path, i] : [i]) === false) {
                break;
            }
        }
    }

    if (callback(node, depth, parent, path) === false) {
        return false;
    }

}

function shallowCloneMap(map) {
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
    MonthDays,
    setDateRange,
    getYearArr,
    getMonth,
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
