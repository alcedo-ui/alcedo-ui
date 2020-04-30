/**
 * @file DateCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

function weekday(selectYear, selectMonth) {
    let num = new Date(selectYear + '/' + selectMonth + '/01').getDay();
    return num === 0 ? 7 : num;
}

function rangeData(range, minValue, maxValue, isRequired) {

    const arr = [];

    for (let i = 0; i < range; i++) {
        if (i < 10) {
            i = '0' + i;
        }
        let obj;
        if (isRequired) {
            ((+i > +maxValue) || (+i < +minValue)) ?
                obj = {text: i, value: false}
                :
                obj = {text: i, value: true};
        } else {
            obj = {text: i, value: true};
        }
        arr.push(obj);
    }

    return arr;

}

export default {
    weekday,
    rangeData
};
