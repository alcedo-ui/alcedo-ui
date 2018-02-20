/**
 * @file PositionPopCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import Position from '../_statics/Position';

function horizontalCenter(popupEl) {
    return (window.innerWidth - popupEl.offsetWidth) / 2;
}

function horizontalRight(popupEl) {
    return window.innerWidth - popupEl.offsetWidth;
}

function verticalMiddle(popupEl) {
    return (window.innerHeight - popupEl.offsetHeight) / 2;
}

function verticalBottom(popupEl) {
    return window.innerHeight - popupEl.offsetHeight;
}

function getStyle(popupEl, position) {

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
            result.left = horizontalRight(popupEl);
            result.top = 0;
            break;
        }
        case Position.BOTTOM_LEFT: {
            result.left = 0;
            result.top = verticalBottom(popupEl);
            break;
        }
        case Position.BOTTOM: {
            result.left = horizontalCenter(popupEl);
            result.top = verticalBottom(popupEl);
            break;
        }
        case Position.BOTTOM_RIGHT: {
            result.left = horizontalRight(popupEl);
            result.top = verticalBottom(popupEl);
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
            result.top = verticalBottom(popupEl);
            break;
        }
        case Position.RIGHT_TOP: {
            result.left = horizontalRight(popupEl);
            result.top = 0;
            break;
        }
        case Position.RIGHT: {
            result.left = horizontalRight(popupEl);
            result.top = verticalMiddle(popupEl);
            break;
        }
        case Position.RIGHT_BOTTOM: {
            result.left = horizontalRight(popupEl);
            result.top = verticalBottom(popupEl);
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

function setStyle(popupEl, position) {

    const style = getStyle(popupEl, position);

    if (!style) {
        return;
    }

    popupEl.style.left = style.left + 'px';
    popupEl.style.top = style.top + 'px';

}

export default {
    getStyle,
    setStyle
};