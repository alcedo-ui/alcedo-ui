/**
 * @file TableCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

function calcSpan(column, colIndex, rowIndex) {
    return column.span && typeof column.span === 'function' ?
        column.span(colIndex, rowIndex)
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
            span = calcSpan(columns[i], i, rowIndex);

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
