/**
 * @file TableLayout vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import sum from 'lodash/sum';
import addClass from 'dom-helpers/class/addClass';
import removeClass from 'dom-helpers/class/removeClass';

import TableFragment from '../_statics/TableFragment';
import HorizontalAlign from '../_statics/HorizontalAlign';
import Direction from '../_statics/Direction';
import ScrollBar from './ScrollBar';

/**
 * whether a table has a fixed head or a fixed foot or fixed left columns or fixed right columns
 * @param props
 * @param columns
 * @returns {boolean}
 */
function hasFixed(props, columns) {

    if (props && (props.isHeadFixed || props.isFootFixed)) {
        return true;
    }

    if (!columns) {
        return false;
    }

    if ((columns[HorizontalAlign.LEFT] && columns[HorizontalAlign.LEFT].length > 0)
        || (columns[HorizontalAlign.RIGHT] && columns[HorizontalAlign.RIGHT].length > 0)) {
        return true;
    }

    return false;

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
        [TableFragment.HEAD]: [].map.call(tableEl.querySelector('thead tr').querySelectorAll('th'),
            el => el.offsetWidth),
        [TableFragment.BODY]: [].map.call(tableEl.querySelector('tbody tr').querySelectorAll('td'),
            el => el.offsetWidth),
        [TableFragment.FOOT]: [].map.call(tableEl.querySelector('tfoot tr').querySelectorAll('td'),
            el => el.offsetWidth)
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

function maskCenterBody(wrapperEl, tableEl, fixedHeadHeight, fixedFootHeight) {
    const el = wrapperEl.querySelector('.table-content-center .scrollable-table-body-mask');
    if (el) {
        el.style.height = `${tableEl.offsetHeight - fixedHeadHeight - fixedFootHeight - 2}px`;
        const table = el.querySelector('table');
        if (table) {
            table.style.marginTop = `${-fixedHeadHeight - 1}px`;
        }
    }
}

function fixFragmentWidth(wrapperEl, columnsWidth, fixed, fragment, selector) {

    const el = wrapperEl.querySelector(`${selector} .scrollable-table-${fragment}-scroller`);

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

function fixTableWidth(wrapperEl, columnsWidth, fixed, props) {

    if (!wrapperEl) {
        return;
    }

    const selector = `.table-content-${fixed || 'center'}`;

    /**
     * head
     */
    if (props && props.isHeadFixed) {
        fixFragmentWidth(wrapperEl, columnsWidth, fixed, TableFragment.HEAD, selector);
    }

    /**
     * body
     */
    if (fixed) {
        fixFragmentWidth(wrapperEl, columnsWidth, fixed, TableFragment.BODY, selector);
    }

    /**
     * foot
     */
    if (props && props.isHeadFixed) {
        fixFragmentWidth(wrapperEl, columnsWidth, fixed, TableFragment.FOOT, selector);
    }

}

function fixFragmentHeight(wrapperEl, rowsHeight, fixed, fragment, selector) {

    const el = wrapperEl.querySelector(`${selector} .scrollable-table-${fragment} t${fragment}`);

    if (el) {
        const trs = el.querySelectorAll('tr');
        if (trs) {
            trs.forEach((el, index) => {
                if (el) {
                    el.style.height = `${rowsHeight[fragment][index]}px`;
                }
            });
        }
    }

}

function fixTableHeight(wrapperEl, rowsHeight, fixed, props) {

    if (!wrapperEl) {
        return;
    }

    const selector = `.table-content-${fixed || 'center'}`;

    /**
     * head
     */
    if (props && props.isHeadFixed) {
        fixFragmentHeight(wrapperEl, rowsHeight, fixed, TableFragment.HEAD, selector);
    }

    /**
     * body
     */
    if (fixed) {
        fixFragmentHeight(wrapperEl, rowsHeight, fixed, TableFragment.BODY, selector);
    }

    /**
     * foot
     */
    if (props && props.isHeadFixed) {
        fixFragmentHeight(wrapperEl, rowsHeight, fixed, TableFragment.FOOT, selector);
    }

}

function handleHorizontalScrollStyle(el, shouldScroll, size = ScrollBar.getSize(Direction.HORIZONTAL)) {

    if (!el) {
        return;
    }

    if (!shouldScroll) {
        el.style.marginBottom = 0;
        el.style.paddingBottom = 0;
    } else if (size && size > 0) {
        el.style.marginBottom = `${-size}px`;
        el.style.paddingBottom = 0;
    } else {
        el.style.marginBottom = '-20px';
        el.style.paddingBottom = '20px';
    }

}

function fixTableHorizontalScroll(wrapperEl, props) {

    if (!wrapperEl) {
        return;
    }

    // no need to fix the scroll problem in mac
    const horizontalScrollBarSize = ScrollBar.getSize(Direction.HORIZONTAL);
    if (!horizontalScrollBarSize || horizontalScrollBarSize <= 0) {
        return;
    }

    const centerBody = wrapperEl.querySelector('.table-content-center .scrollable-table-body-scroller'),
        shouldScroll = centerBody.offsetWidth - horizontalScrollBarSize < centerBody.scrollWidth;

    /**
     * center head scroller
     */
    if (props && props.isHeadFixed) {
        const centerHead = wrapperEl.querySelector('.table-content-center .scrollable-table-head-scroller');
        if (centerHead) {
            handleHorizontalScrollStyle(centerHead, shouldScroll, horizontalScrollBarSize);
        }
    }

    /**
     * center foot scroller
     */
    if (props && props.isFootFixed) {
        const centerFoot = wrapperEl.querySelector('.table-content-center .scrollable-table-foot-scroller');
        if (centerFoot) {
            handleHorizontalScrollStyle(centerFoot, shouldScroll, horizontalScrollBarSize);
        }
    }

    /**
     * left body scroller
     */
    const leftBody = wrapperEl.querySelector('.table-content-left .scrollable-table-body-scroller');
    if (leftBody) {
        handleHorizontalScrollStyle(leftBody, shouldScroll, horizontalScrollBarSize);
    }

    /**
     * left body mask
     */
    const leftBodyMask = wrapperEl.querySelector('.table-content-left .scrollable-table-body-mask');
    if (leftBodyMask) {
        leftBodyMask.style.paddingBottom = shouldScroll ? `${horizontalScrollBarSize}px` : 0;
    }

    /**
     * left foot
     */
    const leftFoot = wrapperEl.querySelector('.table-content-left .scrollable-table-foot');
    if (leftFoot) {
        leftFoot.style.marginTop = shouldScroll ? `${horizontalScrollBarSize}px` : 0;
    }

    /**
     * right body scroller
     */
    const rightBody = wrapperEl.querySelector('.table-content-right .scrollable-table-body-scroller');
    if (rightBody) {
        handleHorizontalScrollStyle(rightBody, shouldScroll, horizontalScrollBarSize);
    }

    /**
     * right body mask
     */
    const rightBodyMask = wrapperEl.querySelector('.table-content-right .scrollable-table-body-mask');
    if (rightBodyMask) {
        rightBodyMask.style.paddingBottom = shouldScroll ? `${horizontalScrollBarSize}px` : 0;
    }

    /**
     * right foot
     */
    const rightFoot = wrapperEl.querySelector('.table-content-right .scrollable-table-foot');
    if (rightFoot) {
        rightFoot.style.marginTop = shouldScroll ? `${horizontalScrollBarSize}px` : 0;
    }

}

function fixTableVerticalScroll(wrapperEl, props) {

    if (!wrapperEl) {
        return;
    }

    const verticalScrollBarSize = ScrollBar.getSize(Direction.VERTICAL);

    /**
     * fix center head width
     */
    if (props && props.isHeadFixed && verticalScrollBarSize && verticalScrollBarSize > 0) {
        const centerHead = wrapperEl.querySelector('.table-content-center .scrollable-table-head-scroller');
        if (centerHead) {
            centerHead.style.width = `calc(100% - ${verticalScrollBarSize}px)`;
        }
    }

    /**
     * fix center foot width
     */
    if (props && props.isFootFixed && verticalScrollBarSize && verticalScrollBarSize > 0) {
        const centerFoot = wrapperEl.querySelector('.table-content-center .scrollable-table-foot-scroller');
        if (centerFoot) {
            centerFoot.style.width = `calc(100% - ${verticalScrollBarSize}px)`;
        }
    }

    /**
     * fix left body horizontal scroll bar
     */
    const leftBody = wrapperEl.querySelector('.table-content-left .scrollable-table-body-scroller');
    if (leftBody) {
        if (verticalScrollBarSize && verticalScrollBarSize > 0) {
            leftBody.style.marginRight = `-${verticalScrollBarSize}px`;
            leftBody.style.paddingRight = 0;
        } else {
            const leftBodyTable = leftBody.querySelector('table');
            if (leftBodyTable) {
                const restWidth = wrapperEl.offsetWidth - leftBodyTable.offsetWidth;
                leftBody.style.marginRight = `-${restWidth}px`;
                leftBody.style.paddingRight = `${restWidth}px`;
            }
        }
    }

}

function fixLayout(wrapperEl, props) {

    if (!wrapperEl) {
        return;
    }

    const tableEl = wrapperEl.querySelector('.table-content-center .scrollable-table-body table');

    if (!tableEl) {
        return;
    }

    const columnsWidth = getColumnsWidth(tableEl),
        rowsHeight = getRowsHeight(tableEl),

        fixedHeadHeight = sum(rowsHeight[TableFragment.HEAD]) || 0,
        fixedFootHeight = sum(rowsHeight[TableFragment.FOOT]) || 0;

    /**
     * fix horizontal scroll style
     */
    fixTableHorizontalScroll(wrapperEl, props);

    /**
     * center
     */
    maskCenterBody(wrapperEl, tableEl, fixedHeadHeight, fixedFootHeight);
    fixTableWidth(wrapperEl, columnsWidth, null, props);
    fixTableHeight(wrapperEl, rowsHeight, null, props);

    /**
     * left
     */
    fixTableWidth(wrapperEl, columnsWidth, HorizontalAlign.LEFT, props);
    fixTableHeight(wrapperEl, rowsHeight, HorizontalAlign.LEFT, props);

    /**
     * right
     */
    fixTableWidth(wrapperEl, columnsWidth, HorizontalAlign.RIGHT, props);
    fixTableHeight(wrapperEl, rowsHeight, HorizontalAlign.RIGHT, props);

    /**
     * fix vertical scroll style
     */
    fixTableVerticalScroll(wrapperEl, props);

}

function updateHorizontalScrollClassNames(wrapperEl, scrollerEl) {

    if (!wrapperEl || !scrollerEl) {
        return;
    }

    removeClass(wrapperEl, 'scroll-left');
    removeClass(wrapperEl, 'scroll-center');
    removeClass(wrapperEl, 'scroll-right');

    const {scrollWidth, offsetWidth, scrollLeft} = scrollerEl,
        verticalScrollBarSize = ScrollBar.getSize(Direction.VERTICAL);

    if (scrollLeft === 0) {
        addClass(wrapperEl, 'scroll-left');
    } else if (scrollLeft === scrollWidth - offsetWidth + verticalScrollBarSize) {
        addClass(wrapperEl, 'scroll-right');
    } else {
        addClass(wrapperEl, 'scroll-center');
    }

}

export default {
    hasFixed,
    getColumnsWidth,
    getRowsHeight,
    getbodyScollerHeight,
    fixLayout,
    updateHorizontalScrollClassNames
};
