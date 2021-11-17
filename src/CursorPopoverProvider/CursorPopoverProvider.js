/**
 * @file CursorPopoverProvider component
 */

import React, {Component, cloneElement, createRef} from 'react';
import PropTypes from 'prop-types';

// components
import CursorPopover from '../CursorPopover';

// statics
import Theme from '../Theme';
import Position from '../_statics/Position';

// vendors
import {findDOMNode} from 'react-dom';
import Util from '../_vendors/Util';
import ComponentUtil from '../_vendors/ComponentUtil';

class CursorPopoverProvider extends Component {

    static Position = Position;
    static Theme = Theme;

    static getDerivedStateFromProps(props, state) {
        return {
            prevProps: props,
            visible: ComponentUtil.getDerivedState(props, state, 'visible')
        };
    }

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.trigger = createRef();
        this.triggerEl = null;

        this.state = {
            visible: props.visible
        };

    }

    componentDidMount() {
        this.triggerEl = findDOMNode(this.trigger?.current);
    }

    /**
     * public
     */
    show = () => {

        if (this.state.visible) {
            return;
        }

        this.setState({
            visible: true
        }, () => this.props.onRequestOpen?.());

    };

    /**
     * public
     */
    hide = () => {

        if (!this.state.visible) {
            return;
        }

        this.setState({
            visible: false
        }, () => this.props.onRequestClose?.());

    };

    /**
     * public
     */
    toggle = () => {
        this.setState({
            visible: !this.state.visible
        }, () => {
            if (!this.state.visible) {
                this.props.onRequestClose?.();
            } else {
                this.props.onRequestOpen?.();
            }
        });
    };

    handleMouseOver = e => {
        this.props?.children?.props?.onMouseOver?.(e);
        this.show();
    };

    render() {

        const {

            children, popoverContent,

            // not passing down these props
            // eslint-disable-next-line no-unused-vars
            onRequestOpen, onRequestClose,

            ...restProps

        } = this.props;
        const {visible} = this.state;

        if (!popoverContent) {
            return children;
        }

        return (
            <>

                {
                    cloneElement(children, {
                        ref: this.trigger,
                        onMouseOver: this.handleMouseOver
                    })
                }

                <CursorPopover {...restProps}
                               triggerEl={this.triggerEl}
                               visible={visible}
                               onRequestClose={this.hide}>
                    {popoverContent}
                </CursorPopover>

            </>
        );
    }

}

CursorPopoverProvider.propTypes = {

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
     * The popover theme.Can be primary,highlight,success,warning,error.
     */
    theme: PropTypes.oneOf(Util.enumerateValue(Theme)),

    /**
     * The popover alignment.The value can be CursorPopover.Position.LEFT or CursorPopover.Position.RIGHT.
     */
    position: PropTypes.oneOf(Util.enumerateValue(Position)),

    /**
     * If true, popover will have animation effects.
     */
    isAnimated: PropTypes.bool,

    enterable: PropTypes.bool,

    /**
     * The depth of Paper component.
     */
    depth: PropTypes.number,

    shouldFollowScroll: PropTypes.bool,
    scrollEl: PropTypes.object,

    resetPositionWait: PropTypes.number,

    popoverContent: PropTypes.any,

    /**
     * The function of popover render.
     */
    onRender: PropTypes.func,

    /**
     * The function of popover rendered.
     */
    onRendered: PropTypes.func,

    /**
     * The function of popover destroy.
     */
    onDestroy: PropTypes.func,

    /**
     * The function of popover destroyed.
     */
    onDestroyed: PropTypes.func,

    /**
     * Callback function fired when the popover is requested to be opened.
     */
    onRequestOpen: PropTypes.func,

    /**
     * Callback function fired when the popover is requested to be closed.
     */
    onRequestClose: PropTypes.func,

    /**
     * Callback function fired when wrapper wheeled.
     */
    onWheel: PropTypes.func,

    onCursorMove: PropTypes.func,
    onTargetChange: PropTypes.func

};

CursorPopoverProvider.defaultProps = {

    parentEl: document.body,

    visible: false,
    theme: Theme.DEFAULT,
    position: Position.BOTTOM_LEFT,
    isAnimated: true,
    enterable: false,

    shouldFollowScroll: false,
    resetPositionWait: 250

};

export default CursorPopoverProvider;
