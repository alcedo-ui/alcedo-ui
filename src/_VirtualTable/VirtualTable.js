/**
 * @file VirtualTable component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// vendors
import classNames from 'classnames';

class VirtualTable extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {
            children,
            className, style,
            data, useDynamicRender, rowHeight
        } = this.props;

        return useDynamicRender ?
            <div className={classNames('scroll-table-body-virtual', {
                [className]: className
            })}
                 style={{
                     ...style,
                     height: data?.length * rowHeight
                 }}>
                {children}
            </div>
            :
            children;

    }
}

VirtualTable.propTypes = {

    children: PropTypes.any,

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    data: PropTypes.array,

    /**
     * Dynamic Render
     */
    useDynamicRender: PropTypes.bool,
    rowHeight: PropTypes.number

};

VirtualTable.defaultProps = {

    /**
     * Dynamic Render
     */
    useDynamicRender: false,
    rowHeight: 40

};

export default VirtualTable;
