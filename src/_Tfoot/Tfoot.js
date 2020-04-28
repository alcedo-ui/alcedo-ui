/**
 * @file Tfoot component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import Tf from '../_Tf';

// Statics
import TableFragment from '../_statics/TableFragment';
import HorizontalAlign from '../_statics/HorizontalAlign';
import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortingType from '../_statics/SortingType';
import Direction from '../_statics/Direction';

// Vendors
import classNames from 'classnames';
import Util from '../_vendors/Util';
import TC from '../_vendors/TableCalculation';
import ScrollBar from '../_vendors/ScrollBar';

class Tfoot extends Component {

    static Align = HorizontalAlign;
    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortingType = SortingType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    getColumnsSpan = () => {
        const {columns, data, onRequestColumnsSpan} = this.props;
        return onRequestColumnsSpan ?
            onRequestColumnsSpan(TableFragment.FOOT, columns, data)
            :
            TC.getColumnsSpan(TableFragment.FOOT, columns, data);
    };

    getStyle = (column, colIndex) => {
        const {columns, columnKeyField, columnsWidth, defaultColumnWidth, hasVerticalScroll} = this.props;
        return {
            ...column.footStyle,
            ...TC.getStickyColumnStyle(column?.fixed, colIndex, columns,
                columnKeyField, columnsWidth, defaultColumnWidth, hasVerticalScroll)
        };
    };

    handleClick = e => {
        const {data, disabled, onFootClick} = this.props;
        !disabled && onFootClick && onFootClick(data, e);
    };

    render() {

        const {
                className, data, disabled, ignoreColumnSpan, scrollEl, hasVerticalScroll, hasFixedRightColumn,
                onCellClick
            } = this.props,
            columnsSpan = this.getColumnsSpan(),
            verticalScrollBarSize = ScrollBar.getSize(Direction.VERTICAL);

        return (
            <tfoot className={classNames({
                [className]: className,
                [data.rowClassName]: data.rowClassName
            })}
                   style={data.rowStyle}
                   disabled={disabled}
                   onClick={this.handleClick}>
                <tr>

                    {
                        columnsSpan && columnsSpan.map(({column, span}, colIndex) =>
                            <Tf key={colIndex}
                                className={classNames(column.footClassName, {
                                    'fixed-left': column.fixed === HorizontalAlign.LEFT,
                                    'last-fixed-left': column.fixed === HorizontalAlign.LEFT
                                        && columnsSpan?.[colIndex + 1]?.column?.fixed !== HorizontalAlign.LEFT,
                                    'fixed-right': column.fixed === HorizontalAlign.RIGHT,
                                    'first-fixed-right': column.fixed === HorizontalAlign.RIGHT
                                        && columnsSpan?.[colIndex - 1]?.column?.fixed !== HorizontalAlign.RIGHT
                                })}
                                style={this.getStyle(column, colIndex)}
                                colIndex={colIndex}
                                data={data}
                                title={column.footTitle}
                                renderer={column.footRenderer}
                                align={column.footAlign || column.align}
                                span={ignoreColumnSpan ? null : span}
                                noWrap={TC.handleNoWrap(column.footNoWrap, column.noWrap, {
                                    data,
                                    rowIndex: 0,
                                    colIndex: colIndex,
                                    tableData: data
                                })}
                                disabled={disabled}
                                scrollEl={scrollEl}
                                onCellClick={onCellClick}/>
                        )
                    }

                    {
                        hasVerticalScroll && columnsSpan && verticalScrollBarSize > 0 ?
                            <td className={classNames('scroll-bar-tf', {
                                'fixed-right': hasFixedRightColumn
                            })}
                                style={{
                                    width: verticalScrollBarSize,
                                    ...(hasFixedRightColumn ? {
                                        position: 'sticky',
                                        right: 0
                                    } : null)
                                }}>
                            </td>
                            :
                            null
                    }

                </tr>
            </tfoot>
        );

    }
}

Tfoot.propTypes = {

    className: PropTypes.string,

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
    data: PropTypes.array,
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
     * column resizable
     */
    defaultColumnWidth: PropTypes.number,

    onFootClick: PropTypes.func,
    onCellClick: PropTypes.func,
    onRequestColumnsSpan: PropTypes.func

};

Tfoot.defaultProps = {

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
     * column resizable
     */
    defaultColumnWidth: 100

};

export default Tfoot;
