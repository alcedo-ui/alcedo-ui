import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Paper from '../Paper';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';

import './PopupBody.css';

export default class PopupBody extends Component {

    constructor(props) {

        super(props);

        this.hasMounted = false;
        this.unrenderTimeout = null;

        this.state = {
            visible: false
        };

        this.getPopupStyle = this::this.getPopupStyle;
        this.mousedownHandle = this::this.mousedownHandle;
        this.initializeAnimation = this::this.initializeAnimation;
        this.animate = this::this.animate;

    }

    triggerPopupEventHandle(el, triggerEl, popupEl, triggerMode, currentVisible) {

        if (!triggerEl) {
            return true;
        }

        while (el) {
            if (el == popupEl) {
                return currentVisible;
            } else if (el == triggerEl) {
                return triggerMode === PopupBody.triggerMode.TOGGLE ? !currentVisible : true;
            }
            el = el.parentNode;
        }

        return false;

    }

    mousedownHandle(e) {

        const {triggerEl, onRequestClose} = this.props,
            visible = this.triggerPopupEventHandle(
                e.target,
                triggerEl,
                require('react-dom').findDOMNode(this.refs.popup),
                this.props.triggerMode,
                this.state.visible
            );

        this.setState({
            visible
        }, () => {
            if (!visible) {
                setTimeout(() => {
                    onRequestClose && onRequestClose();
                }, 250);
            }
        });

    }

    getPopupStyle() {

        const {triggerEl, position} = this.props;

        let popupStyle = {};
        if (triggerEl) {

            const offset = Util.getOffset(triggerEl);

            if (position === PopupBody.Position.RIGHT) {
                popupStyle = {
                    left: offset.left - (200 - triggerEl.clientWidth),
                    top: offset.top + triggerEl.clientHeight
                };
            } else { // default left
                popupStyle = {
                    left: offset.left,
                    top: offset.top + triggerEl.clientHeight
                };
            }
        }

        return popupStyle;

    }

    initializeAnimation(callback) {
        setTimeout(() => {
            this.hasMounted && callback();
        }, 0);
    }

    animate() {
        this.setState({
            visible: true
        });
    }

    componentDidMount() {
        this.hasMounted = true;
        Event.addEvent(document, 'mousedown', this.mousedownHandle);
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
        this.setState({
            visible: false
        }, () => {
            this.unrenderTimeout = setTimeout(() => {
                this.hasMounted && callback();
            }, 250);
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible !== this.state.visible) {
            this.setState({
                visible: !!nextProps.visible
            });
        }
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousedown', this.mousedownHandle);
        this.unrenderTimeout && clearTimeout(this.unrenderTimeout);
    }

    render() {

        const {children, className, style, hasTriangle, theme, position} = this.props;
        const {visible} = this.state;

        return (
            <Paper ref="popup"
                   className={`popup ${visible ? '' : 'hidden'} ${hasTriangle ? 'popup-has-triangle' : ''}
                     ${theme ? `theme-${theme}` : ''} ${position ? `popup-position-${position}` : ''} ${className}`}
                   style={{...this.getPopupStyle(), ...style}}>

                <div className="popup-triangle"></div>

                <div className="popup-content">
                    {children}
                </div>

            </Paper>
        );

    }
};

PopupBody.Position = {
    LEFT: 'left',
    RIGHT: 'right'
};

PopupBody.TriggerMode = {
    TOGGLE: 'toggle',
    OPEN: 'open'
};

PopupBody.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * This is the DOM element that will be used to set the position of the popover.
     */
    triggerEl: PropTypes.object,

    /**
     * If true,the popover is visible.
     */
    visible: PropTypes.bool,

    /**
     * If true,the popover will have a triangle on the top of the DOM element.
     */
    hasTriangle: PropTypes.bool,

    /**
     * The popover theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The popover alignment.The value can be Popup.Position.LEFT or Popup.Position.RIGHT.
     */
    position: PropTypes.oneOf(Util.enumerateValue(PopupBody.Position)),

    /**
     * This number represents the zDepth of the popup shadow.
     */
    depth: PropTypes.number,

    /**
     *
     */
    triggerMode: PropTypes.oneOf(Util.enumerateValue(PopupBody.TriggerMode)),

    /**
     * Callback function fired when the popover is requested to be closed.
     */
    onRequestClose: PropTypes.func

};

PopupBody.defaultProps = {

    className: '',
    style: null,

    triggerEl: null,
    visible: false,
    hasTriangle: true,
    theme: Theme.DEFAULT,
    position: PopupBody.Position.LEFT,
    depth: 4

};