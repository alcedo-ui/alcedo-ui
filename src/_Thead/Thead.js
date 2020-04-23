/**
 * @file Thead component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import Th from '../_Th';

// Statics
import HorizontalAlign from '../_statics/HorizontalAlign';
import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortingType from '../_statics/SortingType';
import TableFragment from '../_statics/TableFragment';

// Vendors
import Util from '../_vendors/Util';
import TC from '../_vendors/TableCalculation';

class Thead extends Component {

    static Align = HorizontalAlign;
    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortingType = SortingType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    getColumnsSpan = row => {

        const {data, onRequestColumnsSpan} = this.props;

        return onRequestColumnsSpan ?
            onRequestColumnsSpan(TableFragment.HEAD, row, data)
            :
            TC.getColumnsSpan(TableFragment.HEAD, row, data);

    };

    getStyle = (columnsSpan, column, colIndex) => {

        const {defaultColumnWidth} = this.props,
            result = {
                ...column.headStyle
            };

        if (column.fixed === HorizontalAlign.LEFT) {
            result.position = 'sticky';
            result.left = TC.getColumnsSpanWidth(columnsSpan.slice(0, colIndex), defaultColumnWidth);
        }

        if (column.fixed === HorizontalAlign.RIGHT) {
            result.position = 'sticky';
            result.right = TC.getColumnsSpanWidth(columnsSpan.slice(colIndex + 1), defaultColumnWidth);
        }

        return result;

    };

    render() {

        const {

            className, style, columns, columnsWidth, baseColIndex, data, ignoreColumnSpan,
            sorting, defaultSortingType, sortingAscIconCls, sortingDescIconCls,
            onSortChange,

            ...restProps

        } = this.props;

        return (
            <thead className={className}
                   style={style}>
                {
                    columns && columns.map((row, rowIndex) => row ?
                        <tr key={rowIndex}>
                            {
                                (
                                    this.getColumnsSpan(row)?.map(({column, path, span}, colIndex) => column ?
                                        <Th {...restProps}
                                            key={colIndex}
                                            column={column}
                                            path={path}
                                            className={column.headClassName}
                                            style={this.getStyle(row, column, colIndex)}
                                            width={(columnsWidth && columnsWidth.get(column)) || column.width}
                                            data={data}
                                            title={column.headTitle}
                                            renderer={column.headRenderer}
                                            align={column.headAlign || column.align}
                                            colIndex={baseColIndex + colIndex}
                                            rowSpan={column.rowSpan}
                                            colSpan={ignoreColumnSpan ? null : column.colSpan}
                                            noWrap={TC.handleNoWrap(column.headNoWrap, column.noWrap, {
                                                data,
                                                rowIndex,
                                                colIndex: baseColIndex + colIndex,
                                                tableData: data
                                            })}
                                            sorting={sorting}
                                            defaultSortingType={column.defaultSortingType || defaultSortingType}
                                            sortingAscIconCls={sortingAscIconCls}
                                            sortingDescIconCls={sortingDescIconCls}
                                            sortable={column.sortable}
                                            sortingProp={column.sortingProp}
                                            onSortChange={onSortChange}/>
                                        :
                                        null
                                    )
                                ) || null
                            }
                        </tr>
                        :
                        null
                    )
                }
            </thead>
        );

    }
}

Thead.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    /**
     * Children passed into table header.
     */
    columns: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({

        /**
         * fixed position of column ( 'left' / 'right' ).
         */
        fixed: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),

        /**
         * width of column.
         */
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

        /**
         * minimum width of column.
         */
        minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

        /**
         * align of current column.
         */
        align: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),

        /**
         * no wrap of current column.
         */
        noWrap: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

        /**
         * The class name of header.
         */
        headClassName: PropTypes.string,

        /**
         * Override the styles of header.
         */
        headStyle: PropTypes.object,

        /**
         * align of table header cell
         */
        headAlign: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),

        /**
         * The render content in table head.
         *  (1) callback:
         *      function (tableData, colIndex) {
         *          return colIndex;
         *      }
         *
         *  (2) others:
         *      render whatever you pass
         */
        headRenderer: PropTypes.any,

        /**
         * The title in table head.
         *  (1) callback:
         *      function (tableData, colIndex) {
         *          return colIndex;
         *      }
         *
         *  (2) others:
         *      render whatever you pass
         */
        headTitle: PropTypes.any,

        /**
         * column span of table header.
         *  (1) function callback:
         *      function (tableData, colIndex) {
         *          return null;
         *      }
         *
         *  (2) number:
         *      render whatever you pass
         */
        headSpan: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),

        /**
         * no wrap of table header.
         */
        headNoWrap: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

        /**
         * The class name of td.
         */
        bodyClassName: PropTypes.string,

        /**
         * Override the styles of td.
         */
        bodyStyle: PropTypes.object,

        /**
         * align of table body cell.
         */
        bodyAlign: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),

        /**
         * The render content in table body.
         *  (1) callback:
         *      function (rowData, rowIndex, colIndex, parentData, tableData, collapsed, depth, path) {
         *          return rowData.id;
         *      }
         *
         *  (2) others:
         *      render whatever you pass
         */
        bodyRenderer: PropTypes.any,

        /**
         * The title in table body.
         *  (1) callback:
         *      function (rowData, rowIndex, colIndex, parentData, tableData, collapsed, depth, path) {
         *          return rowData.id;
         *      }
         *
         *  (2) others:
         *      render whatever you pass
         */
        bodyTitle: PropTypes.any,

        /**
         * column span of table body.
         *  (1) function callback:
         *      function (rowData, colIndex, rowIndex) {
         *          return null;
         *      }
         *
         *  (2) number:
         *      render whatever you pass
         */
        bodySpan: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),

        /**
         * no wrap of table body.
         */
        bodyNoWrap: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

        /**
         * The class name of footer.
         */
        footClassName: PropTypes.string,

        /**
         * Override the styles of footer.
         */
        footStyle: PropTypes.object,

        /**
         * align of table footer cell
         */
        footAlign: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),

        /**
         * The render content in table foot.
         *  (1) callback:
         *      function (tableData, colIndex) {
         *          return colIndex;
         *      }
         *
         *  (2) others:
         *      render whatever you pass
         */
        footRenderer: PropTypes.any,

        /**
         * The title in table foot.
         *  (1) callback:
         *      function (tableData, colIndex) {
         *          return colIndex;
         *      }
         *
         *  (2) others:
         *      render whatever you pass
         */
        footTitle: PropTypes.any,

        /**
         * column span of table foot.
         *  (1) function callback:
         *      function (tableData, colIndex) {
         *          return null;
         *      }
         *
         *  (2) number:
         *      render whatever you pass
         */
        footSpan: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),

        /**
         * no wrap of table foot.
         */
        footNoWrap: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),

        /**
         * If true,this column can be sorted.
         */
        sortable: PropTypes.bool,

        /**
         * Sorting property.
         */
        sortingProp: PropTypes.string,

        defaultSortingType: PropTypes.oneOf(Util.enumerateValue(SortingType))

    }))).isRequired,
    columnsWidth: PropTypes.object,
    data: PropTypes.array,
    baseColIndex: PropTypes.number,
    ignoreColumnSpan: PropTypes.bool,
    scrollEl: PropTypes.object,

    /**
     * sorting
     */
    sorting: PropTypes.shape({
        prop: PropTypes.string,
        type: PropTypes.oneOf(Util.enumerateValue(SortingType))
    }),
    defaultSortingType: PropTypes.oneOf(Util.enumerateValue(SortingType)),
    sortingAscIconCls: PropTypes.string,
    sortingDescIconCls: PropTypes.string,
    isClickSorting: PropTypes.bool,

    /**
     * column resizable
     */
    isColumnResizable: PropTypes.bool,
    defaultColumnWidth: PropTypes.number,
    minColumnWidth: PropTypes.number,
    maxColumnWidth: PropTypes.number,
    resizingColumnPath: PropTypes.array,

    onSortChange: PropTypes.func,
    onRequestColumnsSpan: PropTypes.func,
    onColumnsWidthChange: PropTypes.func,
    onColumnResizeStart: PropTypes.func,
    onColumnResizeEnd: PropTypes.func

};

Thead.defaultProps = {

    baseColIndex: 0,
    ignoreColumnSpan: false,

    /**
     * sorting
     */
    defaultSortingType: SortingType.ASC,
    sortingAscIconCls: 'fas fa-sort-up',
    sortingDescIconCls: 'fas fa-sort-down',
    isClickSorting: true,

    /**
     * column resizable
     */
    isColumnResizable: false,
    defaultColumnWidth: 100,
    minColumnWidth: 64,
    maxColumnWidth: Infinity

};

export default Thead;
