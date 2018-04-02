/**
 * @file BriefPagging component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';

import PaggingSize from '../_PaggingSize';
import IconButton from '../IconButton';

import PureRender from '../_vendors/PureRender';
import Valid from '../_vendors/Valid';

@PureRender
class BriefPagging extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.pageChangedHandle = ::this.pageChangedHandle;
        this.pageSizeChangedHandle = ::this.pageSizeChangedHandle;

    }

    pageChangedHandle(page) {

        const {pageSize, onChange} = this.props;

        this.props.page != page && onChange && onChange({
            page,
            pageSize
        });

    }

    pageSizeChangedHandle(pageSize) {

        const {page, onChange} = this.props;

        this.props.pageSize != pageSize && onChange && onChange({
            page,
            pageSize
        });

    }

    render() {

        const {
                count, page, total, pageSize, pageSizes,
                selectedCount, selectedCountVisible, pageSizeVisible, paggingPrevIconCls, paggingNextIconCls
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
                        {`Total: ${count}`}
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
                                onTouchTap={() => {
                                    this.pageChangedHandle(page - 1);
                                }}/>

                    <IconButton iconCls={paggingNextIconCls}
                                disabled={page >= total - 1}
                                onTouchTap={() => {
                                    this.pageChangedHandle(page + 1);
                                }}/>

                </div>

            </div>
        );

    }
};

if (process.env.NODE_ENV === 'development') {

    const PropTypes = require('prop-types');

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

        /**
         * Callback function fired when Pagging component change.
         */
        onChange: PropTypes.func

    };

}

BriefPagging.defaultProps = {

    className: '',
    style: null,

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