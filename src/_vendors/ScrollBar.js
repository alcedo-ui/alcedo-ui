/**
 * @file ScrollBar vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import classNames from 'classnames';
import Direction from '../_statics/Direction';
import './ScrollBar.scss';

const tempSize = {
    vertical: 0,
    horizontal: 0
};

function getSize(direction = Direction.VERTICAL) {

    if (document == undefined || window == undefined) {
        return;
    }

    const isVertical = direction === Direction.VERTICAL;

    if (isVertical && tempSize.vertical) {
        return tempSize.vertical;
    } else if (!isVertical && tempSize.horizontal) {
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

export default {
    getSize
};
