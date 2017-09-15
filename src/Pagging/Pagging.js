/**
 * @file Pagging component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PaggingSize from '../_PaggingSize';
import PaggingPage from '../_PaggingPage';

export default class Pagging extends Component {

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
            selectedCount, selectedCountVisible, pageSizeVisible
        } = this.props;

        return (
            <div className="pagging">

                <div className="pagging-left">

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

                <div className="pagging-right">

                    {
                        pageSizeVisible ?
                            <PaggingSize pageSize={pageSize}
                                         pageSizes={pageSizes}
                                         onPageSizeChange={this.pageSizeChangedHandle}/>
                            :
                            null
                    }

                    <PaggingPage page={page}
                                 total={total}
                                 onPageChange={this.pageChangedHandle}/>

                </div>

            </div>
        );

    }
};

Pagging.propTypes = {

    /**
     *
     */
    className: PropTypes.string,

    /**
     *
     */
    style: PropTypes.object,

    /**
     * The total of data.
     */
    count: PropTypes.number,

    /**
     *
     */
    page: PropTypes.number,

    /**
     *
     */
    total: PropTypes.number,

    /**
     *
     */
    pageSize: PropTypes.number,

    /**
     *
     */
    pageSizes: PropTypes.arrayOf(PropTypes.number),

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
     *
     */
    onChange: PropTypes.func

};

Pagging.defaultProps = {

    className: '',
    style: null,

    count: 0,
    page: 0,
    total: 0,
    pageSize: 10,
    pageSizes: [5, 10, 15, 20],
    selectedCount: 0,

    selectedCountVisible: false,
    pageSizeVisible: true

};