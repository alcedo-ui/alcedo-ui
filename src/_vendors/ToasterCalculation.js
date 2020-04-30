/**
 * @file ToasterCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import Position from '../_statics/Position';

let toastsKey = 0;

function getToastsKey() {
    return toastsKey++;
}

function isPositiveSequence(position) {
    return position !== Position.BOTTOM_LEFT && position !== Position.BOTTOM && position !== Position.BOTTOM_RIGHT;
}

export default {
    getToastsKey,
    isPositiveSequence
};
