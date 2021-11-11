/**
 * @file CursorPopCalculation vendor
 */

import domContains from 'dom-helpers/contains';

import Dom from './Dom';
import Position from '../_statics/Position';

/**
 * @param triggerOffset
 * @param cursorOffset
 * @returns {*}
 */
function topVerticalBottom(triggerOffset, cursorOffset) {
    return triggerOffset.top + cursorOffset.top;
}

/**
 * @param triggerOffset
 * @param cursorOffset
 * @param popupEl
 * @returns {number}
 */
function topVerticalTop(triggerOffset, cursorOffset, popupEl) {
    return triggerOffset.top + cursorOffset.top - popupEl.offsetHeight
        - parseInt(getComputedStyle(popupEl).marginTop, 10)
        - parseInt(getComputedStyle(popupEl).marginBottom, 10);
}

/**
 * @param triggerOffset
 * @param cursorOffset
 * @returns {*}
 */
function topHorizontalTop(triggerOffset, cursorOffset) {
    return triggerOffset.top + cursorOffset.top;
}

/**
 * @param triggerOffset
 * @param cursorOffset
 * @param popupEl
 * @returns {number}
 */
function topHorizontalMiddle(triggerOffset, cursorOffset, popupEl) {
    return triggerOffset.top + cursorOffset.top - popupEl.offsetHeight / 2;
}

/**
 * @param triggerOffset
 * @param cursorOffset
 * @param popupEl
 * @returns {number}
 */
function topHorizontalBottom(triggerOffset, cursorOffset, popupEl) {
    return triggerOffset.top + cursorOffset.top - popupEl.offsetHeight;
}

/**
 * @param triggerOffset
 * @param cursorOffset
 * @returns {*}
 */
function leftVerticalLeft(triggerOffset, cursorOffset) {
    return triggerOffset.left + cursorOffset.left;
}

/**
 * @param triggerOffset
 * @param cursorOffset
 * @param popupEl
 * @returns {number}
 */
function leftVerticalCenter(triggerOffset, cursorOffset, popupEl) {
    return triggerOffset.left + cursorOffset.left - popupEl.offsetWidth / 2;
}

/**
 * @param triggerOffset
 * @param cursorOffset
 * @param popupEl
 * @returns {number}
 */
function leftVerticalRight(triggerOffset, cursorOffset, popupEl) {
    return triggerOffset.left + cursorOffset.left - popupEl.offsetWidth;
}

/**
 * @param triggerOffset
 * @param cursorOffset
 * @param popupEl
 * @returns {number}
 */
function leftHorizontalLeft(triggerOffset, cursorOffset, popupEl) {
    return triggerOffset.left + cursorOffset.left - popupEl.offsetWidth
        - parseInt(getComputedStyle(popupEl).marginLeft, 10)
        - parseInt(getComputedStyle(popupEl).marginRight, 10);
}

/**
 * @param triggerOffset
 * @param cursorOffset
 * @returns {*}
 */
function leftHorizontalRight(triggerOffset, cursorOffset) {
    return triggerOffset.left + cursorOffset.left;
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

    const triggerOffset = Dom.getOffset(triggerEl, parentEl);

    const result = {};

    switch (position) {
        case Position.TOP_LEFT: {
            result.left = leftVerticalLeft(triggerOffset, cursorOffset);
            result.top = topVerticalTop(triggerOffset, cursorOffset, popupEl);
            break;
        }
        case Position.TOP: {
            result.left = leftVerticalCenter(triggerOffset, cursorOffset, popupEl);
            result.top = topVerticalTop(triggerOffset, cursorOffset, popupEl);
            break;
        }
        case Position.TOP_RIGHT: {
            result.left = leftVerticalRight(triggerOffset, cursorOffset, popupEl);
            result.top = topVerticalTop(triggerOffset, cursorOffset, popupEl);
            break;
        }
        case Position.BOTTOM_LEFT: {
            result.left = leftVerticalLeft(triggerOffset, cursorOffset);
            result.top = topVerticalBottom(triggerOffset, cursorOffset);
            break;
        }
        case Position.BOTTOM: {
            result.left = leftVerticalCenter(triggerOffset, cursorOffset, popupEl);
            result.top = topVerticalBottom(triggerOffset, cursorOffset);
            break;
        }
        case Position.BOTTOM_RIGHT: {
            result.left = leftVerticalRight(triggerOffset, cursorOffset, popupEl);
            result.top = topVerticalBottom(triggerOffset, cursorOffset);
            break;
        }
        case Position.LEFT_TOP: {
            result.left = leftHorizontalLeft(triggerOffset, cursorOffset, popupEl);
            result.top = topHorizontalTop(triggerOffset, cursorOffset);
            break;
        }
        case Position.LEFT: {
            result.left = leftHorizontalLeft(triggerOffset, cursorOffset, popupEl);
            result.top = topHorizontalMiddle(triggerOffset, cursorOffset, popupEl);
            break;
        }
        case Position.LEFT_BOTTOM: {
            result.left = leftHorizontalLeft(triggerOffset, cursorOffset, popupEl);
            result.top = topHorizontalBottom(triggerOffset, cursorOffset, popupEl);
            break;
        }
        case Position.RIGHT_TOP: {
            result.left = leftHorizontalRight(triggerOffset, cursorOffset);
            result.top = topHorizontalTop(triggerOffset, cursorOffset);
            break;
        }
        case Position.RIGHT: {
            result.left = leftHorizontalRight(triggerOffset, cursorOffset);
            result.top = topHorizontalMiddle(triggerOffset, cursorOffset, popupEl);
            break;
        }
        case Position.RIGHT_BOTTOM: {
            result.left = leftHorizontalRight(triggerOffset, cursorOffset);
            result.top = topHorizontalBottom(triggerOffset, cursorOffset, popupEl);
            break;
        }
        case Position.CENTER: {
            result.left = leftVerticalCenter(triggerOffset, cursorOffset, popupEl);
            result.top = topHorizontalMiddle(triggerOffset, cursorOffset, popupEl);
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
