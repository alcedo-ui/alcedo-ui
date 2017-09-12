import React, {Component} from 'react';
import PropTypes from 'prop-types';

import DropdownSelect from '../DropdownSelect';

import './PaggingSize.css';

export default class PaggingSize extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.pageSizeChangeHandle = ::this.pageSizeChangeHandle;

    }

    pageSizeChangeHandle(newPageSize) {
        const {pageSize, onPageSizeChange} = this.props;
        pageSize != newPageSize && onPageSizeChange && onPageSizeChange(newPageSize);
    }

    render() {

        const {className, style, pageSize, pageSizes} = this.props;

        return (
            <div className={`pagging-size ${className}`}
                 style={style}>

                <label>Show Rows:</label>

                <DropdownSelect className="pagging-size-select"
                                value={pageSize}
                                data={pageSizes}
                                autoClose={true}
                                onChange={this.pageSizeChangeHandle}/>

            </div>
        );

    }
};

PaggingSize.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    pageSize: PropTypes.number,
    pageSizes: PropTypes.arrayOf(PropTypes.number),

    onPageSizeChange: PropTypes.func

};

PaggingSize.defaultProps = {

    className: '',
    style: null,

    pageSize: 10,
    pageSizes: [5, 10, 15, 20]

};