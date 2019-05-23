/**
 * @file BriefPagination component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PaginationSize from '../_PaginationSize';
import IconButton from '../IconButton';

import Valid from '../_vendors/Valid';
import TableCalculation from '../_vendors/TableCalculation';
import ComponentUtil from '../_vendors/ComponentUtil';

class BriefPagination extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            page: props.page,
            pageSize: props.pageSize
        };

    }

    handlePageChange = page => {
        this.setState({
            page
        }, () => {
            const {onPageChange, onPaginationChange} = this.props;
            onPageChange && onPageChange(page);
            onPaginationChange && onPaginationChange({
                page,
                pageSize: this.state.pageSize
            });
        });
    };

    handlePageSizeChange = pageSize => {

        const {pageSizeValueField} = this.props,
            originPageSizeValue = TableCalculation.getPageSizeValue(this.state.pageSize, pageSizeValueField),
            pageSizeValue = TableCalculation.getPageSizeValue(pageSize, pageSizeValueField);

        if (pageSizeValue && originPageSizeValue !== pageSizeValue) {

            const {onPageSizeChange, onPaginationChange} = this.props;
            onPageSizeChange && onPageSizeChange(pageSizeValue);

            const totalPage = Math.ceil(this.props.total / pageSizeValue),
                page = Valid.range(this.state.page, 0, totalPage - 1);
            if (page !== this.state.page) {
                const {onPageChange} = this.props;
                onPageChange && onPageChange(page);
                onPaginationChange && onPaginationChange({
                    page,
                    pageSize: pageSizeValue
                });
            } else {
                onPaginationChange && onPaginationChange({
                    page: this.state.page,
                    pageSize: pageSizeValue
                });
            }

        }

    };

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            page: ComponentUtil.getDerivedState(props, state, 'page'),
            pageSize: ComponentUtil.getDerivedState(props, state, 'pageSize')
        };
    }

    render() {

        const {
                total, page, pageSize, pageSizes, pageSizeRightIconCls, pageSizeValueField, pageSizeDisplayField,
                totalVisible, selectedCount, selectionVisible, pageSizesVisible, prevIconCls, nextIconCls,
                selectionRenderer, totalRenderer, parentEl
            } = this.props,

            totalPage = Math.ceil(total / pageSize),

            startNumber = Valid.range(page * pageSize + 1, 0, total),
            stopNumber = Valid.range((page + 1) * pageSize, 0, total);

        return (
            <div className="brief-pagination">

                <div className="brief-pagination-left">

                    {
                        selectionVisible ?
                            <div className="brief-pagination-selected">
                                {
                                    selectionRenderer ?
                                        selectionRenderer(selectedCount, total, page, totalPage, pageSize, pageSizes)
                                        :
                                        `Selected: ${selectedCount}`
                                }
                            </div>
                            :
                            null
                    }

                    {
                        totalVisible ?
                            <div className="brief-pagination-total">
                                {
                                    totalRenderer ?
                                        totalRenderer(total, page, totalPage, pageSize, pageSizes)
                                        :
                                        `Total: ${total}`
                                }
                            </div>
                            :
                            null
                    }

                </div>

                <div className="brief-pagination-right">

                    {
                        pageSizesVisible ?
                            <PaginationSize pageSize={pageSize}
                                            pageSizes={pageSizes}
                                            valueField={pageSizeValueField}
                                            displayField={pageSizeDisplayField}
                                            parentEl={parentEl}
                                            rightIconCls={pageSizeRightIconCls}
                                            onPageSizeChange={this.handlePageSizeChange}/>
                            :
                            null
                    }

                    <div className="brief-pagination-info">
                        {`${startNumber}-${stopNumber} of ${total}`}
                    </div>

                    <IconButton iconCls={prevIconCls}
                                disabled={page <= 0}
                                onClick={() => this.handlePageChange(page - 1)}/>

                    <IconButton iconCls={nextIconCls}
                                disabled={page >= totalPage - 1}
                                onClick={() => this.handlePageChange(page + 1)}/>

                </div>

            </div>
        );

    }
}

BriefPagination.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The total of data.
     */
    total: PropTypes.number,

    /**
     * The valid page.
     */
    page: PropTypes.number,

    /**
     * The number of per page.
     */
    pageSize: PropTypes.number,

    /**
     * The array of pageSize.
     */
    pageSizes: PropTypes.array,

    /**
     * The value field name of PageSize. (default: "value")
     */
    pageSizeValueField: PropTypes.string,

    /**
     * The display field name of PageSize. (default: "text")
     */
    pageSizeDisplayField: PropTypes.string,

    /**
     * The total count of selected.
     */
    selectedCount: PropTypes.number,

    /**
     * If true, the selectedCount will show.
     */
    selectionVisible: PropTypes.bool,

    /**
     * If true, the total will show.
     */
    totalVisible: PropTypes.bool,

    /**
     * If false, the pageSize choice box will not show.
     */
    pageSizesVisible: PropTypes.bool,

    /**
     * Use this property to set page size right icon.
     */
    pageSizeRightIconCls: PropTypes.string,

    /**
     * Use this property to set prev button icon.
     */
    prevIconCls: PropTypes.string,

    /**
     * Use this property to set next button icon.
     */
    nextIconCls: PropTypes.string,

    selectionRenderer: PropTypes.func,
    totalRenderer: PropTypes.func,

    parentEl: PropTypes.object,

    onPaginationChange: PropTypes.func,
    onPageChange: PropTypes.func,
    onPageSizeChange: PropTypes.func

};

BriefPagination.defaultProps = {

    total: 0,
    page: 0,
    pageSize: 10,
    pageSizes: [5, 10, 15, 20],
    pageSizeValueField: 'value',
    pageSizeDisplayField: 'text',
    selectedCount: 0,

    selectionVisible: false,
    totalVisible: true,
    pageSizesVisible: true,

    pageSizeRightIconCls: 'fas fa-angle-down',
    prevIconCls: 'fas fa-angle-left',
    nextIconCls: 'fas fa-angle-right'

};

export default BriefPagination;
