import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {unstable_renderSubtreeIntoContainer, unmountComponentAtNode} from 'react-dom';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';

import './Tip.css';

export default class Tip extends Component {

    constructor(props) {
        super(props);

        this.wrapper = null;
        this.element = null;

        this.state = {
            visible: !!props.visible
        };

        this.getTipStyle = this::this.getTipStyle;
        this.mouseoverHandle = this::this.mouseoverHandle;
        this.renderWrapper = this::this.renderWrapper;
        this.renderer = this::this.renderer;
        this.renderElement = this::this.renderElement;
        this.unrenderElement = this::this.unrenderElement;
    }

    triggerTipEventHandle(el, triggerEl, tipEl) {

        let flag = true;

        while (el) {
            if (el == tipEl || el == triggerEl) {
                return true;
            }
            el = el.parentNode;
        }

        if (flag) {
            return false;
        }

    }

    mouseoverHandle(e) {
        const {triggerEl, onRequestClose} = this.props,
            visible = this.triggerTipEventHandle(
                e.target,
                triggerEl,
                this.element,
                this.state.visible
            );
        this.setState({
            visible
        }, () => {
            !visible && onRequestClose && onRequestClose();
        });

    }

    getTipStyle() {

        const {triggerEl, position} = this.props;

        let tipStyle = {};
        if (triggerEl && this.element) {

            const offset = Util.getOffset(triggerEl);

            switch (position) {
                case 'right':
                    tipStyle = {
                        left: offset.left + (triggerEl.clientWidth),
                        top: offset.top - (this.element.clientHeight - triggerEl.clientHeight) / 2
                    };
                    break;
                case 'left':
                    tipStyle = {
                        left: offset.left - (this.element.clientWidth),
                        top: offset.top - (this.element.clientHeight - triggerEl.clientHeight) / 2
                    };
                    break;
                case 'top-left':
                    tipStyle = {
                        left: offset.left - (this.element.clientWidth),
                        top: offset.top - (this.element.clientHeight)
                    };
                    break;
                case 'top-right':
                    tipStyle = {
                        left: offset.left + (triggerEl.clientWidth),
                        top: offset.top - (this.element.clientHeight)
                    };
                    break;
                case 'top-center':
                    tipStyle = {
                        left: offset.left - (this.element.clientWidth - triggerEl.clientWidth) / 2,
                        top: offset.top - (this.element.clientHeight)
                    };
                    break;
                case 'bottom-left':
                    tipStyle = {
                        left: offset.left - (this.element.clientWidth),
                        top: offset.top + (triggerEl.clientHeight)
                    };
                    break;
                case 'bottom-center':
                    tipStyle = {
                        left: offset.left - (this.element.clientWidth - triggerEl.clientWidth) / 2,
                        top: offset.top + (triggerEl.clientHeight)
                    };
                    break;
                case 'bottom-right':
                    tipStyle = {
                        left: offset.left + (triggerEl.clientWidth),
                        top: offset.top + (triggerEl.clientHeight)
                    };
                    break;
                default:
                    tipStyle = {
                        left: offset.left - (this.element.clientWidth - triggerEl.clientWidth) / 2,
                        top: offset.top + (triggerEl.clientHeight)
                    };
            }
        }

        return tipStyle;

    }

    renderWrapper() {

        this.wrapper = document.createElement('div');
        this.wrapper.className = 'tip-container';
        document.body.appendChild(this.wrapper);

    }

    renderer() {

        const {className, style, position, text} = this.props;
        const {visible} = this.state;

        return (
            <div className={`tip ${visible ? '' : 'hidden'} ${position ? `tip-position-${position}` : ''} ${className}`}
                 style={{...this.getTipStyle(), ...style}}>

                {text}

            </div>
        );

    }

    renderElement() {
        this.element = unstable_renderSubtreeIntoContainer(this, this.renderer(), this.wrapper);
    }

    unrenderElement() {
        unmountComponentAtNode(this.wrapper);
        document.body.removeChild(this.wrapper);
        this.wrapper = null;
        this.element = null;
    }

    componentDidMount() {

        Event.addEvent(document, 'mouseover', this.mouseoverHandle);

        this.renderWrapper();

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible !== this.state.visible) {
            this.setState({
                visible: !!nextProps.visible
            });
        }
    }

    componentDidUpdate() {
        this.renderElement();
    }

    componentWillUnmount() {

        Event.removeEvent(document, 'mouseover', this.mouseoverHandle);

        this.unrenderElement();

    }

    render() {
        return null;
    }
}

Tip.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * Override the styles of the root element.
     */
    text: PropTypes.string,

    /**
     * This is the DOM element that will be used to set the position of the popover.
     */
    triggerEl: PropTypes.object,

    /**
     * If true,the popover is visible.
     */
    visible: PropTypes.bool,

    /**
     * The popover alignment.Possible values are: "bottom-center", "top-center", "bottom-right", "top-right", "bottom-left", "top-left", "left" and "right".
     */
    position: PropTypes.string,

    /**
     * Callback function fired when the popover is requested to be closed.
     */
    onRequestClose: PropTypes.func

};

Tip.defaultProps = {

    className: '',
    style: null,

    triggerEl: null,
    visible: false,
    position: 'bottom-center'

};
