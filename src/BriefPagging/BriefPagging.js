/**
 * @file BriefPagging component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PaggingSize from '../_PaggingSize';
import IconButton from '../IconButton';

import Valid from '../_vendors/Valid';

class BriefPagging extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    pageChangedHandle = page => {

        const {pageSize, onChange} = this.props;

        this.props.page != page && onChange && onChange({
            page,
            pageSize
        });

    };

    pageSizeChangedHandle = pageSize => {

        const {total, pageSizeValueField, onChange} = this.props,
            originPageSizeValue = typeof this.props.pageSize === 'object' ?
                this.props.pageSize[pageSizeValueField]
                :
                this.props.pageSize,
            pageSizeValue = typeof pageSize === 'object' ?
                pageSize[pageSizeValueField]
                :
                pageSize;

        if (originPageSizeValue !== pageSizeValue) {
            const totalPage = Math.ceil(total / pageSizeValue);
            onChange && onChange({
                page: Valid.range(this.props.page, 0, totalPage - 1),
                pageSize
            });
        }

    };

    render() {

        const {
                total, page, pageSize, pageSizes, pageSizeRightIconCls, pageSizeValueField, pageSizeDisplayField,
                selectedCount, selectedCountVisible, pageSizeVisible, paggingPrevIconCls, paggingNextIconCls,
                paggingCountRenderer, parentEl
            } = this.props,

            totalPage = Math.ceil(total / pageSize),

            startNumber = Valid.range(page * pageSize + 1, 0, total),
            stopNumber = Valid.range((page + 1) * pageSize, 0, total);

        return (
            <div className="brief-pagging">

                <div className="brief-pagging-left">

                    {
                        selectedCountVisible ?
                            <div className="brief-pagging-selected">
                                {`Selected: ${selectedCount}`}
                            </div>
                            :
                            null
                    }

                    <div className="brief-pagging-total">
                        {
                            paggingCountRenderer ?
                                paggingCountRenderer(total, page, totalPage, pageSize, pageSizes)
                                :
                                `Total: ${total}`
                        }
                    </div>

                </div>

                <div className="brief-pagging-right">

                    {
                        pageSizeVisible ?
                            <PaggingSize pageSize={pageSize}
                                         pageSizes={pageSizes}
                                         valueField={pageSizeValueField}
                                         displayField={pageSizeDisplayField}
                                         parentEl={parentEl}
                                         rightIconCls={pageSizeRightIconCls}
                                         onPageSizeChange={this.pageSizeChangedHandle}/>
                            :
                            null
                    }

                    <div className="brief-pagging-info">
                        {`${startNumber}-${stopNumber} of ${total}`}
                    </div>

                    <IconButton iconCls={paggingPrevIconCls}
                                disabled={page <= 0}
                                onClick={() => this.pageChangedHandle(page - 1)}/>

                    <IconButton iconCls={paggingNextIconCls}
                                disabled={page >= totalPage - 1}
                                onClick={() => this.pageChangedHandle(page + 1)}/>

                </div>

            </div>
        );

    }
}

BriefPagging.propTypes = {

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
     * If true,the selectedCount will show.
     */
    selectedCountVisible: PropTypes.bool,

    /**
     * If false, the pageSize choice box will not show.
     */
    pageSizeVisible: PropTypes.bool,

    /**
     * Use this property to set page size right icon.
     */
    pageSizeRightIconCls: PropTypes.string,

    /**
     * Use this property to set prev button icon.
     */
    paggingPrevIconCls: PropTypes.string,

    /**
     * Use this property to set next button icon.
     */
    paggingNextIconCls: PropTypes.string,

    paggingCountRenderer: PropTypes.func,

    /**
     * Callback function fired when Pagging component change.
     */
    onChange: PropTypes.func

};

BriefPagging.defaultProps = {

    total: 0,
    page: 0,
    pageSize: 10,
    pageSizes: [5, 10, 15, 20],
    pageSizeValueField: 'value',
    pageSizeDisplayField: 'text',
    selectedCount: 0,

    selectedCountVisible: false,
    pageSizeVisible: true,

    pageSizeRightIconCls: 'fas fa-angle-down',
    paggingPrevIconCls: 'fas fa-angle-left',
    paggingNextIconCls: 'fas fa-angle-right'

};

export default BriefPagging;