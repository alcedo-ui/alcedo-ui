/**
 * @file PositionPopCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import Position from '../_statics/Position';
import Dom from './Dom';

function horizontalCenter(popupEl) {
    return (window.innerWidth - popupEl.offsetWidth) / 2;
}

function verticalMiddle(popupEl) {
    return (window.innerHeight - popupEl.offsetHeight) / 2;
}

function getStyle(parentEl, popupEl, position) {

    if (!popupEl) {
        return;
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

function setStyle(parentEl, popupEl, position) {

    const style = getStyle(parentEl, popupEl, position);

    if (!style) {
        return;
    }

    popupEl.style.left = popupEl.style.right = popupEl.style.top = popupEl.style.bottom = null;

    for (let key in style) {
        popupEl.style[key] = style[key] + 'px';
    }

}

export default {
    getStyle,
    setStyle
};