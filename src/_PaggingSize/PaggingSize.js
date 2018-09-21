/**
 * @file PaggingSize component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import DropdownSelect from '../DropdownSelect';

class PaggingSize extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    pageSizeChangeHandle = newPageSize => {
        const {pageSize, onPageSizeChange} = this.props;
        pageSize != newPageSize && onPageSizeChange && onPageSizeChange(newPageSize);
    };

    render() {

        const {className, style, pageSize, pageSizes, valueField, displayField, rightIconCls} = this.props;

        let temp = pageSizes.find(item => item && item.value === pageSize),
            value = temp ? temp : pageSize;

        return (
            <div className={`pagging-size ${className}`}
                 style={style}>

                <label>Show Rows:</label>

                <DropdownSelect className="pagging-size-select"
                                value={value}
                                data={pageSizes}
                                autoClose={true}
                                valueField={valueField}
                                displayField={displayField}
                                rightIconCls={rightIconCls}
                                onChange={this.pageSizeChangeHandle}/>

            </div>
        );

    }
}

PaggingSize.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    pageSize: PropTypes.number,
    pageSizes: PropTypes.array,

    valueField: PropTypes.string,
    displayField: PropTypes.string,

    rightIconCls: PropTypes.string,

    onPageSizeChange: PropTypes.func

};

PaggingSize.defaultProps = {

    pageSize: 10,
    pageSizes: [5, 10, 15, 20],

    valueField: 'value',
    displayField: 'text',

    rightIconCls: 'fas fa-angle-down'

};

export default PaggingSize;