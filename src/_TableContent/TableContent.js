/**
 * @file TableContent component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import eventsOn from 'dom-helpers/events/on';
import eventsOff from 'dom-helpers/events/off';

import ScrollableTable from '../_ScrollableTable';

import Theme from '../Theme';
import TableFragment from '../_statics/TableFragment';
import HorizontalAlign from '../_statics/HorizontalAlign';
import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortingType from '../_statics/SortingType';
import Direction from '../_statics/Direction';

import Util from '../_vendors/Util';
import TableCalculation from '../_vendors/TableCalculation';
import ScrollBar from '../_vendors/ScrollBar';

class TableContent extends Component {

    static Fragment = TableFragment;
    static Align = HorizontalAlign;
    static Fixed = HorizontalAlign;
    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortingType = SortingType;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.horizontalScrollBarSize = ScrollBar.getSize(Direction.HORIZONTAL);
        this.verticalScrollBarSize = ScrollBar.getSize(Direction.VERTICAL);

        this.leftScroller = null;
        this.bodyScroller = null;
        this.headScroller = null;
        this.footScroller = null;
        this.rightScroller = null;

        this.lastScrollLeft = 0;
        this.lastScrollTop = 0;

        this.wrapper = createRef();
        this.wrapperEl = null;

    }

    getColumns = () => {

        const {columns} = this.props,
            result = {
                [HorizontalAlign.LEFT]: [],
                [HorizontalAlign.CENTER]: [],
                [HorizontalAlign.RIGHT]: []
            };

        columns.forEach(column => {
            if (column.fixed === true || column.fixed === HorizontalAlign.LEFT) {
                result[HorizontalAlign.LEFT].push(column);
            } else if (column.fixed === HorizontalAlign.RIGHT) {
                result[HorizontalAlign.RIGHT].push(column);
            } else {
                result[HorizontalAlign.CENTER].push(column);
            }
        });

        return result;

    };

    /**
     * sort data by sorting
     * @param data
     * @returns {*[]}
     */
    sortData = (data = this.props.data) => {
        const {sorting, sortingFunc} = this.props;
        return sorting ? TableCalculation.sortTableData(data, sorting, sortingFunc) : data;
    };

    /**
     * slice data by pagination
     * @param data
     * @returns {*[]}
     */
    paginateData = (data = this.props.data) => {

        const {pagination} = this.props;

        if (!pagination) {
            return data;
        }

        const {pageSize, page} = pagination,
            len = data.length;

        let start = page * pageSize,
            stop = start + pageSize;

        start = start < 0 ? 0 : start;
        stop = stop > len ? len : stop;

        return data.slice(start, stop);

    };

    fixLayout = () => {
        if ((this.props.isHeadFixed || this.props.isFootFixed) && this.wrapperEl) {
            TableCalculation.fixLayout(this.wrapperEl, this.props);
        }
    };

    handleGetScrollerEl = (el, type) => {
        this[`${type}Scroller`] = el;
    };

    handleHorizontalScroll = e => {

        if (!e || e.currentTarget !== e.target) {
            return;
        }

        const {isHeadFixed, isFootFixed, scroll = {}} = this.props,
            target = e.target,
            scrollLeft = target.scrollLeft;

        if (scrollLeft !== this.lastScrollLeft && scroll.width) {
            switch (target) {
                case this.bodyScroller: {
                    if (isHeadFixed && this.headScroller) {
                        this.headScroller.scrollLeft = scrollLeft;
                    }
                    if (isFootFixed && this.headScroller) {
                        this.footScroller.scrollLeft = scrollLeft;
                    }
                    break;
                }
                case this.headScroller: {
                    if (this.bodyScroller) {
                        this.bodyScroller.scrollLeft = scrollLeft;
                    }
                    if (isFootFixed && this.headScroller) {
                        this.footScroller.scrollLeft = scrollLeft;
                    }
                    break;
                }
                case this.footScroller: {
                    if (isHeadFixed && this.headScroller) {
                        this.headScroller.scrollLeft = scrollLeft;
                    }
                    if (this.bodyScroller) {
                        this.bodyScroller.scrollLeft = scrollLeft;
                    }
                    break;
                }
            }
        }

        this.lastScrollLeft = scrollLeft;

    };

    handleVerticalScroll = e => {

        if (!e || e.currentTarget !== e.target) {
            return;
        }

        const {scroll = {}} = this.props,
            target = e.target,
            scrollTop = target.scrollTop;

        if (scrollTop !== this.lastScrollTop && scroll.height
            && (target != this.headScroller || target != this.footScroller)) {
            switch (target) {
                case this.bodyScroller: {
                    if (this.leftScroller) {
                        this.leftScroller.scrollTop = scrollTop;
                    }
                    if (this.rightScroller) {
                        this.rightScroller.scrollTop = scrollTop;
                    }
                    break;
                }
                case this.leftScroller: {
                    if (this.bodyScroller) {
                        this.bodyScroller.scrollTop = scrollTop;
                    }
                    if (this.rightScroller) {
                        this.rightScroller.scrollTop = scrollTop;
                    }
                    break;
                }
                case this.rightScroller: {
                    if (this.leftScroller) {
                        this.leftScroller.scrollTop = scrollTop;
                    }
                    if (this.bodyScroller) {
                        this.bodyScroller.scrollTop = scrollTop;
                    }
                    break;
                }
            }
        }

        this.lastScrollTop = scrollTop;

    };

    handleScroll = e => {
        this.handleHorizontalScroll(e);
        this.handleVerticalScroll(e);
    };

    handleWheel = e => {

        const {scroll = {}} = this.props;

        if (!window.navigator.userAgent.match(/Trident\/7\./) || !scroll.height) {
            return;
        }

        e.preventDefault();

        const wd = e.deltaY,
            target = e.target;

        let scrollTop = 0;

        if (this.lastScrollTop) {
            scrollTop = this.lastScrollTop + wd;
        } else {
            scrollTop = wd;
        }

        if (this.leftScroller && this.leftScroller !== target) {
            this.leftScroller.scrollTop = scrollTop;
        }

        if (this.bodyScroller && this.bodyScroller !== target) {
            this.bodyScroller.scrollTop = scrollTop;
        }

        if (this.rightScroller && this.rightScroller !== target) {
            this.rightScroller.scrollTop = scrollTop;
        }

    };

    componentDidMount() {
        this.wrapperEl = this.wrapper && this.wrapper.current;
        eventsOn(window, 'resize', this.fixLayout);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.fixLayout();
    }

    componentWillUnmount() {
        eventsOff(window, 'resize', this.fixLayout);
    }

    render() {

        const {
                className, style, data, scroll,
                ...restProps
            } = this.props,

            columns = this.getColumns();

        if (!columns) {
            return null;
        }

        const tableData = this.paginateData(this.sortData(data)),

            horizontalScrollerStyle = this.horizontalScrollBarSize && this.horizontalScrollBarSize > 0 ? {
                marginBottom: -this.horizontalScrollBarSize,
                paddingBottom: 0
            } : null,
            bodyScrollerStyle = scroll && scroll.height ? {
                maxHeight: scroll.height
            } : null,
            maskStyle = this.horizontalScrollBarSize > 0 ?
                {paddingBottom: this.horizontalScrollBarSize} : null,
            tableStyle = scroll && scroll.width ? {minWidth: scroll.width} : null,
            footStyle = this.horizontalScrollBarSize > 0 ? {marginTop: this.horizontalScrollBarSize} : null;

        return (
            <div ref={this.wrapper}
                 className={classNames('table-content', {
                     [className]: className
                 })}
                 style={style}>

                <ScrollableTable {...restProps}
                                 className="table-content-center"
                                 headScrollerStyle={horizontalScrollerStyle}
                                 bodyScrollerStyle={bodyScrollerStyle}
                                 footScrollerStyle={horizontalScrollerStyle}
                                 maskStyle={tableStyle}
                                 tableStyle={tableStyle}
                                 columns={[
                                     ...TableCalculation.handleFixedColumns(columns[HorizontalAlign.LEFT]),
                                     ...columns[HorizontalAlign.CENTER],
                                     ...TableCalculation.handleFixedColumns(columns[HorizontalAlign.RIGHT])
                                 ]}
                                 data={tableData}
                                 scroll={scroll}
                                 onScroll={this.handleScroll}
                                 onWheel={this.handleWheel}
                                 onGetBodyScrollerEl={el =>
                                     this.handleGetScrollerEl(el, TableFragment.BODY)}
                                 onGetHeadScrollerEl={el =>
                                     this.handleGetScrollerEl(el, TableFragment.HEAD)}
                                 onGetFootScrollerEl={el =>
                                     this.handleGetScrollerEl(el, TableFragment.FOOT)}/>

                {
                    columns[HorizontalAlign.LEFT] && columns[HorizontalAlign.LEFT].length > 0 ?
                        <ScrollableTable {...restProps}
                                         className="table-content-left"
                                         bodyScrollerStyle={{
                                             ...horizontalScrollerStyle,
                                             ...bodyScrollerStyle,
                                             marginRight: this.verticalScrollBarSize > 0 ?
                                                 -this.verticalScrollBarSize : -20
                                         }}
                                         maskStyle={maskStyle}
                                         footStyle={footStyle}
                                         fixed={HorizontalAlign.LEFT}
                                         columns={columns[HorizontalAlign.LEFT]}
                                         data={tableData}
                                         scroll={scroll}
                                         onScroll={this.handleScroll}
                                         onWheel={this.handleWheel}
                                         onGetBodyScrollerEl={el =>
                                             this.handleGetScrollerEl(el, HorizontalAlign.LEFT)}/>
                        :
                        null
                }

                {
                    columns[HorizontalAlign.RIGHT] && columns[HorizontalAlign.RIGHT].length > 0 ?
                        <ScrollableTable {...restProps}
                                         className="table-content-right"
                                         bodyScrollerStyle={{
                                             ...horizontalScrollerStyle,
                                             ...bodyScrollerStyle
                                         }}
                                         maskStyle={maskStyle}
                                         footStyle={footStyle}
                                         fixed={HorizontalAlign.RIGHT}
                                         columns={columns[HorizontalAlign.RIGHT]}
                                         data={tableData}
                                         scroll={scroll}
                                         onScroll={this.handleScroll}
                                         onWheel={this.handleWheel}
                                         onGetBodyScrollerEl={el =>
                                             this.handleGetScrollerEl(el, HorizontalAlign.RIGHT)}/>
                        :
                        null
                }

            </div>
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
         * fixed position of column ( true / 'left' / 'right' )
         */
        fixed: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(Util.enumerateValue(HorizontalAlign))]),

        /**
         * width of column
         */
        width: PropTypes.number,

        /**
         * minimum width of column
         */
        minWidth: PropTypes.number,

        /**
         * The class name of header.
         */
        headClassName: PropTypes.string,

        /**
         * Override the styles of header.
         */
        headStyle: PropTypes.object,

        /**
         * The render content in header.
         * (1) string，example： 'id'
         * (2) callback，example：function (colIndex) {return colIndex;}
         */
        headRenderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        /**
         * align of table header cell
         */
        headAlign: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),

        /**
         * column span of table header
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
         * The render content in table.
         * (1) data key，example： 'id'
         * (2) data key tamplate，example：'${id} - ${name}'
         * (3) callback，example：function (rowData, rowIndex, colIndex) {return rowData.id;}
         */
        bodyRenderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        /**
         * align of table body cell
         */
        bodyAlign: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),

        /**
         * column span of table body
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
         * The render content in footer.
         * (1) string，example： 'id'
         * (2) callback，example：function (colIndex) {return colIndex;}
         */
        footRenderer: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

        /**
         * align of table footer cell
         */
        footAlign: PropTypes.oneOf(Util.enumerateValue(HorizontalAlign)),

        /**
         * column span of table foot
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

    data: PropTypes.array,

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
    sortingFunc: PropTypes.func,

    /**
     * pagination
     */
    isPaginated: PropTypes.bool,
    pagination: PropTypes.shape({
        pageSize: PropTypes.number,
        page: PropTypes.number
    }),
    pageSizes: PropTypes.array,

    /**
     * fixed
     */
    isHeadFixed: PropTypes.bool,
    isFootFixed: PropTypes.bool,

    scroll: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number
    }),

    /**
     * callback
     */
    onSortChange: PropTypes.func

};

TableContent.defaultProps = {

    selectMode: SelectMode.SINGLE_SELECT,
    selectAllMode: SelectAllMode.CURRENT_PAGE,

    defaultSortingType: SortingType.ASC,
    sortingAscIconCls: 'fas fa-angle-up',
    sortingDescIconCls: 'fas fa-angle-down',

    isPaginated: true,
    pagination: {
        pageSize: 10,
        page: 0
    },
    pageSizes: [5, 10, 15, 20],

    isHeadFixed: false,
    isFootFixed: false

};

export default TableContent;
