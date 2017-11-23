/**
 * @file PopupCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import Dom from './Dom';
import Position from '../_statics/Position';

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

function getStyle(triggerEl, popupEl, position) {

    if (!triggerEl || !popupEl) {
        return;
    }

    const triggerOffset = Dom.getOffset(triggerEl);
    let left, top;

    switch (position) {
        case Position.TOP_LEFT: {
            left = leftVerticalLeft(triggerOffset);
            top = topVerticalTop(triggerOffset, popupEl);
            break;
        }
        case Position.TOP: {
            left = leftVerticalCenter(triggerEl, triggerOffset, popupEl);
            top = topVerticalTop(triggerOffset, popupEl);
            break;
        }
        case Position.TOP_RIGHT: {
            left = leftVerticalRight(triggerEl, triggerOffset, popupEl);
            top = topVerticalTop(triggerOffset, popupEl);
            break;
        }
        case Position.BOTTOM_LEFT: {
            left = leftVerticalLeft(triggerOffset);
            top = topVerticalBottom(triggerEl, triggerOffset);
            break;
        }
        case Position.BOTTOM: {
            left = leftVerticalCenter(triggerEl, triggerOffset, popupEl);
            top = topVerticalBottom(triggerEl, triggerOffset);
            break;
        }
        case Position.BOTTOM_RIGHT: {
            left = leftVerticalRight(triggerEl, triggerOffset, popupEl);
            top = topVerticalBottom(triggerEl, triggerOffset);
            break;
        }
        case Position.LEFT_TOP: {
            left = leftHorizontalLeft(triggerOffset, popupEl);
            top = topHorizontalTop(triggerOffset);
            break;
        }
        case Position.LEFT: {
            left = leftHorizontalLeft(triggerOffset, popupEl);
            top = topHorizontalMiddle(triggerEl, triggerOffset, popupEl);
            break;
        }
        case Position.LEFT_BOTTOM: {
            left = leftHorizontalLeft(triggerOffset, popupEl);
            top = topHorizontalBottom(triggerEl, triggerOffset, popupEl);
            break;
        }
        case Position.RIGHT_TOP: {
            left = leftHorizontalRight(triggerEl, triggerOffset);
            top = topHorizontalTop(triggerOffset);
            break;
        }
        case Position.RIGHT: {
            left = leftHorizontalRight(triggerEl, triggerOffset);
            top = topHorizontalMiddle(triggerEl, triggerOffset, popupEl);
            break;
        }
        case Position.RIGHT_BOTTOM: {
            left = leftHorizontalRight(triggerEl, triggerOffset);
            top = topHorizontalBottom(triggerEl, triggerOffset, popupEl);
            break;
        }
    }

    return {left, top};

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
    leftHorizontalRight,
    getStyle
};