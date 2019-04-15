/**
 * @file TableCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import TableFragment from '../_statics/TableFragment';

function calcSpan(type, column, colIndex, rowIndex) {
    const span = column[`${type}Span`];
    return span && typeof span === 'function' ?
        span(colIndex, rowIndex)
        :
        +span;
}

function getColumnsWithSpan(type, columns, rowIndex) {

    if (!type) {
        return columns.map(column => ({
            column,
            span: 1
        }));
    }

    const result = [];
    let spanFlag = 0;

    for (let i = 0, len = columns.length; i < len; i++) {

        if (spanFlag > 1) {
            spanFlag--;
            continue;
        }

        const column = columns[i],
            span = calcSpan(type, columns[i], i, rowIndex);

        if (span && span > 1) {
            spanFlag = span;
        }

        result.push({
            column,
            span
        });

    }

    return result;

}

function sortTableData(data, sorting, sortFunc) {

    if (!sorting) {
        return data;
    }

    let copyData = data.slice();

    if (sortFunc) {
        copyData = sortFunc(copyData, sorting);
    } else {
        copyData.sort((a, b) => {
            if (!isNaN(a[sorting.prop]) && !isNaN(b[sorting.prop])) {
                return (Number(a[sorting.prop]) - Number(b[sorting.prop])) * sorting.type;
            } else {
                return (a[sorting.prop] + '').localeCompare(b[sorting.prop] + '') * sorting.type;
            }
        });
    }

    return copyData;

}

function hasFooterRenderer(columns) {
    return columns.some(item => item.footRenderer);
}

/**
 * calculate each head, body and foot column width
 * @returns {null|{[p: string]: *|*}}
 */
function getColumnsWidth(tableEl) {

    if (!tableEl) {
        return null;
    }

    return {
        [TableFragment.HEAD]: [].map.call(tableEl.querySelectorAll('thead th'),
            el => parseInt(window.getComputedStyle(el).width)),
        [TableFragment.BODY]: [].map.call(tableEl.querySelector('tbody tr').querySelectorAll('td'),
            el => parseInt(window.getComputedStyle(el).width)),
        [TableFragment.FOOT]: [].map.call(tableEl.querySelectorAll('tfoot td'),
            el => parseInt(window.getComputedStyle(el).width))
    };

}

/**
 * calculate each head, body and foot row height
 * @returns {null|{[p: string]: *|*}}
 */
function getRowsHeight(tableEl) {

    if (!tableEl) {
        return null;
    }

    return {
        [TableFragment.HEAD]: [].map.call(tableEl.querySelectorAll('thead tr'),
            el => parseInt(window.getComputedStyle(el).height)),
        [TableFragment.BODY]: [].map.call(tableEl.querySelectorAll('tbody tr'),
            el => parseInt(window.getComputedStyle(el).height)),
        [TableFragment.FOOT]: [].map.call(tableEl.querySelectorAll('tfoot tr'),
            el => parseInt(window.getComputedStyle(el).height))
    };

}

export default {
    calcSpan,
    getColumnsWithSpan,
    sortTableData,
    hasFooterRenderer,
    getColumnsWidth,
    getRowsHeight
};
