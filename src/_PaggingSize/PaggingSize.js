import React, {Component} from 'react';
import PropTypes from 'prop-types';

import DropdownSelect from '../DropdownSelect';

import './PaggingSize.css';

export default class PaggingSize extends Component {

    constructor(props) {

        super(props);

        this.pageSizeChangeHandle = this::this.pageSizeChangeHandle;

    }

    pageSizeChangeHandle(pageSize) {
        const {onPageSizeChange} = this.props;
        this.props.pageSize != pageSize && onPageSizeChange && onPageSizeChange(pageSize);
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