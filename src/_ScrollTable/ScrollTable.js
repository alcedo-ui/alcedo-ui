/**
 * @file ScrollTable component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import BaseTable from '../_BaseTable';
import ScrollableTable from '../_ScrollableTable';

import Theme from '../Theme';
import TableFragment from '../_statics/TableFragment';
import HorizontalAlign from '../_statics/HorizontalAlign';
import SelectMode from '../_statics/SelectMode';
import SelectAllMode from '../_statics/SelectAllMode';
import SortingType from '../_statics/SortingType';

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

        this.bodyScrollerEl = null;
        this.headScrollerEl = null;
        this.footScrollerEl = null;

    }

    componentDidUpdate() {

        const {
            isHeadFixed, isFootFixed,
            onGetBodyScrollerEl, onGetHeadScrollerEl, onGetFootScrollerEl
        } = this.props;

        !this.bodyScrollerEl && onGetBodyScrollerEl && this.bodyScroller && this.bodyScroller.current
        && onGetBodyScrollerEl(this.bodyScrollerEl = findDOMNode(this.bodyScroller.current));

        !this.headScrollerEl && isHeadFixed && onGetHeadScrollerEl && this.headScroller && this.headScroller.current
        && onGetHeadScrollerEl(this.headScrollerEl = findDOMNode(this.headScroller.current));

        !this.footScrollerEl && isFootFixed && onGetFootScrollerEl && this.footScroller && this.footScroller.current
        && onGetFootScrollerEl(this.footScrollerEl = findDOMNode(this.footScroller.current));

    }

    render() {

        const {

            className, style, bodyScrollerStyle, maskStyle, tableStyle, footStyle, columns, headColumns, bodyColumns,
            isHeadHidden, isFootHidden, isHeadFixed, isFootFixed,
            scroll, hasFixedLeftColumn, hasFixedRightColumn, onScroll, onWheel,

            // not passing down these props
            onGetHeadScrollerEl, onGetBodyScrollerEl, onGetFootScrollerEl,

            ...restProps

        } = this.props;

        if (!columns && !headColumns && !bodyColumns) {
            return null;
        }

        return (
            <div className={classNames('scroll-table', {
                [className]: className
            })}
                 style={style}>

                {
                    !isHeadHidden && isHeadFixed ?
                        <div className="scroll-table-head">
                            <ScrollableTable ref={this.headScroller}
                                             className="scroll-table-head-scroller"
                                             scroll={scroll}
                                             onScroll={onScroll}>
                                <BaseTable {...restProps}
                                           style={tableStyle}
                                           fragment={TableFragment.HEAD}
                                           columns={columns}
                                           headColumns={headColumns}
                                           bodyColumns={bodyColumns}/>
                            </ScrollableTable>
                        </div>
                        :
                        null
                }

                <div className="scroll-table-body">
                    <ScrollableTable ref={this.bodyScroller}
                                     className="scroll-table-body-scroller"
                                     style={bodyScrollerStyle}
                                     scroll={scroll}
                                     onScroll={onScroll}
                                     onWheel={onWheel}>
                        <div className={classNames('scroll-table-body-mask', {
                            'mask-vertical': (!isHeadHidden && isHeadFixed) || (!isFootHidden && isFootFixed),
                            'mask-horizontal': hasFixedLeftColumn || hasFixedRightColumn
                        })}
                             style={maskStyle}>
                            <BaseTable {...restProps}
                                       style={tableStyle}
                                       columns={columns}
                                       headColumns={headColumns}
                                       bodyColumns={bodyColumns}
                                       isHeadFixed={isHeadFixed}
                                       isFootFixed={isFootFixed}
                                       isHeadHidden={isHeadHidden}
                                       isFootHidden={isFootHidden}/>
                        </div>
                    </ScrollableTable>
                </div>

                {
                    !isFootHidden && isFootFixed ?
                        <div className="scroll-table-foot"
                             style={footStyle}>
                            <ScrollableTable ref={this.footScroller}
                                             className="scroll-table-foot-scroller"
                                             scroll={scroll}
                                             onScroll={onScroll}>
                                <BaseTable {...restProps}
                                           style={tableStyle}
                                           fragment={TableFragment.FOOT}
                                           columns={columns}
                                           headColumns={headColumns}
                                           bodyColumns={bodyColumns}/>
                            </ScrollableTable>
                        </div>
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

    bodyScrollerStyle: PropTypes.object,
    maskStyle: PropTypes.object,
    tableStyle: PropTypes.object,
    footStyle: PropTypes.object,

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
    value: PropTypes.array,
    baseColIndex: PropTypes.number,
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

    /**
     * fixed
     */
    isHeadFixed: PropTypes.bool,
    isFootFixed: PropTypes.bool,

    /**
     * hidden
     */
    isHeadHidden: PropTypes.bool,
    isFootHidden: PropTypes.bool,

    /**
     * fixed column
     */
    hasFixedLeftColumn: PropTypes.bool,
    hasFixedRightColumn: PropTypes.bool,

    /**
     * callback
     */
    onGetBodyScrollerEl: PropTypes.func,
    onGetHeadScrollerEl: PropTypes.func,
    onGetFootScrollerEl: PropTypes.func,
    onExpandChange: PropTypes.func,
    onScroll: PropTypes.func,
    onWheel: PropTypes.func,
    onSortChange: PropTypes.func

};

ScrollTable.defaultProps = {

    selectMode: SelectMode.SINGLE_SELECT,
    selectAllMode: SelectAllMode.CURRENT_PAGE,

    baseColIndex: 0,
    expandRows: [],

    /**
     * sorting
     */
    defaultSortingType: SortingType.ASC,
    sortingAscIconCls: 'fas fa-sort-up',
    sortingDescIconCls: 'fas fa-sort-down',

    /**
     * fixed
     */
    isHeadFixed: false,
    isFootFixed: false,

    /**
     * hidden
     */
    isHeadHidden: false,
    isFootHidden: false,

    /**
     * fixed column
     */
    hasFixedLeftColumn: false,
    hasFixedRightColumn: false

};

export default ScrollTable;
