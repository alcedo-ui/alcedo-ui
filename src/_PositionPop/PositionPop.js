/**
 * @file PositionPop component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';

// Components
import Pop from '../_Pop';

// Statics
import Theme from '../Theme';
import Position from '../_statics/Position';

// Vendors
import classNames from 'classnames';
import Util from '../_vendors/Util';
import PositionPopCalculation from '../_vendors/PositionPopCalculation';

class PositionPop extends Component {

    static Position = Position;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.pop = createRef();

    }

    /**
     * public
     */
    getEl = () => {
        return this.pop?.current?.getEl?.() || null;
    };

    /**
     * reset pop position
     * @param transitionEl
     */
    resetPosition = (transitionEl = this.getEl()) => {
        const {parentEl, position} = this.props;
        PositionPopCalculation.setStyle(parentEl, transitionEl, position);
    };

    render() {

        const {

            children,

            container, className, theme, position, isAnimated,

            // not passing down these props
            // eslint-disable-next-line no-unused-vars
            isEscClose, isBlurClose,

            ...restProps

        } = this.props;

        return (
            <Pop {...restProps}
                 ref={this.pop}
                 className={classNames('position-pop', {
                     [`theme-${theme}`]: theme,
                     [`position-pop-${position}`]: position,
                     'position-pop-animated': isAnimated,
                     [className]: className
                 })}
                 container={container}
                 isAnimated={isAnimated}
                 position={position}
                 resetPosition={this.resetPosition}>
                {popEl => typeof children === 'function' ? children(popEl) : children}
            </Pop>
        );

    }

}

PositionPop.propTypes = {

    children: PropTypes.any,

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * If true, the trigger pop is visible.
     */
    visible: PropTypes.bool,

    /**
     * The trigger pop theme. Can be primary, highlight, success, warning, error.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    parentEl: PropTypes.object,

    /**
     * The trigger pop alignment. The value can be Popup.Position.LEFT or Popup.Position.RIGHT.
     */
    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * If true, popup will have animation effects.
     */
    isAnimated: PropTypes.bool,

    /**
     * The depth of Paper component.
     */
    depth: PropTypes.number,

    isBlurClose: PropTypes.bool,
    isEscClose: PropTypes.bool,

    container: PropTypes.node,

    showModal: PropTypes.bool,
    modalClassName: PropTypes.string,

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
    onWheel: PropTypes.func,

    onModalMouseDown: PropTypes.func,
    onModalMouseMove: PropTypes.func,
    onModalMouseUp: PropTypes.func,
    onModalMouseEnter: PropTypes.func,
    onModalMouseLeave: PropTypes.func,
    onModalClick: PropTypes.func

};

PositionPop.defaultProps = {

    parentEl: document.body,
    depth: 2,

    visible: false,
    theme: Theme.DEFAULT,
    position: Position.CENTER,
    isAnimated: true,

    isBlurClose: true,
    isEscClose: true,

    container: <div/>,

    showModal: false

};

export default PositionPop;
