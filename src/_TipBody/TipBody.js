/**
 * @file TipBody component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';

import Paper from '../Paper';
import Theme from '../Theme';

import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import PopupCalculation from '../_vendors/PopupCalculation';

import Position from '../_statics/Position';

class TipBody extends Component {

    static Position = Position;
    static Theme = Theme;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.prepareCloseTimeout = null;

        this.state = {
            visible: false
        };

        this.triggerMouseEnterHandler = ::this.triggerMouseEnterHandler;
        this.triggerMouseLeaveHandler = ::this.triggerMouseLeaveHandler;
        this.resizeHandler = ::this.resizeHandler;
        this.debounceResizeHandle = _.debounce(::this.debounceResizeHandle, 150);

    }

    triggerMouseEnterHandler() {
        this.prepareCloseTimeout && clearTimeout(this.prepareCloseTimeout);
    }

    triggerMouseLeaveHandler() {
        this.prepareCloseTimeout && clearTimeout(this.prepareCloseTimeout);
        this.prepareCloseTimeout = setTimeout(() => {
            this.setState({
                visible: false
            }, () => {
                const {onRequestClose} = this.props;
                onRequestClose && onRequestClose();
            });
        }, 100);
    }

    resizeHandler() {
        this.debounceResizeHandle();
    }

    debounceResizeHandle() {
        this.forceUpdate();
    }

    componentDidMount() {

        this.tipEl = findDOMNode(this.refs.tip);

        Event.addEvent(this.props.triggerEl, 'mouseenter', this.triggerMouseEnterHandler);
        Event.addEvent(this.props.triggerEl, 'mouseleave', this.triggerMouseLeaveHandler);
        Event.addEvent(window, 'resize', this.resizeHandler);

        setTimeout(() => {
            this.setState({
                visible: true
            });
        }, 0);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible !== this.state.visible) {
            this.setState({
                visible: nextProps.visible
            });
        }
    }

    componentDidUpdate() {
        const {onRender} = this.props,
            {visible} = this.state;
        visible && onRender && onRender(this.tipEl, this.props.triggerEl);
    }

    componentWillUnmount() {

        this.prepareCloseTimeout && clearTimeout(this.prepareCloseTimeout);

        Event.removeEvent(this.props.triggerEl, 'mouseenter', this.triggerMouseEnterHandler);
        Event.removeEvent(this.props.triggerEl, 'mouseleave', this.triggerMouseLeaveHandler);
        Event.removeEvent(window, 'resize', this.resizeHandler);

    }

    render() {

        const {
                children, className, style, theme, hasTriangle, triangle, position, isAnimated, depth,
                triggerEl, isTriggerPositionFixed
            } = this.props,
            {visible} = this.state,


            tipClassName = classNames('tip', {
                hidden: !visible,
                'tip-has-triangle': hasTriangle,
                [`theme-${theme}`]: theme,
                [`tip-position-${position}`]: position,
                'tip-animated': isAnimated,
                [className]: className
            }),
            tipStyle = {
                ...PopupCalculation.getStyle(triggerEl, this.tipEl, position, isTriggerPositionFixed),
                ...style
            };

        return (
            <Paper ref="tip"
                   className={tipClassName}
                   style={tipStyle}
                   depth={depth}
                   onWheel={e => {
                       Event.wheelHandler(e, this.props);
                   }}>

                {
                    hasTriangle ?
                        <div className="tip-triangle-wrapper">
                            {triangle}
                        </div>
                        :
                        null
                }

                <div className="tip-content"
                     onWheel={e => {
                         Event.wheelHandler(e, this.props);
                     }}>
                    {children}
                </div>

            </Paper>
        );

    }
};

TipBody.propTypes = {

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

TipBody.defaultProps = {

    className: '',
    style: null,
    theme: Theme.DEFAULT,

    triggerEl: null,
    visible: false,
    hasTriangle: true,
    triangle: <div className="tip-triangle"></div>,
    position: Position.BOTTOM,
    isAnimated: true,
    depth: 6,
    shouldPreventContainerScroll: true,
    isTriggerPositionFixed: false

};

export default TipBody;