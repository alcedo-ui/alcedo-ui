/**
 * @file TableCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import classnames from 'classnames';

import HorizontalAlign from '../_statics/HorizontalAlign';
import VirtualRoot from '../_statics/VirtualRoot';

import Util from '../_vendors/Util';
import Valid from '../_vendors/Valid';

function calcSpan(type, column, data, colIndex, rowIndex) {
    const span = column[`${type}Span`];
    return span && typeof span === 'function' ?
        span(data, colIndex, rowIndex)
        :
        +span;
}

function getColumnsWithSpan(type, columns, data, rowIndex) {

    if (!type) {
        return columns.map(column => ({
            column,
            span: 1
        }));
    }

    const result = [];
    let spanFlag = 0;

    for (let colIndex = 0, len = columns.length; colIndex < len; colIndex++) {

        if (spanFlag > 1) {
            spanFlag--;
            continue;
        }

        const column = columns[colIndex],
            span = calcSpan(type, columns[colIndex], data, colIndex, rowIndex);

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

function hasRenderer(columns, fragment) {
    return columns && fragment ?
        columns.some(column => column && column[`${fragment}Renderer`])
        :
        false;
}

function hasFixedColumn(columns, fixed) {
    return columns && fixed ? columns.some(column => column && column.fixed === fixed) : false;
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
 * separate columns to left, center and right, and check has fixed columns or not
 * @param columns
 * @returns {{hasFixedLeftColumn: (Array|boolean), sortedColumns: *[], hasFixedRightColumn: (Array|boolean)}|*}
 */
function sortColumns(columns) {

    if (!columns || columns.length < 1) {
        return columns;
    }

    const result = {
        [HorizontalAlign.LEFT]: [],
        [HorizontalAlign.CENTER]: [],
        [HorizontalAlign.RIGHT]: []
    };

    // separate root column to left, right or center
    columns.forEach(column => column && result[column.fixed || HorizontalAlign.CENTER].push(column));

    // traverse all children nodes in left and right, update "fixed" property inheriting from their parent
    Util.preOrderTraverse({children: result[HorizontalAlign.LEFT]}, node =>
        node.fixed = HorizontalAlign.LEFT);
    Util.preOrderTraverse({children: result[HorizontalAlign.RIGHT]}, node =>
        node.fixed = HorizontalAlign.RIGHT);

    return {
        sortedColumns: [
            ...result[HorizontalAlign.LEFT],
            ...result[HorizontalAlign.CENTER],
            ...result[HorizontalAlign.RIGHT]
        ],
        hasFixedLeftColumn: result[HorizontalAlign.LEFT] && result[HorizontalAlign.LEFT].length > 0,
        hasFixedRightColumn: result[HorizontalAlign.RIGHT] && result[HorizontalAlign.RIGHT].length > 0
    };

}

function handleFixedColumnsClassName(columns) {

    if (!columns || columns.length < 1) {
        return columns;
    }

    return columns.map(column => column && column.fixed && column.fixed !== HorizontalAlign.CENTER ?
        {
            ...column,
            headClassName: classnames(column.headClassName, 'table-fixed-column'),
            bodyClassName: classnames(column.bodyClassName, 'table-fixed-column'),
            footClassName: classnames(column.footClassName, 'table-fixed-column')
        }
        :
        column
    );

}

/**
 * get the deepest first child of columns
 * @param columns
 * @returns {null|*}
 */
function getFirstColumn(columns) {

    if (!columns || columns.length < 1) {
        return null;
    }

    if (columns[0] && (!columns[0].children || columns[0].children.length < 1)) {
        return columns[0];
    }

    return getFirstColumn(columns[0].children);

}

/**
 * calculate the row span and column span
 * @param node
 * @param maxDepth
 * @param depth
 * @returns {number|*}
 */
function formatColumnsSpan(node, maxDepth, depth = -1) {

    if (!node) {
        return 0;
    }

    const hasChildren = node.children && node.children.length > 0;

    let colSpan = 0;
    if (hasChildren) {

        node.children.forEach(childNode =>
            childNode && (colSpan += formatColumnsSpan(childNode, maxDepth, depth + 1))
        );

        // column span
        if (colSpan > 1) {
            node.colSpan = colSpan;
        }

    } else {

        // row span
        const rowSpan = maxDepth - depth;
        if (rowSpan > 1) {
            node.rowSpan = rowSpan;
        }

    }

    if (node[VirtualRoot]) {
        return node.children;
    }

    if (hasChildren) {
        return colSpan;
    }

    return 1;

}

/**
 * get head columns
 * transform the columns data (tree construction) to html tr-th row format
 * @param columns
 * @returns {Array|*}
 */
function getHeadColumns(columns) {

    if (!columns || columns.length < 1) {
        return columns;
    }

    // calculate the max depth
    let maxDepth = 0;
    Util.postOrderTraverse({children: columns}, (node, depth) => {
        if (depth > maxDepth) {
            maxDepth = depth;
        }
    });

    // add row span and column span to column node
    const formatedColumns = formatColumnsSpan({
        [VirtualRoot]: true,
        children: columns
    }, maxDepth);

    if (!formatedColumns) {
        return columns;
    }

    const result = [];
    Util.postOrderTraverse({children: formatedColumns}, (node, depth) => {

        const index = depth - 1;

        if (index >= 0) {

            if (!result[index]) {
                result[index] = [];
            }

            result[index].push(node);

        }

    });

    return result;

}

function getBodyColumns(columns) {

    if (!columns || columns.length < 1) {
        return columns;
    }

    const result = [];
    Util.postOrderTraverse({children: columns}, node => {
        if (node && (!node.children || node.children.length < 1)) {
            result.push(node);
        }
    });

    return result;

}

function getFixedHeadColumns(columns, fixed) {
    return columns ?
        columns.map(row => row ?
            row.filter(column => column && column.fixed === fixed)
            :
            row
        )
        :
        columns;
}

function getFixedBodyColumns(columns, fixed) {
    return columns ? columns.filter(column => column && column.fixed === fixed) : columns;
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

function getPageSizeValue(pageSize, pageSizeValueField) {
    return typeof pageSize === 'object' ?
        pageSize[pageSizeValueField]
        :
        pageSize;
}

function handleNoWrap(fragmentNoWrap, columnNoWrap, {data, colIndex, rowIndex, tableData}) {
    return !!((
            typeof fragmentNoWrap === 'function' ?
                fragmentNoWrap(data, colIndex, rowIndex, tableData)
                :
                fragmentNoWrap
        )
        ||
        (
            typeof columnNoWrap === 'function' ?
                columnNoWrap(data, colIndex, rowIndex, tableData)
                :
                columnNoWrap
        ));
}

function handlePage(page, pageSize, data) {

    if (!data || data.length < 1 || !pageSize || page < 0) {
        return 0;
    }

    return Valid.range(page, 0, Math.ceil(data.length / pageSize) - 1);

}

export default {
    calcSpan,
    getColumnsWithSpan,
    sortTableData,
    hasRenderer,
    hasFixedColumn,
    getDataByPagination,
    indexOfNodeInValue,
    isNodeChecked,
    isNodeIndeterminate,
    isSelectAllChecked,
    handleSelect,
    handleDeselect,
    formatValue,
    handleSelectAll,
    sortColumns,
    handleFixedColumnsClassName,
    getFirstColumn,
    getHeadColumns,
    getBodyColumns,
    getFixedHeadColumns,
    getFixedBodyColumns,
    recursiveSelectChildren,
    needCollapseButtonSpacing,
    getPageSizeValue,
    handleNoWrap,
    handlePage
};
