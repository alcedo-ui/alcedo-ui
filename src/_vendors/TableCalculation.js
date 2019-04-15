/**
 * @file TableCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import classnames from 'classnames';
import sum from 'lodash/sum';

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

function fixLayout(el) {

    if (!el) {
        return;
    }

    const tableEl = el.querySelector('.table-content-center .table-content-body');
    // tableWrapperEl = el.querySelector('.table-content-center .table-content-body-wrapper');

    if (!tableEl) {
        return;
    }

    const tableHeight = parseInt(window.getComputedStyle(tableEl).height),
        columnsWidth = getColumnsWidth(tableEl),
        rowsHeight = getRowsHeight(tableEl),

        fixedHeadHeight = sum(rowsHeight[TableFragment.HEAD]) || 0,
        fixedFootHeight = sum(rowsHeight[TableFragment.FOOT]) || 0,

        scrollerHeight = `calc(100%${fixedHeadHeight ? ` - ${fixedHeadHeight}px` : ''}${fixedFootHeight ? ` - ${fixedFootHeight}px` : ''})`;

    console.log(columnsWidth);

    /**
     * all body wrapper
     */
    el.querySelectorAll('.table-content-center .table-content-body-wrapper')
      .forEach(el => {
          if (el) {
              el.style.height = `${tableHeight - fixedHeadHeight}px`;
              el.style.marginTop = `${-fixedHeadHeight}px`;
          }
      });

    /**
     * body scroller
     */
    el.querySelectorAll('.table-content-scroller')
      .forEach(el => {
          if (el) {
              el.style.height = scrollerHeight;
          }
      });

    /**
     * body head
     */
    el.querySelector('.table-content-center .table-content-fixed-head').querySelectorAll('col')
      .forEach((el, index) => {
          if (el) {
              el.style.width = `${columnsWidth[TableFragment.HEAD][index]}px`;
          }
      });

    /**
     * body foot
     */
    el.querySelector('.table-content-center .table-content-fixed-foot').querySelectorAll('td')
      .forEach((el, index) => {
          if (el) {
              el.style.width = `${columnsWidth[TableFragment.FOOT][index]}px`;
          }
      });

    /**
     * left head
     */
    el.querySelector('.table-content-fixed-left .table-content-fixed-head').querySelectorAll('col')
      .forEach((el, index) => {
          if (el) {
              el.style.width = `${columnsWidth[TableFragment.HEAD][index]}px`;
          }
      });

    /**
     * left body
     */
    el.querySelector('.table-content-fixed-left .table-content-body').querySelectorAll('col')
      .forEach((el, index) => {
          if (el) {
              el.style.width = `${columnsWidth[TableFragment.BODY][index]}px`;
          }
      });

    /**
     * left foot
     */
    el.querySelector('.table-content-fixed-left .table-content-fixed-foot').querySelectorAll('td')
      .forEach((el, index) => {
          if (el) {
              el.style.width = `${columnsWidth[TableFragment.FOOT][index]}px`;
          }
      });

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
