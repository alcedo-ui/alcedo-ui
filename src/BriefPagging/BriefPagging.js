import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PaggingSize from '../_PaggingSize';
import IconButton from '../IconButton';

import Valid from '../_vendors/Valid';

import './BriefPagging.css';

export default class BriefPagging extends Component {

    constructor(props) {

        super(props);

        this.pageChangedHandle = this.pageChangedHandle.bind(this);
        this.pageSizeChangedHandle = this.pageSizeChangedHandle.bind(this);

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

        const {count, page, total, pageSize, selectedCount, selectedCountVisible, pageSizeVisible} = this.props,
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

                    {
                        pageSizeVisible ?
                            <div className="brief-pagging-totle">
                                {`Total: ${count}`}
                            </div>
                            :
                            null
                    }

                </div>

                <div className="brief-pagging-right">

                    <PaggingSize pageSize={pageSize}
                                 onPageSizeChange={this.pageSizeChangedHandle}/>

                    <div className="brief-pagging-info">
                        {`${startNumber}-${stopNumber} of ${count}`}
                    </div>

                    <IconButton iconCls="fa fa-chevron-left"
                                disabled={page <= 0}
                                onTouchTap={() => {
                                    this.pageChangedHandle(page - 1);
                                }}/>

                    <IconButton iconCls="fa fa-chevron-right"
                                disabled={page >= total - 1}
                                onTouchTap={() => {
                                    this.pageChangedHandle(page + 1);
                                }}/>

                </div>

            </div>
        );

    }
};

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
     *
     */
    selectedCount: PropTypes.number,

    /**
     *
     */
    selectedCountVisible: PropTypes.bool,

    /**
     *
     */
    pageSizeVisible: PropTypes.bool,

    /**
     * Callback function fired when the number of pages varies.
     */
    onChange: PropTypes.func

};

BriefPagging.defaultProps = {

    className: '',
    style: null,

    count: 0,
    page: 0,
    total: 0,
    pageSize: 10,
    selectedCount: 0,

    selectedCountVisible: false,
    pageSizeVisible: true

};