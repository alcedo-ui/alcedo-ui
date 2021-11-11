/**
 * @file Dom vendor
 */

// Vendors
import domContains from 'dom-helpers/contains';

/**
 * @param el
 * @param parentEl
 * @returns {null|{top: number, left: number}}
 */
export function getOffset(el, parentEl = document.body) {

    if (!el) {
        return null;
    }

    const offset = {
        top: el.offsetTop,
        left: el.offsetLeft
    };

    // Handle offset
    let offsetParent = el.offsetParent;
    while (offsetParent) {

        if (parentEl && offsetParent.contains(parentEl)) {
            break;
        }

        // append layout offset
        offset.top += offsetParent.offsetTop;
        offset.left += offsetParent.offsetLeft;

        // append transform offset
        const transform = window.getComputedStyle(offsetParent).transform;
        const matched = transform.match(/^matrix\((.*)\)$/);
        if (matched && matched[1]) {
            const matrix = matched[1].split(/\s*,\s*/);
            offset.top += +matrix[5];
            offset.left += +matrix[4];
        }

        offsetParent = offsetParent.offsetParent;

    }

    // Handle scroll
    let scrollParent = getClosestScrollable(el.parentElement);
    while (scrollParent) {

        if (parentEl && scrollParent.contains(parentEl)) {
            break;
        }

        // drop scroll offset
        offset.top -= scrollParent.scrollTop;
        offset.left -= scrollParent.scrollLeft;

        scrollParent = getClosestScrollable(scrollParent.parentElement);

    }

    return offset;

}

/**
 * @returns {number}
 */
export function getScrollHeight() {
    return document.body.scrollHeight || document.documentElement.scrollHeight;
}

/**
 * @param parentEl
 * @returns {number|*}
 */
export function getScrollLeft(parentEl) {

    if (window.SCROLL_EL && window.SCROLL_EL.scrollLeft) {
        return window.SCROLL_EL.scrollLeft;
    }

    if (parentEl && parentEl !== document.body) {
        return parentEl.scrollLeft;
    }

    return document.body.scrollLeft || document.documentElement.scrollLeft;

}

/**
 * @param parentEl
 * @returns {number|*}
 */
export function getScrollTop(parentEl) {

    if (window.SCROLL_EL && window.SCROLL_EL.scrollTop) {
        return window.SCROLL_EL.scrollTop;
    }

    if (parentEl && parentEl !== document.body) {
        return parentEl.scrollTop;
    }

    return document.body.scrollTop || document.documentElement.scrollTop;

}

/**
 * @param el
 * @param className
 * @returns {*|boolean}
 */
export function hasClass(el, className) {

    if (!el || !className) {
        return false;
    }

    const elClassName = el.className;

    if (!elClassName) {
        return false;
    }

    const elClass = elClassName.split(/\s+/);

    return elClass && elClass.findIndex(item => item === className) !== -1;

}

/**
 * @param el
 * @param className
 */
export function addClass(el, className) {

    if (!el || !className) {
        return;
    }

    const elClassName = el.className;

    if (!elClassName) {
        el.className = className;
        return;
    }

    const elClass = elClassName.split(/\s+/),
        index = elClass ? elClass.findIndex(item => item === className) : -1;

    if (index !== -1) { // already has this className
        return;
    }

    elClass.push(className);
    el.className = elClass.join(' ');

}

/**
 * @param el
 * @param className
 */
export function removeClass(el, className) {

    if (!el || !className) {
        return;
    }

    const elClassName = el.className;

    if (!elClassName) {
        return;
    }

    const elClass = elClassName.split(/\s+/),
        index = elClass ? elClass.findIndex(item => item === className) : -1;

    if (index === -1) { // no this className
        return;
    }

    elClass.splice(index, 1);
    el.className = elClass.join(' ');

}

/**
 * @param el
 * @param className
 * @param bool
 */
export function toggleClass(el, className, bool) {
    bool ?
        addClass(el, className)
        :
        removeClass(el, className);
}

/**
 * @param el
 * @param className
 * @returns {(() => (Node | null)) | ActiveX.IXMLDOMNode | (Node & ParentNode)}
 */
export function findParentByClassName(el, className) {

    if (!el || !className) {
        return null;
    }

    while (el) {
        if (hasClass(el, className)) {
            return el;
        }
        el = el.parentNode;
    }

    return null;

}

/**
 * @param el
 * @param parentEl
 * @returns {boolean}
 */
export function isParent(el, parentEl) {

    if (!el || !parentEl) {
        return false;
    }

    do {

        el = el.parentNode;

        if (el === parentEl) {
            return true;
        }

    } while (el);

    return false;

}

/**
 * @param values
 * @returns {boolean}
 */
export function isScrollable(...values) {
    return values.some(value => value === 'auto' || value === 'scroll');
}

/**
 * @param el
 * @returns {boolean}
 */
export function isElementScrollable(el) {
    const style = window.getComputedStyle(el);
    return isScrollable(style.overflow, style.overflowY, style.overflowX);
}

/**
 * @param el
 * @returns {null|*}
 */
export function getClosestScrollable(el) {

    if (el == null) {
        return null;
    }

    if (!isElementScrollable(el)) {
        return getClosestScrollable(el.parentElement);
    }

    return el;

}

/**
 * @param el
 * @param scrollEl
 * @returns {{top: number, left: number}}
 */
export function getTotalScrollOffset(el, scrollEl = document.body) {

    const result = {
        left: 0,
        top: 0
    };

    if (!el || !scrollEl) {
        return result;
    }

    while (el && domContains(scrollEl, el)) {
        result.left += el.scrollLeft;
        result.top += el.scrollTop;
        el = el.parentElement;
    }

    return result;

}

/**
 * @param el
 * @returns {boolean}
 */
export function isElementFixed(el) {
    return window.getComputedStyle(el).position === 'fixed';
}

/**
 * @param el
 * @returns {null|*}
 */
export function getClosestFixed(el) {

    if (el == null) {
        return null;
    }

    if (!isElementFixed(el)) {
        return getClosestFixed(el.parentElement);
    }

    return el;

}

export default {
    getOffset,
    getScrollHeight,
    getScrollLeft,
    getScrollTop,
    hasClass,
    addClass,
    removeClass,
    toggleClass,
    findParentByClassName,
    isParent,
    isScrollable,
    isElementScrollable,
    getClosestScrollable,
    getTotalScrollOffset,
    isElementFixed,
    getClosestFixed
};
