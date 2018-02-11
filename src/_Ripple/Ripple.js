/**
 * @file Ripple component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Ripple extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.unrenderTimeout = null;

        this.state = {
            hidden: true,
            leave: false
        };

    }

    componentDidMount() {

        const {rippleId, duration, onRequestClose} = this.props;

        if (duration > 0) {
            this.unrenderTimeout = setTimeout(() => {
                this.setState({
                    leave: true
                }, () => {
                    setTimeout(() => {
                        onRequestClose && onRequestClose(rippleId);
                    }, duration * 2);
                });
            }, duration);
        }

        setTimeout(() => {
            this.setState({
                hidden: false
            });
        }, 0);

    }

    render() {

        const {className, style, children} = this.props,
            {hidden, leave} = this.state,

            rippleClassName = classNames('ripple', {
                hidden,
                leave,
                [className]: className
            });

        return (
            <div ref="ripple"
                 className={rippleClassName}
                 style={style}>
                {children}
            </div>
        );

    }
};

Ripple.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    rippleId: PropTypes.number,
    duration: PropTypes.number,

    onRequestClose: PropTypes.func

};

Ripple.defaultProps = {

    className: null,
    style: null,

    rippleId: 0,
    duration: 250

};

export default Ripple;