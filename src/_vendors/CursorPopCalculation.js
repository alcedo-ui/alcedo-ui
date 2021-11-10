/**
 * @file CursorPopCalculation vendor
 */

import domContains from 'dom-helpers/contains';

import Dom from './Dom';
import Position from '../_statics/Position';

/**
 * @param cursorOffset
 * @returns {*}
 */
function topVerticalBottom(cursorOffset) {
    return cursorOffset.top;
}

/**
 * @param cursorOffset
 * @returns {number}
 */
function topVerticalTop(cursorOffset) {
    return cursorOffset.top;
}

/**
 * @param cursorOffset
 * @returns {*}
 */
function topHorizontalTop(cursorOffset) {
    return cursorOffset.top;
}

/**
 * @param cursorOffset
 * @param popupEl
 * @returns {number}
 */
function topHorizontalMiddle(cursorOffset, popupEl) {
    return cursorOffset.top - popupEl.offsetHeight / 2;
}

/**
 * @param cursorOffset
 * @param popupEl
 * @returns {number}
 */
function topHorizontalBottom(cursorOffset, popupEl) {
    return cursorOffset.top - popupEl.offsetHeight;
}

/**
 * @param cursorOffset
 * @returns {*}
 */
function leftVerticalLeft(cursorOffset) {
    return cursorOffset.left;
}

/**
 * @param cursorOffset
 * @param popupEl
 * @returns {number}
 */
function leftVerticalCenter(cursorOffset, popupEl) {
    return cursorOffset.left - popupEl.offsetWidth / 2;
}

/**
 * @param cursorOffset
 * @param popupEl
 * @returns {number}
 */
function leftVerticalRight(cursorOffset, popupEl) {
    return cursorOffset.left - popupEl.offsetWidth;
}

/**
 * @param cursorOffset
 * @returns {number}
 */
function leftHorizontalLeft(cursorOffset) {
    return cursorOffset.left;
}

/**
 * @param cursorOffset
 * @returns {*}
 */
function leftHorizontalRight(cursorOffset) {
    return cursorOffset.left;
}

/**
 * @param parentEl
 * @param triggerEl
 * @param popupEl
 * @param scrollEl
 * @param position
 * @param cursorOffset
 * @returns {{}}
 */
export function getStyle(parentEl, triggerEl, popupEl, scrollEl, position, cursorOffset) {

    if (!triggerEl || !popupEl) {
        return null;
    }

    const result = {};

    switch (position) {
        case Position.TOP_LEFT: {
            result.left = leftVerticalLeft(cursorOffset);
            result.top = topVerticalTop(cursorOffset);
            break;
        }
        case Position.TOP: {
            result.left = leftVerticalCenter(cursorOffset, popupEl);
            result.top = topVerticalTop(cursorOffset);
            break;
        }
        case Position.TOP_RIGHT: {
            result.left = leftVerticalRight(cursorOffset, popupEl);
            result.top = topVerticalTop(cursorOffset);
            break;
        }
        case Position.BOTTOM_LEFT: {
            result.left = leftVerticalLeft(cursorOffset);
            result.top = topVerticalBottom(cursorOffset);
            break;
        }
        case Position.BOTTOM: {
            result.left = leftVerticalCenter(cursorOffset, popupEl);
            result.top = topVerticalBottom(cursorOffset);
            break;
        }
        case Position.BOTTOM_RIGHT: {
            result.left = leftVerticalRight(cursorOffset, popupEl);
            result.top = topVerticalBottom(cursorOffset);
            break;
        }
        case Position.LEFT_TOP: {
            result.left = leftHorizontalLeft(cursorOffset);
            result.top = topHorizontalTop(cursorOffset);
            break;
        }
        case Position.LEFT: {
            result.left = leftHorizontalLeft(cursorOffset);
            result.top = topHorizontalMiddle(cursorOffset, popupEl);
            break;
        }
        case Position.LEFT_BOTTOM: {
            result.left = leftHorizontalLeft(cursorOffset);
            result.top = topHorizontalBottom(cursorOffset, popupEl);
            break;
        }
        case Position.RIGHT_TOP: {
            result.left = leftHorizontalRight(cursorOffset);
            result.top = topHorizontalTop(cursorOffset);
            break;
        }
        case Position.RIGHT: {
            result.left = leftHorizontalRight(cursorOffset);
            result.top = topHorizontalMiddle(cursorOffset, popupEl);
            break;
        }
        case Position.RIGHT_BOTTOM: {
            result.left = leftHorizontalRight(cursorOffset);
            result.top = topHorizontalBottom(cursorOffset, popupEl);
            break;
        }
        case Position.CENTER: {
            result.left = leftVerticalCenter(cursorOffset, popupEl);
            result.top = topHorizontalMiddle(cursorOffset, popupEl);
            break;
        }
    }

    // to solve the fixed parent element problem
    const closestFixedEl = Dom.getClosestFixed(triggerEl);
    if (closestFixedEl && parentEl && domContains(parentEl, closestFixedEl)) {
        result.position = 'fixed';
    }

    return result;

}

/**
 * @param parentEl
 * @param triggerEl
 * @param popupEl
 * @param scrollEl
 * @param position
 * @param cursorOffset
 */
export function setStyle(parentEl, triggerEl, popupEl, scrollEl, position, cursorOffset) {

    const style = getStyle(parentEl, triggerEl, popupEl, scrollEl, position, cursorOffset);

    if (!style) {
        return;
    }

    popupEl.style.left = style.left + 'px';
    popupEl.style.top = style.top + 'px';

    if (style.position) {
        popupEl.style.position = style.position;
    }

}

export default {
    getStyle,
    setStyle
};
