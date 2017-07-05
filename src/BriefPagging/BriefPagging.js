import React, {Component} from 'react';
import PropTypes from 'prop-types';

import PaggingSize from '../_PaggingSize';
import IconButton from '../IconButton';

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

        const {count, page, total, pageSize} = this.props;

        return (
            <div className="brief-pagging-wrapper">

                <div className="brief-pagging">

                    <PaggingSize pageSize={pageSize}
                                 onPageSizeChange={this.pageSizeChangedHandle}/>

                    <div className="brief-pagging-info">
                        {`${page * pageSize + 1}-${(page + 1) * pageSize} of ${count}`}
                    </div>

                    <IconButton iconCls="fa fa-chevron-left"
                                disabled={page <= 0}
                                onTouchTap={() => {
                                    this.pageChangedHandle(page - 1);
                                }}/>

                    <IconButton iconCls="fa fa-chevron-right"
                                disabled={page >= total}
                                onTouchTap={() => {
                                    this.pageChangedHandle(page + 1);
                                }}/>

                </div>

            </div>
        );

    }
};

BriefPagging.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    count: PropTypes.number,
    page: PropTypes.number,
    total: PropTypes.number,
    pageSize: PropTypes.number,

    onChange: PropTypes.func

};

BriefPagging.defaultProps = {

    className: '',
    style: null,

    count: 0,
    page: 0,
    total: 0,
    pageSize: 10

};