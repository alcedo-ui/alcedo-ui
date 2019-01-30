/**
 * @file TriggerPop component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Pop from '../_Pop';
import Paper from '../Paper';
import Theme from '../Theme';

import Position from '../_statics/Position';

import Event from '../_vendors/Event';
import Util from '../_vendors/Util';
import TriggerPopCalculation from '../_vendors/TriggerPopCalculation';

class TriggerPop extends Component {

    static Position = Position;
    static Theme = Theme;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    /**
     * public
     */
    getEl = () => {
        return this.refs.pop && this.refs.pop.getEl();
    };

    enterHandler = el => {
        const {onRender} = this.props;
        onRender && onRender(el, this.props.triggerEl);
    };

    enteredHandler = el => {
        const {onRendered} = this.props;
        onRendered && onRendered(el, this.props.triggerEl);
    };

    exitHandler = el => {
        const {onDestroy} = this.props;
        onDestroy && onDestroy(el, this.props.triggerEl);
    };

    exitedHandler = el => {
        const {onDestroyed} = this.props;
        onDestroyed && onDestroyed(el, this.props.triggerEl);
    };

    resetPosition = (transitionEl) => {
        const {parentEl, triggerEl, position, isTriggerPositionFixed} = this.props;
        TriggerPopCalculation.setStyle(parentEl, triggerEl, transitionEl, position, isTriggerPositionFixed);
    };

    render() {

        const {

                children,

                className, contentClassName, style, theme,
                hasTriangle, triangle, position, isAnimated,

                // not passing down these props
                isEscClose, isBlurClose, shouldPreventContainerScroll, triggerEl, isTriggerPositionFixed,
                onRender, onRendered, onDestroy, onDestroyed,

                ...restProps

            } = this.props,

            popClassName = classNames('trigger-pop', {
                'trigger-pop-has-triangle': hasTriangle,
                [`theme-${theme}`]: theme,
                [`trigger-pop-${position}`]: position,
                'trigger-pop-animated': isAnimated,
                [className]: className
            }),

            popContentClassName = classNames('trigger-pop-content', {
                [contentClassName]: contentClassName
            });

        return (
            <Pop {...restProps}
                 ref="pop"
                 className={popClassName}
                 style={style}
                 contianer={Paper}
                 isAnimated={isAnimated}
                 onWheel={e => Event.wheelHandler(e, this.props)}
                 resetPosition={this.resetPosition}
                 onEnter={this.enterHandler}
                 onEntered={this.enteredHandler}
                 onExit={this.exitHandler}
                 onExited={this.exitedHandler}>

                {
                    hasTriangle ?
                        <div className="trigger-pop-triangle-wrapper">
                            {triangle}
                        </div>
                        :
                        null
                }

                <div className={popContentClassName}
                     onWheel={e => Event.wheelHandler(e, this.props)}>
                    {children}
                </div>

            </Pop>
        );

    }

}

TriggerPop.propTypes = {

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
     * The trigger pop theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    parentEl: PropTypes.object,

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

    showModal: PropTypes.bool,

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

    isBlurClose: PropTypes.bool,
    isEscClose: PropTypes.bool,
    shouldPreventContainerScroll: PropTypes.bool,
    isTriggerPositionFixed: PropTypes.bool,
    resetPositionWait: PropTypes.number,

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

    theme: Theme.DEFAULT,
    parentEl: document.body,
    depth: 3,

    visible: false,
    hasTriangle: true,
    triangle: <div className="trigger-pop-triangle"></div>,
    showModal: false,
    position: Position.BOTTOM,
    isAnimated: true,

    isBlurClose: true,
    isEscClose: true,
    shouldPreventContainerScroll: true,
    isTriggerPositionFixed: false,
    resetPositionWait: 250

};

export default TriggerPop;
