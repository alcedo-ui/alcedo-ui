/**
 * @file Ripple component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Ripple extends Component {

    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object
    };

    static defaultProps = {
        className: '',
        style: null
    };

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.hasMounted = false;

    }

    initializeAnimation(callback) {

        this.rippleEl && (this.rippleEl.style.transform = 'scale(0)');

        setTimeout(() => {
            this.hasMounted && callback();
        }, 0);

    }

    animate() {
        this.rippleEl && (this.rippleEl.style.transform = 'scale(1)');
    }

    componentDidMount() {

        this.rippleEl = this.refs.ripple;

        this.hasMounted = true;

    }

    componentWillAppear(callback) {
        this.initializeAnimation(callback);
    }

    componentWillEnter(callback) {
        this.initializeAnimation(callback);
    }

    componentDidAppear() {
        this.animate();
    }

    componentDidEnter() {
        this.animate();
    }

    componentWillLeave(callback) {

        this.rippleEl && (this.rippleEl.style.opacity = 0);

        this.timeout = setTimeout(() => {
            this.hasMounted && callback();
        }, 2000);

    }

    componentWillUnmount() {
        this.timeout && clearTimeout(this.timeout);
    }

    render() {

        const {className, style, children} = this.props;

        return (
            <div ref="ripple"
                 className={`ripple ${className}`}
                 style={style}>
                {children}
            </div>
        );

    }
};