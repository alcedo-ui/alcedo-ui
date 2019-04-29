/**
 * @file TableCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import classnames from 'classnames';

import SelectAllMode from '../_statics/SelectAllMode';
import HorizontalAlign from '../_statics/HorizontalAlign';

function calcSpan(type, column, colIndex, rowIndex) {
    const span = column[`${type}Span`];
    return span && typeof span === 'function' ?
        span(colIndex, rowIndex)
        :
        +span;
}

function getColumnsWithSpan(type, columns, rowIndex) {

    if (!type) {
        return columns.map(column => ({
            column,
            span: 1
        }));
    }

    const result = [];
    let spanFlag = 0;

    for (let i = 0, len = columns.length; i < len; i++) {

        if (spanFlag > 1) {
            spanFlag--;
            continue;
        }

        const column = columns[i],
            span = calcSpan(type, columns[i], i, rowIndex);

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

function sortTableData(data, sorting, sortFunc) {

    if (!data) {
        return [];
    }

    if (!sorting) {
        return data;
    }

    let copyData = data.slice();

    if (sortFunc) {
        copyData = sortFunc(copyData, sorting);
    } else {
        copyData.sort((a, b) => {
            if (!isNaN(a[sorting.prop]) && !isNaN(b[sorting.prop])) {
                return (Number(a[sorting.prop]) - Number(b[sorting.prop])) * sorting.type;
            } else {
                return (a[sorting.prop] + '').localeCompare(b[sorting.prop] + '') * sorting.type;
            }
        });
    }

    return copyData;

}

function hasAnyRenderer(columns, fragment) {
    return columns && fragment ? columns.some(item => item[`${fragment}Renderer`]) : false;
}

function handleFixedColumns(columns) {

    if (!columns) {
        return columns;
    }

    return columns.map(column => ({
        ...column,
        headClassName: classnames(column.headClassName, 'table-fixed-column'),
        bodyClassName: classnames(column.bodyClassName, 'table-fixed-column'),
        footClassName: classnames(column.footClassName, 'table-fixed-column')
    }));

}

function getDataByPagination(data, isPaginated, pagination) {

    if (!data || data.length < 1) {
        return [];
    }

    if (!isPaginated || !pagination) {
        return data;
    }

    return data.slice(pagination.page * pagination.pageSize, (pagination.page + 1) * pagination.pageSize)
               .filter(item => item && !item.disabled);

}

function indexOfItemInValue(rowData, value, idProp) {

    if (!rowData || !value) {
        return -1;
    }

    let index = value.findIndex(item => (idProp in item) && (idProp in rowData) && item[idProp] === rowData[idProp]);
    if (index < 0) {
        index = value.indexOf(rowData);
    }

    return index;

}

function isItemChecked(rowData, value, idProp) {
    return indexOfItemInValue(rowData, value, idProp) >= 0;
}

function isSelectAllChecked(selectAllMode, data, tableData, value, idProp) {

    if (!value || value.length < 1) {
        return false;
    }

    if (selectAllMode === SelectAllMode.ALL) {
        const dataLen = data.filter(item => item && !item.disabled).length;
        return dataLen > 0 && value.length === dataLen;
    } else if (selectAllMode === SelectAllMode.CURRENT_PAGE) {
        return tableData.filter(item => item && !item.disabled)
                        .every(item => isItemChecked(item, value, idProp));
    }

}

function isSelectAllIndeterminate(selectAllMode, data, tableData, value, idProp, pagination) {

    if (!value || value.length < 1) {
        return false;
    }

    if (selectAllMode === SelectAllMode.ALL) {
        const dataLen = data.filter(item => item && !item.disabled).length;
        return dataLen > 0 && value.length < dataLen;
    } else if (selectAllMode === SelectAllMode.CURRENT_PAGE) {
        const currentPageData = tableData.filter(item => item && !item.disabled),
            len = currentPageData.filter(item => isItemChecked(item, value, idProp)).length;
        return len > 0 && len < Math.min(currentPageData.length, pagination.pageSize);
    }

}

function handleSelect(rowData, rowIndex, value, idProp) {

    if (!rowData) {
        return;
    }

    const index = indexOfItemInValue(rowData, value, idProp);
    if (index >= 0) {
        value.splice(index, 1);
    } else {
        value.push(rowData);
    }

    return {value, checked: index === -1};

}

function handleSelectAllChange(checked, selectAllMode, data, tableData, value, idProp) {

    if (selectAllMode === SelectAllMode.ALL) {
        return checked ? data.filter(item => !item.disabled) : [];
    }

    const currentPageData = tableData.filter(item => item && !item.disabled);

    if (checked) {

        if (!value || value.length < 1) {
            return currentPageData;
        }

        const result = value.slice();
        currentPageData.forEach(item => {
            if (!isItemChecked(item, result, idProp)) {
                result.push(item);
            }
        });
        return result;

    } else {

        if (!value || value.length < 1) {
            return [];
        }

        const result = value.slice();
        currentPageData.forEach(item => {
            const index = indexOfItemInValue(item, result, idProp);
            if (index > -1) {
                result.splice(index, 1);
            }
        });
        return result;

    }

}

function getFirstColumnPosition(columns) {
    if (columns[HorizontalAlign.LEFT].length > 0) {
        return HorizontalAlign.LEFT;
    } else if (columns[HorizontalAlign.CENTER].length > 0) {
        return HorizontalAlign.CENTER;
    } else if (columns[HorizontalAlign.RIGHT].length > 0) {
        return HorizontalAlign.RIGHT;
    }
    return null;
}

export default {
    calcSpan,
    getColumnsWithSpan,
    sortTableData,
    hasAnyRenderer,
    handleFixedColumns,
    getDataByPagination,
    indexOfItemInValue,
    isItemChecked,
    isSelectAllChecked,
    isSelectAllIndeterminate,
    handleSelect,
    handleSelectAllChange,
    getFirstColumnPosition
};
