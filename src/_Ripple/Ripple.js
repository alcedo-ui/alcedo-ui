/**
 * @file Ripple component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import classNames from 'classnames';

import PureRender from '../_vendors/PureRender';

@PureRender
class Ripple extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {className, style, duration, ...restProps} = this.props,

            rippleClassName = classNames('ripple', {
                [className]: className
            });

        return (
            <CSSTransition {...restProps}
                           classNames="ripple"
                           timeout={{enter: duration, exit: duration * 2}}>
                <div className={rippleClassName}
                     style={style}></div>
            </CSSTransition>
        );

    }
};

if (process.env.NODE_ENV === 'development') {

    const PropTypes = require('prop-types');

    Ripple.propTypes = {

        className: PropTypes.string,
        style: PropTypes.object,

        duration: PropTypes.number

    };

}

Ripple.defaultProps = {
    duration: 500
};

export default Ripple;