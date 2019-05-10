/**
 * @file WidgetHeader component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class WidgetHeader extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {children, className, style, title} = this.props;

        return (
            <div className={classNames('widget-header', {
                [className]: className
            })}
                 style={style}>

                {title}

                <div className="right">
                    {children}
                </div>

            </div>
        );

    }
}

WidgetHeader.propTypes = {

    children: PropTypes.any,

    className: PropTypes.string,
    style: PropTypes.object,

    title: PropTypes.any

};

export default WidgetHeader;
