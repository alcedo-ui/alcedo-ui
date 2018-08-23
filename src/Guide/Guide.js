/**
 * @file Guide component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TriggerPop from '../_TriggerPop';

import Position from '../_statics/Position';
import MsgType from '../_statics/MsgType';

import Util from '../_vendors/Util';
import PopManagement from '../_vendors/PopManagement';
import AnchorButton from '../AnchorButton';

class Guide extends Component {

    static Position = Position;
    static Type = MsgType;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    /**
     * public
     */
    resetPosition = () => {
        this.refs.guide && this.refs.guide.resetPosition();
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

    componentDidUpdate() {

        const {visible, isEscClose} = this.props;

        if (isEscClose && visible) {
            PopManagement.push(this);
        }

    }

    componentWillUnmount() {
        PopManagement.pop(this);
    }

    render() {

        const {

                className, contentClassName, type, iconVisible, iconCls, closeButtonVisible, closeButtonValue,
                children, onRequestClose,

                ...restProps

            } = this.props,

            guideClassName = classNames('guide', {
                'icon-hidden': !iconVisible,
                [className]: className
            }),

            guideContentClassName = classNames('guide-content', {
                'theme-default': type === MsgType.DEFAULT,
                [`theme-${type}`]: type !== MsgType.DEFAULT,
                [contentClassName]: contentClassName
            });

        return (
            <TriggerPop {...restProps}
                        ref="guide"
                        className={guideClassName}
                        contentClassName={guideContentClassName}>

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
    shouldPreventContainerScroll: PropTypes.bool,
    isTriggerPositionFixed: PropTypes.bool,
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

    type: MsgType.INFO,
    visible: false,
    hasTriangle: true,
    position: Position.BOTTOM,
    isAnimated: true,
    iconVisible: false,

    isBlurClose: true,
    isEscClose: true,
    shouldPreventContainerScroll: true,
    isTriggerPositionFixed: false,
    showModal: false,

    closeButtonVisible: true,
    closeButtonValue: 'Close'

};

export default Guide;