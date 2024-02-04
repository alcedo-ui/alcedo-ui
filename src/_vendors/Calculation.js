/**
 * @file Calculation vendor
 */

// Statics
import SelectMode from '../_statics/SelectMode';

// Vendors
import isArray from 'lodash/isArray';
import Valid from './Valid';
import Util from './Util';

/**
 * @param pageSize
 * @param pageSizes
 * @param defaultValue
 * @returns {*}
 */
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

/**
 * @param data
 * @param listHeight
 * @param itemHeight
 * @param scrollTop
 * @param buffer
 * @returns {{startWithBuffer: *, stop: *, stopWithBuffer: *, start: *}|{startWithBuffer: number, stop: number, stopWithBuffer: number, start: number}}
 */
function displayIndexByScrollTop(data, listHeight, itemHeight, scrollTop = 0, buffer = 0) {

    if (!data || !listHeight || !itemHeight) {
        return {
            start: 0,
            stop: 0,
            startWithBuffer: 0,
            stopWithBuffer: 0
        };
    }

    const len = data.length;
    const start = Math.floor(scrollTop / itemHeight);
    const stop = start + Math.ceil(listHeight / itemHeight);

    return {
        start: Valid.range(start, 0, len - 1),
        stop: Valid.range(stop, 0, len - 1),
        startWithBuffer: Valid.range(start - buffer, 0, len - 1),
        stopWithBuffer: Valid.range(stop + buffer, 0, len - 1)
    };

}

/**
 * @param data
 * @param listHeight
 * @param itemHeight
 * @param column
 * @param scrollTop
 * @param buffer
 * @returns {{startWithBuffer: *, stop: *, stopWithBuffer: *, start: *}|{startWithBuffer: number, stop: number, stopWithBuffer: number, start: number}}
 */
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

/**
 * @param props
 * @returns {*|null|*[]}
 */
function getInitValue(props) {

    if (!props) {
        return;
    }

    const {value, selectMode} = props;

    if (!selectMode) {
        return;
    }

    if (value != null) {
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

/**
 * @param item
 * @param value
 * @param props
 * @returns {*|number}
 */
function getMultiSelectItemIndex(item, value, props = {}) {

    const {selectMode, valueField, displayField} = props;

    if (selectMode !== SelectMode.MULTI_SELECT || !item || !value) {
        return -1;
    }

    if (!isArray(value)) {
        return -1;
    }

    return value.findIndex(valueItem => Util.isValueEqual(valueItem, item, valueField, displayField));

}

/**
 * @param item
 * @param value
 * @param selectMode
 * @param valueField
 * @param displayField
 * @returns {boolean}
 */
function isItemChecked(item, value, {selectMode, valueField, displayField}) {

    if (!item || value == null) {
        return false;
    }

    // Single Selection
    if (selectMode === SelectMode.SINGLE_SELECT) {
        return Util.isValueEqual(value, item, valueField, displayField);
    }

    // Multiple Selection
    if (!isArray(value) || value.length < 1) {
        return false;
    }
    for (let v of value) {
        if (Util.isValueEqual(v, item, valueField, displayField)) {
            return true;
        }
    }
    return false;

}

/**
 * @param node
 * @param value
 * @param valueField
 * @param displayField
 * @returns {boolean}
 */
function isItemIndeterminate(node, value, {valueField, displayField}) {

    if (!node || !node.children || node.children.length < 1
        || !value || !value.length || value.length < 1) {
        return false;
    }

    let total = 0;
    let count = 0;

    Util.preOrderTraverse(node, nodeItem => {
        total++;
        if (value.findIndex(item =>
            Util.getValueByValueField(item, valueField, displayField)
            === Util.getValueByValueField(nodeItem, valueField, displayField)
        ) > -1) {
            count++;
        }
    });

    return count > 0 && total !== count;

}

/**
 * @param filter
 * @param props
 * @returns {*}
 */
function filterAutoCompleteData(filter, props) {

    const {data, minFilterLength} = props;

    if (!filter || filter.length < minFilterLength) {
        return data;
    }

    const {valueField, displayField, renderer} = props;

    return data?.filter(item => {

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

/**
 * @param filter
 * @param props
 * @returns {*}
 */
function filterLocalAutoCompleteData(filter, props) {

    const {data, minFilterLength} = props;

    if (!filter || filter.length < minFilterLength) {
        return data;
    }

    const {valueField, displayField, renderer, filterCallback} = props;

    if (filterCallback) {
        return filterCallback(filter, data);
    }

    return data?.filter(item => {

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

export default {
    pageSize,
    displayIndexByScrollTop,
    getInitValue,
    getMultiSelectItemIndex,
    displayIndexByScrollTopMulColumns,
    isItemChecked,
    isItemIndeterminate,
    filterAutoCompleteData,
    filterLocalAutoCompleteData
};
