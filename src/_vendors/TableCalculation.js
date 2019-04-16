/**
 * @file TableCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import classnames from 'classnames';
import sum from 'lodash/sum';

import TableFragment from '../_statics/TableFragment';
import HorizontalAlign from '../_statics/HorizontalAlign';

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
            el => el.offsetWidth),
        [TableFragment.BODY]: [].map.call(tableEl.querySelector('tbody tr').querySelectorAll('td'),
            el => el.offsetWidth),
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
            el => el.offsetHeight),
        [TableFragment.BODY]: [].map.call(tableEl.querySelectorAll('tbody tr'),
            el => el.offsetHeight),
        [TableFragment.FOOT]: [].map.call(tableEl.querySelectorAll('tfoot tr'),
            el => el.offsetHeight)
    };

}

/**
 * calculate table body scroller height
 * @param headHeight
 * @param footHeight
 * @returns {{height: string}}
 */
function getbodyScollerHeight(headHeight, footHeight) {
    return `calc(100%${headHeight ? ` - ${sum(headHeight)}px` : ''}${footHeight ? ` - ${sum(footHeight)}px` : ''})`;
}

function handleFixedColumns(columns) {

    if (!columns) {
        return columns;
    }

    return columns.map(column => ({
        ...column,
        headClassName: classnames(column.headClassName, 'table-fixed-column'),
        bodyClassName: classnames(column.bodyClassName, 'table-fixed-column'),
        footClassName: classnames(column.footClassName, 'table-fixed-column')
    }));

}

function getFixedClassName(fragment) {
    switch (fragment) {
        case TableFragment.HEAD:
            return 'table-content-fixed-head';
        case TableFragment.FOOT:
            return 'table-content-fixed-foot';
        default:
            return 'table-content-body';
    }
}

function fixFragmentWidths(wrapperEl, columnsWidth, fixed, fragment, selector, props) {

    const el = wrapperEl.querySelector(`${selector} .${getFixedClassName(fragment)}`);

    if (el) {
        const cols = el.querySelectorAll('col');
        if (cols) {
            if (fixed === HorizontalAlign.RIGHT) {
                cols.forEach((el, index) => {
                    if (el) {
                        el.style.width = `${columnsWidth[fragment]
                            [columnsWidth[fragment].length - (cols.length - index)]}px`;
                    }
                });
            } else {
                cols.forEach((el, index) => {
                    if (el) {
                        el.style.width = `${columnsWidth[fragment][index]}px`;
                    }
                });
            }
        }
    }

}

function fixTableWidths(wrapperEl, columnsWidth, fixed, props) {

    if (!wrapperEl) {
        return;
    }

    const selector = `.table-content-${fixed ? `fixed-${fixed}` : 'center'}`;

    /**
     * head
     */
    fixFragmentWidths(wrapperEl, columnsWidth, fixed, TableFragment.HEAD, selector, props);
    // const head = wrapperEl.querySelector(`${selector} .table-content-fixed-head`);
    // if (head) {
    //     const cols = head.querySelectorAll('col');
    //     if (cols) {
    //         if (fixed === HorizontalAlign.RIGHT) {
    //             cols.forEach((el, index) => {
    //                 if (el) {
    //                     el.style.width = `${columnsWidth[TableFragment.HEAD]
    //                         [columnsWidth[TableFragment.HEAD].length - (cols.length - index)]}px`;
    //                 }
    //             });
    //         } else {
    //             cols.forEach((el, index) => {
    //                 if (el) {
    //                     el.style.width = `${columnsWidth[TableFragment.HEAD][index]}px`;
    //                 }
    //             });
    //         }
    //     }
    // }

    /**
     * body
     */
    if (fixed) {
        fixFragmentWidths(wrapperEl, columnsWidth, fixed, TableFragment.BODY, selector, props);
    }
    // if (fixed) {
    //     const body = wrapperEl.querySelector(`${selector} .table-content-body`);
    //     if (body) {
    //         const cols = body.querySelectorAll('col');
    //         if (cols) {
    //             if (fixed === HorizontalAlign.RIGHT) {
    //                 cols.forEach((el, index) => {
    //                     if (el) {
    //                         el.style.width = `${columnsWidth[TableFragment.BODY]
    //                             [columnsWidth[TableFragment.BODY].length - (cols.length - index)]}px`;
    //                     }
    //                 });
    //             } else {
    //                 cols.forEach((el, index) => {
    //                     if (el) {
    //                         el.style.width = `${columnsWidth[TableFragment.BODY][index]}px`;
    //                     }
    //                 });
    //             }
    //         }
    //     }
    // }

    /**
     * foot
     */
    fixFragmentWidths(wrapperEl, columnsWidth, fixed, TableFragment.FOOT, selector, props);
    // const foot = wrapperEl.querySelector(`${selector} .table-content-fixed-foot`);
    // if (foot) {
    //     const cols = foot.querySelectorAll('td');
    //     if (cols) {
    //         if (fixed === HorizontalAlign.RIGHT) {
    //             cols.forEach((el, index) => {
    //                 if (el) {
    //                     el.style.width = `${columnsWidth[TableFragment.FOOT]
    //                         [columnsWidth[TableFragment.FOOT].length - (cols.length - index)]}px`;
    //                 }
    //             });
    //         } else {
    //             cols.forEach((el, index) => {
    //                 if (el) {
    //                     el.style.width = `${columnsWidth[TableFragment.FOOT][index]}px`;
    //                 }
    //             });
    //         }
    //     }
    // }

}

function fixLayout(wrapperEl, props) {

    if (!wrapperEl) {
        return;
    }

    const tableEl = wrapperEl.querySelector('.table-content-center .table-content-body');
    // tableWrapperEl = wrapperEl.querySelector('.table-content-center .table-content-body-wrapper');

    if (!tableEl) {
        return;
    }

    const tableHeight = parseInt(window.getComputedStyle(tableEl).height),
        columnsWidth = getColumnsWidth(tableEl),
        rowsHeight = getRowsHeight(tableEl),

        fixedHeadHeight = sum(rowsHeight[TableFragment.HEAD]) || 0,
        fixedFootHeight = sum(rowsHeight[TableFragment.FOOT]) || 0;

    /**
     * body scroller
     */
    wrapperEl.querySelectorAll('.table-content-scroller')
             .forEach(el => {
                 if (el) {
                     el.style.height = `calc(100%${fixedHeadHeight ? ` - ${fixedHeadHeight}px` : ''}${fixedFootHeight ? ` - ${fixedFootHeight}px` : ''})`;
                 }
             });

    /**
     * body wrapper
     */
    wrapperEl.querySelectorAll('.table-content-center .table-content-body-wrapper')
             .forEach(el => {
                 if (el) {
                     el.style.height = `${tableHeight - fixedHeadHeight}px`;
                     el.style.marginTop = `${-fixedHeadHeight}px`;
                 }
             });

    fixTableWidths(wrapperEl, columnsWidth, null, props);
    fixTableWidths(wrapperEl, columnsWidth, HorizontalAlign.LEFT, props);
    fixTableWidths(wrapperEl, columnsWidth, HorizontalAlign.RIGHT, props);

}

export default {
    calcSpan,
    getColumnsWithSpan,
    sortTableData,
    hasFooterRenderer,
    getColumnsWidth,
    getRowsHeight,
    getbodyScollerHeight,
    handleFixedColumns,
    fixLayout
};
