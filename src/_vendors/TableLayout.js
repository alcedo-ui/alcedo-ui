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

    const bodyTr = tableEl.querySelector('tbody tr'),
        footTr = tableEl.querySelector('tfoot tr');

    return {
        [TableFragment.BODY]: bodyTr ?
            [].map.call(bodyTr.querySelectorAll('td'), td => td ? td.offsetWidth : 0)
            :
            [],
        [TableFragment.FOOT]: footTr ?
            [].map.call(footTr.querySelectorAll('td'), td => td ? td.offsetWidth : 0)
            :
            []
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

/**
 * mask center body table to hide its fixed head, fixed foot and fixed columns
 * @param wrapperEl
 * @param tableEl
 * @param fixedHeadHeight
 * @param fixedFootHeight
 */
function maskCenterBody(wrapperEl, tableEl, fixedHeadHeight, fixedFootHeight) {
    const el = wrapperEl.querySelector('.table-content-center .scrollable-table-body-mask');
    if (el) {
        el.style.height = `${tableEl.offsetHeight - fixedHeadHeight - fixedFootHeight - 2}px`;
        const table = el.querySelector('table');
        if (table) {
            el.style.width = `${tableEl.offsetWidth}px`;
            table.style.marginTop = `${-fixedHeadHeight - 1}px`;
        }
    }
}

/**
 * fix center head and foot table width
 * @param wrapperEl
 */
function fixCenterTableWidth(wrapperEl) {

    const centerBody = wrapperEl.querySelector('.table-content-center .scrollable-table-body-scroller > table');
    if (!centerBody) {
        return;
    }

    const centerHead = wrapperEl.querySelector('.table-content-center .scrollable-table-head-scroller > table');
    if (centerHead) {
        centerHead.style.width = `${centerBody.offsetWidth}px`;
    }

    const centerFoot = wrapperEl.querySelector('.table-content-center .scrollable-table-foot-scroller > table');
    if (centerFoot) {
        centerFoot.style.width = `${centerBody.offsetWidth}px`;
    }

}

/**
 * fix head, body or foot columns width according to the center body table columns width
 * @param wrapperEl
 * @param columnsWidth
 * @param fixed
 * @param fragment
 * @param selector
 */
function fixTableFragmentColumnsWidth(wrapperEl, columnsWidth, fixed, fragment, selector) {

    const el = wrapperEl.querySelector(`${selector} .scrollable-table-${fragment}-scroller`);

    if (el) {
        const cols = el.querySelectorAll('col');
        if (cols) {
            if (fixed === HorizontalAlign.RIGHT) {
                cols.forEach((el, index) => {
                    if (el) {
                        el.style.width = `${columnsWidth
                            [columnsWidth.length - (cols.length - index)]}px`;
                    }
                });
            } else {
                cols.forEach((el, index) => {
                    if (el) {
                        el.style.width = `${columnsWidth[index]}px`;
                    }
                });
            }
        }
    }

}

/**
 * fix table columns width, including head, body and foot
 * @param wrapperEl
 * @param columnsWidth
 * @param fixed
 * @param props
 */
function fixTableColumnsWidth(wrapperEl, columnsWidth, fixed, props) {

    if (!wrapperEl) {
        return;
    }

    const selector = `.table-content-${fixed || 'center'}`;

    /**
     * head
     */
    if (props && props.isHeadFixed) {
        fixTableFragmentColumnsWidth(wrapperEl, columnsWidth[TableFragment.BODY], fixed, TableFragment.HEAD, selector);
    }

    /**
     * body
     */
    if (fixed) {
        fixTableFragmentColumnsWidth(wrapperEl, columnsWidth[TableFragment.BODY], fixed, TableFragment.BODY, selector);
    }

    /**
     * foot
     */
    if (props && props.isHeadFixed) {
        fixTableFragmentColumnsWidth(wrapperEl, columnsWidth[TableFragment.FOOT], fixed, TableFragment.FOOT, selector);
    }

}

/**
 * fix head, body or foot rows height according to the center body table rows height
 * @param wrapperEl
 * @param rowsHeight
 * @param fixed
 * @param fragment
 * @param selector
 */
function fixTableFragmentRowsHeight(wrapperEl, rowsHeight, fixed, fragment, selector) {

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

/**
 * fix table rows height, including head, body and foot
 * @param wrapperEl
 * @param rowsHeight
 * @param fixed
 * @param props
 */
function fixTableRowsHeight(wrapperEl, rowsHeight, fixed, props) {

    if (!wrapperEl) {
        return;
    }

    const selector = `.table-content-${fixed || 'center'}`;

    /**
     * head
     */
    if (props && props.isHeadFixed) {
        fixTableFragmentRowsHeight(wrapperEl, rowsHeight, fixed, TableFragment.HEAD, selector);
    }

    /**
     * body
     */
    if (fixed) {
        fixTableFragmentRowsHeight(wrapperEl, rowsHeight, fixed, TableFragment.BODY, selector);
    }

    /**
     * foot
     */
    if (props && props.isHeadFixed) {
        fixTableFragmentRowsHeight(wrapperEl, rowsHeight, fixed, TableFragment.FOOT, selector);
    }

}

/**
 * fix horizontal scroll style, including fixed head, fixed foot, and fixed columns table body
 * @param el
 * @param shouldScroll
 * @param size
 */
function fixHorizontalScrollStyle(el, shouldScroll, size = ScrollBar.getSize(Direction.HORIZONTAL)) {

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

/**
 * fix horizontal scroll
 * @param wrapperEl
 * @param props
 */

function fixTableHorizontalScroll(wrapperEl, props) {

    if (!wrapperEl) {
        return;
    }

    // no need to fix the scroll problem in mac
    const horizontalScrollBarSize = ScrollBar.getSize(Direction.HORIZONTAL);
    if (!horizontalScrollBarSize || horizontalScrollBarSize <= 0) {
        return;
    }

    const centerBodyScroller = wrapperEl.querySelector('.table-content-center .scrollable-table-body-scroller'),
        shouldScroll = centerBodyScroller.offsetWidth - horizontalScrollBarSize < centerBodyScroller.scrollWidth;

    /**
     * center head scroller
     */
    if (props && props.isHeadFixed) {
        const centerHeadScroller = wrapperEl.querySelector('.table-content-center .scrollable-table-head-scroller');
        if (centerHeadScroller) {
            fixHorizontalScrollStyle(centerHeadScroller, shouldScroll, horizontalScrollBarSize);
        }
    }

    /**
     * center foot scroller
     */
    if (props && props.isFootFixed) {
        const centerFoot = wrapperEl.querySelector('.table-content-center .scrollable-table-foot-scroller');
        if (centerFoot) {
            fixHorizontalScrollStyle(centerFoot, shouldScroll, horizontalScrollBarSize);
        }
    }

    /**
     * left body scroller
     */
    const leftBody = wrapperEl.querySelector('.table-content-left .scrollable-table-body-scroller');
    if (leftBody) {
        fixHorizontalScrollStyle(leftBody, shouldScroll, horizontalScrollBarSize);
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
        fixHorizontalScrollStyle(rightBody, shouldScroll, horizontalScrollBarSize);
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

/**
 * fix vertical scroll
 * @param wrapperEl
 * @param props
 */
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

/**
 * fix table layout
 * @param wrapperEl
 * @param props
 */
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
    fixCenterTableWidth(wrapperEl);
    maskCenterBody(wrapperEl, tableEl, fixedHeadHeight, fixedFootHeight);
    fixTableColumnsWidth(wrapperEl, columnsWidth, null, props);
    fixTableRowsHeight(wrapperEl, rowsHeight, null, props);

    /**
     * left
     */
    fixTableColumnsWidth(wrapperEl, columnsWidth, HorizontalAlign.LEFT, props);
    fixTableRowsHeight(wrapperEl, rowsHeight, HorizontalAlign.LEFT, props);

    /**
     * right
     */
    fixTableColumnsWidth(wrapperEl, columnsWidth, HorizontalAlign.RIGHT, props);
    fixTableRowsHeight(wrapperEl, rowsHeight, HorizontalAlign.RIGHT, props);

    /**
     * fix vertical scroll style
     */
    fixTableVerticalScroll(wrapperEl, props);

}

/**
 * update scroll class names when horizontal scrolling
 * @param wrapperEl
 * @param scrollerEl
 */
function updateHorizontalScrollClassNames(wrapperEl, scrollerEl) {

    if (!wrapperEl || !scrollerEl) {
        return;
    }

    removeClass(wrapperEl, 'scroll-left');
    removeClass(wrapperEl, 'scroll-center');
    removeClass(wrapperEl, 'scroll-right');

    const {scrollWidth, offsetWidth, scrollLeft} = scrollerEl,
        verticalScrollBarSize = ScrollBar.getSize(Direction.VERTICAL);

    // no scroll
    if (scrollWidth === offsetWidth - verticalScrollBarSize) {
        return;
    }

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
