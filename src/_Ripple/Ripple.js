/**
 * @file Ripple component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CSSTransition from 'react-transition-group/CSSTransition';
import classNames from 'classnames';

class Ripple extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {className, style, duration, ...restProps} = this.props;

        return (
            <CSSTransition {...restProps}
                           classNames="ripple"
                           timeout={{enter: duration, exit: duration * 2}}>
                <div className={classNames('ripple', {
                    [className]: className
                })}
                     style={style}></div>
            </CSSTransition>
        );

    }
}

Ripple.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    duration: PropTypes.number

};

Ripple.defaultProps = {
    duration: 500
};

export default Ripple;
