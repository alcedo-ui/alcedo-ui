/**
 * @file DynamicRenderTableProvider component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Vendors
import classNames from 'classnames';

class DynamicRenderTableProvider extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {

            children, className, style,
            useDynamicRender, data, rowHeight

        } = this.props;

        return useDynamicRender ?
            <div className={classNames('dynamic-render-table-provider', {
                [className]: className
            })}
                 style={{
                     ...style,
                     height: (data?.length || 0) * rowHeight
                 }}>
                {children}
            </div>
            :
            children;

    }
}

DynamicRenderTableProvider.propTypes = {

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

DynamicRenderTableProvider.defaultProps = {

    /**
     * Dynamic Render
     */
    useDynamicRender: false,
    rowHeight: 50

};

export default DynamicRenderTableProvider;
