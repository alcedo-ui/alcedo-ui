/**
 * @file Pagination component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PaginationSize from '../_PaginationSize';
import PaginationPage from '../_PaginationPage';

import Valid from '../_vendors/Valid';
import TableCalculation from '../_vendors/TableCalculation';
import ComponentUtil from '../_vendors/ComponentUtil';

class Pagination extends Component {

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
            const {onPageChange, onChange} = this.props;
            onPageChange && onPageChange(page);
            onChange && onChange({
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

            const {onPageSizeChange, onChange} = this.props;
            onPageSizeChange && onPageSizeChange(pageSizeValue);

            const totalPage = Math.ceil(this.props.total / pageSizeValue),
                page = Valid.range(this.state.page, 0, totalPage - 1);
            if (page !== this.state.page) {
                const {onPageChange} = this.props;
                onPageChange && onPageChange(page);
                onChange && onChange({
                    page,
                    pageSize: pageSizeValue
                });
            } else {
                onChange && onChange({
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
                className, style,
                pageSizeClassName, pageSizeTriggerClassName, pageSizePopupClassName,
                total, pageSizes, pageSizeValueField, pageSizeDisplayField,
                selectedCount, selectionVisible, totalVisible, pageVisible, pageSizeVisible,
                pageSizeRightIconCls, prevIconCls, nextIconCls, firstIconCls, lastIconCls,
                selectionRenderer, totalRenderer, parentEl
            } = this.props,
            {page, pageSize} = this.state,
            totalPage = Math.ceil(total / pageSize);

        return (
            <div className={classNames('pagination', {
                [className]: className
            })}
                 style={style}>

                <div className="pagination-left">

                    {
                        selectionVisible ?
                            <div className="pagination-selected">
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
                            <div className="pagination-total">
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

                <div className="pagination-right">

                    {
                        pageSizeVisible ?
                            <PaginationSize className={pageSizeClassName}
                                            triggerClassName={pageSizeTriggerClassName}
                                            popupClassName={pageSizePopupClassName}
                                            pageSize={pageSize}
                                            pageSizes={pageSizes}
                                            valueField={pageSizeValueField}
                                            displayField={pageSizeDisplayField}
                                            parentEl={parentEl}
                                            rightIconCls={pageSizeRightIconCls}
                                            onPageSizeChange={this.handlePageSizeChange}/>
                            :
                            null
                    }

                    {
                        pageVisible ?
                            <PaginationPage page={page}
                                            totalPage={totalPage}
                                            prevIconCls={prevIconCls}
                                            nextIconCls={nextIconCls}
                                            firstIconCls={firstIconCls}
                                            lastIconCls={lastIconCls}
                                            onPageChange={this.handlePageChange}/>
                            :
                            null
                    }

                </div>

            </div>
        );

    }
}

Pagination.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    pageSizeClassName: PropTypes.string,
    pageSizeTriggerClassName: PropTypes.string,
    pageSizePopupClassName: PropTypes.string,

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
    pageVisible: PropTypes.bool,

    /**
     * If false, the pageSizes selection will not show.
     */
    pageSizeVisible: PropTypes.bool,

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

    /**
     * Use this property to set first button icon.
     */
    firstIconCls: PropTypes.string,

    /**
     * Use this property to set last button icon.
     */
    lastIconCls: PropTypes.string,

    selectionRenderer: PropTypes.func,
    totalRenderer: PropTypes.func,

    parentEl: PropTypes.object,

    onChange: PropTypes.func,
    onPageChange: PropTypes.func,
    onPageSizeChange: PropTypes.func

};

Pagination.defaultProps = {

    total: 0,
    page: 0,
    pageSize: 10,
    pageSizes: [5, 10, 15, 20],
    pageSizeValueField: 'value',
    pageSizeDisplayField: 'text',
    selectedCount: 0,

    selectionVisible: false,
    totalVisible: true,
    pageVisible: true,
    pageSizeVisible: true,

    pageSizeRightIconCls: 'fas fa-angle-down',
    prevIconCls: 'fas fa-angle-left',
    nextIconCls: 'fas fa-angle-right',
    firstIconCls: 'fas fa-angle-double-left',
    lastIconCls: 'fas fa-angle-double-right'

};

export default Pagination;
