/**
 * @file PopupCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

function topVerticalBottom(triggerEl, triggerOffset) {
    return triggerOffset.top + triggerEl.offsetHeight;
}

function topVerticalTop(triggerOffset, popupEl) {
    return triggerOffset.top - popupEl.offsetHeight
        - parseInt(getComputedStyle(popupEl).marginTop)
        - parseInt(getComputedStyle(popupEl).marginBottom);
}

function topHorizontalTop(triggerOffset) {
    return triggerOffset.top;
}

function topHorizontalMiddle(triggerEl, triggerOffset, popupEl) {
    return triggerOffset.top + triggerEl.offsetHeight / 2 - popupEl.offsetHeight / 2;
}

function topHorizontalBottom(triggerEl, triggerOffset, popupEl) {
    return triggerOffset.top + triggerEl.offsetHeight - popupEl.offsetHeight;
}

function leftVerticalLeft(triggerOffset) {
    return triggerOffset.left;
}

function leftVerticalCenter(triggerEl, triggerOffset, popupEl) {
    return triggerOffset.left + triggerEl.offsetWidth / 2 - popupEl.offsetWidth / 2;
}

function leftVerticalRight(triggerEl, triggerOffset, popupEl) {
    return triggerOffset.left - (popupEl.offsetWidth - triggerEl.offsetWidth);
}

function leftHorizontalLeft(triggerOffset, popupEl) {
    return triggerOffset.left - popupEl.offsetWidth
        - parseInt(getComputedStyle(popupEl).marginLeft)
        - parseInt(getComputedStyle(popupEl).marginRight);
}

function leftHorizontalRight(triggerEl, triggerOffset) {
    return triggerOffset.left + triggerEl.offsetWidth;
}

export default {
    topVerticalBottom,
    topVerticalTop,
    topHorizontalTop,
    topHorizontalMiddle,
    topHorizontalBottom,
    leftVerticalLeft,
    leftVerticalCenter,
    leftVerticalRight,
    leftHorizontalLeft,
    leftHorizontalRight
};