/**
 * @file Calculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import _ from 'lodash';
import Valid from './Valid';
import SelectMode from '../_statics/SelectMode';
import Util from './Util';

function pageSize(pageSize, pageSizes, defaultValue) {

    if (pageSize) {
        return pageSize;
    }

    if (pageSizes && pageSizes.length > 0) {

        for (let item of pageSizes) {
            if (item > 0) {
                return item;
            }
        }
    }

    return defaultValue;

}

function displayIndexByScrollTop(data, listHeight, itemHeight, scrollTop = 0, buffer = 0) {

    if (!data || !listHeight || !itemHeight) {
        return {
            start: 0,
            stop: 0,
            startWithBuffer: 0,
            stopWithBuffer: 0
        };
    }

    const len = data.length,
        start = Math.floor(scrollTop / itemHeight),
        stop = start + Math.ceil(listHeight / itemHeight);

    return {
        start: Valid.range(start, 0, len - 1),
        stop: Valid.range(stop, 0, len - 1),
        startWithBuffer: Valid.range(start - buffer, 0, len - 1),
        stopWithBuffer: Valid.range(stop + buffer, 0, len - 1)
    };

}

function getInitValue(props) {

    if (!props) {
        return;
    }

    const {value, selectMode} = props;

    if (!selectMode) {
        return;
    }

    if (value) {
        return value;
    }

    switch (selectMode) {
        case SelectMode.MULTI_SELECT:
            return [];
        case SelectMode.SINGLE_SELECT:
            return null;
        default:
            return value;
    }

}

function isItemChecked(item, value, {selectMode, valueField, displayField}) {

    if (!item || !value) {
        return false;
    }

    if (selectMode === SelectMode.MULTI_SELECT) {
        return _.isArray(value) && value.filter(valueItem =>
            Util.isValueEqual(valueItem, item, valueField, displayField)
        ).length > 0;
    } else if (selectMode === SelectMode.SINGLE_SELECT) {
        return Util.isValueEqual(value, item, valueField, displayField);
    }

}

export default {
    pageSize,
    displayIndexByScrollTop,
    getInitValue,
    isItemChecked
};