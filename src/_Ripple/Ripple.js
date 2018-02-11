/**
 * @file Ripple component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Transition from 'react-transition-group/Transition';

class Ripple extends Component {

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            visible: false,
            leave: false
        };

        this.exithandler = ::this.exithandler;

    }

    exithandler() {
        this.setState({
            leave: true
        }, () => {
            // debugger;
        });
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                visible: true
            });
        });
    }

    render() {

        const {style, duration, ...restProps} = this.props,
            {visible, leave} = this.state,

            wrapperClassName = classNames('ripple', {
                visible,
                leave
            });

        return (
            <Transition {...restProps}
                        timeout={{enter: duration * 2, exit: duration * 4}}
                        onExit={this.exithandler}>
                <div className={wrapperClassName}
                     style={style}></div>
            </Transition>
        );

    }
};

Ripple.propTypes = {

    style: PropTypes.object,

    duration: PropTypes.number

};

Ripple.defaultProps = {

    style: null,

    duration: 250

};

export default Ripple;