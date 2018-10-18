/**
 * @file Calculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import isArray from 'lodash/isArray';
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

function displayIndexByScrollTopMulColumns(data, listHeight, itemHeight, column, scrollTop = 0, buffer = 0) {

    if (!data || !listHeight || !itemHeight) {
        return {
            start: 0,
            stop: 0,
            startWithBuffer: 0,
            stopWithBuffer: 0
        };
    }

    const len = data.length,
        start = Math.floor(scrollTop / itemHeight) * column,
        stop = start + Math.ceil(listHeight / itemHeight) * column;

    return {
        start: Valid.range(start, 0, len - 1),
        stop: Valid.range(stop, 0, len - 1),
        startWithBuffer: Valid.range(Valid.range(start, 0, len - 1) - buffer, 0, len - 1),
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

function getMultiSelectItemIndex(item, value, {selectMode, valueField, displayField}) {

    if (selectMode !== SelectMode.MULTI_SELECT || !item || !value) {
        return -1;
    }

    if (!isArray(value)) {
        return -1;
    }

    return value.findIndex(valueItem => Util.isValueEqual(valueItem, item, valueField, displayField));

}

function isItemChecked(item, value, {selectMode, valueField, displayField}) {

    if (!item || !value) {
        return false;
    }

    if (selectMode === SelectMode.MULTI_SELECT) {
        return isArray(value) && value.filter(valueItem =>
            Util.isValueEqual(valueItem, item, valueField, displayField)
        ).length > 0;
    } else if (selectMode === SelectMode.SINGLE_SELECT) {
        return Util.isValueEqual(value, item, valueField, displayField);
    }

}

function isNodeIndeterminate(node, value, {valueField, displayField}) {

    if (!node || !node.children || node.children.length < 1
        || !value || !value.length || value.length < 1) {
        return false;
    }

    let total = 0,
        count = 0;

    Util.preOrderTraverse(node, nodeItem => {
        total++;
        if (value.findIndex(item =>
            Util.getValueByValueField(item, valueField, displayField)
            === Util.getValueByValueField(nodeItem, valueField, displayField)) > -1) {
            count++;
        }
    });

    return count > 0 && total !== count;

}

function filterLocalAutoCompleteData(filter, props) {

    const {data, minFilterLength} = props;

    if (!filter || filter.length < minFilterLength) {
        return data;
    }

    const {valueField, displayField, renderer, filterCallback} = props;

    if (filterCallback) {
        return filterCallback(filter, data);
    }

    return data && data.filter(item => {

        if (!item) {
            return false;
        }

        if (renderer) {
            return renderer(item).toString().toUpperCase().includes(filter.toUpperCase());
        }

        if (typeof item === 'object') {

            const itemDisplay = Util.getTextByDisplayField(item, displayField, valueField);

            if (itemDisplay) {
                return itemDisplay.toString().toUpperCase().includes(filter.toUpperCase());
            }

        }

        return item.toString().toUpperCase().includes(filter.toUpperCase());

    });

}

function sortTableData(data, sort, sortFunc) {

    if (!sort) {
        return data;
    }

    let copyData = data.slice();

    if (sortFunc) {
        copyData = sortFunc(copyData, sort);
    } else {
        copyData.sort((a, b) => {
            if (!isNaN(a[sort.prop]) && !isNaN(b[sort.prop])) {
                return (Number(a[sort.prop]) - Number(b[sort.prop])) * sort.type;
            } else {
                return (a[sort.prop] + '').localeCompare(b[sort.prop] + '') * sort.type;
            }
        });
    }

    return copyData;

};

export default {
    pageSize,
    displayIndexByScrollTop,
    getInitValue,
    getMultiSelectItemIndex,
    displayIndexByScrollTopMulColumns,
    isItemChecked,
    isNodeIndeterminate,
    filterLocalAutoCompleteData,
    sortTableData
};
