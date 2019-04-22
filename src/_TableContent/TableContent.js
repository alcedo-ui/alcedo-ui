/**
 * @file TableContent component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import eventsOn from 'dom-helpers/events/on';
import eventsOff from 'dom-helpers/events/off';
import startCase from 'lodash/startCase';
import addClass from 'dom-helpers/class/addClass';
import removeClass from 'dom-helpers/class/removeClass';
import debounce from 'lodash/debounce';

import ScrollableTable from '../_ScrollableTable';

import Theme from '../Theme';
import TableFragment from '../_statics/TableFragment';
import HorizontalAlign from '../_statics/HorizontalAlign';
import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortingType from '../_statics/SortingType';

import Util from '../_vendors/Util';
import TableCalculation from '../_vendors/TableCalculation';

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
        this.fixedLeft = createRef();
        this.fixedLeftEl = null;
        this.fixedRight = createRef();
        this.fixedRightEl = null;

    }

    /**
     * split columns by fixed
     * @returns {{[p: string]: Array}}
     */
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

    /**
     * fix table layout at once
     */
    fixLayout = () => {
        if ((this.props.isHeadFixed || this.props.isFootFixed) && this.wrapperEl) {
            TableCalculation.fixLayout(this.wrapperEl, this.props);
        }
    };

    /**
     * fix table layout when resize
     * @type {debounced}
     */
    debounceFixLayout = debounce(this.fixLayout, 150);

    /**
     * handle get scroll el
     * @param el
     * @param fixed
     * @param fragment
     */
    handleGetScrollerEl = (el, fixed, fragment) => {
        this[`${fixed}${startCase(fragment)}Scroller`] = el;
    };

    /**
     * update
     */
    updateHorizontalScrollClassNames = () => {

        if (!this.wrapperEl || !this.fixedLeftEl || !this.fixedRightEl || !this.centerBodyScroller) {
            return;
        }

        const {scrollWidth, offsetWidth, scrollLeft} = this.centerBodyScroller;

        if (this.fixedLeftEl) {
            if (scrollLeft > 0) {
                addClass(this.fixedLeftEl, 'scroll-shadow');
            } else {
                removeClass(this.fixedLeftEl, 'scroll-shadow');
            }
        }

        if (this.fixedRightEl) {
            if (scrollLeft < scrollWidth - offsetWidth) {
                addClass(this.fixedRightEl, 'scroll-shadow');
            } else {
                removeClass(this.fixedRightEl, 'scroll-shadow');
            }
        }

    };

    /**
     * handle table horizontal scroll
     * @param e
     */
    handleHorizontalScroll = e => {

        if (!e || e.currentTarget !== e.target) {
            return;
        }

        const {isHeadFixed, isFootFixed, scroll = {}} = this.props,
            target = e.target,
            scrollLeft = target.scrollLeft;

        if (scrollLeft !== this.lastScrollLeft && scroll.width) {

            switch (target) {
                case this.centerBodyScroller: {
                    if (isHeadFixed && this.centerHeadScroller) {
                        this.centerHeadScroller.scrollLeft = scrollLeft;
                    }
                    if (isFootFixed && this.centerHeadScroller) {
                        this.centerFootScroller.scrollLeft = scrollLeft;
                    }
                    break;
                }
                case this.centerHeadScroller: {
                    if (this.centerBodyScroller) {
                        this.centerBodyScroller.scrollLeft = scrollLeft;
                    }
                    if (isFootFixed && this.centerHeadScroller) {
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

            this.updateHorizontalScrollClassNames();

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

        const {scroll = {}} = this.props,
            target = e.target,
            scrollTop = target.scrollTop;

        if (scrollTop !== this.lastScrollTop && scroll.height
            && (target != this.centerHeadScroller || target != this.centerFootScroller)) {
            switch (target) {
                case this.centerBodyScroller: {
                    if (this.leftBodyScroller) {
                        this.leftBodyScroller.scrollTop = scrollTop;
                    }
                    if (this.rightBodyScroller) {
                        this.rightBodyScroller.scrollTop = scrollTop;
                    }
                    break;
                }
                case this.leftBodyScroller: {
                    if (this.centerBodyScroller) {
                        this.centerBodyScroller.scrollTop = scrollTop;
                    }
                    if (this.rightBodyScroller) {
                        this.rightBodyScroller.scrollTop = scrollTop;
                    }
                    break;
                }
                case this.rightBodyScroller: {
                    if (this.leftBodyScroller) {
                        this.leftBodyScroller.scrollTop = scrollTop;
                    }
                    if (this.centerBodyScroller) {
                        this.centerBodyScroller.scrollTop = scrollTop;
                    }
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

    componentDidMount() {

        this.wrapperEl = this.wrapper && this.wrapper.current;
        this.fixedLeftEl = this.fixedLeft && this.fixedLeft.current && findDOMNode(this.fixedLeft.current);
        this.fixedRightEl = this.fixedRight && this.fixedRight.current && findDOMNode(this.fixedRight.current);

        eventsOn(window, 'resize', this.debounceFixLayout);

        this.updateHorizontalScrollClassNames();
        this.fixLayout();

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
            bodyScrollerStyle = scroll && scroll.height ? {maxHeight: scroll.height} : null,
            tableStyle = scroll && scroll.width ? {minWidth: scroll.width} : null;

        return (
            <div ref={this.wrapper}
                 className={classNames('table-content', {
                     [className]: className
                 })}
                 style={style}>

                <ScrollableTable {...restProps}
                                 className="table-content-center"
                                 bodyScrollerStyle={bodyScrollerStyle}
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
                                 onGetHeadScrollerEl={el =>
                                     this.handleGetScrollerEl(el, HorizontalAlign.CENTER, TableFragment.HEAD)}
                                 onGetBodyScrollerEl={el =>
                                     this.handleGetScrollerEl(el, HorizontalAlign.CENTER, TableFragment.BODY)}
                                 onGetFootScrollerEl={el =>
                                     this.handleGetScrollerEl(el, HorizontalAlign.CENTER, TableFragment.FOOT)}/>

                {
                    columns[HorizontalAlign.LEFT] && columns[HorizontalAlign.LEFT].length > 0 ?
                        <ScrollableTable {...restProps}
                                         ref={this.fixedLeft}
                                         className="table-content-left"
                                         bodyScrollerStyle={bodyScrollerStyle}
                                         fixed={HorizontalAlign.LEFT}
                                         columns={columns[HorizontalAlign.LEFT]}
                                         data={tableData}
                                         scroll={scroll}
                                         onScroll={this.handleScroll}
                                         onWheel={this.handleWheel}
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
                    columns[HorizontalAlign.RIGHT] && columns[HorizontalAlign.RIGHT].length > 0 ?
                        <ScrollableTable {...restProps}
                                         ref={this.fixedRight}
                                         className="table-content-right"
                                         bodyScrollerStyle={bodyScrollerStyle}
                                         fixed={HorizontalAlign.RIGHT}
                                         columns={columns[HorizontalAlign.RIGHT]}
                                         data={tableData}
                                         scroll={scroll}
                                         onScroll={this.handleScroll}
                                         onWheel={this.handleWheel}
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
