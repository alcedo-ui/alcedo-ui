/**
 * @file NotificationCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import Position from '../_statics/Position';

let notificationsKey = 0;

function getNotificationsKey() {
    return notificationsKey++;
}

function isPositiveSequence(position) {
    return position !== Position.BOTTOM_LEFT && position !== Position.BOTTOM && position !== Position.BOTTOM_RIGHT;
}

export default {
    getNotificationsKey,
    isPositiveSequence
};
