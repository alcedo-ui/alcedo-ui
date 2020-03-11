/**
 * @file Table component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

// Components
// import Header from '../_TableHeader';
import Content from '../_TableContent';
// import Footer from '../_TableFooter';
import Pagination from '../_TablePagination';
import CircularLoading from '../CircularLoading';

// Statics
import Theme from '../Theme';
import HorizontalAlign from '../_statics/HorizontalAlign';
import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortingType from '../_statics/SortingType';

// Vendors
import classNames from 'classnames';
import cloneDeep from 'lodash/cloneDeep';
import debounce from 'lodash/debounce';
import Util from '../_vendors/Util';
import ComponentUtil from '../_vendors/ComponentUtil';
import TC from '../_vendors/TableCalculation';

class Table extends Component {

    static Theme = Theme;
    static Align = HorizontalAlign;
    static Fixed = HorizontalAlign;
    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortingType = SortingType;

    static getDerivedStateFromProps(props, state) {

        const page = ComponentUtil.getDerivedState(props, state, 'page'),
            pageSize = ComponentUtil.getDerivedState(props, state, 'pageSize');

        return {
            prevProps: props,
            columns: ComponentUtil.getDerivedState(props, state, 'columns') || [],
            sorting: ComponentUtil.getDerivedState(props, state, 'sorting'),
            page: TC.handlePage(page, pageSize, props.data),
            pageSize,
            expandRows: ComponentUtil.getDerivedState(props, state, 'expandRows'),
            value: ComponentUtil.getDerivedState(props, state, 'value')
        };

    }

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.content = createRef();

        this.tempHoverRow = null;

        this.state = {
            isInitialing: props.hasInitFadeOut,
            columns: [],
            sorting: props.sorting,
            page: props.page,
            pageSize: props.pageSize,
            expandRows: props.expandRows,
            value: props.value,
            scrolling: false,
            scrollTop: 0,
            resizing: false,
            hoverRow: null,
            resizingColumnPath: null
        };

    }

    /**
     * public
     */
    fixLayout = () => {
        this.content && this.content.current && this.content.current.fixLayout();
    };

    /**
     * public
     */
    debounceFixLayout = () => {
        this.content && this.content.current && this.content.current.debounceFixLayout();
    };

    /**
     * public
     */
    collapseAllRows = () => {
        this.setState({
            expandRows: []
        }, () => {
            const {onExpandChange} = this.props;
            onExpandChange && onExpandChange([]);
        });
    };

    /**
     * keep table loading after do first render
     */
    handleInit = () => {
        this.state.isInitialing && this.setState({
            isInitialing: false
        }, () => {
            const {onInit} = this.props;
            onInit && onInit();
        });
    };

    /**
     * handle selection change
     */
    handleChange = (value, rowIndex) => {
        this.setState({
            value
        }, () => {
            const {onChange} = this.props;
            onChange && onChange(value, rowIndex);
        });
    };

    /**
     * handle sort change
     */
    handleSortChange = sorting => {

        if (!this.props.isClickSorting) {
            return;
        }

        this.setState({
            sorting
        }, () => {
            const {onSortChange} = this.props;
            onSortChange && onSortChange(sorting);
        });

    };

    /**
     * handle pagination change
     */
    handlePaginationChange = pagination => {
        this.setState(pagination, () => {
            const {onPaginationChange} = this.props;
            onPaginationChange && onPaginationChange(pagination);
        });
    };

    /**
     * handle expand change
     */
    handleExpandChange = (expandRows, callback) => {
        this.setState({
            expandRows
        }, () => {
            const {onExpandChange} = this.props;
            onExpandChange && onExpandChange(expandRows);
            callback && callback();
        });
    };

    /**
     * handle scroll top change
     * @param scrollTop
     */
    handleScrollTopChange = scrollTop => {
        if (this.props.useDynamicRender) {
            this.setState({
                scrollTop
            });
        }
    };

    handleDebounceScrollChange = debounce(e => {

        const {scrolling} = this.state;

        if (!scrolling) {
            this.handleScrollStart(e);
        } else {
            this.handleScrollEnd(e);
        }

    }, 150, {leading: true});

    /**
     * handle scroll start
     * @param e
     */
    handleScrollStart = e => {
        this.setState({
            scrolling: true
        }, () => {
            const {onScrollStart, onScrollChange} = this.props;
            onScrollStart && onScrollStart(e);
            onScrollChange && onScrollChange(true);
        });
    };

    /**
     * handle scroll end
     * @param e
     */
    handleScrollEnd = e => {
        this.setState({
            scrolling: false,
            hoverRow: this.tempHoverRow
        }, () => {
            const {onScrollEnd, onScrollChange} = this.props;
            onScrollEnd && onScrollEnd(e);
            onScrollChange && onScrollChange(false);
        });
    };

    /**
     * handle resize start
     * @param e
     */
    handleResizeStart = e => {
        this.setState({
            resizing: true
        }, () => {
            const {onResizeStart, onResizeChange} = this.props;
            onResizeStart && onResizeStart(e);
            onResizeChange && onResizeChange(true);
        });
    };

    /**
     * handle resize end
     * @param e
     */
    handleResizeEnd = e => {
        this.setState({
            resizing: false
        }, () => {
            const {onResizeEnd, onResizeChange} = this.props;
            onResizeEnd && onResizeEnd(e);
            onResizeChange && onResizeChange(false);
        });
    };

    /**
     * handle row hover
     * @param hoverRow
     */
    handleRowHover = hoverRow => {
        if (this.state.scrolling) {
            this.tempHoverRow = hoverRow;
        } else {
            this.setState({
                hoverRow
            });
        }
    };

    /**
     * Update new column width value to column
     * @param path
     * @param width
     */
    handleColumnsWidthChange = (path, width, e) => {

        const {columns} = this.state;

        if (!columns || columns.length < 1 || !path || path.length < 1) {
            return;
        }

        const nextColumns = cloneDeep(columns),
            column = TC.getColumnByPath(nextColumns, path);
        if (column) {
            column.width = width;
        }

        this.setState({
            columns: nextColumns
        }, () => {

            this.fixLayout();

            const {onColumnsWidthChange} = this.props;
            onColumnsWidthChange && onColumnsWidthChange(column, width, path, e);

        });

    };

    handleColumnResizeStart = (path, width, e) => {
        this.setState({
            resizingColumnPath: path
        }, () => {
            const {columns, onColumnResizeStart} = this.props;
            onColumnResizeStart && onColumnResizeStart(TC.getColumnByPath(columns, path), width, path, e);
        });
    };

    handleColumnResizeEnd = (path, width, e) => {
        setTimeout(() => {
            this.setState({
                resizingColumnPath: null
            }, () => {
                const {onColumnResizeEnd} = this.props;
                onColumnResizeEnd && onColumnResizeEnd(TC.getColumnByPath(columns, path), width, path, e);
            });
        }, 0);
    };

    render() {

        const {

                className, style, selectMode, data,

                // pagination
                pageSizeClassName, pageSizeTriggerClassName, pageSizePopupClassName,
                isPaginated, pageSizes, useFullPagination, pageSizeValueField, pageSizeDisplayField,
                paginationSelectionVisible, paginationTotalVisible, paginationPageVisible,
                paginationPageSizeVisible, paginationParentEl, paginationPageSizeRightIconCls,
                paginationPrevIconCls, paginationNextIconCls, paginationFirstIconCls, paginationLastIconCls,
                paginationSelectionRenderer, paginationTotalRenderer, onPageChange, onPageSizeChange,

                // not passing down these props
                columns: cols, hasInitFadeOut, pageSize: propsPageSize,
                onPaginationChange,

                ...restProps

            } = this.props,
            {
                isInitialing, columns, sorting, page, pageSize, expandRows, value,
                scrollTop, resizing, hoverRow, resizingColumnPath
            } = this.state;

        return (
            <div className={classNames('table', {
                [className]: className
            })}
                 style={style}>

                {/* table header, display when select */}
                {/*<Header/>*/}

                {/* table area */}
                <Content {...restProps}
                         ref={this.content}
                         columns={columns}
                         data={data}
                         sorting={sorting}
                         isPaginated={isPaginated}
                         page={page}
                         pageSize={pageSize}
                         expandRows={expandRows}
                         value={value}
                         scrollTop={scrollTop}
                         resizing={resizing}
                         hoverRow={hoverRow}
                         resizingColumnPath={resizingColumnPath}
                         selectMode={selectMode}
                         isInitialing={isInitialing}
                         onInit={this.handleInit}
                         onChange={this.handleChange}
                         onSortChange={this.handleSortChange}
                         onExpandChange={this.handleExpandChange}
                         onScrollTopChange={this.handleScrollTopChange}
                         onScroll={this.handleDebounceScrollChange}
                         onResizeStart={this.handleResizeStart}
                         onResizeEnd={this.handleResizeEnd}
                         onRowHover={this.handleRowHover}
                         onColumnsWidthChange={this.handleColumnsWidthChange}
                         onColumnResizeStart={this.handleColumnResizeStart}
                         onColumnResizeEnd={this.handleColumnResizeEnd}/>

                {/* table footer */}
                {/*<Footer/>*/}

                {/* table pagination */}
                {
                    isPaginated ?
                        <Pagination pageSizeClassName={pageSizeClassName}
                                    pageSizeTriggerClassName={pageSizeTriggerClassName}
                                    pageSizePopupClassName={pageSizePopupClassName}
                                    selectMode={selectMode}
                                    data={data}
                                    page={page}
                                    pageSize={pageSize}
                                    pageSizes={pageSizes}
                                    value={value}
                                    parentEl={paginationParentEl}
                                    useFullPagination={useFullPagination}
                                    pageSizeValueField={pageSizeValueField}
                                    pageSizeDisplayField={pageSizeDisplayField}
                                    paginationSelectionVisible={paginationSelectionVisible}
                                    paginationTotalVisible={paginationTotalVisible}
                                    paginationPageVisible={paginationPageVisible}
                                    paginationPageSizeVisible={paginationPageSizeVisible}
                                    paginationPageSizeRightIconCls={paginationPageSizeRightIconCls}
                                    paginationPrevIconCls={paginationPrevIconCls}
                                    paginationNextIconCls={paginationNextIconCls}
                                    paginationFirstIconCls={paginationFirstIconCls}
                                    paginationLastIconCls={paginationLastIconCls}
                                    paginationSelectionRenderer={paginationSelectionRenderer}
                                    paginationTotalRenderer={paginationTotalRenderer}
                                    onPageChange={onPageChange}
                                    onPageSizeChange={onPageSizeChange}
                                    onPaginationChange={this.handlePaginationChange}/>
                        :
                        null
                }

                <div className={classNames('table-init-loading-wrapper', {
                    'fade-out': !isInitialing
                })}>
                    {
                        isInitialing ?
                            <CircularLoading className="table-init-loading"/>
                            :
                            null
                    }
                </div>

            </div>
        );

    }
}

Table.propTypes = {

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
    idProp: PropTypes.string,
    disabled: PropTypes.bool,
    hasInitFadeOut: PropTypes.bool,
    noDataText: PropTypes.string,

    /**
     * expand
     */
    expandRows: PropTypes.array,
    expandIconCls: PropTypes.string,

    /**
     * multi select
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
    pageSizeClassName: PropTypes.string,
    pageSizeTriggerClassName: PropTypes.string,
    pageSizePopupClassName: PropTypes.string,
    isPaginated: PropTypes.bool,
    page: PropTypes.number,
    pageSize: PropTypes.number,
    pageSizes: PropTypes.array,
    pageSizeValueField: PropTypes.string,
    pageSizeDisplayField: PropTypes.string,
    paginationParentEl: PropTypes.object,
    useFullPagination: PropTypes.bool,
    paginationSelectionVisible: PropTypes.bool,
    paginationTotalVisible: PropTypes.bool,
    paginationPageVisible: PropTypes.bool,
    paginationPageSizeVisible: PropTypes.bool,
    paginationPageSizeRightIconCls: PropTypes.string,
    paginationPrevIconCls: PropTypes.string,
    paginationNextIconCls: PropTypes.string,
    paginationFirstIconCls: PropTypes.string,
    paginationLastIconCls: PropTypes.string,
    paginationSelectionRenderer: PropTypes.func,
    paginationTotalRenderer: PropTypes.func,

    /**
     * hidden
     */
    isHeadHidden: PropTypes.bool,
    isFootHidden: PropTypes.bool,

    /**
     * fixed
     */
    isLayoutFixed: PropTypes.bool,
    isHeadFixed: PropTypes.bool,
    isFootFixed: PropTypes.bool,

    /**
     * scroll
     */
    scroll: PropTypes.shape({
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    }),

    /**
     * Dynamic Render
     */
    useDynamicRender: PropTypes.bool,
    scrollHeight: PropTypes.number,
    rowHeight: PropTypes.number,
    scrollBuffer: PropTypes.number,

    /**
     * column resizable
     */
    isColumnResizable: PropTypes.bool,
    minColumnWidth: PropTypes.number,
    maxColumnWidth: PropTypes.number,

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
    onDataUpdate: PropTypes.func,
    onPaginationChange: PropTypes.func,
    onPageChange: PropTypes.func,
    onPageSizeChange: PropTypes.func,
    onScrollStart: PropTypes.func,
    onScrollEnd: PropTypes.func,
    onScrollChange: PropTypes.func,
    onResizeStart: PropTypes.func,
    onResizeEnd: PropTypes.func,
    onResizeChange: PropTypes.func,
    onColumnsWidthChange: PropTypes.func,
    onColumnResizeStart: PropTypes.func,
    onColumnResizeEnd: PropTypes.func

};

Table.defaultProps = {

    disabled: false,
    hasInitFadeOut: true,
    noDataText: 'No Data',

    /**
     * expand
     */
    expandRows: [],
    expandIconCls: 'fas fa-chevron-right',

    /**
     * multi select
     */
    selectMode: SelectMode.SINGLE_SELECT,
    selectAllMode: SelectAllMode.CURRENT_PAGE,
    isSelectRecursive: false,
    selectUncheckedIconCls: 'far fa-square',
    selectCheckedIconCls: 'fas fa-check-square',
    selectIndeterminateIconCls: 'fas fa-minus-square',

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
    pageSizes: [5, 10, 15, 20],
    useFullPagination: false,
    pageSizeValueField: 'value',
    pageSizeDisplayField: 'text',
    paginationSelectionVisible: false,
    paginationTotalVisible: true,
    paginationPageVisible: true,
    paginationPageSizeVisible: true,
    paginationPageSizeRightIconCls: 'fas fa-angle-down',
    paginationPrevIconCls: 'fas fa-angle-left',
    paginationNextIconCls: 'fas fa-angle-right',
    paginationFirstIconCls: 'fas fa-angle-double-left',
    paginationLastIconCls: 'fas fa-angle-double-right',

    /**
     * hidden
     */
    isHeadHidden: false,
    isFootHidden: false,

    /**
     * fixed
     */
    isLayoutFixed: false,
    isHeadFixed: false,
    isFootFixed: false,

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
    minColumnWidth: 64,
    maxColumnWidth: Infinity

};

export default Table;
