/**
 * @file RateCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

function createItems(value, allowHalf, count) {

    const items = [];

    if (allowHalf) {
        for (let i = 0; i < count; i++) {
            if (i <= value - 1) {
                items.push('full');
            } else if (i < value && i > value - 1) {
                items.push('full-zero');
            } else if (i > value) {
                items.push('zero');
            } else {
                items.push('zero');
            }
        }
    } else {
        for (let i = 0; i < count; i++) {
            if (i < value) {
                items.push('full');
            } else if (i > value) {
                items.push('zero');
            } else {
                items.push('zero');
            }
        }
    }

    return items;

}

export default {
    createItems
};
