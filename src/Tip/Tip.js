/**
 * @file Tip component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import BasePopup from '../_BasePopup';
import Theme from '../Theme';

import Position from '../_statics/Position';
import Util from '../_vendors/Util';

class Tip extends Component {

    static Position = Position;

    constructor(props, ...restArgs) {
        super(props, ...restArgs);
    }

    render() {

        const {className, ...restProps} = this.props,

            tipClassName = classNames('tip', {
                [className]: className
            });

        return (
            <BasePopup {...restProps}
                       className={tipClassName}
                       contentClassName="tip-content"/>
        );
    }

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
     * The popover alignment.The value can be Menu.Position.LEFT or Menu.Position.RIGHT.
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

    /**
     * The function of menu render.
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

Tip.defaultProps = {

    className: null,
    style: null,
    theme: Theme.DARK,

    triggerEl: null,
    visible: false,
    hasTriangle: true,
    position: Position.BOTTOM,
    isAnimated: true,
    depth: 6,
    shouldPreventContainerScroll: true,
    isTriggerPositionFixed: false

};

export default Tip;