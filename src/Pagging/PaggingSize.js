import React, {Component, PropTypes} from 'react';

import DropdownSelect from '../DropdownSelect';

export default class PaggingSize extends Component {

    constructor(props) {

        super(props);

        this.pageSizes = [5, 10, 15, 20];

        this.pageSizeChangeHandle = this::this.pageSizeChangeHandle;

    }

    pageSizeChangeHandle(pageSize) {

        const {onPageSizeChange} = this.props;

        this.props.pageSize != pageSize && onPageSizeChange && onPageSizeChange(pageSize);

    }

    render() {

        const {className, style, pageSize} = this.props;
        const {pageSizes} = this;

        return (
            <div className={`pagging-size ${className}`}
                 style={style}>

                <label>Show Rows</label>

                <DropdownSelect className="pagging-size-select"
                                value={pageSize}
                                data={pageSizes}
                                onChange={this.pageSizeChangeHandle}/>

            </div>
        );

    }
};

PaggingSize.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    pageSize: PropTypes.number,

    onPageSizeChange: PropTypes.func

};

PaggingSize.defaultProps = {

    className: '',
    style: null,

    pageSize: 10

};