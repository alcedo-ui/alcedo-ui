/**
 * @file PaginationSize component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import DropdownSelect from '../DropdownSelect';

// Vendors
import classNames from 'classnames';

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
                className, triggerClassName, popupClassName, style,
                pageSize, pageSizes, valueField, displayField, rightIconCls, parentEl
            } = this.props,

            temp = pageSizes.find(item => item && item.value === pageSize),
            value = temp ? temp : pageSize;

        return (
            <div className={classNames('pagination-size', {
                [className]: className
            })}
                 style={style}>

                <label>Show Rows:</label>

                <DropdownSelect className={classNames('pagination-size-select', {
                    [triggerClassName]: triggerClassName
                })}
                                popupClassName={popupClassName}
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
    triggerClassName: PropTypes.string,
    popupClassName: PropTypes.string,
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
