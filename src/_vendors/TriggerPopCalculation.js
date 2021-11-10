/**
 * @file TriggerPopCalculation vendor
 */

import domContains from 'dom-helpers/contains';

import Dom from './Dom';
import Position from '../_statics/Position';

/**
 * @param triggerEl
 * @param triggerOffset
 * @returns {*}
 */
function topVerticalBottom(triggerEl, triggerOffset) {
    return triggerOffset.top + triggerEl.offsetHeight;
}

/**
 * @param triggerOffset
 * @param popupEl
 * @returns {number}
 */
function topVerticalTop(triggerOffset, popupEl) {
    return triggerOffset.top - popupEl.offsetHeight
        - parseInt(getComputedStyle(popupEl).marginTop, 10)
        - parseInt(getComputedStyle(popupEl).marginBottom, 10);
}

/**
 * @param triggerOffset
 * @returns {*}
 */
function topHorizontalTop(triggerOffset) {
    return triggerOffset.top;
}

/**
 * @param triggerEl
 * @param triggerOffset
 * @param popupEl
 * @returns {number}
 */
function topHorizontalMiddle(triggerEl, triggerOffset, popupEl) {
    return triggerOffset.top + triggerEl.offsetHeight / 2 - popupEl.offsetHeight / 2;
}

/**
 * @param triggerEl
 * @param triggerOffset
 * @param popupEl
 * @returns {number}
 */
function topHorizontalBottom(triggerEl, triggerOffset, popupEl) {
    return triggerOffset.top + triggerEl.offsetHeight - popupEl.offsetHeight;
}

/**
 * @param triggerOffset
 * @returns {*}
 */
function leftVerticalLeft(triggerOffset) {
    return triggerOffset.left;
}

/**
 * @param triggerEl
 * @param triggerOffset
 * @param popupEl
 * @returns {number}
 */
function leftVerticalCenter(triggerEl, triggerOffset, popupEl) {
    return triggerOffset.left + triggerEl.offsetWidth / 2 - popupEl.offsetWidth / 2;
}

/**
 * @param triggerEl
 * @param triggerOffset
 * @param popupEl
 * @returns {number}
 */
function leftVerticalRight(triggerEl, triggerOffset, popupEl) {
    return triggerOffset.left - (popupEl.offsetWidth - triggerEl.offsetWidth);
}

/**
 * @param triggerOffset
 * @param popupEl
 * @returns {number}
 */
function leftHorizontalLeft(triggerOffset, popupEl) {
    return triggerOffset.left - popupEl.offsetWidth
        - parseInt(getComputedStyle(popupEl).marginLeft, 10)
        - parseInt(getComputedStyle(popupEl).marginRight, 10);
}

/**
 * @param triggerEl
 * @param triggerOffset
 * @returns {*}
 */
function leftHorizontalRight(triggerEl, triggerOffset) {
    return triggerOffset.left + triggerEl.offsetWidth;
}

/**
 * @param parentEl
 * @param triggerEl
 * @param popupEl
 * @param scrollEl
 * @param position
 * @returns {{}}
 */
export function getStyle(parentEl, triggerEl, popupEl, scrollEl, position) {

    if (!triggerEl || !popupEl) {
        return null;
    }

    const triggerOffset = Dom.getOffset(triggerEl, parentEl);

    let result = {};

    switch (position) {
        case Position.TOP_LEFT: {
            result.left = leftVerticalLeft(triggerOffset);
            result.top = topVerticalTop(triggerOffset, popupEl);
            break;
        }
        case Position.TOP: {
            result.left = leftVerticalCenter(triggerEl, triggerOffset, popupEl);
            result.top = topVerticalTop(triggerOffset, popupEl);
            break;
        }
        case Position.TOP_RIGHT: {
            result.left = leftVerticalRight(triggerEl, triggerOffset, popupEl);
            result.top = topVerticalTop(triggerOffset, popupEl);
            break;
        }
        case Position.BOTTOM_LEFT: {
            result.left = leftVerticalLeft(triggerOffset);
            result.top = topVerticalBottom(triggerEl, triggerOffset);
            break;
        }
        case Position.BOTTOM: {
            result.left = leftVerticalCenter(triggerEl, triggerOffset, popupEl);
            result.top = topVerticalBottom(triggerEl, triggerOffset);
            break;
        }
        case Position.BOTTOM_RIGHT: {
            result.left = leftVerticalRight(triggerEl, triggerOffset, popupEl);
            result.top = topVerticalBottom(triggerEl, triggerOffset);
            break;
        }
        case Position.LEFT_TOP: {
            result.left = leftHorizontalLeft(triggerOffset, popupEl);
            result.top = topHorizontalTop(triggerOffset);
            break;
        }
        case Position.LEFT: {
            result.left = leftHorizontalLeft(triggerOffset, popupEl);
            result.top = topHorizontalMiddle(triggerEl, triggerOffset, popupEl);
            break;
        }
        case Position.LEFT_BOTTOM: {
            result.left = leftHorizontalLeft(triggerOffset, popupEl);
            result.top = topHorizontalBottom(triggerEl, triggerOffset, popupEl);
            break;
        }
        case Position.RIGHT_TOP: {
            result.left = leftHorizontalRight(triggerEl, triggerOffset);
            result.top = topHorizontalTop(triggerOffset);
            break;
        }
        case Position.RIGHT: {
            result.left = leftHorizontalRight(triggerEl, triggerOffset);
            result.top = topHorizontalMiddle(triggerEl, triggerOffset, popupEl);
            break;
        }
        case Position.RIGHT_BOTTOM: {
            result.left = leftHorizontalRight(triggerEl, triggerOffset);
            result.top = topHorizontalBottom(triggerEl, triggerOffset, popupEl);
            break;
        }
        case Position.CENTER: {
            result.left = leftVerticalCenter(triggerEl, triggerOffset, popupEl);
            result.top = topHorizontalMiddle(triggerEl, triggerOffset, popupEl);
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
 */
export function setStyle(parentEl, triggerEl, popupEl, scrollEl, position) {

    const style = getStyle(parentEl, triggerEl, popupEl, scrollEl, position);

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
