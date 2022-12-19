/**
 * @file TableCalculation vendor
 */

// Statics
import HorizontalAlign from '../_statics/HorizontalAlign';
import VirtualRoot from '../_statics/VirtualRoot';
import TableFragment from '../_statics/TableFragment';
import Direction from '../_statics/Direction';

// Vendors
import isArray from 'lodash/isArray';
import Util from '../_vendors/Util';
import Valid from '../_vendors/Valid';
import ScrollBar from '../_vendors/ScrollBar';

/**
 * Calculate column span by fragment
 * @param fragment
 * @param column
 * @param data
 * @param colIndex
 * @param rowIndex
 * @param columns
 * @returns {*}
 */
export function calcSpan(fragment, column, data, colIndex, rowIndex, columns) {
    const span = column[`${fragment}Span`];
    return span && typeof span === 'function' ?
        span(data, colIndex, rowIndex, columns)
        :
        +span;
}

/**
 * @param column
 * @param columnKeyField
 * @returns {*}
 */
export function getColumnKey(column, columnKeyField) {
    return (column && columnKeyField && column[columnKeyField]) || column;
}

/**
 * Get columns span
 * @param fragment
 * @param columns
 * @param data
 * @param rowIndex
 * @returns {[]|*}
 */
export function getColumnsSpan(fragment, columns, data, rowIndex) {

    if (!fragment) {
        return columns.map(column => ({
            ...column,
            span: 1
        }));
    }

    const result = [];
    let spanFlag = 1;

    for (let colIndex = 0, len = columns.length; colIndex < len; colIndex++) {

        if (spanFlag > 1) {
            spanFlag--;
            continue;
        }

        const column = columns[colIndex];
        const span = calcSpan(fragment, columns[colIndex], data, colIndex, rowIndex, columns);

        if (span && span > 1) {
            spanFlag = span;
        }

        result.push({
            column,
            span,
            originColumnIndex: colIndex
        });

    }

    return result;

}

/**
 * Get the correct column span when some columns are frozen
 * @param originColumns
 * @param fragment
 * @param columns
 * @param data
 * @param rowIndex
 * @returns {[]|*}
 */
export function getAdvancedColumnsSpan(originColumns, fragment, columns, data, rowIndex) {

    if (!fragment) {
        return columns.map(column => ({
            ...column,
            span: 1
        }));
    }

    const result = [];
    let span = 1;

    for (let colIndex = 0, len = columns.length; colIndex < len; colIndex++) {

        if (span > 1) {
            span--;
            continue;
        }

        const column = columns[colIndex];

        if (column) {

            span = calcSpan(fragment, columns[colIndex], data, colIndex, rowIndex, originColumns) || 1;

            if (span > 1) {

                const index = originColumns.indexOf(column);
                const spanColumns = originColumns.slice(index + 1, index + span);

                if (column.fixed === HorizontalAlign.LEFT || column.fixed === HorizontalAlign.RIGHT) {
                    span = spanColumns.filter(item => item && item.fixed === column.fixed).length + 1;
                } else {
                    span -= spanColumns.filter(item =>
                        item && ((item.fixed || HorizontalAlign.CENTER) !== (column.fixed || HorizontalAlign.CENTER))
                    ).length;
                }

            }

        }

        result.push({
            column,
            span: span > 1 ? span : null,
            originColumnIndex: colIndex
        });

    }

    return result;

}

/**
 * @param data
 * @param sorting
 * @param sortFunc
 * @returns {*[]|*}
 */
export function sortTableData(data, sorting, sortFunc) {

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

/**
 * @param columns
 * @param fragment
 * @returns {*|boolean}
 */
export function hasRenderer(columns, fragment) {
    return columns && columns.length > 0 && fragment ?
        columns.some(column => column?.[`${fragment}Renderer`])
        :
        false;
}

/**
 * @param columnsGroup
 * @returns {*|boolean}
 */
export function hasHeadRenderer(columnsGroup) {
    return columnsGroup && columnsGroup.length > 0 ?
        columnsGroup.some(columns => hasRenderer(columns, TableFragment.HEAD))
        :
        false;
}

// export function hasFixedColumn(columns, fixed) {
//     return columns && fixed ? columns.some(column => column && column.fixed === fixed) : false;
// }

// export function getDataByPagination(data, isPaginated, pagination) {
//
//     if (!data || data.length < 1) {
//         return [];
//     }
//
//     if (!isPaginated || !pagination) {
//         return data;
//     }
//
//     return data.slice(pagination.page * pagination.pageSize, (pagination.page + 1) * pagination.pageSize)
//                .filter(item => item && !item.disabled);
//
// }

/**
 * @param node
 * @param value
 * @param idField
 * @returns {number|*}
 */
export function indexOfNodeInValue(node, value, idField) {

    if (!node || !value) {
        return -1;
    }

    let index = value.findIndex(item =>
        item && item.hasOwnProperty(idField) && node.hasOwnProperty(idField) && item[idField] === node[idField]
    );
    if (index < 0) {
        index = value.indexOf(node);
    }

    return index;

}

/**
 * @param node
 * @param value
 * @param idField
 * @returns {boolean}
 */
export function isNodeChecked(node, value, idField) {
    return indexOfNodeInValue(node, value, idField) >= 0;
}

/**
 * @param node
 * @param isRowDisabled
 * @returns {boolean}
 */
export function isNodeDisabled(node, isRowDisabled) {

    if (!node) {
        return false;
    }

    if (node.disabled) {
        return true;
    }

    if (typeof isRowDisabled === 'function') {
        return isRowDisabled(node) || false;
    }

    return isRowDisabled || false;

}

/**
 * @param data
 * @param value
 * @param idField
 * @returns {{indeterminate: boolean, checked: boolean}}
 */
export function isSelectAllChecked(data, value, idField) {

    const root = isArray(data) ? {
        [VirtualRoot]: true,
        children: data
    } : {
        ...data,
        [VirtualRoot]: true
    };

    let total = 0,
        count = 0;

    Util.preOrderTraverse(root, node => {
        if (node && !node.disabled && !(VirtualRoot in node)) {
            total++;
            if (isNodeChecked(node, value, idField)) {
                count++;
            }
        }
    });

    return {
        checked: total > 0 && count === total,
        indeterminate: count > 0 && total !== count
    };

}

/**
 * @param node
 * @param value
 * @param idField
 * @param isSelectRecursive
 * @param isRowDisabled
 * @returns {*[]}
 */
export function handleSelect(node, value = [], idField, isSelectRecursive, isRowDisabled) {

    if (!node || !value || isNodeDisabled(node, isRowDisabled)) {
        return value;
    }

    if (!isNodeChecked(node, value, idField)) {
        value.push(node);
    }

    if (!isSelectRecursive || !node.children || node.children.length < 1) {
        return value;
    }

    for (let item of node.children) {
        handleSelect(item, value, idField, isSelectRecursive, isRowDisabled);
    }

    return value;

}

/**
 * @param node
 * @param value
 * @param idField
 * @param isSelectRecursive
 * @returns {*}
 */
export function handleDeselect(node, value, idField, isSelectRecursive) {

    if (!node || node.disabled || !value) {
        return value;
    }

    const index = indexOfNodeInValue(node, value, idField);
    if (index > -1) {
        value.splice(index, 1);
    }

    if (!isSelectRecursive || !node.children || node.children.length < 1) {
        return value;
    }

    for (let item of node.children) {
        handleDeselect(item, value, idField);
    }

    return value;

}

/**
 * @param value
 * @param data
 * @param idField
 * @returns {*[]}
 */
export function formatValue(value, data, idField) {

    let result = [];

    Util.postOrderTraverse({[VirtualRoot]: true, children: data}, node => {
        if (!(VirtualRoot in node)) {
            if (!node.children || node.children.length < 1) {
                if (isNodeChecked(node, value, idField)) {
                    result.push(node);
                }
            } else {
                if (node.children.every(child => isNodeChecked(child, value, idField))) {
                    result.push(node);
                }
            }
        }
    });

    return result;

}

/**
 * @param data
 * @param value
 * @param idField
 * @param isRowDisabled
 * @returns {*[]}
 */
export function handleSelectAll(data, value = [], idField, isRowDisabled) {

    if (!data || data.length < 1) {
        return value;
    }

    data.forEach(node => handleSelect(node, value, idField, true, isRowDisabled));

    return value;

}

/**
 * Separate columns to left, center and right, and check has fixed columns or not
 * @param columns
 * @returns {{hasFixedLeftColumn: (Array|boolean), sortedColumns: *[], hasFixedRightColumn: (Array|boolean)}|*}
 */
export function sortColumns(columns) {

    if (!columns || columns.length < 1) {
        return columns;
    }

    const result = {
        [HorizontalAlign.LEFT]: [],
        [HorizontalAlign.CENTER]: [],
        [HorizontalAlign.RIGHT]: []
    };

    // Separate root column to left, center and right
    columns.forEach(column => column && result[column.fixed || HorizontalAlign.CENTER].push(column));

    // Traverse all children nodes in left and right, update "fixed" property inheriting from their parent
    Util.preOrderTraverse({
        children: result[HorizontalAlign.LEFT]
    }, (node, depth, index, parent) => {
        if (parent?.children?.[index]) {
            parent.children = [...parent.children];
            parent.children[index] = {
                ...parent.children[index],
                fixed: HorizontalAlign.LEFT
            };
        }
    });
    Util.preOrderTraverse({
        children: result[HorizontalAlign.RIGHT]
    }, (node, depth, index, parent) => {
        if (parent?.children?.[index]) {
            parent.children = [...parent.children];
            parent.children[index] = {
                ...parent.children[index],
                fixed: HorizontalAlign.RIGHT
            };
        }
    });

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

/**
 * Get the deepest first child of columns
 * @param columns
 * @returns {null|*}
 */
export function getFirstColumn(columns) {

    if (!columns || columns.length < 1) {
        return null;
    }

    if (columns[0] && (!columns[0].children || columns[0].children.length < 1)) {
        return columns[0];
    }

    return getFirstColumn(columns[0].children);

}

/**
 * Calculate the row span and column span
 * @param node
 * @param maxDepth
 * @param depth
 * @returns {number|*}
 */
export function formatColumnsSpan(node, maxDepth, depth = -1) {

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
 * Get head columns
 * transform the columns' data (tree construction) to html tr-th row format
 * @param columns
 * @returns {Array|*}
 */
export function getHeadColumns(columns) {

    if (!columns || columns.length < 1) {
        return columns;
    }

    // Calculate the max depth
    let maxDepth = 0;
    Util.postOrderTraverse({children: columns}, (node, depth) => {
        if (depth > maxDepth) {
            maxDepth = depth;
        }
    });

    // Add row span and column span to column node
    const formatedColumns = formatColumnsSpan({
        [VirtualRoot]: true,
        children: columns
    }, maxDepth);

    const result = [];
    Util.preOrderTraverse({
        [VirtualRoot]: true,
        children: formatedColumns
    }, (column, depth) => {

        const rowIndex = depth - 1;
        const rowSpan = column?.rowSpan || 1;

        for (let i = rowIndex, len = rowIndex + rowSpan; i < len; i++) {
            if (i >= 0) {

                if (!result[i]) {
                    result[i] = [];
                }

                if (i > rowIndex) {
                    result[i].push({
                        ...column,
                        hidden: true
                    });
                } else {
                    result[i].push(column);
                }

            }
        }

    });

    return result;

}

/**
 * @param columns
 * @returns {*[]|*}
 */
export function getBodyColumns(columns) {

    if (!columns || columns.length < 1) {
        return columns;
    }

    const result = [];
    Util.postOrderTraverse({children: columns}, column => {
        if (column && (!column.children || column.children.length < 1)) {
            result.push(column);
        }
    });

    return result;

}

/**
 * @param node
 * @param value
 * @param idField
 * @returns {*[]}
 */
export function recursiveSelectChildren(node, value = [], idField) {

    if (!node) {
        return value;
    }

    Util.preOrderTraverse(node, child => {
        if (!isNodeChecked(child, value, idField)) {
            value.push(child);
        }
    });

    return value;

}

/**
 * @param tableData
 * @returns {*}
 */
export function needCollapseButtonSpacing(tableData) {
    return tableData && tableData.some(rowData => rowData && rowData.children && rowData.children.length > 0);
}

/**
 * @param pageSize
 * @param pageSizeValueField
 * @returns {*}
 */
export function getPageSizeValue(pageSize, pageSizeValueField) {
    return typeof pageSize === 'object' ?
        pageSize[pageSizeValueField]
        :
        pageSize;
}

/**
 * @param fragmentNoWrap
 * @param columnNoWrap
 * @param data
 * @param colIndex
 * @param rowIndex
 * @param tableData
 * @returns {boolean}
 */
export function handleNoWrap(fragmentNoWrap, columnNoWrap, {data, colIndex, rowIndex, tableData}) {
    return !!((
        typeof fragmentNoWrap === 'function' ?
            fragmentNoWrap(data, colIndex, rowIndex, tableData)
            :
            fragmentNoWrap
    ) || (
        typeof columnNoWrap === 'function' ?
            columnNoWrap(data, colIndex, rowIndex, tableData)
            :
            columnNoWrap
    ));
}

/**
 * @param page
 * @param pageSize
 * @param data
 * @returns {number|*}
 */
export function handlePage(page, pageSize, data) {

    if (!data || data.length < 1 || !pageSize || page < 0) {
        return 0;
    }

    return Valid.range(page, 0, Math.ceil(data.length / pageSize) - 1);

}

// export function getColumnByPath(columns, path) {
//
//     if (!columns || columns.length < 1 || !path || path.length < 1) {
//         return null;
//     }
//
//     let result = {children: columns};
//     path.forEach(pathIndex => result = result.children[pathIndex]);
//
//     return result;
//
// }

/**
 * @param columns
 * @param columnKeyField
 * @param columnsWidth
 * @param defaultColumnWidth
 * @returns {*|number}
 */
export function getColumnsTotalWidth(
    columns, columnKeyField = 'key', columnsWidth, defaultColumnWidth = 100
) {
    return columns && columnsWidth ?
        columns.reduce((sum, column) => sum + (
            column?.children?.length > 0 ?
                getColumnsTotalWidth(column?.children, columnKeyField, columnsWidth, defaultColumnWidth)
                :
                (columnsWidth.get(getColumnKey(column, columnKeyField)) || defaultColumnWidth)
        ), 0)
        :
        0;
}

/**
 * @param fixed
 * @param colIndex
 * @param columns
 * @param columnKeyField
 * @param columnsWidth
 * @param defaultColumnWidth
 * @param hasVerticalScroll
 * @returns {{}}
 */
export function getStickyColumnStyle(
    fixed, colIndex, columns, columnKeyField = 'key', columnsWidth, defaultColumnWidth, hasVerticalScroll
) {

    if (fixed === HorizontalAlign.LEFT) {
        return {
            position: 'sticky',
            left: getColumnsTotalWidth(
                columns.slice(0, colIndex), columnKeyField, columnsWidth, defaultColumnWidth
            )
        };
    }

    if (fixed === HorizontalAlign.RIGHT) {
        return {
            position: 'sticky',
            right: getColumnsTotalWidth(
                columns.slice(colIndex + 1), columnKeyField, columnsWidth, defaultColumnWidth
            ) + (
                hasVerticalScroll ?
                    ScrollBar.getSize(Direction.VERTICAL)
                    :
                    0
            )
        };
    }

    return {};

}

export default {
    calcSpan,
    getColumnKey,
    getColumnsSpan,
    // fixColumnSpan,
    getAdvancedColumnsSpan,
    sortTableData,
    hasRenderer,
    hasHeadRenderer,
    // hasFixedColumn,
    // getDataByPagination,
    indexOfNodeInValue,
    isNodeChecked,
    isNodeDisabled,
    isSelectAllChecked,
    handleSelect,
    handleDeselect,
    formatValue,
    handleSelectAll,
    sortColumns,
    getFirstColumn,
    getHeadColumns,
    getBodyColumns,
    recursiveSelectChildren,
    needCollapseButtonSpacing,
    getPageSizeValue,
    handleNoWrap,
    handlePage,
    // getColumnByPath,
    getColumnsTotalWidth,
    getStickyColumnStyle
};
