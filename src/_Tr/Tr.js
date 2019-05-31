/**
 * @file Tr component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Td from '../_Td';

import TableFragment from '../_statics/TableFragment';
import HorizontalAlign from '../_statics/HorizontalAlign';
import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortingType from '../_statics/SortingType';

import Util from '../_vendors/Util';
import TableCalculation from '../_vendors/TableCalculation';

class Tr extends Component {

    static Align = HorizontalAlign;
    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortingType = SortingType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    isCollapsed = () => {

        const {idProp, data, expandRows} = this.props;

        if (!expandRows || expandRows.length < 1) {
            return true;
        }

        return TableCalculation.indexOfNodeInValue(data, expandRows, idProp) === -1;

    };

    handleClick = e => {
        const {data, rowIndex, disabled, onRowClick} = this.props;
        !disabled && onRowClick && onRowClick(data, rowIndex, e);
    };

    render() {

        const {
                className, columns, rowIndex, data, isChecked, disabled, baseColIndex, depth, path,
                ...respProps
            } = this.props,
            collapsed = this.isCollapsed(),
            columnsWithSpan = TableCalculation.getColumnsWithSpan(TableFragment.BODY, columns, data, rowIndex);

        return (
            <Fragment>

                <tr className={classNames({
                    checked: isChecked,
                    expanded: !collapsed,
                    [data.rowClassName]: data.rowClassName,
                    [className]: className
                })}
                    style={data.rowStyle}
                    disabled={disabled}
                    onClick={this.handleClick}>
                    {
                        columnsWithSpan && columnsWithSpan.map(({column, span}, colIndex) => column ?
                            <Td {...respProps}
                                key={colIndex}
                                className={column.bodyClassName}
                                style={column.bodyStyle}
                                rowIndex={rowIndex}
                                colIndex={baseColIndex + colIndex}
                                data={data}
                                collapsed={collapsed}
                                renderer={column.bodyRenderer}
                                align={column.bodyAlign || column.align}
                                span={span}
                                disabled={disabled}
                                depth={depth}
                                path={path}
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
                            data={item}
                            depth={depth + 1}
                            path={
                                path ?
                                    [...path, {index, node: item}]
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

    rowIndex: PropTypes.number,

    /**
     * Children passed into table header.
     */
    columns: PropTypes.arrayOf(PropTypes.shape({

        /**
         * fixed position of column ( true / 'left' / 'right' )
         */
        fixed: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(Util.enumerateValue(HorizontalAlign))]),

        /**
         * width of column
         */
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

        /**
         * minimum width of column
         */
        minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

        /**
         * align of current column
         */
        align: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),

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
         * column span of table header
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
         * The class name of td.
         */
        bodyClassName: PropTypes.string,

        /**
         * Override the styles of td.
         */
        bodyStyle: PropTypes.object,

        /**
         * align of table body cell
         */
        bodyAlign: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),

        /**
         * The render content in table body.
         *  (1) callback:
         *      function (rowData, rowIndex, colIndex) {
         *          return rowData.id;
         *      }
         *
         *  (2) others:
         *      render whatever you pass
         */
        bodyRenderer: PropTypes.any,

        /**
         * column span of table body
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
         * If true,this column can be sorted.
         */
        sortable: PropTypes.bool,

        /**
         * Sorting property.
         */
        sortingProp: PropTypes.string,

        defaultSortingType: PropTypes.oneOf(Util.enumerateValue(SortingType))

    })).isRequired,

    data: PropTypes.object,
    tableData: PropTypes.array,
    isChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    expandRows: PropTypes.array,
    baseColIndex: PropTypes.number,
    depth: PropTypes.number,
    path: PropTypes.array,
    idProp: PropTypes.string,

    /**
     * sorting
     */
    sorting: PropTypes.shape({
        prop: PropTypes.string,
        type: PropTypes.oneOf(Util.enumerateValue(SortingType))
    }),

    /**
     * callback
     */
    onRowClick: PropTypes.func,
    onCellClick: PropTypes.func,
    onExpandChange: PropTypes.func

};

Tr.defaultProps = {
    rowIndex: 0,
    isChecked: false,
    disabled: false,
    expandRows: [],
    baseColIndex: 0,
    depth: 0,
    idProp: 'id'
};

export default Tr;
