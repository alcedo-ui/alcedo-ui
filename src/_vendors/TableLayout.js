/**
 * @file TableLayout vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import sum from 'lodash/sum';
import hasClass from 'dom-helpers/class/hasClass';
import addClass from 'dom-helpers/class/addClass';
import removeClass from 'dom-helpers/class/removeClass';

import TableFragment from '../_statics/TableFragment';
import HorizontalAlign from '../_statics/HorizontalAlign';
import Direction from '../_statics/Direction';
import ScrollBar from './ScrollBar';

import Valid from './Valid';

/**
 * whether a table has a fixed head or a fixed foot or fixed left columns or fixed right columns
 * @param props
 * @param columns
 * @returns {boolean}
 */
function hasFixed(props, config) {

    if (props && (props.isHeadFixed || props.isFootFixed)) {
        return true;
    }

    if (config && (config.hasFixedLeftColumn || config.hasFixedRightColumn)) {
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

    const maskEl = wrapperEl.querySelector('.table-content-center .scroll-table-body-mask');

    if (maskEl) {
        maskEl.style.height = `${Valid.range(tableEl.offsetHeight - fixedHeadHeight - fixedFootHeight - 1, 0)}px`;
        if (tableEl) {
            tableEl.style.marginTop = `${-fixedHeadHeight - 1}px`;
            maskEl.style.width = 'auto';
            maskEl.style.width = `${tableEl.offsetWidth}px`;
        }
    }

}

/**
 * fix center head and foot table width
 * @param wrapperEl
 */
function fixCenterTableWidth(wrapperEl) {

    const centerBody = wrapperEl.querySelector('.table-content-center .scroll-table-body-scroller table');
    if (!centerBody) {
        return;
    }

    const centerHead = wrapperEl.querySelector('.table-content-center .scroll-table-head-scroller table');
    if (centerHead) {
        centerHead.style.width = `${centerBody.offsetWidth}px`;
    }

    const centerFoot = wrapperEl.querySelector('.table-content-center .scroll-table-foot-scroller table');
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

    const el = wrapperEl.querySelector(`${selector} .scroll-table-${fragment}-scroller`);

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
function fixTableFragmentRowsHeight(wrapperEl, rowsHeight, fixed, fragment, subFragment, selector) {

    const el = wrapperEl.querySelector(`${selector} .scroll-table-${fragment} t${subFragment}`);

    if (el) {
        const trs = el.querySelectorAll('tr');
        if (trs) {
            trs.forEach((el, index) => {
                if (el) {
                    el.style.height = `${rowsHeight[subFragment][index]}px`;
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
        fixTableFragmentRowsHeight(wrapperEl, rowsHeight, fixed, TableFragment.HEAD, TableFragment.HEAD, selector);
    }

    /**
     * body
     */
    if (fixed) {
        fixTableFragmentRowsHeight(wrapperEl, rowsHeight, fixed, TableFragment.BODY, TableFragment.HEAD, selector);
        fixTableFragmentRowsHeight(wrapperEl, rowsHeight, fixed, TableFragment.BODY, TableFragment.BODY, selector);
        fixTableFragmentRowsHeight(wrapperEl, rowsHeight, fixed, TableFragment.BODY, TableFragment.FOOT, selector);
    }

    /**
     * foot
     */
    if (props && props.isHeadFixed) {
        fixTableFragmentRowsHeight(wrapperEl, rowsHeight, fixed, TableFragment.FOOT, TableFragment.FOOT, selector);
    }

}

/**
 * fix horizontal scroll style, including fixed head, fixed foot, and fixed columns table body
 * @param el
 * @param shouldScroll
 * @param size
 */
function fixHorizontalScrollStyle(el, size = ScrollBar.getSize(Direction.HORIZONTAL)) {

    if (!el) {
        return;
    }

    if (size && size > 0) {
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

    // const centerBodyScroller = wrapperEl.querySelector('.table-content-center .scroll-table-body-scroller'),
    //     shouldScroll = centerBodyScroller.offsetWidth - horizontalScrollBarSize < centerBodyScroller.scrollWidth;

    /**
     * center head scroller
     */
    if (props && props.isHeadFixed) {
        const centerHeadScroller = wrapperEl.querySelector('.table-content-center .scroll-table-head-scroller');
        if (centerHeadScroller) {
            fixHorizontalScrollStyle(centerHeadScroller, horizontalScrollBarSize);
        }
    }

    /**
     * center foot scroller
     */
    if (props && props.isFootFixed) {
        const centerFoot = wrapperEl.querySelector('.table-content-center .scroll-table-foot-scroller');
        if (centerFoot) {
            fixHorizontalScrollStyle(centerFoot, horizontalScrollBarSize);
        }
    }

    /**
     * left body scroller
     */
    const leftBody = wrapperEl.querySelector('.table-content-left .scroll-table-body-scroller');
    if (leftBody) {
        fixHorizontalScrollStyle(leftBody, horizontalScrollBarSize);
    }

    /**
     * left body mask
     */
    const leftBodyMask = wrapperEl.querySelector('.table-content-left .scroll-table-body-mask');
    if (leftBodyMask) {
        leftBodyMask.style.paddingBottom = `${horizontalScrollBarSize}px`;
    }

    /**
     * left foot
     */
    const leftFoot = wrapperEl.querySelector('.table-content-left .scroll-table-foot');
    if (leftFoot) {
        leftFoot.style.marginTop = `${horizontalScrollBarSize}px`;
    }

    /**
     * right body scroller
     */
    const rightBody = wrapperEl.querySelector('.table-content-right .scroll-table-body-scroller');
    if (rightBody) {
        fixHorizontalScrollStyle(rightBody, horizontalScrollBarSize);
    }

    /**
     * right body mask
     */
    const rightBodyMask = wrapperEl.querySelector('.table-content-right .scroll-table-body-mask');
    if (rightBodyMask) {
        rightBodyMask.style.paddingBottom = `${horizontalScrollBarSize}px`;
    }

    /**
     * right foot
     */
    const rightFoot = wrapperEl.querySelector('.table-content-right .scroll-table-foot');
    if (rightFoot) {
        rightFoot.style.marginTop = `${horizontalScrollBarSize}px`;
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
    // if (props && props.isHeadFixed && verticalScrollBarSize && verticalScrollBarSize > 0) {
    //     const centerHead = wrapperEl.querySelector('.table-content-center .scroll-table-head-scroller');
    //     if (centerHead) {
    //         centerHead.style.width = `calc(100% - ${verticalScrollBarSize}px)`;
    //     }
    // }

    /**
     * fix center foot width
     */
    // if (props && props.isFootFixed && verticalScrollBarSize && verticalScrollBarSize > 0) {
    //     const centerFoot = wrapperEl.querySelector('.table-content-center .scroll-table-foot-scroller');
    //     if (centerFoot) {
    //         centerFoot.style.width = `calc(100% - ${verticalScrollBarSize}px)`;
    //     }
    // }

    /**
     * fix left body horizontal scroll bar
     */
    const leftBodyScroller = wrapperEl.querySelector('.table-content-left .scroll-table-body-scroller');
    if (leftBodyScroller) {

        // has vertical scroll bar width, like windows
        if (verticalScrollBarSize && verticalScrollBarSize > 0) {
            // only fix when has vertical scroll
            if (leftBodyScroller.offsetHeight < leftBodyScroller.scrollHeight) {
                leftBodyScroller.style.paddingRight = 0;
                leftBodyScroller.style.marginRight = `-${verticalScrollBarSize}px`;
            }
        }

        // no vertical scroll bar width, like mac
        else {
            const leftBodyTable = leftBodyScroller.querySelector('table');
            if (leftBodyTable) {
                const restWidth = wrapperEl.offsetWidth - leftBodyTable.offsetWidth;
                leftBodyScroller.style.marginRight = `-${restWidth}px`;
                leftBodyScroller.style.paddingRight = `${restWidth}px`;
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

    const tableEl = wrapperEl.querySelector('.table-content-center .scroll-table-body table');

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
    if (props && (props.isHeadFixed || props.isFootFixed)) {
        maskCenterBody(wrapperEl, tableEl, fixedHeadHeight, fixedFootHeight);
    }
    fixCenterTableWidth(wrapperEl);
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

    const verticalScrollBarSize = scrollerEl.offsetHeight < scrollerEl.scrollHeight ?
        ScrollBar.getSize(Direction.VERTICAL)
        :
        0;

    removeClass(wrapperEl, 'scroll-left');
    removeClass(wrapperEl, 'scroll-center');
    removeClass(wrapperEl, 'scroll-right');

    // no scroll
    if (scrollerEl.scrollWidth + verticalScrollBarSize === scrollerEl.offsetWidth) {
        return;
    }

    if (scrollerEl.scrollLeft === 0 && !hasClass(wrapperEl, 'scroll-left')) {
        removeClass(wrapperEl, 'scroll-center');
        removeClass(wrapperEl, 'scroll-right');
        addClass(wrapperEl, 'scroll-left');
    } else if (
        scrollerEl.scrollLeft === scrollerEl.scrollWidth - scrollerEl.offsetWidth + verticalScrollBarSize
        && !hasClass(wrapperEl, 'scroll-right')
    ) {
        removeClass(wrapperEl, 'scroll-left');
        removeClass(wrapperEl, 'scroll-center');
        addClass(wrapperEl, 'scroll-right');
    } else if (!hasClass(wrapperEl, 'scroll-center')) {
        removeClass(wrapperEl, 'scroll-left');
        removeClass(wrapperEl, 'scroll-right');
        addClass(wrapperEl, 'scroll-center');
    }

}

/**
 * return scroll styles
 * @param scroll
 * @returns {{verticalScrollStyle: null, horizontalScrollStyle: null}}
 */
function getScrollerStyle(scroll) {

    const result = {
        horizontalScrollStyle: null,
        verticalScrollStyle: null
    };

    if (!scroll) {
        return result;
    }

    if ('width' in scroll) {

        if (!result.horizontalScrollStyle) {
            result.horizontalScrollStyle = {};
        }

        result.horizontalScrollStyle.minWidth = scroll.width;

    }

    if ('height' in scroll) {

        if (!result.verticalScrollStyle) {
            result.verticalScrollStyle = {};
        }

        result.verticalScrollStyle.height = scroll.height;

    }

    if ('maxHeight' in scroll) {

        if (!result.verticalScrollStyle) {
            result.verticalScrollStyle = {};
        }

        result.verticalScrollStyle.maxHeight = scroll.maxHeight;

    }

    return result;

}

export default {
    hasFixed,
    getColumnsWidth,
    getRowsHeight,
    getbodyScollerHeight,
    fixLayout,
    updateHorizontalScrollClassNames,
    getScrollerStyle
};
