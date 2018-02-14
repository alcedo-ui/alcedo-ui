/**
 * @file PopupBody component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';

import Paper from '../Paper';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import PopupManagement from '../_vendors/PopupManagement';
import PopupCalculation from '../_vendors/PopupCalculation';
import Dom from '../_vendors/Dom';

import Position from '../_statics/Position';
import TriggerMode from '../_statics/TriggerMode';

class PopupBody extends Component {

    static Position = Position;
    static TriggerMode = TriggerMode;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.mousedownHandler = ::this.mousedownHandler;
        this.resizeHandler = ::this.resizeHandler;
        this.debounceResizeHandler = _.debounce(::this.debounceResizeHandler, 250);

    }

    triggerHandler(el, triggerEl, popupEl, triggerMode, currentVisible, isAutoClose) {

        // if (!triggerEl) {
        //     return true;
        // }

        while (el) {
            if (el == popupEl) {
                return currentVisible;
            }
            el = el.parentNode;
        }

        return isAutoClose ? false : currentVisible;

    }

    mousedownHandler(e) {

        const {triggerEl, triggerMode, isAutoClose, triggerHandler, onRequestClose, visible} = this.props;

        let currVisible;

        if (triggerHandler) {
            currVisible = triggerHandler(e.target, triggerEl, this.popupEl, triggerMode, visible, isAutoClose);
        } else if (!Dom.isParent(e.target, triggerEl)) {
            currVisible = this.triggerHandler(e.target, triggerEl, this.popupEl, triggerMode, visible, isAutoClose);
        }

        if (currVisible === false) {
            onRequestClose && onRequestClose(e);
        }

    }

    resizeHandler() {
        this.debounceResizeHandler();
    }

    debounceResizeHandler() {
        this.forceUpdate();
    }

    componentDidMount() {

        this.popupEl = findDOMNode(this.refs.popup);

        Event.addEvent(document, 'mousedown', this.mousedownHandler);
        Event.addEvent(window, 'resize', this.resizeHandler);

        this.props.isEscClose && PopupManagement.push(this);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible !== this.props.visible) {
            this.setState({
                visible: nextProps.visible
            });
        }
    }

    componentDidUpdate() {
        const {visible, onRender} = this.props;
        visible && onRender && onRender(this.popupEl, this.props.triggerEl);
    }

    componentWillUnmount() {
        Event.removeEvent(document, 'mousedown', this.mousedownHandler);
        Event.removeEvent(window, 'resize', this.resizeHandler);
    }

    render() {

        const {

                children,

                className, style, theme, hasTriangle, triangle, position, isAnimated,
                triggerEl, isTriggerPositionFixed,

                // not passing down these props
                visible, isEscClose, isAutoClose, shouldPreventContainerScroll, triggerMode,
                onRender, onRequestClose, triggerHandler,

                ...restProps

            } = this.props,

            popupClassName = classNames('popup', {
                hidden: !visible,
                'popup-has-triangle': hasTriangle,
                [`theme-${theme}`]: theme,
                [`popup-position-${position}`]: position,
                'popup-animated': isAnimated,
                [className]: className
            }),
            popupStyle = {
                ...PopupCalculation.getStyle(triggerEl, this.popupEl, position, isTriggerPositionFixed),
                ...style
            };

        return (
            <Paper {...restProps}
                   ref="popup"
                   className={popupClassName}
                   style={popupStyle}
                   onWheel={e => {
                       Event.wheelHandler(e, this.props);
                   }}>

                {
                    hasTriangle ?
                        <div className="popup-triangle-wrapper">
                            {triangle}
                        </div>
                        :
                        null
                }

                <div className="popup-content"
                     onWheel={e => {
                         Event.wheelHandler(e, this.props);
                     }}>
                    {children}
                </div>

            </Paper>
        );

    }
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

    triangle: PropTypes.element,

    /**
     * The popover theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The popover alignment.The value can be Popup.Position.LEFT or Popup.Position.RIGHT.
     */
    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * If true,popup will have animation effects.
     */
    isAnimated: PropTypes.bool,

    /**
     * The status of popup-triangle.Can be open or toggle.
     */
    triggerMode: PropTypes.oneOf(Util.enumerateValue(TriggerMode)),

    /**
     * The depth of Paper component.
     */
    depth: PropTypes.number,

    isAutoClose: PropTypes.bool,
    isEscClose: PropTypes.bool,
    shouldPreventContainerScroll: PropTypes.bool,
    isTriggerPositionFixed: PropTypes.bool,

    /**
     * The function of popup event handler.
     */
    triggerHandler: PropTypes.func,

    /**
     * The function of popup render.
     */
    onRender: PropTypes.func,

    /**
     * Callback function fired when the popover is requested to be closed.
     */
    onRequestClose: PropTypes.func,

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func

};

PopupBody.defaultProps = {

    className: '',
    style: null,
    depth: 6,

    triggerEl: null,
    visible: false,
    hasTriangle: true,
    triangle: <div className="popup-triangle"></div>,
    theme: Theme.DEFAULT,
    position: Position.BOTTOM_LEFT,
    isAnimated: true,
    triggerMode: TriggerMode.TOGGLE,

    isAutoClose: true,
    isEscClose: true,
    shouldPreventContainerScroll: true,
    isTriggerPositionFixed: false

};

export default PopupBody;