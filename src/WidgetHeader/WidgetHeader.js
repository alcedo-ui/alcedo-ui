/**
 * @file WidgetHeader component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class WidgetHeader extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {children, className, style, title} = this.props;

        return (
            <div className={`widget-header ${className}`}
                 style={style}>

                {title}

                <div className="right">
                    {children}
                </div>

            </div>
        );

    }
};

WidgetHeader.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    title: PropTypes.any

};

WidgetHeader.defaultProps = {

    className: '',
    style: null,

    title: ''

};