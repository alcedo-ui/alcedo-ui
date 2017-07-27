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

export default {
    getOffset,
    getScrollHeight,
    getScrollTop
};