import contains from 'dom-helpers/query/contains';

/**
 * @file Dom vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

function getOffset(el, parentEl) {

    if (!el) {
        return null;
    }

    // if (el.getBoundingClientRect) {
    //
    //     const result = el.getBoundingClientRect();
    //
    //     // console.log(getScrollLeft());
    //
    //     return {
    //         top: result.top + getScrollTop(),
    //         left: result.left + getScrollLeft()
    //     };
    //
    // }

    let offset = {
        top: el.offsetTop,
        left: el.offsetLeft
    };

    while (el.offsetParent) {

        if (parentEl && el.offsetParent.contains(parentEl)) {
            break;
        }

        el = el.offsetParent;

        // if (parentEl && parentEl !== document.body) {
        //     offset.top = offset.top - getScrollTop(parentEl);
        //     offset.left = offset.left - getScrollLeft(parentEl);
        //     break;
        // }

        offset.top += el.offsetTop;
        offset.left += el.offsetLeft;

    }

    return offset;

}

function getScrollHeight() {
    return document.body.scrollHeight || document.documentElement.scrollHeight;
}

function getScrollLeft(parentEl) {

    if (window.SCROLL_EL && window.SCROLL_EL.scrollLeft) {
        return SCROLL_EL.scrollLeft;
    }

    if (parentEl && parentEl !== document.body) {
        return parentEl.scrollLeft;
    }

    return document.body.scrollLeft || document.documentElement.scrollLeft;

}

function getScrollTop(parentEl) {

    if (window.SCROLL_EL && window.SCROLL_EL.scrollTop) {
        return SCROLL_EL.scrollTop;
    }

    if (parentEl && parentEl !== document.body) {
        return parentEl.scrollTop;
    }

    return document.body.scrollTop || document.documentElement.scrollTop;

}

function hasClass(el, className) {

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

function addClass(el, className) {

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

function removeClass(el, className) {

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

function toggleClass(el, className, bool) {
    bool ?
        addClass(el, className)
        :
        removeClass(el, className);
}

function findParentByClassName(el, className) {

    if (!el || !className) {
        return;
    }

    while (el) {
        if (hasClass(el, className)) {
            return el;
        }
        el = el.parentNode;
    }

    return;

}

function isParent(el, parentEl) {

    if (!el || !parentEl) {
        return false;
    }

    do {

        el = el.parentNode;

        if (el == parentEl) {
            return true;
        }

    } while (el);

    return false;

}

function isScrollable(...values) {
    return values.some(value => value === 'auto' || value === 'scroll');
}

function isElementScrollable(el) {
    const style = window.getComputedStyle(el);
    return isScrollable(style.overflow, style.overflowY, style.overflowX);
};

function getClosestScrollable(el) {

    if (el == null) {
        return null;
    }

    if (!isElementScrollable(el)) {
        return getClosestScrollable(el.parentElement);
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
    getClosestScrollable
};
