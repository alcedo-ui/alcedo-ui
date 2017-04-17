import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-transition-group';

import Toaste from '../_Toaste';

import './Toaster.css';

export default class Toaster extends Component {

    constructor(props) {

        super(props);

        this.nextKey = 0;
        this.timeoutIds = [];

        this.state = {
            toastes: []
        };

        this.clearRippleTimeout = this::this.clearRippleTimeout;
        this.mouseDownHandle = this::this.mouseDownHandle;
        this.mouseUpHandle = this::this.mouseUpHandle;

    }

    getOffset(el) {
        let rect = el.getBoundingClientRect();
        return {
            offsetTop: rect.top + document.body.scrollTop,
            offsetLeft: rect.left + document.body.scrollLeft
        };
    }

    addRipple(e) {

        let {ripples} = this.state;

        ripples.push(
            <Ripple key={this.nextKey++}
                    style={{}}/>
        );

        this.setState({
            ripples: ripples
        });

    }

    removeRipple() {
        this.clearRippleTimeout();
        this.setState({
            ripples: []
        });
    }

    clearRippleTimeout() {

        if (!this.timeoutIds || this.timeoutIds.length < 1) {
            return;
        }

        this.timeoutIds.forEach(item => clearTimeout(item));
        this.timeoutIds = [];

    }

    mouseDownHandle(e) {

        this.timeoutIds[this.nextKey] = setTimeout(() => {
            this.removeRipple();
        }, 1000 / 60);

        this.addRipple(e);

    }

    mouseUpHandle() {
        this.removeRipple();
    }

    componentWillUnmount() {
        this.clearRippleTimeout();
    }

    render() {

        const {className, style} = this.props;
        const {toastes} = this.state;

        return (
            <ReactCSSTransitionGroup component="div"
                                     className={`toaster ${className}`}
                                     style={style}
                                     onMouseDown={this.mouseDownHandle}
                                     onMouseUp={this.mouseUpHandle}>
                {
                    toastes && toastes.length > 0 ?
                        toastes
                        :
                        null
                }
            </ReactCSSTransitionGroup>
        );

    }
};

Toaster.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object

};

Toaster.defaultProps = {

    className: '',
    style: null

};