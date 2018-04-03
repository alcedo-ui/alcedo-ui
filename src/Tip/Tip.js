/**
 * @file Tip component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TriggerPop from '../_TriggerPop';
import Theme from '../Theme';

import Position from '../_statics/Position';

import Util from '../_vendors/Util';

class Tip extends Component {

    static Position = Position;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {className, contentClassName, ...restProps} = this.props,

            tipClassName = classNames('tip', {
                [className]: className
            }),

            tipContentClassName = classNames('tip-content', {
                [contentClassName]: contentClassName
            });

        return (
            <TriggerPop {...restProps}
                        className={tipClassName}
                        contentClassName={tipContentClassName}/>
        );
    }

}

Tip.propTypes = {

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
     * The popover theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

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
     * The popover alignment.
     */
    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * If true, menu will have animation effects.
     */
    isAnimated: PropTypes.bool,

    shouldPreventContainerScroll: PropTypes.bool,

    /**
     * The depth of Paper component.
     */
    depth: PropTypes.number,

    isTriggerPositionFixed: PropTypes.bool,
    showModal: PropTypes.bool,

    /**
     * The function of tip render.
     */
    onRender: PropTypes.func,

    /**
     * The function of tip rendered.
     */
    onRendered: PropTypes.func,

    /**
     * The function of tip destroy.
     */
    onDestroy: PropTypes.func,

    /**
     * The function of tip destroyed.
     */
    onDestroyed: PropTypes.func,

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func

};

Tip.defaultProps = {

    theme: Theme.DARK,
    depth: 6,

    visible: false,
    hasTriangle: true,
    position: Position.BOTTOM,
    isAnimated: true,
    shouldPreventContainerScroll: true,
    isTriggerPositionFixed: false,
    showModal: false

};

export default Tip;