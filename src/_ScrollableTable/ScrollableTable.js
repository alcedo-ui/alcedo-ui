/**
 * @file ScrollableTable component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import BaseTable from '../_BaseTable';

import Theme from '../Theme';
import TableFragment from '../_statics/TableFragment';
import HorizontalAlign from '../_statics/HorizontalAlign';
import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortingType from '../_statics/SortingType';

import Util from '../_vendors/Util';

class ScrollableTable extends Component {

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

    componentDidMount() {

        const {
            isHeadFixed, isFootFixed,
            onGetBodyScrollerEl, onGetHeadScrollerEl, onGetFootScrollerEl
        } = this.props;

        this.bodyScroller && onGetBodyScrollerEl && onGetBodyScrollerEl(this.bodyScroller.current);

        isHeadFixed && this.headScroller && onGetHeadScrollerEl
        && onGetHeadScrollerEl(this.headScroller.current);

        isFootFixed && this.footScroller && onGetFootScrollerEl
        && onGetFootScrollerEl(this.footScroller.current);

    }

    render() {

        const {
                className, style, fixed, columns, data, isHeadFixed, isFootFixed, scroll, isPaginated,
                onScroll, ...restProps
            } = this.props,
            tableStyle = !fixed && scroll && scroll.width ? {minWidth: scroll.width} : null;

        return (
            <div className={classNames('scrollable-table', {
                'scroll-hidden': fixed,
                [className]: className
            })}
                 style={style}>

                {
                    isHeadFixed ?
                        <div className="scrollable-table-head">
                            <div ref={this.headScroller}
                                 className="scrollable-table-head-scroller"
                                 onScroll={onScroll}>
                                <BaseTable {...restProps}
                                           style={tableStyle}
                                           fixed={fixed}
                                           fragment={TableFragment.HEAD}
                                           columns={columns}
                                           data={data}
                                           isPaginated={isPaginated}/>
                            </div>
                        </div>
                        :
                        null
                }

                <div className="scrollable-table-body">
                    <div ref={this.bodyScroller}
                         className="scrollable-table-body-scroller"
                         style={scroll && scroll.height ? {maxHeight: scroll.height} : null}
                         onScroll={onScroll}>
                        <div className="scrollable-table-body-mask">
                            <BaseTable {...restProps}
                                       style={tableStyle}
                                       fixed={fixed}
                                       columns={columns}
                                       data={data}
                                       isPaginated={isPaginated}/>
                        </div>
                    </div>
                </div>

                {
                    isFootFixed ?
                        <div className="scrollable-table-foot">
                            <div ref={this.footScroller}
                                 className="scrollable-table-foot-scroller"
                                 onScroll={onScroll}>
                                <BaseTable {...restProps}
                                           style={tableStyle}
                                           fixed={fixed}
                                           fragment={TableFragment.FOOT}
                                           columns={columns}
                                           data={data}
                                           isPaginated={isPaginated}/>
                            </div>
                        </div>
                        :
                        null
                }

            </div>
        );

    }
}

ScrollableTable.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

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
    onGetBodyScrollerEl: PropTypes.func,
    onGetHeadScrollerEl: PropTypes.func,
    onGetFootScrollerEl: PropTypes.func,
    onScroll: PropTypes.func,
    onSortChange: PropTypes.func

};

ScrollableTable.defaultProps = {

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

export default ScrollableTable;
