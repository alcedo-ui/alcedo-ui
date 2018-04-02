/**
 * @file Drawer component
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import React, {Component} from 'react';
import classNames from 'classnames';

import PositionPop from '../_PositionPop';
import Paper from '../Paper';
import Theme from '../Theme';

import Position from '../_statics/Position';

import PureRender from '../_vendors/PureRender';
import Dom from '../_vendors/Dom';
import Util from '../_vendors/Util';
import Event from '../_vendors/Event';
import PopManagement from '../_vendors/PopManagement';

@PureRender
class Drawer extends Component {

    static Theme = Theme;
    static Position = Position;

    constructor(props, ...restArgs) {

        super(props, ...restArgs);

        this.closeTimeout = null;

        this.clearCloseTimeout = ::this.clearCloseTimeout;
        this.setBodyLock = ::this.setBodyLock;
        this.mouseDownHandler = ::this.mouseDownHandler;

    }

    clearCloseTimeout() {
        if (this.closeTimeout) {
            clearTimeout(this.closeTimeout);
            this.closeTimeout = null;
        }
    }

    setBodyLock(props = this.props) {

        if (!props) {
            return;
        }

        props.showModal && Dom.toggleClass(document.querySelector('body'), 'drawer-modal-lock', props.visible);

    }

    resetBody() {
        Dom.removeClass(document.querySelector('body'), 'drawer-modal-lock');
    }

    triggerHandler(el, drawerEl, currentVisible, isBlurClose) {

        while (el) {
            if (el == drawerEl) {
                return currentVisible;
            }
            el = el.parentNode;
        }

        return isBlurClose ? false : currentVisible;

    }

    mouseDownHandler(e) {

        const {visible, isBlurClose, triggerHandler, onRequestClose} = this.props,
            drawerEl = this.refs.drawerContent;

        let currVisible;

        if (triggerHandler) {
            currVisible = triggerHandler(e.target, drawerEl, visible, isBlurClose);
        } else if (!Dom.isParent(e.target)) {
            currVisible = this.triggerHandler(e.target, drawerEl, visible, isBlurClose);
        }

        if (currVisible === false) {
            this.clearCloseTimeout();
            this.closeTimeout = setTimeout(() => {
                onRequestClose && onRequestClose(e);
            });
        }

    }

    componentDidMount() {
        this.setBodyLock();
        Event.addEvent(document, 'mousedown', this.mouseDownHandler);
    }

    componentWillReceiveProps(nextProps) {

        const {visible, isEscClose} = nextProps;

        if (visible !== this.props.visible) {
            this.setBodyLock(nextProps);
        }

        if (isEscClose && visible) {
            PopManagement.push(this);
        }

    }

    componentWillUnmount() {

        this.resetBody();
        this.clearCloseTimeout();
        Event.removeEvent(document, 'mousedown', this.mouseDownHandler);

        PopManagement.pop(this);

    }

    render() {

        const {

                className,

                // not passing down these props
                isBlurClose, isEscClose,
                onRender, onRequestClose,

                ...restProps

            } = this.props,

            drawerClassName = classNames('drawer', {
                [className]: className
            });

        return (
            <PositionPop {...restProps}
                         className={drawerClassName}
                         container={
                             <Paper ref="drawerContent"
                                    depth={6}></Paper>
                         }/>
        );

    }

};

if (process.env.NODE_ENV === 'development') {

    const PropTypes = require('prop-types');

    Drawer.propTypes = {

        /**
         * The css class name of the root element.
         */
        className: PropTypes.string,

        /**
         * The css class name of the modal.
         */
        modalClassName: PropTypes.string,

        /**
         * The styles of the root element.
         */
        style: PropTypes.object,

        /**
         * The drawer alignment.
         */
        position: PropTypes.oneOf(Util.enumerateValue(Position)),

        /**
         * If true,the element will disabled.
         */
        disabled: PropTypes.bool,

        /**
         * If true,drawer box will display.
         */
        visible: PropTypes.bool,

        /**
         * If true,the pop-up box will be displayed in the mask layer, or the pop-up box will appear below the element.
         */
        showModal: PropTypes.bool,

        /**
         * If true,when press down mouse the pop-up box will closed.
         */
        isBlurClose: PropTypes.bool,

        isEscClose: PropTypes.bool,

        /**
         * The function of drawer render.
         */
        onRender: PropTypes.func,

        /**
         * The function that trigger when click submit.
         */
        onRequestClose: PropTypes.func

    };

}

Drawer.defaultProps = {

    position: Position.LEFT,
    disabled: false,
    visible: false,
    showModal: true,

    isBlurClose: true,
    isEscClose: true

};

export default Drawer;