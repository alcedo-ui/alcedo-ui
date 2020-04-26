/**
 * @file Tr component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

// Components
import Td from '../_Td';

// Statics
import TableFragment from '../_statics/TableFragment';
import HorizontalAlign from '../_statics/HorizontalAlign';
import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortingType from '../_statics/SortingType';

// Vendors
import classNames from 'classnames';
import Util from '../_vendors/Util';
import TC from '../_vendors/TableCalculation';

class Tr extends Component {

    static Align = HorizontalAlign;
    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortingType = SortingType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    getDynamicRenderStyle = () => {
        const {useDynamicRender, rowHeight} = this.props;
        return useDynamicRender ? {
                height: rowHeight,
                paddingTop: 0,
                paddingBottom: 0
            }
            :
            null;
    };

    getTdStyle = (column, colIndex, columnsSpan) => {
        const {columnKeyField, columnsWidth, defaultColumnWidth} = this.props;
        return {
            ...column?.bodyStyle,
            ...TC.getStickyColumnStyle(TableFragment.BODY, column?.fixed, colIndex,
                columnsSpan, columnKeyField, columnsWidth, defaultColumnWidth),
            ...this.getDynamicRenderStyle()
        };
    };

    isCollapsed = () => {

        const {idField, data, expandRows} = this.props;

        if (!expandRows || expandRows.length < 1) {
            return true;
        }

        return TC.indexOfNodeInValue(data, expandRows, idField) === -1;

    };

    getColumnsSpan = () => {
        const {columns, data, rowIndex, onRequestColumnsSpan} = this.props;
        return onRequestColumnsSpan ?
            onRequestColumnsSpan(TableFragment.BODY, columns, data, rowIndex)
            :
            TC.getColumnsSpan(TableFragment.BODY, columns, data, rowIndex);
    };

    handleClick = e => {
        const {data, rowIndex, disabled, onRowClick} = this.props;
        !disabled && onRowClick && onRowClick(data, rowIndex, e);
    };

    render() {

        const {

                className, style, columns, rowIndex, data, parentData, tableData,
                isChecked, disabled, ignoreColumnSpan, depth, index, path,
                useDynamicRender, rowHeight,

                ...respProps

            } = this.props,
            collapsed = this.isCollapsed(),
            columnsSpan = this.getColumnsSpan(),
            nodePath = path || [{index, node: data}];

        return (
            <Fragment>

                <tr className={classNames({
                    checked: isChecked,
                    expanded: !collapsed,
                    [data.rowClassName]: data.rowClassName,
                    [className]: className
                })}
                    style={style}
                    disabled={disabled}
                    onClick={this.handleClick}>
                    {
                        columnsSpan && columnsSpan.map(({column, span}, colIndex) => column ?
                            <Td {...respProps}
                                key={colIndex}
                                className={classNames(column.bodyClassName, {
                                    'fixed-left': column.fixed === HorizontalAlign.LEFT,
                                    'last-fixed-left': column.fixed === HorizontalAlign.LEFT
                                        && columnsSpan?.[colIndex + 1]?.column?.fixed !== HorizontalAlign.LEFT,
                                    'fixed-right': column.fixed === HorizontalAlign.RIGHT,
                                    'first-fixed-right': column.fixed === HorizontalAlign.RIGHT
                                        && columnsSpan?.[colIndex - 1]?.column?.fixed !== HorizontalAlign.RIGHT
                                })}
                                style={this.getTdStyle(column, colIndex, columnsSpan)}
                                rowIndex={rowIndex}
                                colIndex={colIndex}
                                data={data}
                                title={column.bodyTitle}
                                parentData={parentData}
                                tableData={tableData}
                                collapsed={collapsed}
                                renderer={column.bodyRenderer}
                                align={column.bodyAlign || column.align}
                                span={ignoreColumnSpan ? null : span}
                                disabled={disabled}
                                noWrap={TC.handleNoWrap(column.bodyNoWrap, column.noWrap, {
                                    data,
                                    rowIndex,
                                    colIndex: colIndex,
                                    tableData
                                })}
                                depth={depth}
                                path={nodePath}
                                sortable={column.sortable}
                                sortingProp={column.sortingProp}/>
                            :
                            null
                        )
                    }
                </tr>

                {
                    /*rowHasChildren && */!collapsed && data && data.children && data.children.length > 0 ?
                    data.children.map((item, index) =>
                        <Tr {...this.props}
                            key={index}
                            index={index}
                            data={item}
                            parentData={data}
                            depth={depth + 1}
                            path={
                                nodePath ?
                                    [...nodePath, {index, node: item}]
                                    :
                                    [{index, node: item}]
                            }/>
                    )
                    :
                    null
                }

            </Fragment>
        );

    }
}

Tr.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    rowIndex: PropTypes.number,

    /**
     * Children passed into table header.
     */
    columns: PropTypes.arrayOf(PropTypes.shape({

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

    })).isRequired,
    columnKeyField: PropTypes.string,
    columnsWidth: PropTypes.object,
    data: PropTypes.object,
    parentData: PropTypes.object,
    tableData: PropTypes.array,
    isChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    expandRows: PropTypes.array,
    depth: PropTypes.number,
    index: PropTypes.number,
    path: PropTypes.array,
    idField: PropTypes.string,
    isMouseEventForbidden: PropTypes.bool,
    ignoreColumnSpan: PropTypes.bool,
    scrollEl: PropTypes.object,

    /**
     * sorting
     */
    sorting: PropTypes.shape({
        prop: PropTypes.string,
        type: PropTypes.oneOf(Util.enumerateValue(SortingType))
    }),

    /**
     * Dynamic Render
     */
    useDynamicRender: PropTypes.bool,
    rowHeight: PropTypes.number,

    /**
     * column resizable
     */
    defaultColumnWidth: PropTypes.number,

    /**
     * callback
     */
    onRowClick: PropTypes.func,
    onCellClick: PropTypes.func,
    onExpandChange: PropTypes.func,
    onRequestColumnsSpan: PropTypes.func

};

Tr.defaultProps = {

    columnKeyField: 'key',
    rowIndex: 0,
    isChecked: false,
    disabled: false,
    expandRows: [],
    depth: 0,
    idField: 'id',
    isMouseEventForbidden: false,
    ignoreColumnSpan: false,

    /**
     * Dynamic Render
     */
    useDynamicRender: false,
    rowHeight: 50,

    /**
     * column resizable
     */
    defaultColumnWidth: 100

};

export default Tr;
