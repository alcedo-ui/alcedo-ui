/**
 * @file ScrollTable component
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
import Util from '../_vendors/Util';
import ScrollBar from '../_vendors/ScrollBar';

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

        this.lastScrollerEl = {};

    }

    componentDidMount() {
        this.updateEl();
        this.props.onInit?.();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.updateEl();
    }

    updateFragmentEl = fragment => {

        const {onGetScrollerEl} = this.props,
            instance = this?.[`${fragment}Scroller`]?.current,
            el = instance && findDOMNode(instance);

        if (!onGetScrollerEl || !el || this.lastScrollerEl[fragment] === el) {
            return;
        }

        onGetScrollerEl(fragment, el);
        this.lastScrollerEl[fragment] = el;

    };

    updateEl = () => {

        const {isHeadFixed, isFootFixed} = this.props;

        this.updateFragmentEl(TableFragment.BODY);
        isHeadFixed && this.updateFragmentEl(TableFragment.HEAD);
        isFootFixed && this.updateFragmentEl(TableFragment.FOOT);

    };

    hasVerticalScroll = () => {

        const scrollEl = this.lastScrollerEl[TableFragment.BODY];

        if (!scrollEl) {
            return false;
        }

        return scrollEl.scrollHeight > scrollEl.clientHeight;

    };

    handleColumnsSpan = (...restArgs) => {
        return this.props.onRequestColumnsSpan?.(...restArgs);
    };

    render() {

        const {

            horizontalScrollStyle, verticalScrollStyle, columns, headColumns, bodyColumns,
            isHeadHidden, isFootHidden, isLayoutFixed, isHeadFixed, isFootFixed, data, footData, scroll,
            useDynamicRender, dynamicRenderIndex, scrollHeight, rowHeight, scrollBuffer, defaultColumnWidth,
            onScroll, onWheel, onColumnMeasure,

            // not passing down these props
            // eslint-disable-next-line no-unused-vars
            onInit, onGetScrollerEl,

            ...restProps

        } = this.props;

        if (!columns && !headColumns && !bodyColumns) {
            return null;
        }

        const hasVerticalScroll = this.hasVerticalScroll();
        const hasHead = !isHeadHidden && isHeadFixed;
        const hasFoot = !isFootHidden && isFootFixed;
        const scrollableTableStyle = ScrollBar.getHideHorizontalScrollBarStyle();

        return (
            <>

                {
                    hasHead ?
                        <ScrollableTable ref={this.headScroller}
                                         className="scroll-table-head"
                                         style={scrollableTableStyle}
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
                                               className="table-head"
                                               fragment={TableFragment.HEAD}
                                               columns={columns}
                                               headColumns={headColumns}
                                               bodyColumns={bodyColumns}
                                               isHeadFixed={isHeadFixed}
                                               isFootFixed={isFootFixed}
                                               data={data}
                                               footData={footData}
                                               scrollEl={scrollEl}
                                               useDynamicRender={useDynamicRender}
                                               scrollHeight={scrollHeight}
                                               rowHeight={rowHeight}
                                               scrollBuffer={scrollBuffer}
                                               hasVerticalScroll={hasVerticalScroll}
                                               isBodyHidden={true}
                                               isFootHidden={true}
                                               useColumnsWidth={true}
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
                                           className="table-body"
                                           style={{
                                               width: horizontalScrollStyle?.width,
                                               minWidth: horizontalScrollStyle?.width ? '100%' : null,
                                               transform: useDynamicRender && dynamicRenderIndex ?
                                                   `translateY(${dynamicRenderIndex.startWithBuffer * rowHeight}px)`
                                                   :
                                                   null
                                           }}
                                           fragment={TableFragment.BODY}
                                           columns={columns}
                                           headColumns={headColumns}
                                           bodyColumns={bodyColumns}
                                           isHeadFixed={isHeadFixed}
                                           isFootFixed={isFootFixed}
                                           isLayoutFixed={isLayoutFixed}
                                           isHeadHidden={isHeadHidden || isHeadFixed}
                                           isFootHidden={isFootHidden || isFootFixed}
                                           data={data}
                                           footData={footData}
                                           scrollEl={scrollEl}
                                           useDynamicRender={useDynamicRender}
                                           scrollHeight={scrollHeight}
                                           rowHeight={rowHeight}
                                           scrollBuffer={scrollBuffer}
                                           defaultColumnWidth={defaultColumnWidth}
                                           onRequestColumnsSpan={this.handleColumnsSpan}
                                           onColumnMeasure={onColumnMeasure}/>
                            </DynamicRenderTableProvider>
                    }
                </ScrollableTable>

                {
                    hasFoot ?
                        <ScrollableTable ref={this.footScroller}
                                         className="scroll-table-foot"
                                         style={scrollableTableStyle}
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
                                               className="table-foot"
                                               fragment={TableFragment.FOOT}
                                               columns={columns}
                                               headColumns={headColumns}
                                               bodyColumns={bodyColumns}
                                               isHeadFixed={isHeadFixed}
                                               isFootFixed={isFootFixed}
                                               ignoreColumnSpan={true}
                                               data={data}
                                               footData={footData}
                                               scrollEl={scrollEl}
                                               useDynamicRender={useDynamicRender}
                                               scrollHeight={scrollHeight}
                                               rowHeight={rowHeight}
                                               scrollBuffer={scrollBuffer}
                                               hasVerticalScroll={hasVerticalScroll}
                                               isHeadHidden={true}
                                               isBodyHidden={true}
                                               useColumnsWidth={true}
                                               isLayoutFixed={isLayoutFixed}
                                               defaultColumnWidth={defaultColumnWidth}
                                               onRequestColumnsSpan={this.handleColumnsSpan}/>
                            }
                        </ScrollableTable>
                        :
                        null
                }

            </>
        );

    }
}

ScrollTable.propTypes = {

    horizontalScrollStyle: PropTypes.object,
    verticalScrollStyle: PropTypes.object,

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

    })),
    headColumns: PropTypes.array,
    bodyColumns: PropTypes.array,
    columnKeyField: PropTypes.string,
    columnsWidth: PropTypes.object,
    data: PropTypes.array,
    footData: PropTypes.array,
    dynamicRenderData: PropTypes.array,
    value: PropTypes.array,
    idField: PropTypes.string,
    disabled: PropTypes.bool,
    isRowDisabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
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
    defaultColumnWidth: PropTypes.number,
    minColumnWidth: PropTypes.number,
    maxColumnWidth: PropTypes.number,
    resizingColumn: PropTypes.object,

    /**
     * callback
     */
    onInit: PropTypes.func,
    onGetScrollerEl: PropTypes.func,
    onExpandChange: PropTypes.func,
    onScroll: PropTypes.func,
    onWheel: PropTypes.func,
    onSortChange: PropTypes.func,
    onRequestColumnsSpan: PropTypes.func,
    onColumnsWidthChange: PropTypes.func,
    onColumnResizeStart: PropTypes.func,
    onColumnResizeEnd: PropTypes.func,
    onColumnMeasure: PropTypes.func

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
    defaultColumnWidth: 100,
    minColumnWidth: 64,
    maxColumnWidth: Infinity

};

export default ScrollTable;
