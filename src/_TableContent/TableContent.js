/**
 * @file TableContent component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import {findDOMNode} from 'react-dom';
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
import TableCalculation from '../_vendors/TableCalculation';
import TableFixedPosition from '../_statics/TableFixedPosition';

class TableContent extends Component {

    static Fragment = TableFragment;
    static Align = HorizontalAlign;
    static SelectMode = SelectMode;
    static SelectAllMode = SelectAllMode;
    static SortingType = SortingType;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.bodyWrapper = createRef();
        this.body = createRef();
        this.head = createRef();
        this.foot = createRef();

        this.bodyEl = null;

    }

    /**
     * calculate table body scroller height
     * @param headHeight
     * @param footHeight
     * @returns {{height: string}}
     */
    getScollerStyle = (headHeight, footHeight) => {
        return {
            height: `calc(100%${headHeight ? ` - ${headHeight}px` : ''}${footHeight ? ` - ${footHeight}px` : ''})`
        };
    };

    /**
     * calculate table fragment(head/foot) height
     * @param fragment
     * @returns {null|any}
     */
    getFixedFragmentHeight = fragment => {

        if (!this.bodyEl || !fragment) {
            return null;
        }

        switch (fragment) {
            case TableFragment.HEAD: {
                const el = this.bodyEl.querySelector('thead');
                return el ? parseInt(window.getComputedStyle(el).height) : null;
            }
            case TableFragment.FOOT:
                const el = this.bodyEl.querySelector('tfoot');
                return el ? parseInt(window.getComputedStyle(el).height) : null;
        }

        return null;

    };

    /**
     * calculate each head and foot column width
     * @returns {null|{[p: string]: *|*}}
     */
    getFixedColumnsWidth = () => {

        if (!this.bodyEl) {
            return null;
        }

        return {
            [TableFragment.HEAD]: [].map.call(this.bodyEl.querySelectorAll('thead th'),
                el => parseInt(window.getComputedStyle(el).width)),
            [TableFragment.FOOT]: [].map.call(this.bodyEl.querySelectorAll('tfoot td'),
                el => parseInt(window.getComputedStyle(el).width))
        };

    };

    /**
     * update body height
     */
    fixBodyHeight = () => {

        const {isHeadFixed, isFootFixed} = this.props;

        if (isHeadFixed || isFootFixed) {
            const height = parseInt(window.getComputedStyle(this.bodyEl).height)
                - (this.getFixedFragmentHeight(TableFragment.FOOT) || 0);
            if (height) {
                this.bodyWrapperEl.style.height = `${height}px`;
            }
        }

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

    componentDidMount() {
        this.bodyEl = findDOMNode(this.body.current);
        this.bodyWrapperEl = this.bodyWrapper.current;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.fixBodyHeight();
    }

    render() {

        const {
                className, style, columns, data, isHeadFixed, isFootFixed, isPaginated,
                ...restProps
            } = this.props,

            fixedHeadHeight = this.getFixedFragmentHeight(TableFragment.HEAD),
            fixedFootHeight = this.getFixedFragmentHeight(TableFragment.FOOT),

            columnsWidth = this.getFixedColumnsWidth(),
            tableData = this.paginateData(this.sortData(data));

        return (
            <div className={classNames('table-content', {
                [className]: className
            })}
                 style={style}>

                {
                    isHeadFixed ?
                        <BaseTable {...restProps}
                                   ref={this.head}
                                   className="table-content-fixed-head"
                                   style={fixedHeadHeight ? {height: fixedHeadHeight} : null}
                                   fragment={TableFragment.HEAD}
                                   columns={columns}
                                   columnsWidth={columnsWidth && columnsWidth[TableFragment.HEAD]}
                                   data={tableData}
                                   isPaginated={isPaginated}/>
                        :
                        null
                }

                <div className="table-content-scroller"
                     style={this.getScollerStyle(fixedHeadHeight, fixedFootHeight)}>
                    <div ref={this.bodyWrapper}
                         className="table-content-body-wrapper"
                         style={fixedHeadHeight != null ? {
                             marginTop: -fixedHeadHeight
                         } : null}>
                        <BaseTable {...restProps}
                                   ref={this.body}
                                   className="table-content-body"
                                   columns={columns}
                                   data={tableData}
                                   isPaginated={isPaginated}/>
                    </div>
                </div>

                {
                    isFootFixed ?
                        <BaseTable {...restProps}
                                   ref={this.foot}
                                   className="table-content-fixed-foot"
                                   style={fixedFootHeight ? {height: fixedFootHeight} : null}
                                   fragment={TableFragment.FOOT}
                                   columns={columns}
                                   columnsWidth={columnsWidth && columnsWidth[TableFragment.FOOT]}
                                   data={tableData}
                                   isPaginated={isPaginated}/>
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
        fixed: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(Util.enumerateValue(TableFixedPosition))]),

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
