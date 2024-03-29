/**
 * @file Thead component
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
import Direction from '../_statics/Direction';

// Vendors
import Util from '../_vendors/Util';
import TC from '../_vendors/TableCalculation';
import classNames from 'classnames';
import ScrollBar from '../_vendors/ScrollBar';

class Thead extends Component {

    static Align = HorizontalAlign;
    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortingType = SortingType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    getColumnsSpan = row => {

        const {tableData, onRequestColumnsSpan} = this.props;

        return onRequestColumnsSpan ?
            onRequestColumnsSpan(TableFragment.HEAD, row, tableData)
            :
            TC.getColumnsSpan(TableFragment.HEAD, row, tableData);

    };

    getStyle = (column, originColumnIndex, columns) => {

        const {columnKeyField, columnsWidth, defaultColumnWidth, hasVerticalScroll} = this.props;

        return {
            ...column.headStyle,
            ...TC.getStickyColumnStyle(
                column?.fixed, originColumnIndex, columns,
                columnKeyField, columnsWidth, defaultColumnWidth, hasVerticalScroll
            )
        };

    };

    handleClick = e => {
        const {tableData, disabled} = this.props;
        !disabled && this.props.onHeadClick?.(tableData, e);
    };

    render() {

        const {

            className, style, columns, columnsWidth, tableData, disabled, ignoreColumnSpan,
            hasFixedRightColumn, hasVerticalScroll, sorting, columnKeyField,
            defaultSortingType, sortingAscIconCls, sortingDescIconCls, defaultColumnWidth,
            onSortChange,

            ...restProps

        } = this.props;
        const verticalScrollBarSize = ScrollBar.getSize(Direction.VERTICAL);

        return (
            <thead className={className}
                   style={style}
                   disabled={disabled}
                   onClick={this.handleClick}>
                {
                    columns?.map((row, rowIndex) => {

                        if (!row) {
                            return null;
                        }

                        const columnsSpan = this.getColumnsSpan(row);

                        return (
                            <tr key={rowIndex}>

                                {
                                    columnsSpan?.map(({column, span, originColumnIndex}, colIndex) =>
                                        column && !column.hidden ?
                                            <Th {...restProps}
                                                key={colIndex}
                                                column={column}
                                                columnKeyField={columnKeyField}
                                                className={classNames(column.headClassName, {
                                                    'fixed-left': column.fixed === HorizontalAlign.LEFT,
                                                    'last-fixed-left': column.fixed === HorizontalAlign.LEFT
                                                        && columnsSpan?.[colIndex + 1]?.column?.fixed
                                                        !== HorizontalAlign.LEFT,
                                                    'fixed-right': column.fixed === HorizontalAlign.RIGHT,
                                                    'first-fixed-right': column.fixed === HorizontalAlign.RIGHT
                                                        && columnsSpan?.[colIndex - 1]?.column?.fixed
                                                        !== HorizontalAlign.RIGHT
                                                })}
                                                style={this.getStyle(column, originColumnIndex, row)}
                                                width={(
                                                    columnsWidth && columnKeyField
                                                    && columnsWidth.get(TC.getColumnKey(column, columnKeyField))
                                                ) || defaultColumnWidth}
                                                tableData={tableData}
                                                title={column.headTitle}
                                                renderer={column.headRenderer}
                                                align={column.headAlign || column.align}
                                                colIndex={colIndex}
                                                rowSpan={column.rowSpan}
                                                colSpan={ignoreColumnSpan ? null : column.colSpan}
                                                noWrap={TC.handleNoWrap(column.headNoWrap, column.noWrap, {
                                                    data: tableData,
                                                    rowIndex,
                                                    colIndex: colIndex,
                                                    tableData
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
                                    ) || null
                                }

                                {
                                    hasVerticalScroll && columnsSpan && verticalScrollBarSize > 0 && rowIndex === 0 ?
                                        <th className={classNames('scroll-bar-th', {
                                            'fixed-right': hasFixedRightColumn
                                        })}
                                            style={{
                                                width: verticalScrollBarSize,
                                                ...(
                                                    hasFixedRightColumn ?
                                                        {
                                                            position: 'sticky',
                                                            right: 0
                                                        }
                                                        :
                                                        null
                                                )
                                            }}
                                            rowSpan={columns.length}>
                                        </th>
                                        :
                                        null
                                }

                            </tr>
                        );

                    }) || null
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
         * unique keyof column.
         */
        key: PropTypes.string,

        /**
         * fixed position of column ( 'left' / 'right' ).
         */
        fixed: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),

        /**
         * width of column.
         */
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.func]),

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
         * If true, this column can be sorted.
         */
        sortable: PropTypes.bool,

        /**
         * Sorting property.
         */
        sortingProp: PropTypes.string,

        defaultSortingType: PropTypes.oneOf(Util.enumerateValue(SortingType)),

        /**
         * whether the column can be resized
         */
        resizable: PropTypes.bool

    }))).isRequired,
    columnKeyField: PropTypes.string,
    columnsWidth: PropTypes.object,
    tableData: PropTypes.array,
    disabled: PropTypes.bool,
    ignoreColumnSpan: PropTypes.bool,

    /**
     * scroll
     */
    scrollEl: PropTypes.object,
    hasVerticalScroll: PropTypes.bool,

    /**
     * fixed
     */
    hasFixedRightColumn: PropTypes.bool,

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
    defaultColumnWidth: PropTypes.number,
    minColumnWidth: PropTypes.number,
    maxColumnWidth: PropTypes.number,
    resizingColumn: PropTypes.object,

    onHeadClick: PropTypes.func,
    onSortChange: PropTypes.func,
    onRequestColumnsSpan: PropTypes.func,
    onColumnsWidthChange: PropTypes.func,
    onColumnResizeStart: PropTypes.func,
    onColumnResizeEnd: PropTypes.func

};

Thead.defaultProps = {

    columnKeyField: 'key',
    disabled: false,
    ignoreColumnSpan: false,

    /**
     * scroll
     */
    hasVerticalScroll: false,

    /**
     * fixed
     */
    hasFixedRightColumn: false,

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
    defaultColumnWidth: 100,
    minColumnWidth: 64,
    maxColumnWidth: Infinity

};

export default Thead;
