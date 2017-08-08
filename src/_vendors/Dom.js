function getOffset(el) {

    if (!el) {
        return null;
    }

    if (el.getBoundingClientRect) {
        return el.getBoundingClientRect();
    }

    let offset = {
        top: el.offsetTop,
        left: el.offsetLeft
    };
    while (el.offsetParent) {
        el = el.offsetParent;
        offset.top += el.offsetTop;
        offset.left += el.offsetLeft;
    }

    return offset;

}

function getScrollHeight() {
    return document.body.scrollHeight || document.documentElement.scrollHeight;
}

function getScrollTop() {

    if (window.SCROLL_EL && window.SCROLL_EL.scrollTop) {
        return SCROLL_EL.scrollTop;
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

    return elClass.findIndex(item => item === className) !== -1;

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
        index = elClass.findIndex(item => item === className);

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
        index = elClass.findIndex(item => item === className);

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

function findParent(el, className) {

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

export default {
    getOffset,
    getScrollHeight,
    getScrollTop,
    hasClass,
    addClass,
    removeClass,
    toggleClass,
    findParent
};