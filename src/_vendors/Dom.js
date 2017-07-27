function getOffset(el) {

    if (!el) {
        return null;
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
    findParent
};