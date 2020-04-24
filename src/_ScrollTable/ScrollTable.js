/**
 * @file ScrollTable component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

// Components
import BaseTable from '../_BaseTable';
import ScrollableTable from '../_ScrollableTable';
import DynamicRenderTableProvider from '../_DynamicRenderTableProvider';

// Statics
import Theme from '../Theme';
import TableFragment from '../_statics/TableFragment';
import HorizontalAlign from '../_statics/HorizontalAlign';
import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortingType from '../_statics/SortingType';

// Vendors
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import Util from '../_vendors/Util';

class ScrollTable extends Component {

    static Fragment = TableFragment;
    static Align = HorizontalAlign;
    static Fixed = HorizontalAlign;
    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortingType = SortingType;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.headScroller = createRef();
        this.bodyScroller = createRef();
        this.footScroller = createRef();

    }

    componentDidUpdate() {
        this.updateEl();
    }

    updateEl = debounce(() => {

        const {
            isHeadFixed, isFootFixed,
            onGetBodyScrollerEl, onGetHeadScrollerEl, onGetFootScrollerEl
        } = this.props;

        onGetBodyScrollerEl && this.bodyScroller && this.bodyScroller.current
        && onGetBodyScrollerEl(findDOMNode(this.bodyScroller.current));

        isHeadFixed && onGetHeadScrollerEl && this.headScroller && this.headScroller.current
        && onGetHeadScrollerEl(findDOMNode(this.headScroller.current));

        isFootFixed && onGetFootScrollerEl && this.footScroller && this.footScroller.current
        && onGetFootScrollerEl(findDOMNode(this.footScroller.current));

    }, 250);

    handleColumnsSpan = (...restArgs) => {
        const {fixed, onRequestColumnsSpan} = this.props;
        return onRequestColumnsSpan && onRequestColumnsSpan(fixed, ...restArgs);
    };

    render() {

        const {

            className, style, horizontalScrollStyle, verticalScrollStyle, fixed, columns,
            headColumns, bodyColumns, columnsWidth, isHeadHidden, isFootHidden, isLayoutFixed, isHeadFixed, isFootFixed,
            data, scroll, hasFixedLeftColumn, hasFixedRightColumn,
            useDynamicRender, dynamicRenderIndex, scrollHeight, rowHeight, scrollBuffer, defaultColumnWidth,
            onScroll, onWheel, onColumnResize,

            // not passing down these props
            onGetHeadScrollerEl, onGetBodyScrollerEl, onGetFootScrollerEl,

            ...restProps

        } = this.props;

        if (!columns && !headColumns && !bodyColumns) {
            return null;
        }

        const tableWidth = horizontalScrollStyle?.width /*|| TC.getTableWidth(columnsWidth, defaultColumnWidth)*/,
            hasHead = !isHeadHidden && isHeadFixed,
            hasFoot = !isFootHidden && isFootFixed;

        return (
            <div className={classNames('scroll-table', {
                [className]: className
            })}
                 style={style}>

                {
                    hasHead ?
                        <ScrollableTable ref={this.headScroller}
                                         className="scroll-table-head"
                                         fragment={TableFragment.HEAD}
                                         scroll={scroll}
                                         useDynamicRender={useDynamicRender}
                                         scrollHeight={scrollHeight}
                                         rowHeight={rowHeight}
                                         scrollBuffer={scrollBuffer}
                                         onScroll={onScroll}>
                            {
                                scrollEl =>
                                    <BaseTable {...restProps}
                                               fixed={fixed}
                                               fragment={TableFragment.HEAD}
                                               columns={columns}
                                               columnsWidth={columnsWidth}
                                               headColumns={headColumns}
                                               bodyColumns={bodyColumns}
                                               data={data}
                                               scrollEl={scrollEl}
                                               useDynamicRender={useDynamicRender}
                                               scrollHeight={scrollHeight}
                                               rowHeight={rowHeight}
                                               scrollBuffer={scrollBuffer}
                                               isBodyHidden={true}
                                               isFootHidden={true}
                                               isLayoutFixed={isLayoutFixed}
                                               defaultColumnWidth={defaultColumnWidth}
                                               onRequestColumnsSpan={this.handleColumnsSpan}/>
                            }
                        </ScrollableTable>
                        :
                        null
                }

                <ScrollableTable ref={this.bodyScroller}
                                 className={classNames('scroll-table-body', {
                                     'has-head': hasHead,
                                     'has-foot': hasFoot
                                 })}
                                 style={verticalScrollStyle}
                                 scroll={scroll}
                                 useDynamicRender={useDynamicRender}
                                 scrollHeight={scrollHeight}
                                 rowHeight={rowHeight}
                                 scrollBuffer={scrollBuffer}
                                 onScroll={onScroll}
                                 onWheel={onWheel}>
                    {
                        scrollEl =>
                            <DynamicRenderTableProvider data={data}
                                                        useDynamicRender={useDynamicRender}
                                                        rowHeight={rowHeight}>
                                <BaseTable {...restProps}
                                           style={{
                                               width: tableWidth,
                                               transform: useDynamicRender && dynamicRenderIndex ?
                                                   `translateY(${dynamicRenderIndex.startWithBuffer * rowHeight}px)`
                                                   :
                                                   null
                                           }}
                                           fixed={fixed}
                                           fragment={TableFragment.BODY}
                                           columns={columns}
                                           headColumns={headColumns}
                                           bodyColumns={bodyColumns}
                                           isLayoutFixed={isLayoutFixed}
                                           isHeadFixed={isHeadFixed}
                                           isFootFixed={isFootFixed}
                                           isHeadHidden={isHeadHidden || isHeadFixed}
                                           isFootHidden={isFootHidden || isFootFixed}
                                           data={data}
                                           scrollEl={scrollEl}
                                           useDynamicRender={useDynamicRender}
                                           scrollHeight={scrollHeight}
                                           rowHeight={rowHeight}
                                           scrollBuffer={scrollBuffer}
                                           defaultColumnWidth={defaultColumnWidth}
                                           onRequestColumnsSpan={this.handleColumnsSpan}
                                           onColumnResize={onColumnResize}/>
                            </DynamicRenderTableProvider>
                    }
                </ScrollableTable>

                {
                    hasFoot ?
                        <ScrollableTable ref={this.footScroller}
                                         className="scroll-table-foot"
                                         fragment={TableFragment.FOOT}
                                         scroll={scroll}
                                         useDynamicRender={useDynamicRender}
                                         scrollHeight={scrollHeight}
                                         rowHeight={rowHeight}
                                         scrollBuffer={scrollBuffer}
                                         onScroll={onScroll}>
                            {
                                scrollEl =>
                                    <BaseTable {...restProps}
                                               fixed={fixed}
                                               fragment={TableFragment.FOOT}
                                               columns={columns}
                                               columnsWidth={columnsWidth}
                                               headColumns={headColumns}
                                               bodyColumns={bodyColumns}
                                               ignoreColumnSpan={true}
                                               data={data}
                                               scrollEl={scrollEl}
                                               useDynamicRender={useDynamicRender}
                                               scrollHeight={scrollHeight}
                                               rowHeight={rowHeight}
                                               scrollBuffer={scrollBuffer}
                                               isHeadHidden={true}
                                               isBodyHidden={true}
                                               isLayoutFixed={isLayoutFixed}
                                               defaultColumnWidth={defaultColumnWidth}
                                               onRequestColumnsSpan={this.handleColumnsSpan}/>
                            }
                        </ScrollableTable>
                        :
                        null
                }

            </div>
        );

    }
}

ScrollTable.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    horizontalScrollStyle: PropTypes.object,
    verticalScrollStyle: PropTypes.object,

    fixed: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(Util.enumerateValue(HorizontalAlign))]),

    /**
     * The theme of the table select radio or checkbox.
     */
    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

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

    })),
    headColumns: PropTypes.array,
    bodyColumns: PropTypes.array,
    columnKeyField: PropTypes.string,
    columnsWidth: PropTypes.object,
    data: PropTypes.array,
    dynamicRenderData: PropTypes.array,
    value: PropTypes.array,
    idField: PropTypes.string,
    expandRows: PropTypes.array,

    /**
     * scroll
     */
    scroll: PropTypes.shape({
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    }),

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
     * fixed
     */
    isLayoutFixed: PropTypes.bool,
    isHeadFixed: PropTypes.bool,
    isFootFixed: PropTypes.bool,

    /**
     * hidden
     */
    isHeadHidden: PropTypes.bool,
    isFootHidden: PropTypes.bool,

    /**
     * has renderer
     */
    hasHeadRenderer: PropTypes.bool,
    hasBodyRenderer: PropTypes.bool,
    hasFootRenderer: PropTypes.bool,

    /**
     * fixed column
     */
    hasFixedLeftColumn: PropTypes.bool,
    hasFixedRightColumn: PropTypes.bool,

    /**
     * Dynamic Render
     */
    useDynamicRender: PropTypes.bool,
    dynamicRenderIndex: PropTypes.object,
    scrollHeight: PropTypes.number,
    rowHeight: PropTypes.number,
    scrollBuffer: PropTypes.number,

    /**
     * column resizable
     */
    isColumnResizable: PropTypes.bool,
    defaultColumnWidth: PropTypes.number,
    minColumnWidth: PropTypes.number,
    maxColumnWidth: PropTypes.number,
    resizingColumnPath: PropTypes.array,

    /**
     * callback
     */
    onGetBodyScrollerEl: PropTypes.func,
    onGetHeadScrollerEl: PropTypes.func,
    onGetFootScrollerEl: PropTypes.func,
    onExpandChange: PropTypes.func,
    onScroll: PropTypes.func,
    onWheel: PropTypes.func,
    onSortChange: PropTypes.func,
    onRequestColumnsSpan: PropTypes.func,
    onColumnsWidthChange: PropTypes.func,
    onColumnResizeStart: PropTypes.func,
    onColumnResizeEnd: PropTypes.func,
    onColumnResize: PropTypes.func

};

ScrollTable.defaultProps = {

    columnKeyField: 'key',
    selectMode: SelectMode.SINGLE_SELECT,
    selectAllMode: SelectAllMode.CURRENT_PAGE,
    idField: 'id',
    expandRows: [],

    /**
     * sorting
     */
    defaultSortingType: SortingType.ASC,
    sortingAscIconCls: 'fas fa-sort-up',
    sortingDescIconCls: 'fas fa-sort-down',
    isClickSorting: true,

    /**
     * fixed
     */
    isLayoutFixed: true,
    isHeadFixed: false,
    isFootFixed: false,

    /**
     * hidden
     */
    isHeadHidden: false,
    isFootHidden: false,

    /**
     * has renderer
     */
    hasHeadRenderer: true,
    hasBodyRenderer: true,
    hasFootRenderer: true,

    /**
     * fixed column
     */
    hasFixedLeftColumn: false,
    hasFixedRightColumn: false,

    /**
     * Dynamic Render
     */
    useDynamicRender: false,
    scrollHeight: 500,
    rowHeight: 50,
    scrollBuffer: 8,

    /**
     * column resizable
     */
    isColumnResizable: false,
    defaultColumnWidth: 100,
    minColumnWidth: 64,
    maxColumnWidth: Infinity

};

export default ScrollTable;
