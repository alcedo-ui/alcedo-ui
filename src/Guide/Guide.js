/**
 * @file Guide component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TriggerPop from '../_TriggerPop';
import AnchorButton from '../AnchorButton';

import Position from '../_statics/Position';
import MsgType from '../_statics/MsgType';

import Util from '../_vendors/Util';
import PopManagement from '../_vendors/PopManagement';

class Guide extends Component {

    static Position = Position;
    static Type = MsgType;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.guide = createRef();
        this.guideInstance = null;

    }

    /**
     * public
     */
    resetPosition = () => {
        this.guideInstance && this.guideInstance.resetPosition();
    };

    getIconCls = () => {
        switch (this.props.type) {
            case MsgType.SUCCESS:
                return 'fas fa-check-circle';
            case MsgType.WARNING:
                return 'fas fa-exclamation-triangle';
            case MsgType.ERROR:
                return 'fas fa-times-circle';
            default:
                return 'fas fa-info-circle';
        }
    };

    handleRender = (...args) => {

        PopManagement.push(this);

        const {onRender} = this.props;
        onRender && onRender(...args);

    };

    handleDestroy = (...args) => {

        PopManagement.pop(this);

        const {onDestroy} = this.props;
        onDestroy && onDestroy(...args);

    };

    componentDidMount() {
        this.guideInstance = this.guide && this.guide.current;
    }

    componentWillUnmount() {
        PopManagement.pop(this);
    }

    render() {

        const {

            children, className, contentClassName,
            type, iconVisible, iconCls, closeButtonVisible, closeButtonValue, onRequestClose,

            ...restProps

        } = this.props;

        return (
            <TriggerPop {...restProps}
                        ref={this.guide}
                        className={classNames('guide', {
                            'icon-hidden': !iconVisible,
                            [className]: className
                        })}
                        contentClassName={classNames('guide-content', {
                            'theme-default': type === MsgType.DEFAULT,
                            [`theme-${type}`]: type !== MsgType.DEFAULT,
                            [contentClassName]: contentClassName
                        })}
                        onRender={this.handleRender}
                        onDestroy={this.handleDestroy}>

                {
                    !iconVisible || type === MsgType.DEFAULT ?
                        null
                        :
                        <i className={classNames(iconCls ? iconCls : this.getIconCls(), 'guide-icon')}></i>
                }

                <div className="guide-message">

                    {children}

                    {
                        closeButtonVisible ?
                            <AnchorButton className="guide-close-Button"
                                          value={closeButtonValue}
                                          onClick={onRequestClose}/>
                            :
                            null
                    }

                </div>

            </TriggerPop>
        );

    }

}

Guide.propTypes = {

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
     * The type of notification.
     */
    type: PropTypes.oneOf(Util.enumerateValue(MsgType)),

    parentEl: PropTypes.object,

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
     * The guide alignment.
     */
    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    iconVisible: PropTypes.bool,
    iconCls: PropTypes.string,

    /**
     * If true,guide will have animation effects.
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

    closeButtonVisible: PropTypes.bool,
    closeButtonValue: PropTypes.string,

    /**
     * The function of guide render.
     */
    onRender: PropTypes.func,

    /**
     * The function of guide rendered.
     */
    onRendered: PropTypes.func,

    /**
     * The function of guide destroy.
     */
    onDestroy: PropTypes.func,

    /**
     * The function of guide destroyed.
     */
    onDestroyed: PropTypes.func,

    /**
     * Callback function fired when the popover is requested to be closed.
     */
    onRequestClose: PropTypes.func,

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func

};

Guide.defaultProps = {

    parentEl: document.body,

    type: MsgType.INFO,
    visible: false,
    hasTriangle: true,
    position: Position.BOTTOM,
    isAnimated: true,
    iconVisible: true,

    isBlurClose: true,
    isEscClose: true,
    shouldFollowScroll: false,
    resetPositionWait: 250,
    showModal: false,

    closeButtonVisible: true,
    closeButtonValue: 'Close'

};

export default Guide;
