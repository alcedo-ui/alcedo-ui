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

        const {page, onChange} = this.props;

        this.props.pageSize != pageSize && onChange && onChange({
            page,
            pageSize
        });

    };

    render() {

        const {
                count, page, total, pageSize, pageSizes,
                selectedCount, selectedCountVisible, pageSizeVisible, paggingPrevIconCls, paggingNextIconCls,
                paggingCountRenderer
            } = this.props,
            startNumber = Valid.range(page * pageSize + 1, 0, count),
            stopNumber = Valid.range((page + 1) * pageSize, 0, count);

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

                    <div className="brief-pagging-totle">
                        {
                            paggingCountRenderer ?
                                paggingCountRenderer(count, page, total, pageSize, pageSizes)
                                :
                                `Total: ${count}`
                        }
                    </div>

                </div>

                <div className="brief-pagging-right">

                    {
                        pageSizeVisible ?
                            <PaggingSize pageSize={pageSize}
                                         pageSizes={pageSizes}
                                         onPageSizeChange={this.pageSizeChangedHandle}/>
                            :
                            null
                    }

                    <div className="brief-pagging-info">
                        {`${startNumber}-${stopNumber} of ${count}`}
                    </div>

                    <IconButton iconCls={paggingPrevIconCls}
                                disabled={page <= 0}
                                onClick={() => this.pageChangedHandle(page - 1)}/>

                    <IconButton iconCls={paggingNextIconCls}
                                disabled={page >= total - 1}
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
    count: PropTypes.number,

    /**
     * The valid page.
     */
    page: PropTypes.number,

    /**
     * The page count.
     */
    total: PropTypes.number,

    /**
     * The number of per page.
     */
    pageSize: PropTypes.number,

    /**
     * The array of pageSize.
     */
    pageSizes: PropTypes.array,

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

    count: 0,
    page: 0,
    total: 0,
    pageSize: 10,
    pageSizes: [5, 10, 15, 20],
    selectedCount: 0,

    selectedCountVisible: false,
    pageSizeVisible: true,

    paggingPrevIconCls: 'fas fa-angle-left',
    paggingNextIconCls: 'fas fa-angle-right'

};

export default BriefPagging;