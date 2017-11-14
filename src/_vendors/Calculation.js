/**
 * @file Calculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import Valid from './Valid';

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

export default {
    pageSize,
    displayIndexByScrollTop
};