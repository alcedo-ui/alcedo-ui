/**
 * @file ScrollBar vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

// Statics
import Direction from '../_statics/Direction';

// Vendors
import classNames from 'classnames';

// Styles
import './ScrollBar.scss';

// cache
const tempSize = {
    vertical: null,
    horizontal: null
};

export function getSize(direction = Direction.VERTICAL) {

    if (document == undefined || window == undefined) {
        return;
    }

    const isVertical = direction === Direction.VERTICAL;

    if (isVertical && tempSize.vertical !== null) {
        return tempSize.vertical;
    } else if (!isVertical && tempSize.horizontal != null) {
        return tempSize.horizontal;
    }

    const scrollDiv = document.createElement('div');
    scrollDiv.className = classNames('scroll-bar-for-measure', direction);
    document.body.appendChild(scrollDiv);

    let size = 0;
    if (isVertical) {
        size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        tempSize.vertical = size;
    } else {
        size = scrollDiv.offsetHeight - scrollDiv.clientHeight;
        tempSize.horizontal = size;
    }

    document.body.removeChild(scrollDiv);

    return size;

}

export function getHideHorizontalScrollBarStyle() {

    const size = getSize(Direction.HORIZONTAL);

    return size > 0 ? {
        marginBottom: -size,
        paddingBottom: 0
    } : {
        marginBottom: -20,
        paddingBottom: 20
    };

}

export default {
    getSize,
    getHideHorizontalScrollBarStyle
};
