/**
 * @file BaseTable component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import ColGroup from '../_ColGroup';
import Thead from '../_Thead';
import Tbody from '../_Tbody';
import Tfoot from '../_Tfoot';

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

class BaseTable extends Component {

    static Fragment = TableFragment;
    static Align = HorizontalAlign;
    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortingType = SortingType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    getColumnsSpan = () => {
        const {fragment, bodyColumns, columns, onRequestColumnsSpan} = this.props;
        return onRequestColumnsSpan ?
            onRequestColumnsSpan(fragment, bodyColumns || columns)
            :
            TC.getColumnsSpan(fragment, bodyColumns || columns);
    };

    /* eslint-disable complexity */
    render() {

        const {

            className, style, data, dynamicRenderData, value, hoverRow, idProp, baseColIndex, fixed, fragment, scrollEl,
            columns, headColumns, bodyColumns, selectMode, selectAllMode, expandRows,
            useDynamicRender, scrollHeight, rowHeight, scrollBuffer,
            isMouseEventForbidden, isHeadFixed, isFootFixed, isHeadHidden, isBodyHidden, isFootHidden,
            ignoreColumnWidth, ignoreColumnSpan, hasHeadRenderer, hasBodyRenderer, hasFootRenderer,
            sorting, defaultSortingType, sortingAscIconCls, sortingDescIconCls, isClickSorting,
            onRowHover, onSortChange, onExpandChange, onRequestColumnsSpan,

            ...restProps

        } = this.props;

        return (
            <table {...restProps}
                   className={classNames('base-table', {
                       [className]: className
                   })}
                   style={style}>

                <ColGroup columns={this.getColumnsSpan()}
                          ignoreColumnWidth={ignoreColumnWidth}
                          ignoreColumnSpan={ignoreColumnSpan}/>

                {
                    !isHeadHidden && hasHeadRenderer ?
                        <Thead {...restProps}
                               columns={headColumns || [columns]}
                               data={data}
                               dynamicRenderData={dynamicRenderData}
                               selectMode={selectMode}
                               selectAllMode={selectAllMode}
                               sorting={sorting}
                               defaultSortingType={defaultSortingType}
                               sortingAscIconCls={sortingAscIconCls}
                               sortingDescIconCls={sortingDescIconCls}
                               isClickSorting={isClickSorting}
                               ignoreColumnSpan={ignoreColumnSpan}
                               scrollEl={scrollEl}
                               onSortChange={onSortChange}
                               onRequestColumnsSpan={onRequestColumnsSpan}/>
                        :
                        null
                }

                {
                    !isBodyHidden && hasBodyRenderer ?
                        <Tbody {...restProps}
                               columns={bodyColumns || columns}
                               data={data}
                               dynamicRenderData={dynamicRenderData}
                               value={value}
                               hoverRow={hoverRow}
                               selectMode={selectMode}
                               selectAllMode={selectAllMode}
                               expandRows={expandRows}
                               idProp={idProp}
                               baseColIndex={baseColIndex}
                               sorting={sorting}
                               isMouseEventForbidden={isMouseEventForbidden}
                               ignoreColumnSpan={ignoreColumnSpan}
                               scrollEl={scrollEl}
                               useDynamicRender={useDynamicRender}
                               scrollHeight={scrollHeight}
                               rowHeight={rowHeight}
                               scrollBuffer={scrollBuffer}
                               onExpandChange={onExpandChange}
                               onRowHover={onRowHover}
                               onRequestColumnsSpan={onRequestColumnsSpan}/>
                        :
                        null
                }

                {/** render foot if a footRenderer exists in columns */}
                {
                    !isFootHidden && hasFootRenderer ?
                        <Tfoot {...restProps}
                               columns={bodyColumns || columns}
                               data={data}
                               dynamicRenderData={dynamicRenderData}
                               selectMode={selectMode}
                               selectAllMode={selectAllMode}
                               ignoreColumnSpan={ignoreColumnSpan}
                               scrollEl={scrollEl}
                               onRequestColumnsSpan={onRequestColumnsSpan}/>
                        :
                        null
                }

            </table>
        );

    }
}

BaseTable.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The select mode of table.
     */
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),

    /**
     * The select all mode of table, all or current page.
     */
    selectAllMode: PropTypes.oneOf(Util.enumerateValue(SelectAllMode)),

    fixed: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(Util.enumerateValue(HorizontalAlign))]),

    fragment: PropTypes.oneOf(Util.enumerateValue(TableFragment)),

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

    })),
    headColumns: PropTypes.array,
    bodyColumns: PropTypes.array,

    data: PropTypes.array,
    dynamicRenderData: PropTypes.array,
    value: PropTypes.array,
    hoverRow: PropTypes.object,
    idProp: PropTypes.string,
    baseColIndex: PropTypes.number,
    disabled: PropTypes.bool,
    expandRows: PropTypes.array,
    isMouseEventForbidden: PropTypes.bool,
    ignoreColumnWidth: PropTypes.bool,
    ignoreColumnSpan: PropTypes.bool,
    scrollEl: PropTypes.object,

    /**
     * fixed
     */
    isHeadFixed: PropTypes.bool,
    isFootFixed: PropTypes.bool,

    /**
     * hidden
     */
    isHeadHidden: PropTypes.bool,
    isBodyHidden: PropTypes.bool,
    isFootHidden: PropTypes.bool,

    /**
     * has renderer
     */
    hasHeadRenderer: PropTypes.bool,
    hasBodyRenderer: PropTypes.bool,
    hasFootRenderer: PropTypes.bool,

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
     * Dynamic Render
     */
    useDynamicRender: PropTypes.bool,
    scrollHeight: PropTypes.number,
    rowHeight: PropTypes.number,
    scrollBuffer: PropTypes.number,

    /**
     * callback
     */
    onSortChange: PropTypes.func,
    onHeadClick: PropTypes.func,
    onRowClick: PropTypes.func,
    onCellClick: PropTypes.func,
    onFootClick: PropTypes.func,
    onRowHover: PropTypes.func,
    onExpandChange: PropTypes.func,
    onRequestColumnsSpan: PropTypes.func

};

BaseTable.defaultProps = {

    baseColIndex: 0,
    disabled: false,
    expandRows: [],
    isMouseEventForbidden: false,
    ignoreColumnWidth: false,
    ignoreColumnSpan: false,

    /**
     * fixed
     */
    isHeadFixed: false,
    isFootFixed: false,

    /**
     * hidden
     */
    isHeadHidden: false,
    isBodyHidden: false,
    isFootHidden: false,

    /**
     * has renderer
     */
    hasHeadRenderer: true,
    hasBodyRenderer: true,
    hasFootRenderer: true,

    /**
     * sorting
     */
    defaultSortingType: SortingType.ASC,
    sortingAscIconCls: 'fas fa-sort-up',
    sortingDescIconCls: 'fas fa-sort-down',
    isClickSorting: true,

    /**
     * Dynamic Render
     */
    useDynamicRender: false,
    scrollHeight: 500,
    rowHeight: 50,
    scrollBuffer: 8

};

export default BaseTable;
