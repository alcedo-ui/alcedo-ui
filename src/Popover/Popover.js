/**
 * @file Popover component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import classNames from 'classnames';

import Portal from '../Portal';
import Paper from '../Paper';
import Theme from '../Theme';

import Position from '../_statics/Position';
import Event from '../_vendors/Event';
import Util from '../_vendors/Util';
import PopupCalculation from '../_vendors/PopupCalculation';
import PopupManagement from '../_vendors/PopupManagement';

class Popover extends Component {

    static Position = Position;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            enter: false,
            exited: true
        };

        this.enterHandler = ::this.enterHandler;
        this.exitHandler = ::this.exitHandler;
        this.exitedHandler = ::this.exitedHandler;
        this.resizeHandler = ::this.resizeHandler;
        this.getEl = ::this.getEl;
        this.resetPosition = ::this.resetPosition;

    }

    enterHandler(el) {

        this.transitionEl = el;

        const {triggerEl, position, isTriggerPositionFixed} = this.props;
        PopupCalculation.setStyle(triggerEl, el, position, isTriggerPositionFixed);

        this.setState({
            enter: true
        }, () => {
            const {onRender} = this.props;
            onRender && onRender(el, this.props.triggerEl);
        });

    }

    exitHandler() {
        this.setState({
            enter: false
        }, () => {
            const {onDestroy} = this.props;
            onDestroy && onDestroy(this.transitionEl, this.props.triggerEl);
        });
    }

    exitedHandler() {
        this.setState({
            exited: true
        }, () => {
            const {onDestroyed} = this.props;
            onDestroyed && onDestroyed(this.transitionEl, this.props.triggerEl);
        });
    }

    resizeHandler = _.debounce(() => {
        this.resetPosition();
    }, 250);

    /**
     * public
     */
    getEl() {
        return this.transitionEl;
    }

    /**
     * public
     */
    resetPosition() {
        const {triggerEl, position, isTriggerPositionFixed} = this.props;
        PopupCalculation.setStyle(triggerEl, this.transitionEl, position, isTriggerPositionFixed);
    }

    componentDidMount() {

        Event.addEvent(window, 'resize', this.resizeHandler);

        this.props.isEscClose && PopupManagement.push(this);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible) {
            this.setState({
                exited: !nextProps.visible
            });
        }
    }

    componentWillUnmount() {
        Event.removeEvent(window, 'resize', this.resizeHandler);
    }

    render() {

        const {

                children,

                className, contentClassName, style, theme, hasTriangle, triangle, position, isAnimated, visible,
                onRendered,

                // not passing down these props
                isEscClose, isAutoClose, shouldPreventContainerScroll, triggerEl, isTriggerPositionFixed,
                onRender, onDestroy, onDestroyed,

                ...restProps

            } = this.props,
            {enter, exited} = this.state,

            popupClassName = classNames('popover', {
                hidden: !enter,
                'popover-has-triangle': hasTriangle,
                [`theme-${theme}`]: theme,
                [`popover-position-${position}`]: position,
                'popover-animated': isAnimated,
                [className]: className
            }),

            popupContentClassName = classNames('popover-content', {
                [contentClassName]: contentClassName
            });

        return (
            <Portal visible={!exited}>
                <Transition appear
                            in={visible}
                            timeout={250}
                            onEnter={this.enterHandler}
                            onEntered={onRendered}
                            onExit={this.exitHandler}
                            onExited={this.exitedHandler}>
                    <Paper {...restProps}
                           className={popupClassName}
                           style={style}
                           onWheel={e => {
                               Event.wheelHandler(e, this.props);
                           }}>

                        {
                            hasTriangle ?
                                <div className="popover-triangle-wrapper">
                                    {triangle}
                                </div>
                                :
                                null
                        }

                        <div className={popupContentClassName}
                             onWheel={e => {
                                 Event.wheelHandler(e, this.props);
                             }}>
                            {children}
                        </div>

                    </Paper>
                </Transition>
            </Portal>
        );

    }

};

Popover.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * The CSS class name of the content element.
     */
    contentClassName: PropTypes.string,

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
     * The depth of Paper component.
     */
    depth: PropTypes.number,

    isAutoClose: PropTypes.bool,
    isEscClose: PropTypes.bool,
    shouldPreventContainerScroll: PropTypes.bool,
    isTriggerPositionFixed: PropTypes.bool,

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
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func

};

Popover.defaultProps = {

    className: null,
    contentClassName: null,
    style: null,
    depth: 6,

    triggerEl: null,
    visible: false,
    hasTriangle: true,
    triangle: <div className="popover-triangle"></div>,
    theme: Theme.DEFAULT,
    position: Position.BOTTOM_LEFT,
    isAnimated: true,

    isAutoClose: true,
    isEscClose: true,
    shouldPreventContainerScroll: true,
    isTriggerPositionFixed: false

};

export default Popover;