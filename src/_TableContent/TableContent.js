/**
 * @file TableContent component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, Fragment, createRef} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';

// Components
import ScrollTable from '../_ScrollTable';
import ScrollableTable from '../_ScrollableTable';
import Checkbox from '../Checkbox';
import IconButton from '../IconButton';
import BaseTable from '../_BaseTable/BaseTable';

// Statics
import Theme from '../Theme';
import TableFragment from '../_statics/TableFragment';
import HorizontalAlign from '../_statics/HorizontalAlign';
import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortingType from '../_statics/SortingType';

// Vendors
import classNames from 'classnames';
import startCase from 'lodash/startCase';
import isArray from 'lodash/isArray';
import debounce from 'lodash/debounce';
import cloneDeep from 'lodash/cloneDeep';
import Util from '../_vendors/Util';
import TL from '../_vendors/TableLayout';
import TC from '../_vendors/TableCalculation';
import Calc from '../_vendors/Calculation';
import Event from '../_vendors/Event';

class TableContent extends Component {

    static Fragment = TableFragment;
    static Align = HorizontalAlign;
    static Fixed = HorizontalAlign;
    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortingType = SortingType;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.leftBodyScroller = null;
        this.centerHeadScroller = null;
        this.centerBodyScroller = null;
        this.centerFootScroller = null;
        this.rightBodyScroller = null;

        this.lastScrollLeft = 0;
        this.lastScrollTop = 0;

        this.wrapper = createRef();
        this.wrapperEl = null;
        this.rawTable = createRef();
        this.rawTableEl = null;
        this.fixedLeft = createRef();
        this.fixedLeftEl = null;
        this.fixedRight = createRef();
        this.fixedRightEl = null;

        // sorted current page cache data
        this.tableData = [];

    }

    componentDidMount() {

        // get elements
        this.wrapperEl = this.wrapper && this.wrapper.current;
        this.rawTableEl = this.rawTable && this.rawTable.current && findDOMNode(this.rawTable.current);
        this.fixedLeftEl = this.fixedLeft && this.fixedLeft.current && findDOMNode(this.fixedLeft.current);
        this.fixedRightEl = this.fixedRight && this.fixedRight.current && findDOMNode(this.fixedRight.current);

        // bind event
        Event.addEvent(window, 'resize', this.handleReize);

        // fixed layout at startup
        this.debounceFixLayout();

    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //
    //     const {scrollTop: st, scrolling: s, ...current} = this.props,
    //         {scrollTop, scrolling, ...next} = nextProps;
    //
    //     return Object.keys(next).some(key => current[key] != next[key]);
    //
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {

        this.debounceFixLayout();

        const {onDataUpdate} = this.props;
        onDataUpdate && onDataUpdate(this.tableData);

    }

    componentWillUnmount() {
        Event.removeEvent(window, 'resize', this.handleReize);
        this.debounceFixLayout && this.debounceFixLayout.cancel();
    }

    /**
     * handle one node selected
     * @param node
     * @param rowIndex
     * @param colIndex
     * @param collapsed
     * @param depth
     * @param path
     */
    handleSelect = (node, rowIndex, colIndex, collapsed, depth, path) => {

        if (!node || this.props.selectMode !== SelectMode.MULTI_SELECT) {
            return;
        }

        const {data, value, isSelectRecursive, idProp, onSelect, onChange} = this.props;

        let result = value && isArray(value) ? value.slice() : [];
        TC.handleSelect(node, result, idProp, isSelectRecursive);
        if (isSelectRecursive) {
            result = TC.formatValue(result, data, idProp);
        }

        onSelect && onSelect(node, rowIndex, colIndex, collapsed, depth, path);
        onChange && onChange(result);

    };

    /**
     * handle one node deselect
     * @param node
     * @param rowIndex
     * @param colIndex
     * @param collapsed
     * @param depth
     * @param path
     */
    handleDeselect = (node, rowIndex, colIndex, collapsed, depth, path) => {

        if (!node || this.props.selectMode !== SelectMode.MULTI_SELECT) {
            return;
        }

        const {isSelectRecursive, value, idProp, onDeselect, onChange} = this.props;

        let result = value && isArray(value) ? value.slice() : [];
        if (result.length > 0) {
            TC.handleDeselect(node, result, idProp, isSelectRecursive);
            if (isSelectRecursive) {
                result = TC.formatValue(result, data, idProp);
            }
        }

        onDeselect && onDeselect(node, rowIndex, colIndex, collapsed, depth, path);
        onChange && onChange(result);

    };

    /**
     * handle head select all
     */
    handleSelectAll = () => {

        const {
            selectMode, selectAllMode, data, value, disabled, idProp,
            onChange, onSelectAll
        } = this.props;

        if (disabled || selectMode !== SelectMode.MULTI_SELECT) {
            return;
        }

        TC.handleSelectAll(selectAllMode === SelectAllMode.ALL ? data : this.tableData, value, idProp);

        onSelectAll && onSelectAll(value);
        onChange && onChange(value);

    };

    /**
     * handle head deselect all
     */
    handleDeselectAll = () => {

        const {
            selectMode, value, disabled, onChange, onDeselectAll
        } = this.props;

        if (disabled || selectMode !== SelectMode.MULTI_SELECT) {
            return;
        }

        onDeselectAll && onDeselectAll(value);
        onChange && onChange([]);

    };

    /**
     * split columns by fixed
     * @returns {{[p: string]: Array}}
     */
    formatColumns = (columns = this.sortedColumns || this.props.columns) => {

        if (!columns || columns.length < 1) {
            return columns;
        }

        const {
                selectTheme, selectMode, selectAllMode, selectColumn, data, disabled, value, idProp, expandIconCls,
                selectUncheckedIconCls, selectCheckedIconCls, selectIndeterminateIconCls
            } = this.props,
            firstColumn = TC.getFirstColumn(columns),
            result = columns.slice();

        /**
         * handle expand
         */
        result[0] = cloneDeep(columns[0]);
        const expandColumn = TC.getFirstColumn(result);
        if (expandColumn) {
            expandColumn.bodyRenderer = (rowData, rowIndex, colIndex, parentData, tableData, collapsed, depth, path) =>
                <Fragment>

                    <span className={classNames('table-indent', `indent-level-${depth}`)}
                          style={{paddingLeft: depth * 20}}></span>

                    {
                        TC.needCollapseButtonSpacing(tableData) ?
                            <IconButton className={classNames('expand-button', {
                                hidden: !rowData || !rowData.children || rowData.children.length < 1
                            })}
                                        iconCls={expandIconCls}
                                        disableTouchRipple={true}
                                        onClick={() => this.handleExpandChange(!collapsed, rowData)}/>
                            :
                            null
                    }

                    {
                        typeof firstColumn.bodyRenderer === 'function' ?
                            firstColumn.bodyRenderer(rowData, rowIndex, colIndex, parentData, tableData, collapsed, depth, path)
                            :
                            firstColumn.bodyRenderer
                    }

                </Fragment>;
            expandColumn.bodyNoWrap = (rowData, rowIndex, colIndex, tableData) =>
                TC.needCollapseButtonSpacing(tableData);
        }

        /**
         * handle multi select
         */
        if (selectMode === SelectMode.MULTI_SELECT) {
            result.unshift({
                ...selectColumn,
                fixed: (selectColumn && selectColumn.fixed) || columns[0].fixed,
                align: (selectColumn && selectColumn.align) || HorizontalAlign.CENTER,
                headClassName: classNames('table-select-th', selectColumn ? {
                    [selectColumn.headClassName]: selectColumn.headClassName
                } : ''),
                headRenderer: () => {

                    const {checked, indeterminate} = TC.isSelectAllChecked(
                        selectAllMode === SelectAllMode.ALL ? data : this.tableData, value, idProp);

                    return (
                        <Checkbox className="table-select"
                                  theme={selectTheme}
                                  checked={checked}
                                  disabled={disabled}
                                  indeterminate={indeterminate}
                                  uncheckedIconCls={selectUncheckedIconCls}
                                  checkedIconCls={selectCheckedIconCls}
                                  indeterminateIconCls={selectIndeterminateIconCls}
                                  onCheck={this.handleSelectAll}
                                  onUncheck={this.handleDeselectAll}/>
                    );

                },
                bodyClassName: classNames('table-select-td', selectColumn ? {
                    [selectColumn.bodyClassName]: selectColumn.bodyClassName
                } : ''),
                bodyRenderer: (rowData, rowIndex, colIndex, parentData, tableData, collapsed, depth, path) =>
                    <Checkbox className="table-select"
                              theme={selectTheme}
                              checked={TC.isNodeChecked(rowData, value, idProp)}
                              disabled={disabled || rowData.disabled}
                              indeterminate={Calc.isItemIndeterminate(rowData, value, idProp)}
                              uncheckedIconCls={selectUncheckedIconCls}
                              checkedIconCls={selectCheckedIconCls}
                              indeterminateIconCls={selectIndeterminateIconCls}
                              onCheck={() => this.handleSelect(rowData, rowIndex, colIndex, tableData, collapsed, depth, path)}
                              onUncheck={() => this.handleDeselect(rowData, rowIndex, colIndex, tableData, collapsed, depth, path)}/>
            });
        }

        return result;

    };

    /**
     * sort data by sorting
     * @param data
     * @returns {*[]}
     */
    sortData = (data = this.props.data) => {
        const {sorting, autoSorting, sortingFunc} = this.props;
        return autoSorting && sorting ? TC.sortTableData(data, sorting, sortingFunc) : data;
    };

    /**
     * slice data by pagination
     * @param data
     * @returns {*[]}
     */
    paginateData = (data = this.props.data) => {

        if (!data) {
            return [];
        }

        if (!this.props.isPaginated) {
            return data;
        }

        const {page, pageSize} = this.props,
            len = data.length;
        let start = page * pageSize,
            stop = start + pageSize;

        start = start < 0 ? 0 : start;
        stop = stop > len ? len : stop;

        return data.slice(start, stop);

    };

    /**
     * calculate final display index in list
     * @returns
     *  {
     *      start,
     *      stop,
     *      startWithBuffer,
     *      stopWithBuffer
     *  }
     */
    getIndex = data => {
        const {scrollTop, scrollHeight, rowHeight, scrollBuffer} = this.props;
        return Calc.displayIndexByScrollTop(data, scrollHeight, rowHeight, scrollTop, scrollBuffer);
    };

    /**
     * fix table layout at once
     */
    fixLayout = () => {

        if (this.wrapperEl) {

            TL.fixLayout(this.wrapperEl, this.rawTableEl, this.props, this);

            if (TL.hasFixed(this.props, this)) {
                setTimeout(() => {
                    TL.updateHorizontalScrollClassNames(this.wrapperEl, this.centerBodyScroller);
                }, 250);
            }

        }

        // trigger initial callback at startup
        const {isInitialing, onInit} = this.props;
        isInitialing && onInit && onInit();

    };

    /**
     * fix table layout debounce
     */
    debounceFixLayout = debounce(() => this.fixLayout(), 150);

    /**
     * handle resize end callback and fix table layout debounce
     */
    debounceResizeFixLayout = debounce(() => {
        const {resizing, onResizeEnd} = this.props;
        if (resizing) {
            onResizeEnd && onResizeEnd();
            this.fixLayout();
        }
    }, 600);

    /**
     * handle resize start callback
     * @param e
     */
    handleReize = e => {
        const {resizing, onResizeStart} = this.props;
        if (!resizing) {
            onResizeStart && onResizeStart(e);
        } else {
            this.debounceResizeFixLayout();
        }
    };

    /**
     * handle get scroll el
     * @param el
     * @param fixed
     * @param fragment
     */
    handleGetScrollerEl = (el, fixed, fragment) => {
        this[`${fixed}${startCase(fragment)}Scroller`] = el;
    };

    handleScrollTopChange = scrollTop => {
        const {onScrollTopChange} = this.props;
        onScrollTopChange && onScrollTopChange(scrollTop);
    };

    handleDebounceScrollChange = debounce(e => {

        const {scrolling, onScrollStart, onScrollEnd} = this.props;

        if (!scrolling) {
            onScrollStart && onScrollStart(e);
        } else {
            onScrollEnd && onScrollEnd(e);
        }

    }, 150, {leading: true});

    /**
     * handle table horizontal scroll
     * @param e
     */
    handleHorizontalScroll = e => {

        if (!e || e.currentTarget !== e.target) {
            return;
        }

        this.handleDebounceScrollChange(e);

        const {isHeadFixed, isFootFixed} = this.props,
            target = e.target,
            scrollLeft = target.scrollLeft;

        if (scrollLeft !== this.lastScrollLeft) {

            switch (target) {
                case this.centerBodyScroller: {
                    if (isHeadFixed && this.centerHeadScroller) {
                        this.centerHeadScroller.scrollLeft = scrollLeft;
                    }
                    if (isFootFixed && this.centerHeadScroller && this.centerFootScroller) {
                        this.centerFootScroller.scrollLeft = scrollLeft;
                    }
                    break;
                }
                case this.centerHeadScroller: {
                    if (this.centerBodyScroller) {
                        this.centerBodyScroller.scrollLeft = scrollLeft;
                    }
                    if (isFootFixed && this.centerHeadScroller && this.centerFootScroller) {
                        this.centerFootScroller.scrollLeft = scrollLeft;
                    }
                    break;
                }
                case this.centerFootScroller: {
                    if (isHeadFixed && this.centerHeadScroller) {
                        this.centerHeadScroller.scrollLeft = scrollLeft;
                    }
                    if (this.centerBodyScroller) {
                        this.centerBodyScroller.scrollLeft = scrollLeft;
                    }
                    break;
                }
            }

            TL.updateHorizontalScrollClassNames(this.wrapperEl, this.centerHeadScroller);

        }

        this.lastScrollLeft = scrollLeft;

    };

    /**
     * handle table vertical scroll
     * @param e
     */
    handleVerticalScroll = e => {

        if (!e || e.currentTarget !== e.target) {
            return;
        }

        this.handleDebounceScrollChange(e);

        const target = e.target,
            scrollTop = target.scrollTop;

        if (scrollTop !== this.lastScrollTop
            && (target != this.centerHeadScroller || target != this.centerFootScroller)) {
            switch (target) {
                case this.centerBodyScroller: {
                    if (this.leftBodyScroller) {
                        this.leftBodyScroller.scrollTop = scrollTop;
                    }
                    if (this.rightBodyScroller) {
                        this.rightBodyScroller.scrollTop = scrollTop;
                    }
                    this.handleScrollTopChange(scrollTop);
                    break;
                }
                case this.leftBodyScroller: {
                    if (this.centerBodyScroller) {
                        this.centerBodyScroller.scrollTop = scrollTop;
                    }
                    if (this.rightBodyScroller) {
                        this.rightBodyScroller.scrollTop = scrollTop;
                    }
                    this.handleScrollTopChange(scrollTop);
                    break;
                }
                case this.rightBodyScroller: {
                    if (this.leftBodyScroller) {
                        this.leftBodyScroller.scrollTop = scrollTop;
                    }
                    if (this.centerBodyScroller) {
                        this.centerBodyScroller.scrollTop = scrollTop;
                    }
                    this.handleScrollTopChange(scrollTop);
                    break;
                }
            }
        }

        this.lastScrollTop = scrollTop;

    };

    /**
     * handle table scroll
     * @param e
     */
    handleScroll = e => {
        this.handleHorizontalScroll(e);
        this.handleVerticalScroll(e);
    };

    /**
     * handle table wheel in IE
     * @param e
     */
    handleWheel = e => {

        if (!window.navigator.userAgent.match(/Trident\/7\./)) {
            return;
        }

        e.preventDefault(e);

        this.handleDebounceScrollChange();

        const wd = e.deltaY,
            target = e.target;

        let scrollTop = 0;

        if (this.lastScrollTop) {
            scrollTop = this.lastScrollTop + wd;
        } else {
            scrollTop = wd;
        }

        if (this.leftBodyScroller && this.leftBodyScroller !== target) {
            this.leftBodyScroller.scrollTop = scrollTop;
        }

        if (this.centerBodyScroller && this.centerBodyScroller !== target) {
            this.centerBodyScroller.scrollTop = scrollTop;
        }

        if (this.rightBodyScroller && this.rightBodyScroller !== target) {
            this.rightBodyScroller.scrollTop = scrollTop;
        }

    };

    /**
     * handle one node expanded or collapsed
     * @param collapsed
     * @param rowData
     */
    handleExpandChange = (collapsed, rowData) => {

        const {idProp, expandRows, onExpand, onCollapse, onExpandChange} = this.props;

        if (collapsed) {

            onCollapse && onCollapse(rowData);

            const index = TC.indexOfNodeInValue(rowData, expandRows, idProp);
            if (index !== -1) {
                expandRows.splice(index, 1);
                onExpandChange && onExpandChange(expandRows);
            }

        } else {

            onExpand && onExpand(rowData);

            const index = TC.indexOfNodeInValue(rowData, expandRows, idProp);
            if (index === -1) {
                expandRows.push(rowData);
                onExpandChange && onExpandChange(expandRows, () => {
                    const {value, selectMode, isSelectRecursive, onChange} = this.props;
                    if (selectMode === SelectMode.MULTI_SELECT && isSelectRecursive) {
                        onChange && onChange(TC.recursiveSelectChildren(rowData, value));
                    }
                });
            }

        }

    };

    handleRequestColumnsSpan = (fixed, fragment, ...restArgs) => {
        const {columns} = this.props;
        return TC.getAdvancedColumnsSpan(columns, fixed, fragment, ...restArgs);
    };

    render() {

        const {

                className, style, columns, data, scrolling, scrollTop, scroll, noDataText,
                isHeadFixed, isFootFixed, isHeadHidden, isFootHidden, expandRows, useDynamicRender,

                // not passing down these props
                isInitialing, isSelectRecursive, selectUncheckedIconCls, selectCheckedIconCls, resizing, sorting,
                selectIndeterminateIconCls, selectColumn, expandIconCls, autoSorting, isPaginated, page, pageSize,
                sortingFunc, onInit, onChange, onExpand, onCollapse, onExpandChange, onDataUpdate,
                onSelect, onSelectAll, onDeselect, onDeselectAll,
                onScrollTopChange, onScrollStart, onScrollEnd, onResizeStart, onResizeEnd,

                ...restProps

            } = this.props,
            {sortedColumns, hasFixedLeftColumn, hasFixedRightColumn} = TC.sortColumns(columns);

        this.sortedColumns = sortedColumns;

        this.hasFixedLeftColumn = hasFixedLeftColumn;
        this.hasFixedRightColumn = hasFixedRightColumn;

        this.formatedColumns = this.formatColumns(this.sortedColumns);
        if (!this.formatedColumns) {
            return null;
        }

        this.headColumns = TC.getHeadColumns(this.formatedColumns);
        this.bodyColumns = TC.getBodyColumns(this.formatedColumns);

        this.fixedRightColumns = this.formatedColumns.filter(column =>
            column && column.fixed === HorizontalAlign.RIGHT);

        this.tableData = this.paginateData(this.sortData(data));

        if (useDynamicRender) {
            this.dynamicRenderIndex = this.getIndex(this.tableData);
            this.dynamicRenderData = this.tableData && this.dynamicRenderIndex ?
                this.tableData.slice(this.dynamicRenderIndex.startWithBuffer, this.dynamicRenderIndex.stopWithBuffer + 1)
                :
                this.tableData;
        }

        this.finalData = useDynamicRender ? this.dynamicRenderData : this.tableData;

        const {horizontalScrollStyle, verticalScrollStyle} = TL.getScrollerStyle(scroll, this.props),

            isFinalHeadHidden = isHeadHidden || !TC.hasRenderer(this.bodyColumns, TableFragment.HEAD),
            isFinalFootHidden = isFootHidden || !TC.hasRenderer(this.bodyColumns, TableFragment.FOOT),

            hasHeadRenderer = TC.hasHeadRenderer(this.headColumns),
            hasBodyRenderer = TC.hasRenderer(this.bodyColumns, TableFragment.BODY),
            hasFootRenderer = TC.hasRenderer(this.bodyColumns, TableFragment.FOOT);

        return (
            <Fragment>

                <div ref={this.wrapper}
                     className={classNames('table-content', {
                         'head-fixed': isHeadFixed,
                         'foot-fixed': isFootFixed,
                         [className]: className
                     })}
                     style={style}>

                    <div className="table-content-raw">
                        <ScrollableTable className="table-content-raw-scroller"
                                         scroll={scroll}>
                            <BaseTable ref={this.rawTable}
                                       style={scroll}
                                       headColumns={this.headColumns}
                                       bodyColumns={this.bodyColumns}
                                       data={TC.getRawTableData(this.tableData)}
                                       dynamicRenderData={this.dynamicRenderData}
                                       expandRows={expandRows}
                                       isHeadFixed={isHeadFixed}
                                       isFootFixed={isFootFixed}
                                       isHeadHidden={isFinalHeadHidden}
                                       isFootHidden={isFinalFootHidden}
                                       sorting={sorting}
                                       hasHeadRenderer={hasHeadRenderer}
                                       hasBodyRenderer={hasBodyRenderer}
                                       hasFootRenderer={hasFootRenderer}
                                       useDynamicRender={useDynamicRender}
                                       onRequestColumnsSpan={(...restArgs) => this.handleRequestColumnsSpan(null, ...restArgs)}/>
                        </ScrollableTable>
                    </div>

                    <ScrollTable {...restProps}
                                 className="table-content-center"
                                 bodyScrollerStyle={verticalScrollStyle}
                                 maskStyle={horizontalScrollStyle}
                                 tableStyle={horizontalScrollStyle}
                                 headColumns={TC.handleFixedColumnsClassName(this.headColumns)}
                                 bodyColumns={TC.handleFixedColumnsClassName(this.bodyColumns)}
                                 data={this.tableData}
                                 dynamicRenderData={this.dynamicRenderData}
                                 expandRows={expandRows}
                                 isHeadFixed={isHeadFixed}
                                 isFootFixed={isFootFixed}
                                 isHeadHidden={isFinalHeadHidden}
                                 isFootHidden={isFinalFootHidden}
                                 hasFixedLeftColumn={hasFixedLeftColumn}
                                 hasFixedRightColumn={hasFixedRightColumn}
                                 hasHeadRenderer={hasHeadRenderer}
                                 hasBodyRenderer={hasBodyRenderer}
                                 hasFootRenderer={hasFootRenderer}
                                 scrolling={scrolling}
                                 scroll={scroll}
                                 sorting={sorting}
                                 ignoreColumnWidth={true}
                                 useDynamicRender={useDynamicRender}
                                 dynamicRenderIndex={this.dynamicRenderIndex}
                                 onScroll={this.handleScroll}
                                 onWheel={this.handleWheel}
                                 onRequestColumnsSpan={this.handleRequestColumnsSpan}
                                 onGetHeadScrollerEl={el =>
                                     this.handleGetScrollerEl(el, HorizontalAlign.CENTER, TableFragment.HEAD)}
                                 onGetBodyScrollerEl={el =>
                                     this.handleGetScrollerEl(el, HorizontalAlign.CENTER, TableFragment.BODY)}
                                 onGetFootScrollerEl={el =>
                                     this.handleGetScrollerEl(el, HorizontalAlign.CENTER, TableFragment.FOOT)}/>

                    {
                        hasFixedLeftColumn ?
                            <ScrollTable {...restProps}
                                         ref={this.fixedLeft}
                                         className="table-content-left"
                                         bodyScrollerStyle={verticalScrollStyle}
                                         fixed={HorizontalAlign.LEFT}
                                         headColumns={TC.getFixedHeadColumns(this.headColumns, HorizontalAlign.LEFT)}
                                         bodyColumns={TC.getFixedBodyColumns(this.bodyColumns, HorizontalAlign.LEFT)}
                                         data={this.tableData}
                                         dynamicRenderData={this.dynamicRenderData}
                                         expandRows={expandRows}
                                         isHeadFixed={isHeadFixed}
                                         isFootFixed={isFootFixed}
                                         isHeadHidden={isFinalHeadHidden}
                                         isFootHidden={isFinalFootHidden}
                                         hasFixedLeftColumn={hasFixedLeftColumn}
                                         hasFixedRightColumn={hasFixedRightColumn}
                                         hasHeadRenderer={hasHeadRenderer}
                                         hasBodyRenderer={hasBodyRenderer}
                                         hasFootRenderer={hasFootRenderer}
                                         scrolling={scrolling}
                                         scroll={scroll}
                                         sorting={sorting}
                                         ignoreColumnWidth={true}
                                         useDynamicRender={useDynamicRender}
                                         dynamicRenderIndex={this.dynamicRenderIndex}
                                         onScroll={this.handleScroll}
                                         onWheel={this.handleWheel}
                                         onExpandChange={this.handleExpandChange}
                                         onRequestColumnsSpan={this.handleRequestColumnsSpan}
                                         onGetHeadScrollerEl={el =>
                                             this.handleGetScrollerEl(el, HorizontalAlign.LEFT, TableFragment.HEAD)}
                                         onGetBodyScrollerEl={el =>
                                             this.handleGetScrollerEl(el, HorizontalAlign.LEFT, TableFragment.BODY)}
                                         onGetFootScrollerEl={el =>
                                             this.handleGetScrollerEl(el, HorizontalAlign.LEFT, TableFragment.FOOT)}/>
                            :
                            null
                    }

                    {
                        hasFixedRightColumn ?
                            <ScrollTable {...restProps}
                                         ref={this.fixedRight}
                                         className="table-content-right"
                                         bodyScrollerStyle={verticalScrollStyle}
                                         fixed={HorizontalAlign.RIGHT}
                                         headColumns={TC.getFixedHeadColumns(this.headColumns, HorizontalAlign.RIGHT)}
                                         bodyColumns={TC.getFixedBodyColumns(this.bodyColumns, HorizontalAlign.RIGHT)}
                                         data={this.tableData}
                                         dynamicRenderData={this.dynamicRenderData}
                                         expandRows={expandRows}
                                         isHeadFixed={isHeadFixed}
                                         isFootFixed={isFootFixed}
                                         isHeadHidden={isFinalHeadHidden}
                                         isFootHidden={isFinalFootHidden}
                                         hasFixedLeftColumn={hasFixedLeftColumn}
                                         hasFixedRightColumn={hasFixedRightColumn}
                                         hasHeadRenderer={hasHeadRenderer}
                                         hasBodyRenderer={hasBodyRenderer}
                                         hasFootRenderer={hasFootRenderer}
                                         scrolling={scrolling}
                                         scroll={scroll}
                                         sorting={sorting}
                                         ignoreColumnWidth={true}
                                         baseColIndex={this.formatedColumns.length - this.fixedRightColumns.length}
                                         useDynamicRender={useDynamicRender}
                                         dynamicRenderIndex={this.dynamicRenderIndex}
                                         onScroll={this.handleScroll}
                                         onWheel={this.handleWheel}
                                         onRequestColumnsSpan={this.handleRequestColumnsSpan}
                                         onGetHeadScrollerEl={el =>
                                             this.handleGetScrollerEl(el, HorizontalAlign.RIGHT, TableFragment.HEAD)}
                                         onGetBodyScrollerEl={el =>
                                             this.handleGetScrollerEl(el, HorizontalAlign.RIGHT, TableFragment.BODY)}
                                         onGetFootScrollerEl={el =>
                                             this.handleGetScrollerEl(el, HorizontalAlign.RIGHT, TableFragment.FOOT)}/>
                            :
                            null
                    }

                </div>

                {
                    noDataText && (!this.finalData || this.finalData.length < 1) ?
                        <div className="table-no-data">
                            {noDataText}
                        </div>
                        :
                        null
                }

            </Fragment>
        );

    }
}

TableContent.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

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
    value: PropTypes.array,
    hoverRow: PropTypes.object,
    idProp: PropTypes.string,
    disabled: PropTypes.bool,
    isInitialing: PropTypes.bool,
    noDataText: PropTypes.string,

    /**
     * expand
     */
    expandRows: PropTypes.array,
    expandIconCls: PropTypes.string,

    /**
     * selection
     */
    selectTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),
    selectMode: PropTypes.oneOf(Util.enumerateValue(SelectMode)),
    selectAllMode: PropTypes.oneOf(Util.enumerateValue(SelectAllMode)),
    selectColumn: PropTypes.shape({

        /**
         * fixed position of column ( 'left' / 'right' )
         */
        fixed: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),

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
        bodyAlign: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign))

    }),
    isSelectRecursive: PropTypes.bool,
    selectUncheckedIconCls: PropTypes.string,
    selectCheckedIconCls: PropTypes.string,
    selectIndeterminateIconCls: PropTypes.string,

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
    autoSorting: PropTypes.bool,
    isClickSorting: PropTypes.bool,
    sortingFunc: PropTypes.func,

    /**
     * pagination
     */
    isPaginated: PropTypes.bool,
    page: PropTypes.number,
    pageSize: PropTypes.number,

    /**
     * hidden
     */
    isHeadHidden: PropTypes.bool,
    isFootHidden: PropTypes.bool,

    /**
     * fixed
     */
    isHeadFixed: PropTypes.bool,
    isFootFixed: PropTypes.bool,

    /**
     * scroll
     */
    scrolling: PropTypes.bool,
    scrollTop: PropTypes.number,
    scroll: PropTypes.shape({
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    }),

    /**
     * resize
     */
    resizing: PropTypes.bool,

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
    onInit: PropTypes.func,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onSelectAll: PropTypes.func,
    onDeselectAll: PropTypes.func,
    onExpand: PropTypes.func,
    onCollapse: PropTypes.func,
    onExpandChange: PropTypes.func,
    onSortChange: PropTypes.func,
    onScrollTopChange: PropTypes.func,
    onScrollStart: PropTypes.func,
    onScrollEnd: PropTypes.func,
    onResizeStart: PropTypes.func,
    onResizeEnd: PropTypes.func,
    onRowHover: PropTypes.func,
    onDataUpdate: PropTypes.func

};

TableContent.defaultProps = {

    disabled: false,
    isInitialing: true,
    idProp: 'id',
    noDataText: 'No Data',

    /**
     * expand
     */
    expandRows: [],
    expandIconCls: 'fas fa-chevron-right',

    /**
     * selection
     */
    selectMode: SelectMode.SINGLE_SELECT,
    selectAllMode: SelectAllMode.CURRENT_PAGE,
    isSelectRecursive: false,
    selectUncheckedIconCls: 'far fa-square',
    selectCheckedIconCls: 'fas fa-check-square',
    selectIndeterminateIconCls: 'fas fa-minus-square',

    /**
     * scroll
     */
    scrolling: false,
    scrollTop: 0,

    /**
     * resize
     */
    resizing: false,

    /**
     * sorting
     */
    defaultSortingType: SortingType.ASC,
    sortingAscIconCls: 'fas fa-sort-up',
    sortingDescIconCls: 'fas fa-sort-down',
    autoSorting: true,
    isClickSorting: true,

    /**
     * pagination
     */
    isPaginated: true,
    page: 0,
    pageSize: 10,

    /**
     * hidden
     */
    isHeadHidden: false,
    isFootHidden: false,

    /**
     * fixed
     */
    isHeadFixed: false,
    isFootFixed: false,

    /**
     * Dynamic Render
     */
    useDynamicRender: false,
    scrollHeight: 500,
    rowHeight: 50,
    scrollBuffer: 8

};

export default TableContent;
