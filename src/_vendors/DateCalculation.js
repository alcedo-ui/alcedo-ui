/**
 * @file DateCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

function weekday(selectYear, selectMonth) {
    let num = new Date(selectYear + '/' + selectMonth + '/01').getDay();
    return num === 0 ? 7 : num;
}

export default {
    weekday
};
