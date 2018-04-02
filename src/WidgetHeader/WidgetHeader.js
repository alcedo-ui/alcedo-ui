/**
 * @file WidgetHeader component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import classNames from 'classnames';

import PureRender from '../_vendors/PureRender';

@PureRender
class WidgetHeader extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {children, className, style, title} = this.props,

            headerClassName = classNames('widget-header', {
                [className]: className
            });

        return (
            <div className={headerClassName}
                 style={style}>

                {title}

                <div className="right">
                    {children}
                </div>

            </div>
        );

    }
};

if (process.env.NODE_ENV === 'development') {

    const PropTypes = require('prop-types');

    WidgetHeader.propTypes = {

        className: PropTypes.string,
        style: PropTypes.object,

        title: PropTypes.any

    };

}

export default WidgetHeader;