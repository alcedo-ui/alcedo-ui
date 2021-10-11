/**
 * @file PositionPopCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

// Statics
import Position from '../_statics/Position';

/**
 * @param popupEl
 * @returns {number}
 */
function horizontalCenter(popupEl) {
    return (window.innerWidth - popupEl.offsetWidth) / 2;
}

/**
 * @param popupEl
 * @returns {number}
 */
function verticalMiddle(popupEl) {
    return (window.innerHeight - popupEl.offsetHeight) / 2;
}

/**
 * @param parentEl
 * @param popupEl
 * @param position
 * @returns {{}}
 */
function getStyle(parentEl, popupEl, position) {

    if (!popupEl) {
        return null;
    }

    let result = {};

    switch (position) {
        case Position.TOP_LEFT: {
            result.left = 0;
            result.top = 0;
            break;
        }
        case Position.TOP: {
            result.left = horizontalCenter(popupEl);
            result.top = 0;
            break;
        }
        case Position.TOP_RIGHT: {
            result.right = 0;
            result.top = 0;
            break;
        }
        case Position.BOTTOM_LEFT: {
            result.left = 0;
            result.bottom = 0;
            break;
        }
        case Position.BOTTOM: {
            result.left = horizontalCenter(popupEl);
            result.bottom = 0;
            break;
        }
        case Position.BOTTOM_RIGHT: {
            result.right = 0;
            result.bottom = 0;
            break;
        }
        case Position.LEFT_TOP: {
            result.left = 0;
            result.top = 0;
            break;
        }
        case Position.LEFT: {
            result.left = 0;
            result.top = verticalMiddle(popupEl);
            break;
        }
        case Position.LEFT_BOTTOM: {
            result.left = 0;
            result.bottom = 0;
            break;
        }
        case Position.RIGHT_TOP: {
            result.right = 0;
            result.top = 0;
            break;
        }
        case Position.RIGHT: {
            result.right = 0;
            result.top = verticalMiddle(popupEl);
            break;
        }
        case Position.RIGHT_BOTTOM: {
            result.right = 0;
            result.bottom = 0;
            break;
        }
        case Position.CENTER: {
            result.left = horizontalCenter(popupEl);
            result.top = verticalMiddle(popupEl);
            break;
        }
    }

    return result;

}

/**
 * @param parentEl
 * @param popupEl
 * @param position
 */
function setStyle(parentEl, popupEl, position) {

    if (!popupEl) {
        return;
    }

    const style = getStyle(parentEl, popupEl, position);

    if (!style) {
        return;
    }

    popupEl.style.left = popupEl.style.right = popupEl.style.top = popupEl.style.bottom = 'auto';

    Object.entries(style).forEach(([key, value]) => popupEl.style[key] = value + 'px');

}

export default {
    getStyle,
    setStyle
};
