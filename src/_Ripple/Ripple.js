/**
 * @file Ripple component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CSSTransition from 'react-transition-group/CSSTransition';

class Ripple extends Component {

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {style, duration, ...restProps} = this.props;

        return (
            <CSSTransition {...restProps}
                           classNames="ripple"
                           timeout={{enter: duration, exit: duration * 2}}>
                <div className="ripple"
                     style={style}></div>
            </CSSTransition>
        );

    }
};

Ripple.propTypes = {

    style: PropTypes.object,

    duration: PropTypes.number

};

Ripple.defaultProps = {

    style: null,

    duration: 500

};

export default Ripple;