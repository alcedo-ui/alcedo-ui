/**
 * @file PositionPop component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component, cloneElement} from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import Transition from 'react-transition-group/Transition';
import classNames from 'classnames';

import Portal from '../Portal';
import Theme from '../Theme';

import Position from '../_statics/Position';

import Event from '../_vendors/Event';
import Util from '../_vendors/Util';
import PositionPopCalculation from '../_vendors/PositionPopCalculation';

class PositionPop extends Component {

    static Position = Position;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.state = {
            enter: false,
            exited: true
        };

    }

    enterHandler = el => {

        this.transitionEl = el;
        this.resetPosition();

        this.setState({
            enter: true
        }, () => {
            const {onRender} = this.props;
            onRender && onRender(el);
        });

    };

    enteredHandler = el => {
        const {onRendered} = this.props;
        onRendered && onRendered(el);
    };

    exitHandler = el => {
        this.setState({
            enter: false
        }, () => {
            const {onDestroy} = this.props;
            onDestroy && onDestroy(el);
        });
    };

    exitedHandler = el => {
        this.setState({
            exited: true
        }, () => {
            const {onDestroyed} = this.props;
            onDestroyed && onDestroyed(el);
        });
    };

    resizeHandler = debounce(() => {
        this.resetPosition();
    }, 250);

    getEl = () => {
        return this.transitionEl;
    };

    resetPosition = (props = this.props) => {
        PositionPopCalculation.setStyle(props.parentEl, this.transitionEl, props.position);
    };

    componentDidMount() {
        Event.addEvent(window, 'resize', this.resizeHandler);
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.visible) {
            this.setState({
                exited: false
            });
        }

        if (nextProps.position !== this.props.position) {
            this.resetPosition(nextProps);
        }

    }

    componentWillUnmount() {
        Event.removeEvent(window, 'resize', this.resizeHandler);
    }

    render() {

        const {

                className, theme, parentEl,
                position, isAnimated, visible, container, showModal,
                modalClassName,

                // not passing down these props
                isEscClose, isBlurClose, shouldPreventContainerScroll,
                onRender, onRendered, onDestroy, onDestroyed,

                ...restProps

            } = this.props,
            {enter, exited} = this.state,

            popModalClassName = classNames('position-pop-modal', {
                hidden: !enter,
                'position-pop-modal-animated': isAnimated,
                [modalClassName]: modalClassName
            }),

            popClassName = classNames('position-pop', {
                hidden: !enter,
                [`theme-${theme}`]: theme,
                [`position-pop-${position}`]: position,
                'position-pop-animated': isAnimated,
                [className]: className
            });

        return (
            <Portal visible={!exited}
                    parentEl={parentEl}>

                {
                    showModal ?
                        <Transition appear
                                    in={visible}
                                    timeout={250}>
                            <div className={popModalClassName}></div>
                        </Transition>
                        :
                        null
                }

                <Transition appear
                            in={visible}
                            timeout={250}
                            onEnter={this.enterHandler}
                            onEntered={this.enteredHandler}
                            onExit={this.exitHandler}
                            onExited={this.exitedHandler}>
                    {
                        cloneElement(container, {
                            ...restProps,
                            className: popClassName,
                            onWheel: e => Event.wheelHandler(e, this.props)
                        })
                    }
                </Transition>

            </Portal>
        );

    }

}

PositionPop.propTypes = {

    /**
     * The CSS class name of the root element.
     */
    className: PropTypes.string,

    /**
     * Override the styles of the root element.
     */
    style: PropTypes.object,

    /**
     * If true,the trigger pop is visible.
     */
    visible: PropTypes.bool,

    /**
     * The trigger pop theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    parentEl: PropTypes.object,

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
    onWheel: PropTypes.func

};

PositionPop.defaultProps = {

    parentEl: document.body,
    depth: 6,

    visible: false,
    theme: Theme.DEFAULT,
    position: Position.CENTER,
    isAnimated: true,

    isBlurClose: true,
    isEscClose: true,
    shouldPreventContainerScroll: true,

    container: <div></div>,

    showModal: false

};

export default PositionPop;
