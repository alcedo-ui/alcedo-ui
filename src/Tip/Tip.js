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

            switch (position){
                case Tip.Position.RIGHT:
                    tipStyle = {
                        left: offset.left + (triggerEl.clientWidth),
                        top: offset.top - (this.element.clientHeight - triggerEl.clientHeight)/2
                    };
                    break;
                case Tip.Position.LEFT:
                    tipStyle = {
                        left: offset.left - (this.element.clientWidth),
                        top: offset.top - (this.element.clientHeight - triggerEl.clientHeight)/2
                    };
                    break;
                case Tip.Position.TOP_LEFT:
                    tipStyle = {
                        left: offset.left - (this.element.clientWidth),
                        top: offset.top - (this.element.clientHeight)
                    };
                    break;
                case Tip.Position.TOP_RIGHT:
                    tipStyle = {
                        left: offset.left + (triggerEl.clientWidth),
                        top: offset.top - (this.element.clientHeight)
                    };
                    break;
                case Tip.Position.TOP_CENTER:
                    tipStyle = {
                        left: offset.left - (this.element.clientWidth - triggerEl.clientWidth)/2,
                        top: offset.top - (this.element.clientHeight)
                    };
                    break;
                case Tip.Position.BOTTOM_LEFT:
                    tipStyle = {
                        left: offset.left - (this.element.clientWidth),
                        top: offset.top + (triggerEl.clientHeight)
                    };
                    break;
                case Tip.Position.BOTTOM_CENTER:
                    tipStyle = {
                        left: offset.left - (this.element.clientWidth - triggerEl.clientWidth)/2,
                        top: offset.top + (triggerEl.clientHeight)
                    };
                    break;
                case Tip.Position.BOTTOM_RIGHT:
                    tipStyle = {
                        left: offset.left + (triggerEl.clientWidth),
                        top: offset.top + (triggerEl.clientHeight)
                    };
                    break;
                default:
                    tipStyle = {
                        left: offset.left - (this.element.clientWidth - triggerEl.clientWidth)/2,
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

Tip.Position = {
    LEFT:'left',
    RIGHT:'right',
    TOP_LEFT: 'top-left',
    TOP_RIGHT: 'top-right',
    TOP_CENTER: 'top-center',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_RIGHT: 'bottom-right',
    BOTTOM_CENTER: 'bottom-center'

};

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
     * The popover alignment.The value can be Popup.Position.LEFT or Popup.Position.RIGHT.
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
    position: Tip.Position.BOTTOM_CENTER

};
