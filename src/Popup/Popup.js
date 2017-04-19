import React, {Component, PropTypes} from 'react';

import Event from '../_vendors/Event';

import './Popup.css';

export default class Popup extends Component {

    constructor(props) {

        super(props);

        this.state = {
            visible: !!props.visible
        };

        this.mousedownHandle = this::this.mousedownHandle;

    }

    triggerPopupEventHandle(el, triggerEl, popupEl, currentVisible) {

        let flag = true;

        while (el) {
            if (el == popupEl || el == triggerEl) {
                return currentVisible;
            }
            el = el.parentNode;
        }

        if (flag) {
            return false;
        }

    }

    mousedownHandle(e) {

        const {triggerEl, onRequestClose} = this.props,
            visible = this.triggerPopupEventHandle(
                e.target,
                triggerEl,
                require('react-dom').findDOMNode(this),
                this.state.visible
            );

        this.setState({
            visible
        }, () => {
            !visible && onRequestClose && onRequestClose();
        });

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible !== this.state.visible) {
            this.setState({
                visible: !!nextProps.visible
            });
        }
    }

    componentDidMount() {
        Event.addEvent(document, 'mousedown', this.mousedownHandle);
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousedown', this.mousedownHandle);
    }

    render() {

        const {children, className, style, disabled, hasTriangle, theme} = this.props;
        const {visible} = this.state;

        return (
            <div className={`popup ${visible ? '' : 'hidden'} ${hasTriangle ? 'hasTriangle' : ''}
                    ${theme ? `theme-${theme}` : ''} ${className}`}
                 style={style}
                 disabled={disabled}>

                <div className="triangle"></div>

                <div className="content">
                    {children}
                </div>

            </div>
        );

    }
};

Popup.propTypes = {

    className: PropTypes.string,
    style: PropTypes.object,

    triggerEl: PropTypes.object,
    disabled: PropTypes.bool,
    visible: PropTypes.bool,
    hasTriangle: PropTypes.bool,
    theme: PropTypes.string,

    onRequestClose: PropTypes.func

};

Popup.defaultProps = {

    className: '',
    style: null,

    triggerEl: null,
    disabled: false,
    visible: false,
    hasTriangle: true,
    theme: ''

};