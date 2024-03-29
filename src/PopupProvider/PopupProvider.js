/**
 * @file PopupProvider component
 */

import React, {Component, cloneElement, createRef} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';

// components
import Popup from '../Popup';

// statics
import Theme from '../Theme';
import Position from '../_statics/Position';

// vendors
import Util from '../_vendors/Util';
import ComponentUtil from '../_vendors/ComponentUtil';

class PopupProvider extends Component {

    static Position = Position;
    static Theme = Theme;

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            visible: ComponentUtil.getDerivedState(props, state, 'visible')
        };
    }

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.trigger = createRef();
        this.triggerEl = null;

        this.state = {
            visible: props.visible
        };

    }

    componentDidMount() {
        this.triggerEl = findDOMNode(this.trigger?.current);
    }

    /**
     * public
     */
    show = () => {

        if (this.state.visible) {
            return;
        }

        this.setState({
            visible: true
        }, () => this.props.onRequestOpen?.());

    };

    /**
     * public
     */
    hide = () => {

        if (!this.state.visible) {
            return;
        }

        this.setState({
            visible: false
        }, () => this.props.onRequestClose?.());

    };

    /**
     * public
     */
    toggle = () => {
        this.setState({
            visible: !this.state.visible
        }, () => {
            if (!this.state.visible) {
                this.props.onRequestClose?.();
            } else {
                this.props.onRequestOpen?.();
            }
        });
    };

    handleClick = e => {

        const {children} = this.props;

        if (children && children.props && children.props.onClick
            && typeof children.props.onClick === 'function') {
            children.props.onClick(e);
        }

        this.toggle();

    };

    render() {

        const {

                children, popupContent,

                // not passing down these props
                // eslint-disable-next-line no-unused-vars
                onRequestOpen, onRequestClose,

                ...restProps

            } = this.props,
            {visible} = this.state;

        if (!popupContent) {
            return children;
        }

        return (
            <>

                {
                    cloneElement(children, {
                        ref: this.trigger,
                        onClick: this.handleClick
                    })
                }

                <Popup {...restProps}
                       triggerEl={this.triggerEl}
                       visible={visible}
                       onRequestClose={this.hide}>
                    {popupContent}
                </Popup>

            </>
        );
    }

}

PopupProvider.propTypes = {

    children: PropTypes.any,

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The CSS class name of the content element.
     */
    contentClassName: PropTypes.string,

    modalClassName: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * The popup theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    parentEl: PropTypes.object,

    /**
     * This is the DOM element that will be used to set the position of the popup.
     */
    triggerEl: PropTypes.object,

    /**
     * If true,the popup is visible.
     */
    visible: PropTypes.bool,

    /**
     * If true,the popup will have a triangle on the top of the DOM element.
     */
    hasTriangle: PropTypes.bool,

    triangle: PropTypes.element,

    /**
     * The popup alignment.
     */
    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * If true,popup will have animation effects.
     */
    isAnimated: PropTypes.bool,

    /**
     * The depth of Paper component.
     */
    depth: PropTypes.number,

    isBlurClose: PropTypes.bool,
    isEscClose: PropTypes.bool,

    shouldFollowScroll: PropTypes.bool,
    scrollEl: PropTypes.object,

    resetPositionWait: PropTypes.number,
    showModal: PropTypes.bool,

    /**
     * The function of popup event handler.
     */
    triggerHandler: PropTypes.func,

    /**
     * The function of popup render.
     */
    onRender: PropTypes.func,

    /**
     * The function of popup rendered.
     */
    onRendered: PropTypes.func,

    /**
     * The function of popup destroy.
     */
    onDestroy: PropTypes.func,

    /**
     * The function of popup destroyed.
     */
    onDestroyed: PropTypes.func,

    /**
     * Callback function fired when the popup is requested to be opened.
     */
    onRequestOpen: PropTypes.func,

    /**
     * Callback function fired when the popup is requested to be closed.
     */
    onRequestClose: PropTypes.func,

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func,

    popupContent: PropTypes.any

};

PopupProvider.defaultProps = {

    parentEl: document.body,

    visible: false,
    hasTriangle: true,
    position: Position.BOTTOM,
    isAnimated: true,

    isBlurClose: true,
    isEscClose: true,
    shouldFollowScroll: false,
    resetPositionWait: 250,
    showModal: false

};

export default PopupProvider;
