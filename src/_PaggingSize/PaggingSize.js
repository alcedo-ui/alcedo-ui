import React, {Component} from 'react';
import PropTypes from 'prop-types';

import DropdownSelect from '../DropdownSelect';
import Theme from '../Theme';

import Util from '../_vendors/Util';

import './PaggingSize.css';

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

        const {className, style, pageSize, triggerTheme} = this.props,
            {pageSizes} = this;

        return (
            <div className={`pagging-size ${className}`}
                 style={style}>

                <label>Show Rows:</label>

                <DropdownSelect className="pagging-size-select"
                                value={pageSize}
                                data={pageSizes}
                                triggerTheme={triggerTheme}
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
    triggerTheme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    onPageSizeChange: PropTypes.func

};

PaggingSize.defaultProps = {

    className: '',
    style: null,

    pageSize: 10,
    triggerTheme: Theme.DEFAULT

};