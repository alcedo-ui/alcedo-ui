/**
 * @file Tip component
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

// Components
import TriggerPop from '../_TriggerPop';

// Statics
import Theme from '../Theme';
import Position from '../_statics/Position';

// Vendors
import classNames from 'classnames';
import Util from '../_vendors/Util';

class Tip extends Component {

    static Position = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.pop = createRef();

    }

    /**
     * public
     */
    resetPosition = () => {
        this.pop?.current?.resetPosition?.();
    };

    render() {

        const {
            className, contentClassName,
            parentEl,
            ...restProps
        } = this.props;

        return (
            <TriggerPop {...restProps}
                        ref={this.pop}
                        parentEl={parentEl}
                        className={classNames('tip', {
                            [className]: className
                        })}
                        contentClassName={classNames('tip-content', {
                            [contentClassName]: contentClassName
                        })}/>
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

    container: PropTypes.element,
    triangle: PropTypes.element,

    /**
     * The popover alignment.
     */
    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * If true, menu will have animation effects.
     */
    isAnimated: PropTypes.bool,

    /**
     * The depth of Paper component.
     */
    depth: PropTypes.number,

    shouldFollowScroll: PropTypes.bool,
    scrollEl: PropTypes.object,

    resetPositionWait: PropTypes.number,
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

    parentEl: document.body,

    visible: false,
    hasTriangle: true,
    position: Position.BOTTOM,
    isAnimated: true,
    shouldFollowScroll: false,
    resetPositionWait: 250,
    showModal: false

};

export default Tip;
