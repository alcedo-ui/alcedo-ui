/**
 * @file PaginationSize component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import DropdownSelect from '../DropdownSelect';

class PaginationSize extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    handlePageSizeChange = newPageSize => {
        const {pageSize, onPageSizeChange} = this.props;
        pageSize != newPageSize && onPageSizeChange && onPageSizeChange(newPageSize);
    };

    render() {

        const {
                className, style, pageSize, pageSizes, valueField, displayField, rightIconCls,
                parentEl
            } = this.props,

            temp = pageSizes.find(item => item && item.value === pageSize),
            value = temp ? temp : pageSize;

        return (
            <div className={`pagination-size ${className}`}
                 style={style}>

                <label>Show Rows:</label>

                <DropdownSelect className="pagination-size-select"
                                value={value}
                                data={pageSizes}
                                autoClose={true}
                                valueField={valueField}
                                displayField={displayField}
                                parentEl={parentEl}
                                rightIconCls={rightIconCls}
                                onChange={this.handlePageSizeChange}/>

            </div>
        );

    }
}

PaginationSize.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    pageSize: PropTypes.number,
    pageSizes: PropTypes.array,

    valueField: PropTypes.string,
    displayField: PropTypes.string,

    rightIconCls: PropTypes.string,

    parentEl: PropTypes.object,

    onPageSizeChange: PropTypes.func

};

PaginationSize.defaultProps = {

    pageSize: 10,
    pageSizes: [5, 10, 15, 20],

    valueField: 'value',
    displayField: 'text',

    rightIconCls: 'fas fa-angle-down'

};

export default PaginationSize;
