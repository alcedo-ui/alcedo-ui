/**
 * @file PositionPop component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import classNames from 'classnames';

import Portal from '../Portal';
import Theme from '../Theme';

import Position from '../_statics/Position';
import Event from '../_vendors/Event';
import Util from '../_vendors/Util';
import PopManagement from '../_vendors/PopManagement';

class PositionPop extends Component {

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
        this.getEl = ::this.getEl;

    }

    enterHandler(el) {

        this.transitionEl = el;

        this.setState({
            enter: true
        }, () => {
            const {onRender} = this.props;
            onRender && onRender(el);
        });

    }

    enteredHandler(el) {
        const {onRendered} = this.props;
        onRendered && onRendered(el);
    }

    exitHandler(el) {
        this.setState({
            enter: false
        }, () => {
            const {onDestroy} = this.props;
            onDestroy && onDestroy(el);
        });
    }

    exitedHandler(el) {
        this.setState({
            exited: true
        }, () => {
            const {onDestroyed} = this.props;
            onDestroyed && onDestroyed(el);
        });
    }

    /**
     * public
     */
    getEl() {
        return this.transitionEl;
    }

    componentDidMount() {
        this.props.isEscClose && PopManagement.push(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible) {
            this.setState({
                exited: !nextProps.visible
            });
        }
    }

    render() {

        const {

                children,

                className, style, theme, position, isAnimated, visible,

                // not passing down these props
                isEscClose, isAutoClose, shouldPreventContainerScroll,
                onRender, onRendered, onDestroy, onDestroyed,

                ...restProps

            } = this.props,
            {enter, exited} = this.state,

            popupClassName = classNames('position-pop', {
                hidden: !enter,
                [`theme-${theme}`]: theme,
                [`position-pop-${position}`]: position,
                'position-pop-animated': isAnimated,
                [className]: className
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
                    <div {...restProps}
                         className={popupClassName}
                         style={style}
                         onWheel={e => {
                             Event.wheelHandler(e, this.props);
                         }}>
                        {children}
                    </div>
                </Transition>
            </Portal>
        );

    }

};

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

    className: null,
    style: null,
    depth: 6,

    visible: false,
    theme: Theme.DEFAULT,
    position: Position.CENTER,
    isAnimated: true,

    isAutoClose: true,
    isEscClose: true,
    shouldPreventContainerScroll: true

};

export default PositionPop;