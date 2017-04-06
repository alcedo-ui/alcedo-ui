import React, {Component, PropTypes} from 'react';

import PaggingSize from './PaggingSize';
import PaggingPage from './PaggingPage';

import 'sass/components/table/Pagging.scss';

export default class Pagging extends Component {

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

        const {page, total, pageSize} = this.props;

        return (
            <div className="pagging">

                <PaggingSize pageSize={pageSize}
                             onPageSizeChange={this.pageSizeChangedHandle}/>

                <PaggingPage page={page}
                             total={total}
                             onPageChange={this.pageChangedHandle}/>

            </div>
        );

    }
};

Pagging.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    page: PropTypes.number,
    total: PropTypes.number,
    pageSize: PropTypes.number,

    onChange: PropTypes.func

};

Pagging.defaultProps = {

    className: '',
    style: null,

    page: 0,
    total: 0,
    pageSize: 10

};