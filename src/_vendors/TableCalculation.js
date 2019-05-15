/**
 * @file TableCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import classnames from 'classnames';

import HorizontalAlign from '../_statics/HorizontalAlign';
import VirtualRoot from '../_statics/VirtualRoot';

import Util from '../_vendors/Util';

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

function indexOfNodeInValue(node, value, idProp) {

    if (!node || !value) {
        return -1;
    }

    let index = value.findIndex(item => (idProp in item) && (idProp in node) && item[idProp] === node[idProp]);
    if (index < 0) {
        index = value.indexOf(node);
    }

    return index;

}

function isNodeChecked(node, value, idProp) {
    return indexOfNodeInValue(node, value, idProp) >= 0;
}

function isNodeIndeterminate(node, value, idProp) {

    if (!node || !node.children || node.children.length < 1
        || !value || !value.length || value.length < 1) {
        return false;
    }

    let total = 0,
        count = 0;

    Util.preOrderTraverse(node, nodeItem => {
        total++;
        if (isNodeChecked(nodeItem, value, idProp)) {
            count++;
        }
    });

    return count > 0 && total !== count;

}

function isSelectAllChecked(data, value, idProp) {

    let total = 0,
        count = 0;

    Util.preOrderTraverse({
        [VirtualRoot]: true,
        children: data
    }, node => {
        if (node && !node.disabled && !(VirtualRoot in node)) {
            total++;
            if (isNodeChecked(node, value, idProp)) {
                count++;
            }
        }
    });

    return {
        checked: total > 0 && count === total,
        indeterminate: count > 0 && total !== count
    };

}

function handleSelect(node, value, idProp, isSelectRecursive) {

    if (!node || node.disabled || !value) {
        return value;
    }

    if (!isNodeChecked(node, value, idProp)) {
        value.push(node);
    }

    if (!isSelectRecursive || !node.children || node.children.length < 1) {
        return value;
    }

    for (let item of node.children) {
        handleSelect(item, value, idProp);
    }

    return value;

}

function handleDeselect(node, value, idProp, isSelectRecursive) {

    if (!node || node.disabled || !value) {
        return value;
    }

    const index = indexOfNodeInValue(node, value, idProp);
    if (index > -1) {
        value.splice(index, 1);
    }

    if (!isSelectRecursive || !node.children || node.children.length < 1) {
        return value;
    }

    for (let item of node.children) {
        handleDeselect(item, value, idProp);
    }

    return value;

}

function formatValue(value, data, idProp) {

    let result = [];

    Util.postOrderTraverse({[VirtualRoot]: true, children: data}, node => {
        if (!(VirtualRoot in node)) {
            if (!node.children || node.children.length < 1) {
                if (isNodeChecked(node, value, idProp)) {
                    result.push(node);
                }
            } else {
                if (node.children.every(child => isNodeChecked(child, value, idProp))) {
                    result.push(node);
                }
            }
        }
    });

    return result;

}

function handleSelectAll(data, value, idProp) {

    if (!data || data.length < 1) {
        return value;
    }

    data.forEach(node => handleSelect(node, value, idProp, true));

    return value;

}

/**
 * handle value when select all checkbox clicked
 * @param checked
 * @param selectAllMode
 * @param data
 * @param tableData
 * @param value
 * @param idProp
 * @returns {Array|*}
 */
function handleSelectAllChange(checked, data, value, idProp) {

    // const currentPageData = selectAllMode === SelectAllMode.ALL ?
    //     data.filter(item => item && !item.disabled)
    //     :
    //     tableData.filter(item => item && !item.disabled);
    //
    // if (checked) {
    //
    //     if (!value || value.length < 1) {
    //         return currentPageData;
    //     }
    //
    //     const result = value.slice();
    //     currentPageData.forEach(item => {
    //         if (!isNodeChecked(item, result, idProp)) {
    //             result.push(item);
    //         }
    //     });
    //     return result;
    //
    // } else {
    //
    //     if (!value || value.length < 1) {
    //         return [];
    //     }
    //
    //     const result = value.slice();
    //     currentPageData.forEach(item => {
    //         const index = indexOfNodeInValue(item, result, idProp);
    //         if (index > -1) {
    //             result.splice(index, 1);
    //         }
    //     });
    //     return result;
    //
    // }

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

function recursiveSelectChildren(node, value = [], idProp) {

    if (!node) {
        return value;
    }

    Util.preOrderTraverse(node, child => {
        if (!isNodeChecked(child, value, idProp)) {
            value.push(child);
        }
    });

    return value;

}

function needCollapseButtonSpacing(tableData) {
    return tableData && tableData.some(rowData => rowData && rowData.children && rowData.children.length > 0);
}

export default {
    calcSpan,
    getColumnsWithSpan,
    sortTableData,
    hasAnyRenderer,
    handleFixedColumns,
    getDataByPagination,
    indexOfNodeInValue,
    isNodeChecked,
    isNodeIndeterminate,
    isSelectAllChecked,
    handleSelect,
    handleDeselect,
    formatValue,
    handleSelectAll,
    handleSelectAllChange,
    getFirstColumnPosition,
    recursiveSelectChildren,
    needCollapseButtonSpacing
};
