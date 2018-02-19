/**
 * @file TriggerPop component
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
import TriggerPopCalculation from '../_vendors/TriggerPopCalculation';
import PopManagement from '../_vendors/PopManagement';

class TriggerPop extends Component {

    static Position = Position;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            enter: false,
            exited: true
        };

        this.enterHandler = ::this.enterHandler;
        this.enteredHandler = ::this.enteredHandler;
        this.exitHandler = ::this.exitHandler;
        this.exitedHandler = ::this.exitedHandler;
        this.resizeHandler = ::this.resizeHandler;
        this.getEl = ::this.getEl;
        this.resetPosition = ::this.resetPosition;

    }

    enterHandler(el) {

        this.transitionEl = el;

        const {triggerEl, position, isTriggerPositionFixed} = this.props;
        TriggerPopCalculation.setStyle(triggerEl, el, position, isTriggerPositionFixed);

        this.setState({
            enter: true
        }, () => {
            const {onRender} = this.props;
            onRender && onRender(el, this.props.triggerEl);
        });

    }

    enteredHandler(el) {
        const {onRendered} = this.props;
        onRendered && onRendered(el, this.props.triggerEl);
    }

    exitHandler(el) {
        this.setState({
            enter: false
        }, () => {
            const {onDestroy} = this.props;
            onDestroy && onDestroy(el, this.props.triggerEl);
        });
    }

    exitedHandler(el) {
        this.setState({
            exited: true
        }, () => {
            const {onDestroyed} = this.props;
            onDestroyed && onDestroyed(el, this.props.triggerEl);
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
        TriggerPopCalculation.setStyle(triggerEl, this.transitionEl, position, isTriggerPositionFixed);
    }

    componentDidMount() {

        Event.addEvent(window, 'resize', this.resizeHandler);

        this.props.isEscClose && PopManagement.push(this);

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

                // not passing down these props
                isEscClose, isAutoClose, shouldPreventContainerScroll, triggerEl, isTriggerPositionFixed,
                onRender, onRendered, onDestroy, onDestroyed,

                ...restProps

            } = this.props,
            {enter, exited} = this.state,

            popupClassName = classNames('trigger-pop', {
                hidden: !enter,
                'trigger-pop-has-triangle': hasTriangle,
                [`theme-${theme}`]: theme,
                [`trigger-pop-position-${position}`]: position,
                'trigger-pop-animated': isAnimated,
                [className]: className
            }),

            popupContentClassName = classNames('trigger-pop-content', {
                [contentClassName]: contentClassName
            });

        return (
            <Portal visible={!exited}>
                <Transition appear
                            in={visible}
                            timeout={250}
                            onEnter={this.enterHandler}
                            onEntered={this.enteredHandler}
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
                                <div className="trigger-pop-triangle-wrapper">
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

TriggerPop.propTypes = {

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
     * This is the DOM element that will be used to set the position of the trigger pop.
     */
    triggerEl: PropTypes.object,

    /**
     * If true,the trigger pop is visible.
     */
    visible: PropTypes.bool,

    /**
     * If true,the trigger pop will have a triangle on the top of the DOM element.
     */
    hasTriangle: PropTypes.bool,

    triangle: PropTypes.element,

    /**
     * The trigger pop theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The trigger pop alignment.The value can be Popup.Position.LEFT or Popup.Position.RIGHT.
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

TriggerPop.defaultProps = {

    className: null,
    contentClassName: null,
    style: null,
    depth: 6,

    triggerEl: null,
    visible: false,
    hasTriangle: true,
    triangle: <div className="trigger-pop-triangle"></div>,
    theme: Theme.DEFAULT,
    position: Position.BOTTOM,
    isAnimated: true,

    isAutoClose: true,
    isEscClose: true,
    shouldPreventContainerScroll: true,
    isTriggerPositionFixed: false

};

export default TriggerPop;