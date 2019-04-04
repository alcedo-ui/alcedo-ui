/**
 * @file TableCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

function calcSpan(rowIndex, column, colIndex) {
    return column.span && typeof column.span === 'function' ?
        column.span(rowIndex, colIndex)
        :
        null;
}

function getColumnsWithSpan(columns, rowIndex) {

    const result = [];
    let spanFlag = 0;

    for (let i = 0, len = columns.length; i < len; i++) {

        if (spanFlag > 1) {
            spanFlag--;
            continue;
        }

        const column = columns[i],
            span = calcSpan(rowIndex, columns[i], i);

        if (span && span > 1) {
            spanFlag = span;
        }

        result.push({
            column,
            span
        });

    }

    return result;

}

export default {
    calcSpan,
    getColumnsWithSpan
};
