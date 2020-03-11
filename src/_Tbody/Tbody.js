/**
 * @file Tbody component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import Tr from '../_Tr';

// Statics
import HorizontalAlign from '../_statics/HorizontalAlign';
import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortingType from '../_statics/SortingType';

// Vendors
import Util from '../_vendors/Util';

class Tbody extends Component {

    static Align = HorizontalAlign;
    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortingType = SortingType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    getStyle = row => {

        const {useDynamicRender, rowHeight} = this.props;

        return useDynamicRender ?
            {
                ...row?.rowStyle,
                height: rowHeight - 1,
                paddingTop: 0,
                paddingBottom: 0
            }
            :
            row?.rowStyle;

    };

    isItemChecked = rowData => {

        const {selectMode, idProp, value} = this.props;

        if (!rowData || !value || selectMode === SelectMode.NORMAL) {
            return false;
        }

        switch (selectMode) {
            case SelectMode.MULTI_SELECT:
                return value && value.findIndex(item => item[idProp] === rowData[idProp]) !== -1;
            case SelectMode.SINGLE_SELECT:
                return value[idProp] === rowData[idProp];
        }

    };

    handleTrMouseEnter = (e, rowData) => {
        const {onRowHover} = this.props;
        onRowHover && onRowHover(rowData);
    };

    handleTrMouseLeave = () => {
        const {onRowHover} = this.props;
        onRowHover && onRowHover(null);
    };

    render() {

        const {

                className, style, columns, data, dynamicRenderData,
                startIndex, idProp, disabled, isMouseEventForbidden, ignoreColumnSpan, useDynamicRender,

                // not passing down these props
                value,

                ...restProps

            } = this.props,

            finalData = (useDynamicRender ? dynamicRenderData : data) || [];

        return (
            <tbody className={className}
                   style={style}>
                {
                    finalData && finalData.map((row, index) => row ?
                        <Tr {...restProps}
                            style={row?.rowStyle || null}
                            key={index}
                            index={index}
                            rowIndex={startIndex + index}
                            columns={columns}
                            data={row}
                            tableData={data}
                            isChecked={this.isItemChecked(row)}
                            disabled={disabled || row.disabled}
                            isMouseEventForbidden={isMouseEventForbidden}
                            ignoreColumnSpan={ignoreColumnSpan}
                            useDynamicRender={useDynamicRender}
                            onMouseEnter={this.handleTrMouseEnter}
                            onMouseLeave={this.handleTrMouseLeave}/>
                        :
                        null
                    )
                }
            </tbody>
        );

    }
}

Tbody.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    /**
     * The select mode of table.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    /**
     * The select all mode of table, all or current page.
     */
    selectAllMode: PropTypes.oneOf(Util.enumerateValue(SelectAllMode)),

    /**
     * Children passed into table header.
     */
    columns: PropTypes.arrayOf(PropTypes.shape({

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

    data: PropTypes.array,
    dynamicRenderData: PropTypes.array,
    value: PropTypes.array,
    hoverRow: PropTypes.object,
    startIndex: PropTypes.number,
    idProp: PropTypes.string,
    disabled: PropTypes.bool,
    baseColIndex: PropTypes.number,
    expandRows: PropTypes.array,
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
    scrollHeight: PropTypes.number,
    rowHeight: PropTypes.number,
    scrollBuffer: PropTypes.number,

    /**
     * callback
     */
    onRowClick: PropTypes.func,
    onCellClick: PropTypes.func,
    onRowHover: PropTypes.func,
    onExpand: PropTypes.func,
    onCollapse: PropTypes.func,
    onRequestColumnsSpan: PropTypes.func

};

Tbody.defaultProps = {

    selectMode: SelectMode.SINGLE_SELECT,
    startIndex: 0,
    idProp: 'id',
    disabled: false,
    baseColIndex: 0,
    expandRows: [],
    isMouseEventForbidden: false,
    ignoreColumnSpan: false,

    /**
     * Dynamic Render
     */
    useDynamicRender: false,
    scrollHeight: 500,
    rowHeight: 50,
    scrollBuffer: 8

};

export default Tbody;
